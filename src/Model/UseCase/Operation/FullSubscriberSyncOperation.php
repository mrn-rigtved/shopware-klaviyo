<?php declare(strict_types=1);

namespace Klaviyo\Integration\Model\UseCase\Operation;

use Klaviyo\Integration\Async\Message\FullSubscriberSyncMessage;
use Klaviyo\Integration\Model\UseCase\ScheduleBackgroundJob;
use Od\Scheduler\Model\Job\{GeneratingHandlerInterface, JobHandlerInterface, JobResult, Message\WarningMessage};
use Shopware\Core\Content\Newsletter\SalesChannel\NewsletterSubscribeRoute;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\Dbal\Common\RepositoryIterator;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsAnyFilter;

class FullSubscriberSyncOperation implements JobHandlerInterface, GeneratingHandlerInterface
{
    public const OPERATION_HANDLER_CODE = 'od-klaviyo-full-subscriber-sync-handler';
    private const SUBSCRIBER_BATCH_SIZE = 100;

    private ScheduleBackgroundJob $scheduleBackgroundJob;
    private EntityRepositoryInterface $subscriberRepository;

    public function __construct(
        ScheduleBackgroundJob $scheduleBackgroundJob,
        EntityRepositoryInterface $subscriberRepository
    ) {
        $this->scheduleBackgroundJob = $scheduleBackgroundJob;
        $this->subscriberRepository = $subscriberRepository;
    }

    /**
     * @param FullSubscriberSyncMessage $message
     * @return JobResult
     *
     * @throws \Exception
     */
    public function execute(object $message): JobResult
    {
        $result = new JobResult();
        $context = Context::createDefaultContext();
        $criteria = new Criteria();
        $criteria->setLimit(self::SUBSCRIBER_BATCH_SIZE);
        $criteria->addFilter(
            new EqualsAnyFilter(
                'status',
                [
                    NewsletterSubscribeRoute::STATUS_OPT_OUT,
                    NewsletterSubscribeRoute::STATUS_OPT_IN,
                    NewsletterSubscribeRoute::STATUS_DIRECT
                ]
            )
        );

        $errors = $this->scheduleBackgroundJob->scheduleExcludedSubscribersSyncJobs($context, $message->getJobId());
        foreach ($errors as $error) {
            $result->addMessage(new WarningMessage($error->getMessage() . ' '));
        }

        $iterator = new RepositoryIterator($this->subscriberRepository, $context, $criteria);
        while (($subscriberIds = $iterator->fetchIds()) !== null) {
            $this->scheduleBackgroundJob->scheduleSubscriberSyncJob(
                $subscriberIds,
                $message->getJobId()
            );
        }

        return $result;
    }
}

<?php declare(strict_types=1);

namespace Klaviyo\Integration\EventListener;

use Klaviyo\Integration\Configuration\ConfigurationRegistry;
use Klaviyo\Integration\Klaviyo\Gateway\GetListIdByListNameInterface;
use Shopware\Core\Framework\Struct\ArrayStruct;
use Shopware\Storefront\Page\Product\ProductPageLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class PageEventListener implements EventSubscriberInterface
{
    public const KLAVIYO_INTEGRATION_PLUGIN_EXTENSION = 'klaviyoIntegrationPluginExtension';

    private GetListIdByListNameInterface $listIdByListName;
    private ConfigurationRegistry $configurationRegistry;

    public function __construct(
        GetListIdByListNameInterface $listIdByListName,
        ConfigurationRegistry $configurationRegistry
    ) {
        $this->listIdByListName = $listIdByListName;
        $this->configurationRegistry = $configurationRegistry;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ProductPageLoadedEvent::class => 'onProductPageLoaded'
        ];
    }

    public function onProductPageLoaded(ProductPageLoadedEvent $event)
    {
        $page = $event->getPage();
        $product = $page->getProduct();

        if ($page->hasExtension(self::KLAVIYO_INTEGRATION_PLUGIN_EXTENSION)) {
            $extensionData = $page->getExtension(self::KLAVIYO_INTEGRATION_PLUGIN_EXTENSION);
        } else {
            $extensionData = new ArrayStruct([]);
        }

        $channel = $event->getSalesChannelContext()->getSalesChannel();

        try {
            $listId = $this->listIdByListName->execute(
                $channel,
                $this->configurationRegistry->getConfiguration($event->getSalesChannelContext()->getSalesChannelId())->getSubscribersListName()
            );
        } catch (\Exception $exception) {
            $listId = false;
        }

        if ($product->getAvailableStock() < 1 && $product->getStock() < 1 && $product->getIsCloseout()) {
            $extensionData['backInStockData'] = [
                'listId' => $listId
            ];
        }
    }
}
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/administration/",n(n.s="ikW3")}({"E/lY":function(e,t,n){var o=n("JnQk");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("0c964096",o,!0,{})},FQTD:function(e,t,n){},JnQk:function(e,t,n){},PgRa:function(e,t){e.exports='{% block od_job_detail_page %}\n    <sw-page v-if="jobId && jobItem" class="od-job-detail">\n        {% block job_detail_header %}\n            <template #smart-bar-header>\n                {% block job_detail_header_title %}\n                    <h2>\n                        {{ jobItem.name }}\n                    </h2>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        <template slot="smart-bar-back">\n            <router-link v-if="backPath"\n                         class="smart-bar__back-btn"\n                         :to="backPath"\n                         :style="{ \'color\': moduleData.color }">\n                <sw-icon name="default-arrow-head-left" small></sw-icon>\n            </router-link>\n        </template>\n\n        {% block job_detail_actions %}\n            <template #smart-bar-actions>\n                <sw-button\n                        :disabled="!canReschedule(jobItem)"\n                        @click="rescheduleJob(jobId)"\n                        class="od-job-detail__smart-bar-edit-button"\n                        variant="primary"\n                >\n                    {{ $tc(\'job-listing.actions.reschedule-job.button.label\') }}\n                </sw-button>\n                <sw-button\n                        v-if="jobMessages !== null"\n                        :disabled="!canShowJobMessages(jobItem.id)"\n                        @click="showMessageModal(jobId)"\n                        class="od-job-detail__smart-bar-edit-button"\n                        variant="primary"\n                >\n                    {{ $tc(\'job-listing.actions.show-messages.button.label\') }}\n                </sw-button>\n            </template>\n        {% endblock %}\n        {% block job_detail_content %}\n            <template #content>\n                <sw-card class="od-job-detail-card">\n                    {% block job_row_primary %}\n                        <sw-card-section divider="bottom">\n                            {% block job_detail_base_overview_columns %}\n                                <sw-container\n                                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                                        gap="30px 30px">\n                                    {% block job_detail_base_overview_left_column %}\n                                        <sw-description-list\n                                                columns="1fr"\n                                                grid="1fr">\n                                            {% block job_detail_base_overview_name %}\n                                                <dt>{{ $tc(\'job-listing.page.listing.grid.column.name\') }}</dt>\n                                                <dd>\n                                                    <sw-order-inline-field v-if="jobItem.name"\n                                                                           :display-value="jobItem.name"\n                                                                           :value="jobItem.name"\n                                                                           :editable="false"\n                                                    />\n                                                </dd>\n                                            {% endblock %}\n                                            {% block job_detail_base_overview_status %}\n                                                <dt>{{ $tc(\'job-listing.page.listing.grid.column.status\') }}</dt>\n                                                <dd>\n                                                    <template>\n                                                        <od-job-status-badge :status="jobItem.status">\n                                                        </od-job-status-badge>\n                                                        {{ $tc(\'job-listing.page.listing.grid.job-status.\' + jobItem.status) }}\n                                                    </template>\n                                                </dd>\n                                            {% endblock %}\n                                            {% block job_detail_base_overview_startedAt %}\n                                                <dt>{{ $tc(\'job-listing.page.listing.grid.column.started-at\') }}</dt>\n                                                <dd>\n                                                    <sw-order-inline-field v-if="jobItem.startedAt"\n                                                                           :display-value="jobItem.startedAt"\n                                                                           :value="jobItem.startedAt"\n                                                                           :editable="false"\n                                                    />\n                                                </dd>\n                                            {% endblock %}\n                                        </sw-description-list>\n                                    {% endblock %}\n                                    {% block od_job_detail_base_job_overview_right_column %}\n                                        <sw-description-list\n                                                columns="1fr"\n                                                grid="1fr" class="od-job-user-card__summary-vertical">\n                                            {% block job_detail_base_overview_type %}\n                                                <dt>{{ $tc(\'job-listing.page.listing.grid.column.type\') }}</dt>\n                                                <dd>\n                                                    <sw-order-inline-field v-if="jobItem.type"\n                                                                           :display-value="jobItem.type"\n                                                                           :value="jobItem.type"\n                                                                           :editable="false"\n                                                    />\n                                                </dd>\n                                            {% endblock %}\n                                            {% block job_detail_base_overview_createdAt %}\n                                                <dt>{{ $tc(\'job-listing.page.listing.grid.column.created-at\') }}</dt>\n                                                <dd>\n                                                    <sw-order-inline-field v-if="jobItem.createdAt"\n                                                                           :display-value="jobItem.createdAt"\n                                                                           :value="jobItem.startedAt"\n                                                                           :editable="false"/>\n                                                </dd>\n                                            {% endblock %}\n                                            {% block job_detail_base_overview_finishedAt %}\n                                                <dt>{{ $tc(\'job-listing.page.listing.grid.column.finished-at\') }}</dt>\n                                                <dd>\n                                                    <sw-order-inline-field v-if="jobItem.finishedAt"\n                                                                           :display-value="jobItem.finishedAt"\n                                                                           :value="jobItem.finishedAt"\n                                                                           :editable="false"/>\n                                                </dd>\n                                            {% endblock %}\n                                        </sw-description-list>\n                                    {% endblock %}\n                                </sw-container>\n                            {% endblock %}\n                        </sw-card-section>\n                    {% endblock %}\n                </sw-card>\n                <div v-if="(jobChildren && jobChildren.total > 0)">\n                    {% block job_children_listing %}\n                        <sw-data-grid\n                                v-if="jobChildren"\n                                :items="jobChildren"\n                                :data-source="jobChildren"\n                                :repository="jobRepository"\n                                :showSelection="false"\n                                :allowColumnEdit="false"\n                                :allowDelete="false"\n                                :allowEdit="false"\n                                :columns="jobChildrenColumns">\n                            <template #column-name="{ item }">\n                                {% block job_list_grid_job_name_link %}\n                                    {{ item.name }}\n                                {% endblock %}\n                            </template>\n                            <template #column-status="{ item }">\n                                {% block job_list_grid_job_status_link %}\n                                    <template>\n                                        <od-job-status-badge :status="item.status"></od-job-status-badge>\n                                        {{ $tc(\'job-listing.page.listing.grid.job-status.\' + item.status) }}\n                                    </template>\n                                {% endblock %}\n                            </template>\n                            <template #actions="{ item }">\n                                <sw-context-menu-item :disabled="!canReschedule(item)"\n                                                      @click="rescheduleJob(item.id)">\n                                    {{ $tc(\'job-listing.actions.reschedule-job.button.label\') }}\n                                </sw-context-menu-item>\n                                <sw-context-menu-item v-if="jobMessages !== null"\n                                                      :disabled="!canShowJobMessages(item.id)"\n                                                      @click="showMessageModal(item.id)">\n                                    {{ $tc(\'job-listing.actions.show-messages.button.label\') }}\n                                </sw-context-menu-item>\n                            </template>\n                        </sw-data-grid>\n                    {% endblock %}\n                </div>\n                <sw-modal v-if="displayedLog"\n                          :title="$tc(\'job-listing.page.listing.grid.message-modal.label\')"\n                          @modal-close="closeModal"\n                          class="job_list_grid_job_messages-modal">\n                    {% block job_messages_listing %}\n                        <sw-data-grid\n                                v-if="currentJobMessages"\n                                :items="currentJobMessages"\n                                :data-source="currentJobMessages"\n                                :showSelection="false"\n                                :allowColumnEdit="false"\n                                :allowDelete="false"\n                                :allowEdit="false"\n                                :showActions="false"\n                                :showHeader="false"\n                                class="od-job-messages-grid"\n                                :columns="jobMessagesColumns">\n                            <template #column-message="{ item }">\n                                {% block job_list_grid_job_messages %}\n                                    <div class="job_list_grid_job_messages-information" style="width:100%;">\n                                        <sw-alert\n                                                v-if="item.type == \'info-message\'"\n                                                variant="info"\n                                                appearance="default"\n                                                :showIcon="true"\n                                                :closable="false">\n                                            {{ item.message }}\n                                        </sw-alert>\n                                        <sw-alert\n                                                v-if="item.type == \'error-message\'"\n                                                variant="error"\n                                                appearance="default"\n                                                :showIcon="true"\n                                                :closable="false">\n                                            {{ item.message }}\n                                        </sw-alert>\n                                        <sw-alert\n                                                v-if="item.type == \'warning-message\'"\n                                                variant="warning"\n                                                appearance="default"\n                                                :showIcon="true"\n                                                :closable="false">\n                                            {{ item.message }}\n                                        </sw-alert>\n                                    </div>\n                                {% endblock %}\n                            </template>\n                        </sw-data-grid>\n                    {% endblock %}\n                </sw-modal>\n            </template>\n        {% endblock %}\n    </sw-page>\n{% endblock %}\n'},SZ7m:function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},i=0;i<t.length;i++){var a=t[i],s=a[0],l={id:e+":"+i,css:a[1],media:a[2],sourceMap:a[3]};o[s]?o[s].parts.push(l):n.push(o[s]={id:s,parts:[l]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=i&&(document.head||document.getElementsByTagName("head")[0]),l=null,r=0,d=!1,c=function(){},u=null,b="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){d=n,u=i||{};var s=o(e,t);return g(s),function(t){for(var n=[],i=0;i<s.length;i++){var l=s[i];(r=a[l.id]).refs--,n.push(r)}t?g(s=o(e,t)):s=[];for(i=0;i<n.length;i++){var r;if(0===(r=n[i]).refs){for(var d=0;d<r.parts.length;d++)r.parts[d]();delete a[r.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],o=a[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(h(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(h(n.parts[i]));a[n.id]={id:n.id,refs:1,parts:s}}}}function f(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function h(e){var t,n,o=document.querySelector("style["+b+'~="'+e.id+'"]');if(o){if(d)return c;o.parentNode.removeChild(o)}if(m){var i=r++;o=l||(l=f()),t=v.bind(null,o,i,!1),n=v.bind(null,o,i,!0)}else o=f(),t=_.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var w,j=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function v(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=j(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function _(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(b,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},aItp:function(e,t){e.exports='<sw-color-badge rounded\n                :variant="variant"\n                :class="additionalClass"\n                style="margin-right: 10px; margin-top: 3px;">\n</sw-color-badge>\n\n'},ikW3:function(e,t,n){"use strict";n.r(t);var o=n("oStO"),i=n.n(o);Shopware.Component.extend("od-entity-listing","sw-entity-listing",{template:i.a});var a=n("aItp"),s=n.n(a);Shopware.Component.register("od-job-status-badge",{template:s.a,props:{status:{type:String,required:!0}},computed:{additionalClass:function(){return"running"===this.status?"--pulse":""},variant:function(){switch(this.status){case"error":return"error";case"succeed":case"running":return"success";default:return""}}}});var l=n("tKac"),r=n.n(l),d=(n("yQeh"),Shopware.Component),c=Shopware.Data.Criteria;d.register("od-job-listing-index",{template:r.a,inject:["OdRescheduleService","repositoryFactory"],mixins:["notification"],props:{autoReloadInterval:{type:Number,required:!1,default:function(){return 0}},jobTypes:{type:Array,required:!1,default:function(){return[]}}},computed:{jobRepository:function(){return this.repositoryFactory.create("od_scheduler_job")},columns:function(){return[{property:"name",label:this.$tc("job-listing.page.listing.grid.column.name"),allowResize:!0},{property:"status",label:this.$tc("job-listing.page.listing.grid.column.status"),allowResize:!0},{property:"startedAt",label:this.$tc("job-listing.page.listing.grid.column.started-at"),allowResize:!0},{property:"finishedAt",label:this.$tc("job-listing.page.listing.grid.column.finished-at"),allowResize:!0},{property:"createdAt",label:this.$tc("job-listing.page.listing.grid.column.created-at"),allowResize:!0}]}},created:function(){this.createdComponent()},data:function(){return{jobItems:null,isLoading:!1}},methods:{createdComponent:function(){var e=this;this.getList(),this.autoReloadInterval>0&&setInterval((function(){e.updateList()}),this.autoReloadInterval)},getLinkParams:function(e){return{id:e.id,backPath:this.$route.name}},updateList:function(){var e=this,t=new c;return t.addFilter(c.equals("parentId",null)),t.addSorting(c.sort("createdAt","ASC",!1)),this.jobTypes!==[]&&t.addFilter(c.equalsAny("type",this.jobTypes)),this.jobRepository.search(t,Shopware.Context.api).then((function(t){e.jobItems=t}))},getList:function(){var e=this;this.isLoading=!0,this.updateList().then((function(){e.isLoading=!1}))},onRefresh:function(){this.getList()},canReschedule:function(e){return"error"===e.status},canDelete:function(e){return-1!==["error","succeed"].indexOf(e.status)},onDeleteJob:function(e){var t=this;this.jobRepository.delete(e,Shopware.Context.api).then((function(){t.updateList()}))},rescheduleJob:function(e){var t=this;this.OdRescheduleService.rescheduleJob(e).then((function(){t.createNotificationSuccess({message:"Job has been rescheduled successfully."}),t.updateList()})).catch((function(){t.createNotificationError({message:"Unable reschedule job."})}))}}});var u=n("PgRa"),b=n.n(u),m=(n("E/lY"),Shopware.Component),p=Shopware.Data.Criteria;m.register("od-job-detail-index",{template:b.a,inject:["OdRescheduleService","repositoryFactory"],mixins:["notification"],props:{jobId:{type:String,required:!1,default:null}},metaInfo:function(){return{title:this.$createTitle()}},data:function(){return{parentRoute:null,jobItem:null,jobChildren:null,jobMessages:null,currentJobMessages:null,displayedLog:null,moduleData:this.$route.meta.$module}},computed:{jobRepository:function(){return this.repositoryFactory.create("od_scheduler_job")},jobMessagesRepository:function(){return this.repositoryFactory.create("od_scheduler_job_message")},jobChildrenColumns:function(){return this.getJobChildrenColumns()},jobMessagesColumns:function(){return this.getJobMessagesColumns()},backPath:function(){return void 0===this.$route.params.backPath?null:{name:this.$route.params.backPath}}},created:function(){this.initPageData()},mounted:function(){this.$route.params.parentPath&&(this.parentRoute=this.$route.params.parentPath)},methods:{initPageData:function(){var e=this;this.jobRepository.get(this.jobId,Shopware.Context.api,new p).then((function(t){e.jobItem=t})).then((function(){e.getJobChildren().then((function(){e.getJobMessages()}))}))},getJobChildren:function(){var e=this,t=new p;return t.addFilter(p.equalsAny("parentId",[this.jobId])),t.addSorting(p.sort("createdAt","ASC",!1)),this.jobRepository.search(t,Shopware.Context.api).then((function(t){e.jobChildren=t}))},getJobChildrenColumns:function(){return[{property:"name",dataIndex:"name",label:this.$tc("job-listing.page.listing.grid.column.name"),allowResize:!1,align:"right",inlineEdit:!0,width:"90px"},{property:"status",dataIndex:"status",label:this.$tc("job-listing.page.listing.grid.column.status"),allowResize:!1,align:"right",inlineEdit:!0,width:"90px"},{property:"startedAt",dataIndex:"startedAt",label:this.$tc("job-listing.page.listing.grid.column.started-at"),allowResize:!1,align:"right",inlineEdit:!0,width:"90px"},{property:"finishedAt",dataIndex:"finishedAt",label:this.$tc("job-listing.page.listing.grid.column.finished-at"),allowResize:!0,align:"right",inlineEdit:!0,width:"90px"},{property:"createdAt",dataIndex:"createdAt",label:this.$tc("job-listing.page.listing.grid.column.created-at"),allowResize:!0,align:"right",inlineEdit:!0,width:"90px"}]},getJobMessages:function(){var e=this,t=new p,n=this.jobChildren?this.jobChildren.map((function(e){return e.id})):[];return t.addFilter(p.equalsAny("jobId",n.concat([this.jobId]))),t.addSorting(p.sort("createdAt","ASC",!1)),this.jobMessagesRepository.search(t,Shopware.Context.api).then((function(t){e.jobMessages=t}))},getJobMessagesColumns:function(){return[{property:"message",dataIndex:"message",label:this.$tc("job-listing.page.listing.grid.column.message"),allowResize:!1,align:"left",width:"90px"}]},canReschedule:function(e){return"error"===e.status},canShowJobMessages:function(e){return Object.values(this.jobMessages).filter((function(t){return t.jobId===e})).length>0},rescheduleJob:function(e){var t=this;this.OdRescheduleService.rescheduleJob(e).then((function(){t.createNotificationSuccess({message:"Job has been rescheduled successfully."}),t.initPageData()})).catch((function(){t.createNotificationError({message:"Unable reschedule job."})}))},showMessageModal:function(e){this.currentJobMessages=Object.values(this.jobMessages).filter((function(t){return t.jobId===e})),this.displayedLog=!0},closeModal:function(){this.displayedLog=!1}}});var g=n("zuOP");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Shopware.Module.register("od-job-listing",{type:"plugin",title:"job-listing.general.title",description:"job-listing.general.description",color:"#F88962",icon:"default-avatar-multiple",snippets:{"en-GB":g},routes:{detail:{component:"od-job-detail-index",path:"detail/:id/back/:backPath",props:{default:function(e){return{jobId:e.params.id}}}}}});var k=Shopware.Classes.ApiService,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,o,i=v(a);function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"od-job";return h(this,a),i.call(this,e,t,n)}return t=a,(n=[{key:"rescheduleJob",value:function(e){var t=this.getBasicHeaders();return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/reschedule"),{params:{jobId:e},headers:t}).then((function(e){return k.handleResponse(e)}))}}])&&w(t.prototype,n),o&&w(t,o),a}(k),C=Shopware.Application,I=C.getContainer("init");C.addServiceProvider("OdRescheduleService",(function(e){return new x(I.httpClient,e.loginService)}))},oStO:function(e,t){e.exports='{% block sw_data_grid_slot_pagination %}\n    <sw-pagination\n            v-bind="{ page, limit, total, steps }"\n            :total-visible="7"\n            @page-change="paginate"\n    />\n{% endblock %}\n\n{% block sw_data_grid_bulk_selected_actions_content %}\n    {% block sw_data_grid_bulk_edit_content %}\n        \x3c!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events --\x3e\n        <a\n                v-if="allowBulkEdit"\n                class="link link-primary"\n                @click="onClickBulkEdit"\n        >\n            {{ $tc(\'global.sw-bulk-edit-modal.bulkEdit\') }}\n        </a>\n    {% endblock %}\n\n    {% block sw_data_grid_bulk_delete_content %}\n        \x3c!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events --\x3e\n        <a\n                v-if="allowDelete"\n                class="link link-danger"\n                @click="showBulkDeleteModal = true"\n        >\n            {{ $tc(\'global.default.delete\') }}\n        </a>\n    {% endblock %}\n{% endblock %}\n\n{% block sw_data_grid_slot_bulk_modals %}\n    {% block sw_data_grid_bulk_edit_modal %}\n        <slot\n                name="bulk-edit-modal"\n                v-bind="{ selection }"\n        >\n            {% block sw_data_grid_slot_bulk_edit_modal %}\n                <sw-bulk-edit-modal\n                        v-if="showBulkEditModal"\n                        :selection="selection"\n                        :bulk-grid-edit-columns="bulkGridEditColumns"\n                        @modal-close="onCloseBulkEditModal"\n                />\n            {% endblock %}\n        </slot>\n    {% endblock %}\n\n    {% block sw_data_grid_bulk_delete_modal %}\n        <sw-modal\n                v-if="showBulkDeleteModal"\n                variant="small"\n                :title="$tc(\'global.default.warning\')"\n                @modal-close="showBulkDeleteModal = false"\n        >\n            <p class="sw-data-grid__confirm-bulk-delete-text">\n                <slot\n                        name="bulk-modal-delete-confirm-text"\n                        v-bind="{ selectionCount }"\n                >\n                    {{ $tc(\'global.entity-components.deleteMessage\', selectionCount, { count: selectionCount }) }}\n                </slot>\n            </p>\n\n            <template #modal-footer>\n                <slot name="bulk-modal-cancel">\n                    <sw-button\n                            size="small"\n                            @click="showBulkDeleteModal = false"\n                    >\n                        {{ $tc(\'global.default.cancel\') }}\n                    </sw-button>\n                </slot>\n\n                <slot\n                        name="bulk-modal-delete-items"\n                        v-bind="{ isBulkLoading, deleteItems }"\n                >\n                    <sw-button\n                            variant="danger"\n                            size="small"\n                            :is-loading="isBulkLoading"\n                            @click="deleteItems"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-button>\n                </slot>\n            </template>\n        </sw-modal>\n    {% endblock %}\n{% endblock %}\n\n{% block sw_data_grid_slot_actions %}\n    <slot\n            name="detail-action"\n            v-bind="{ item }"\n    >\n        <sw-context-menu-item\n                v-if="detailRoute"\n                v-tooltip="{\n            message: $tc(\'sw-privileges.tooltip.warning\'),\n            disabled: allowEdit || allowView,\n            showOnDisabledElements: true,\n            zIndex: 9050,\n        }"\n                class="sw-entity-listing__context-menu-edit-action"\n                :disabled="!allowEdit && !allowView"\n                :router-link="{ name: detailRoute, params: { id: item.id } }"\n        >\n            {{ detailPageLinkText }}\n        </sw-context-menu-item>\n    </slot>\n\n    <slot\n            name="more-actions"\n            v-bind="{ item }"\n    ></slot>\n\n    <slot\n            name="delete-action"\n            v-bind="{ item, showDelete, allowDelete }"\n    >\n        <sw-context-menu-item\n                v-tooltip.bottom="{\n            message: $tc(\'sw-privileges.tooltip.warning\'),\n            disabled: allowDelete,\n            showOnDisabledElements: true,\n            zIndex: 9050,\n        }"\n                :disabled="!allowDelete"\n                class="sw-entity-listing__context-menu-edit-delete"\n                variant="danger"\n                @click="showDelete(item.id)"\n        >\n            {{ $tc(\'global.default.delete\') }}\n        </sw-context-menu-item>\n\n        <sw-context-menu-item\n                class="sw-entity-listing__context-menu-edit-test"\n                variant="info"\n        >\n            Test\n        </sw-context-menu-item>\n    </slot>\n{% endblock %}\n\n{% block sw_data_grid_slot_action_modals %}\n    <sw-modal\n            v-if="deleteId === item.id"\n            :title="$tc(\'global.default.warning\')"\n            variant="small"\n            @modal-close="closeModal"\n    >\n        <p class="sw-listing__confirm-delete-text">\n            <slot\n                    name="delete-confirm-text"\n                    v-bind="{ item }"\n            >\n                {{ $tc(\'global.entity-components.deleteMessage\') }}\n            </slot>\n        </p>\n\n        <template #modal-footer>\n            <slot\n                    name="delete-modal-footer"\n                    v-bind="{ item }"\n            >\n                <slot\n                        name="delete-modal-cancel"\n                        v-bind="{ item }"\n                >\n                    <sw-button\n                            size="small"\n                            @click="closeModal"\n                    >\n                        {{ $tc(\'global.default.cancel\') }}\n                    </sw-button>\n                </slot>\n\n                <slot\n                        name="delete-modal-delete-item"\n                        v-bind="{ item }"\n                >\n                    <sw-button\n                            variant="danger"\n                            size="small"\n                            @click="deleteItem(item.id)"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-button>\n                </slot>\n            </slot>\n        </template>\n    </sw-modal>\n{% endblock %}\n'},tKac:function(e,t){e.exports='<od-entity-listing\n    v-if="jobItems"\n    :items="jobItems"\n    :repository="jobRepository"\n    :is-loading="isLoading"\n    :showSelection="false"\n    :allowColumnEdit="false"\n    :allowDelete="false"\n    :allowEdit="false"\n    :columns="columns">\n    <template #column-status="{ item }">\n        {% block od_job_list_grid_job_status_link %}\n            <template>\n                <od-job-status-badge :status="item.status"></od-job-status-badge>\n                {{ $tc(\'job-listing.page.listing.grid.job-status.\' + item.status) }}\n            </template>\n        {% endblock %}\n    </template>\n    <template #column-name="{ item }">\n        {% block od_job_list_grid_job_name_link %}\n            <router-link :to="{ name: \'od.job.listing.detail\', params: getLinkParams(item) }">\n                {{ item.name }}\n            </router-link>\n        {% endblock %}\n    </template>\n    <template #actions="{ item }">\n        <sw-context-menu-item :router-link="{ name: \'od.job.listing.detail\', params: getLinkParams(item) }">\n            {{ $tc(\'job-listing.actions.view-job.button.label\') }}\n        </sw-context-menu-item>\n        <sw-context-menu-item :disabled="!canReschedule(item)"\n                              @click="rescheduleJob(item.id)">\n            {{ $tc(\'job-listing.actions.reschedule-job.button.label\') }}\n        </sw-context-menu-item>\n        <sw-context-menu-item class="sw-context-menu-item--danger"\n                              :disabled="!canDelete(item)"\n                              @click="onDeleteJob(item.id)">\n            {{ $tc(\'job-listing.actions.delete-job.button.label\') }}\n        </sw-context-menu-item>\n    </template>\n</od-entity-listing>\n'},yQeh:function(e,t,n){var o=n("FQTD");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("56c3ed4c",o,!0,{})},zuOP:function(e){e.exports=JSON.parse('{"job-listing":{"general":{"title":"Job Listing Pages","description":"job-listing"},"menu":{"title":"Job Listing"},"page":{"listing":{"title":"Job Listing","description":"List of Jobs","grid":{"job-status":{"succeed":"Success","error":"Failed","pending":"Pending","running":"Running"},"column":{"type":"Type","status":"Status","name":"Name","started-at":"Started at","finished-at":"Finished at","created-at":"Created at"},"message-modal":{"label":"Job Messages"}}},"detail":{"textHeadline":"Job","jobChildrenTitle":"Job Children"}},"actions":{"reschedule-job":{"button":{"label":"Reschedule Job"}},"delete-job":{"button":{"label":"Delete Job"}},"view-job":{"button":{"label":"View Job"}},"show-messages":{"button":{"label":"Show Messages"}}}}}')}});

(self.webpackChunk_wixc3_stylable_playground_feature=self.webpackChunk_wixc3_stylable_playground_feature||[]).push([[463],{98617:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=i(5163),n=i(93849),r=a.__importDefault(i(20471)),l=a.__importDefault(i(93208));t.default=new n.Feature({id:"firebaseAuthUi",dependencies:[r.default.asEntity,l.default.asEntity],api:{firebaseAuthUiOptions:new n.Config({})}})},14029:function(e,t,i){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(98617);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}})},82983:(e,t,i)=>{e.exports=i(14029)},74853:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=i(5163),n=i(93849),r=a.__importStar(i(2206)),l=a.__importDefault(i(20471)),o=a.__importDefault(i(93208));t.default=new n.Feature({id:"firebaseFsPersistency",dependencies:[r.default.asEntity,l.default.asEntity,o.default.asEntity],api:{firebaseFsServiceProcessing:n.Service.withType().defineEntity(r.processingEnv).allowRemoteAccess((0,n.declareComEmitter)("onFileSystemChange","removeFileSystemChangeHandler"))}})},21479:function(e,t,i){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(74853);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}})},82039:(e,t,i)=>{e.exports=i(21479)},94703:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=i(5163),n=i(93849),r=i(5689),l=a.__importDefault(i(93208)),o=i(9011);t.default=new n.Feature({id:"firebasePersistency",dependencies:[l.default.asEntity],api:{firebasePersistencyServiceOptions:new n.Config({rootCollectionId:"projects",testingMode:!1}),firebaseConfig:new n.Config(o.firebaseConfig),firebasePersistencyService:n.Service.withType().defineEntity(r.mainEnv),firebaseAuthService:n.Service.withType().defineEntity(r.mainEnv),firebaseCloneHandlers:n.Slot.withType().defineEntity(r.mainEnv)}})},70537:function(e,t,i){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(94703);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}})},9011:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.firebaseConfig=void 0,t.firebaseConfig={apiKey:"AIzaSyD-IS7lkB3o9GioLGayvTlOAgl2EFQnKrY",authDomain:"localhost",projectId:"demo-project",storageBucket:"core3-firebase-9b327.appspot.com",messagingSenderId:"491604166384",appId:"1:491604166384:web:fb676c56b4fdb306bd6435"}},20471:(e,t,i)=>{e.exports=i(70537)},93673:(e,t,i)=>{e.exports=i(26427)},26904:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=i(5163);var n=i(59320);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(n).default}}),a.__exportStar(i(59320),t)},59320:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simulationElementRects=t.simulationPreviewDataManager=t.EXCLUDE_EDITING_TRANSFOTMERS_QUERY_FLAG=t.previewEnv=void 0;const a=i(5163),n=i(93849),r=a.__importStar(i(32510)),l=i(5689),o=a.__importStar(i(93104)),u=a.__importDefault(i(25447)),s=a.__importDefault(i(93208)),f=a.__importDefault(i(1529)),d=a.__importStar(i(2206)),p=a.__importDefault(i(93673)),c=a.__importDefault(i(44479));t.previewEnv=new n.Environment("preview","iframe","multi",[o.codeExecutionRenderer]),t.EXCLUDE_EDITING_TRANSFOTMERS_QUERY_FLAG="excludeEditingTransformers";const _=n.Service.withType().defineEntity(t.previewEnv),y=(0,r.defineTwoWayResource)().defineEntity(l.mainEnv);t.simulationPreviewDataManager=(0,r.defineOneWayResource)().defineEntity(d.processingEnv),t.simulationElementRects=(0,r.defineOneWayResource)().defineEntity(t.previewEnv),t.default=new n.Feature({id:"simulationPreview",dependencies:[o.default.asEntity,n.COM.asEntity,s.default.asEntity,d.default.asEntity,u.default.asEntity,r.default.asEntity,p.default.asEntity,f.default.asEntity,c.default.asEntity],api:{simulationWindowController:_.allowRemoteAccess((0,n.declareComEmitter)("addCanvasIsEmptyListener","removeCanvasIsEmptyListener")),localSimulationWindowController:_,previewController:n.Service.withType().defineEntity(t.previewEnv).allowRemoteAccess((0,n.declareComEmitter)("subscribe","unsubscribe")),previewRenderers:n.MapSlot.withType().defineEntity(t.previewEnv),demoErrorManager:p.default.api.demoErrorManager.defineConsumer(t.previewEnv),consoleResourceManager:y,consoleResourceManagerPreview:y.defineConsumer(t.previewEnv),previewConfiguration:d.default.api.pluggableProjectConfig.entry({environmentVariables:{}},"previewConfiguration"),globalPreviewData:n.Slot.withType().defineEntity(d.processingEnv),simulationElementRects:t.simulationElementRects,simulationPreviewDataManager:t.simulationPreviewDataManager}})},64578:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=i(5163),n=i(93849),r=a.__importDefault(i(45059)),l=a.__importDefault(i(33142)),o=a.__importDefault(i(7959)),u=a.__importDefault(i(23719)),s=a.__importDefault(i(18380)),f=a.__importStar(i(43934)),d=a.__importDefault(i(2618)),p=a.__importStar(i(30383)),c=a.__importDefault(i(32562)),_=a.__importDefault(i(97569)),y=a.__importDefault(i(26904)),m=a.__importDefault(i(20471)),E=a.__importDefault(i(82039)),v=a.__importDefault(i(82983)),b=i(32510),g=(0,b.defineComputedResource)().defineEntity(f.processingEnv);t.default=new n.Feature({id:"stylable-playground",dependencies:[r.default.asEntity,l.default.asEntity,_.default.asEntity,o.default.asEntity,s.default.asEntity,m.default.asEntity,E.default.asEntity,v.default.asEntity,u.default.asEntity,f.default.asEntity,d.default.asEntity,y.default.asEntity,p.StylableCompiler.asEntity,p.default.asEntity,p.StylableLanguageService.asEntity,c.default.asEntity],api:{compiled:g,stylablePlaygroundOptions:new n.Config({key:"default value"}),stylableMetaManager:(0,b.defineComputedResource)().defineEntity(f.processingEnv)}})},72334:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StylableCompiler=t.StylableLanguageService=t.default=void 0;const a=i(5163);var n=i(70286);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(n).default}});var r=i(13427);Object.defineProperty(t,"StylableLanguageService",{enumerable:!0,get:function(){return a.__importDefault(r).default}}),a.__exportStar(i(70286),t);var l=i(84081);Object.defineProperty(t,"StylableCompiler",{enumerable:!0,get:function(){return a.__importDefault(l).default}})},84081:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=i(5163),n=i(93849),r=i(2206),l=a.__importDefault(i(25447)),o=a.__importDefault(i(93104)),u=a.__importDefault(i(70286));t.default=new n.Feature({id:"stylableCompiler",dependencies:[u.default.asEntity,l.default.asEntity,o.default.asEntity],api:{onProcessSlot:n.Slot.withType().defineEntity(r.processingEnv)}})},13427:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=i(5163),n=i(93849),r=a.__importStar(i(2206)),l=a.__importDefault(i(83341)),o=a.__importDefault(i(70286));t.default=new n.Feature({id:"stylableLanguageService",dependencies:[r.default.asEntity,l.default.asEntity,o.default.asEntity],api:{stylable:n.Service.withType().defineEntity(r.processingEnv)}})},70286:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=i(5163),n=a.__importStar(i(2206)),r=a.__importDefault(i(82026)),l=i(93849);t.default=new l.Feature({id:"stylable",dependencies:[n.default.asEntity,r.default.asEntity],api:{createStylable:l.Service.withType().defineEntity(n.processingEnv),createCalcDepthContext:l.Service.withType().defineEntity(n.processingEnv)}})},30383:(e,t,i)=>{e.exports=i(72334)},48150:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=i(5163);a.__exportStar(i(17166),t);var n=i(17166);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(n).default}})},89111:(e,t,i)=>{e.exports=i(48150)}}]);
(self.webpackChunk_wixc3_stylable_playground_feature=self.webpackChunk_wixc3_stylable_playground_feature||[]).push([[849],{43934:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const i=r(5163);i.__exportStar(r(31434),t);var n=r(31434);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.__importDefault(n).default}})},2206:(e,t,r)=>{e.exports=r(43934)},89102:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(93849),n=r(2206);t.default=new i.Feature({id:"userApplicationServer",dependencies:[],api:{userApplicationServerInterface:i.Service.withType().defineEntity(n.processingEnv).allowRemoteAccess(),serverRootSlot:i.Slot.withType().defineEntity(n.processingEnv),applicationHandlerSlot:i.Slot.withType().defineEntity(n.processingEnv)},context:{serverInitializer:n.processingEnv.withContext()}})},65741:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(5163).__importDefault(r(89102)),n=r(2206);i.default.setupContext(n.processingEnv,"serverInitializer",(()=>({fn:()=>({externalInterface:{exists:()=>!1,getBaseUrl:()=>Promise.resolve(void 0),isReady:()=>Promise.resolve(void 0)}})})))}}]);
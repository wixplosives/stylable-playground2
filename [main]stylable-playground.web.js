(self.webpackChunk_wixc3_stylable_playground_feature=self.webpackChunk_wixc3_stylable_playground_feature||[]).push([[1679],{49389:(e,t,r)=>{"use strict";r.r(t),r.d(t,{classes:()=>n,cssStates:()=>l,keyframes:()=>s,namespace:()=>a,st:()=>d,stVars:()=>o,style:()=>u,vars:()=>i});const a="o56",n={root:"s208"},s={},o={},i={},l=r.stc.bind(null,a),u=r.sts.bind(null,a),d=u},58487:(e,t,r)=>{"use strict";r.r(t),r.d(t,{classes:()=>n,cssStates:()=>l,keyframes:()=>s,namespace:()=>a,st:()=>d,stVars:()=>o,style:()=>u,vars:()=>i});const a="o23",n={root:"s104",iframeContainer:"s105",iframe:"s106",loading:"s107",spinner:"s108",error:"s109",errorIcon:"s110",errorTitle:"s111",errorTooltip:"s112"},s={},o={},i={},l=r.stc.bind(null,a),u=r.sts.bind(null,a),d=u},30736:(e,t,r)=>{"use strict";r.r(t),r.d(t,{classes:()=>n,cssStates:()=>l,keyframes:()=>s,namespace:()=>a,st:()=>d,stVars:()=>o,style:()=>u,vars:()=>i});const a="o1",n={root:"s29",copy:"s24",preview:"s25",diagnostics:"s30",diagnosticsTitle:"s26",filePath:"s27",diagnosticsList:"s28"},s={},o={},i={},l=r.stc.bind(null,a),u=r.sts.bind(null,a),d=u},71920:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createMetadata=void 0,t.createMetadata=function(e){return e}},14716:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRenderableBase=t.baseRender=void 0;const a=r(71920),n=r(78530),s=r(16846);t.baseRender=async function(e,t,r){(0,s.callHooks)(e,"beforeRender",r),await t(r),(0,s.callHooks)(e,"afterRender",r)},t.createRenderableBase=function(e){return(0,a.createMetadata)(Object.assign(Object.assign({},e),{setupStage(e=document.body){return(0,n.setupBoardStage)(this,e)}}))}},16846:(e,t)=>{"use strict";function r(e,t){return e.plugins?e.plugins.filter((e=>!!e.key.plugin[t])):[]}Object.defineProperty(t,"__esModule",{value:!0}),t.callHooks=t.getPluginsWithHooks=void 0,t.getPluginsWithHooks=r,t.callHooks=function(e,t,...a){const n=r(e,t);for(const e of n)e.key.plugin[t]&&e.key.plugin[t](e.props,...a)}},50210:function(e,t,r){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||a(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(71920),t),n(r(14716),t),n(r(78530),t),n(r(16846),t),n(r(19961),t)},78530:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setupBoardStage=t.defaultEnvironmentProperties=t.defaultCanvasStyles=t.defaultWindowStyles=void 0;const a=r(16846);t.defaultWindowStyles={width:1024,height:640,backgroundColor:"#fcfcfc"},t.defaultCanvasStyles={width:"fit-content",height:"fit-content",marginLeft:"auto",marginRight:"auto",marginBottom:"auto",marginTop:"auto",paddingLeft:"0px",paddingRight:"0px",paddingBottom:"0px",paddingTop:"0px",backgroundColor:"#fff"},t.defaultEnvironmentProperties={windowWidth:t.defaultWindowStyles.width,windowHeight:t.defaultWindowStyles.height,windowBackgroundColor:t.defaultWindowStyles.backgroundColor,canvasMargin:{},canvasPadding:{},canvasBackgroundColor:t.defaultCanvasStyles.backgroundColor};const n=(e={},r)=>{r.windowHeight=r.windowHeight?window.outerHeight:t.defaultWindowStyles.height,r.windowWidth=r.windowWidth?window.outerWidth:t.defaultWindowStyles.width,r.windowBackgroundColor=r.windowBackgroundColor?document.body.style.backgroundColor:t.defaultWindowStyles.backgroundColor,window.resizeTo(e.windowWidth||r.windowWidth,e.windowHeight||r.windowHeight),document.body.style.backgroundColor=e.windowBackgroundColor||r.windowBackgroundColor},s=(e,r={})=>{var a,n,s,o,i,l,u,d,c,f,p,m,v,g,y,b,E,_;const h={width:r.canvasWidth?`${r.canvasWidth}px`:t.defaultCanvasStyles.width,height:r.canvasHeight?`${r.canvasHeight}px`:t.defaultCanvasStyles.height,marginLeft:(null===(a=r.canvasMargin)||void 0===a?void 0:a.left)?`${null===(n=r.canvasMargin)||void 0===n?void 0:n.left}px`:t.defaultCanvasStyles.marginLeft,marginRight:(null===(s=r.canvasMargin)||void 0===s?void 0:s.right)?`${null===(o=r.canvasMargin)||void 0===o?void 0:o.right}px`:t.defaultCanvasStyles.marginRight,marginBottom:(null===(i=r.canvasMargin)||void 0===i?void 0:i.bottom)?`${null===(l=r.canvasMargin)||void 0===l?void 0:l.bottom}px`:t.defaultCanvasStyles.marginBottom,marginTop:(null===(u=r.canvasMargin)||void 0===u?void 0:u.top)?`${null===(d=r.canvasMargin)||void 0===d?void 0:d.top}px`:t.defaultCanvasStyles.marginTop,paddingLeft:(null===(c=r.canvasPadding)||void 0===c?void 0:c.left)?`${null===(f=r.canvasPadding)||void 0===f?void 0:f.left}px`:t.defaultCanvasStyles.paddingLeft,paddingRight:(null===(p=r.canvasPadding)||void 0===p?void 0:p.right)?`${null===(m=r.canvasPadding)||void 0===m?void 0:m.right}px`:t.defaultCanvasStyles.paddingRight,paddingBottom:(null===(v=r.canvasPadding)||void 0===v?void 0:v.bottom)?`${null===(g=r.canvasPadding)||void 0===g?void 0:g.bottom}px`:t.defaultCanvasStyles.paddingBottom,paddingTop:(null===(y=r.canvasPadding)||void 0===y?void 0:y.top)?`${null===(b=r.canvasPadding)||void 0===b?void 0:b.top}px`:t.defaultCanvasStyles.paddingTop,backgroundColor:r.canvasBackgroundColor||t.defaultCanvasStyles.backgroundColor};void 0!==(null===(E=r.canvasMargin)||void 0===E?void 0:E.left)&&void 0!==r.canvasMargin.right&&(h.width="100%"),void 0!==(null===(_=r.canvasMargin)||void 0===_?void 0:_.top)&&void 0!==r.canvasMargin.bottom&&(h.height="auto"),Object.assign(e.style,h)};t.setupBoardStage=(e,t)=>{const r={},o=document.createElement("div");o.setAttribute("id","board-canvas");const{environmentProps:i}=e;return n(i,r),s(o,i),(0,a.callHooks)(e,"beforeAppendCanvas",o),t.appendChild(o),{canvas:o,updateCanvas:e=>{s(o,e)},updateWindow:e=>{n(e,r)},cleanup:()=>{(0,a.callHooks)(e,"beforeStageCleanUp",o),o.remove(),r.windowWidth&&r.windowHeight&&window.resizeTo(r.windowWidth,r.windowHeight),r.windowBackgroundColor&&(document.body.style.backgroundColor=r.windowBackgroundColor)}}}},19961:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createPlugin=t.defaultMerge=void 0,t.defaultMerge=e=>[e.reduceRight(((e,t)=>Object.assign(Object.assign({},e),t)))],t.createPlugin=()=>(e,r,a,n=t.defaultMerge)=>{const s={pluginName:e,defaultProps:r,plugin:a,use:e=>({key:s,props:Object.assign(Object.assign({},r),e)}),merge:n};return s}},4003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(5163).__exportStar(r(35202),t)},35202:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useEngineFrame=void 0;const a=r(5163),n=r(93849),s=a.__importStar(r(87363)),o=r(91570),i=r(9029);t.useEngineFrame=(e,t,r=!0)=>{const{COM:{communication:a}}=(0,i.useMainContext)(),u=(0,s.useMemo)((()=>{const r=new URLSearchParams(window.location.search),n=o.REQUIRED_PARAMS.reduce(((e,t)=>{const a=r.get(t);return a&&(e[t]=a),e}),{}),s=new URLSearchParams({...n,...t,publicPath:a.getPublicPath()});return`${a.getPublicPath()}${e.env}.html?${s.toString()}`}),[t,e.env,a]),d=(0,s.useRef)(null),[c,f]=(0,s.useReducer)((e=>e+1),0),{id:p,initialize:m}=(0,s.useMemo)((()=>(0,n.deferredIframeInitializer)({communication:a,env:e})),[a,e,u,c]),v=(0,s.useCallback)((e=>r?s.default.createElement(l,{...e,id:p,iframeRef:d,initialize:m,reloadPreview:f,url:u,communication:a}):null),[p,m,r,f,u,a]);return{id:p,renderFrame:v,iframeRef:d,reloadPreview:f}};const l=({id:e,onFrameReady:t,reloadPreview:r,onScroll:a,className:l,style:u,initialize:d,iframeRef:c,url:f,communication:p})=>{const{gui:{globalWindowEventEmitter:m},shortcuts:{shortcutService:v},Resources:{syncer:g}}=(0,i.useMainContext)(),y=(0,s.useRef)(!1),b=(0,s.useCallback)((async r=>{if(r.contentWindow&&(m.register(e,r.contentWindow),v.subscribe(e,r.contentWindow)),await d({iframeElement:r,managed:!0,src:f}),!y.current)return t&&t(r)}),[m,e,d,t,v,f]);return(0,s.useEffect)((()=>{const{current:t}=c;if(y.current=!1,t){const r=b(t).catch(n.reportError);return()=>{y.current=!0,t&&(m.unregister(e),v.unsubscribe(e),g.disconnectSyncer(e),p.clearEnvironment(e),r.then((e=>{e&&e()})).catch(n.reportError))}}return o.noop}),[m,e,c,b,v,g,p]),(0,s.useEffect)((()=>{const{current:e}=c;if(!e)return;const t=()=>{"about:blank"===e.contentWindow.location.href&&r()};return e.addEventListener("load",t),()=>e.removeEventListener("load",t)}),[c,r]),(0,s.useEffect)((()=>{const{current:e}=c;return e&&e.contentDocument&&a&&e.contentDocument.addEventListener("scroll",a,!1),()=>{e&&e.contentDocument&&a&&e.contentDocument.removeEventListener("scroll",a,!1)}}),[c,a]),s.default.createElement("iframe",{className:l,ref:c,style:u})}},2502:(e,t,r)=>{e.exports=r(4003)},5531:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StylableIcon=void 0;const a=r(5163).__importStar(r(87363)),n=r(43230);t.StylableIcon=(0,a.memo)((({className:e,...t})=>a.default.createElement("svg",{className:(0,n.st)(n.classes.root,e),width:"16px",height:"18px",viewBox:"0 0 85 96",version:"1.1",xmlns:"http://www.w3.org/2000/svg",...t},a.default.createElement("defs",null,a.default.createElement("linearGradient",{x1:"66.5482535%",y1:"-4.69211158%",x2:"80.2718164%",y2:"111.186421%",id:"linearGradient-1"},a.default.createElement("stop",{stopColor:"#7AD852",offset:"0%"}),a.default.createElement("stop",{stopColor:"#3AB38B",offset:"53.5842857%"}),a.default.createElement("stop",{stopColor:"#00BFC9",offset:"100%"})),a.default.createElement("linearGradient",{x1:"78.0937359%",y1:"0.737604065%",x2:"20.393625%",y2:"118.621864%",id:"linearGradient-2"},a.default.createElement("stop",{stopColor:"#FF2953",offset:"0%"}),a.default.createElement("stop",{stopColor:"#EA3333",offset:"100%"}))),a.default.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.default.createElement("g",{id:"Logo-2",transform:"translate(-605.000000, -13780.000000)"},a.default.createElement("g",{id:"Group-4",transform:"translate(80.000000, 13191.000000)"},a.default.createElement("g",{id:"96-logo-OnlySymbol",transform:"translate(525.000000, 589.000000)"},a.default.createElement("g",{id:"logo-st-copy-2"},a.default.createElement("g",{id:"Group"},a.default.createElement("g",{id:"Group-3-Copy"},a.default.createElement("path",{d:"M25.9459514,1.83180599 C18.0674566,5.18385626 0.0608270795,22.4410604 0,36.0399542 C0.106082221,50.0983791 18.0674566,66.896494 25.9459514,70.2485442 C27.7524656,71.0166212 30.5556622,72.0799083 33.5162528,72.0799083 C36.2161321,72.0799083 38.5022229,70.7476072 40.8284013,67.949739 C44.7381922,63.2462622 44.2677279,56.4833362 39.0570181,52.6451613 C32.8214884,48.054819 27.7181731,43.9346181 27.6117782,36.0399542 C27.7181731,28.1457321 32.8214884,22.6356781 39.0570181,18.0448939 C44.2677279,14.2071609 45.2825561,8.38564984 41.3727652,3.68217309 C39.0470265,0.884304892 36.2156924,0 33.5162528,0 C30.5552226,0 27.7524656,1.06328714 25.9459514,1.83180599 Z",id:"Fill-1",fill:"url(#linearGradient-1)"}),a.default.createElement("path",{d:"M40.6969697,68.1290323 C44.1549724,64.1957897 44.5842817,56.3931434 39.1565532,52.6451613 C31.5485284,47.3916302 27.6648763,42.3833436 27.7104286,35.9651621 C27.762084,28.6870622 32.3937981,24.1297497 33.5481335,22.7096774 C16.2724262,42.1051592 13.8795535,64.0194269 30.6046488,71.7395025 C34.4314044,73.0700295 37.709116,71.5275122 40.6969697,68.1290323 Z",id:"Fill-9",fill:"#005892"}),a.default.createElement("path",{d:"M32.6187986,61.1659305 C34.8386427,58.4378654 34.6272266,53.2656726 31.6299374,50.4264435 C26.8639635,45.9118 26.0130232,41.0003336 26.0422652,36.5487352 C26.0754251,31.5007042 29.0487262,28.3397893 29.7897449,27.3548387 C18.699708,40.8073872 15.4035189,58.3155416 26.1400936,63.6701233 C28.5966565,64.592966 30.7007638,63.5230886 32.6187986,61.1659305 Z",id:"Fill-9",fill:"#00418E"}),a.default.createElement("path",{d:"M27.9147528,55.8977447 C29.331312,54.1568722 29.1964001,50.8563174 27.2837264,49.0445073 C24.2423939,46.1635575 23.6993795,43.0293813 23.7180399,40.1886626 C23.7392003,36.9673398 24.7604614,34.1869492 23.0817371,37.9080227 C21.4030128,41.6290961 16.9290887,54.0788132 23.7804676,57.4957566 C25.3480851,58.0846543 26.6907886,57.4019286 27.9147528,55.8977447 Z",id:"Fill-9",fill:"#002355"})),a.default.createElement("g",{id:"Group-4-Copy",transform:"translate(41.212121, 23.741935)"},a.default.createElement("g",{id:"Group-5"},a.default.createElement("path",{d:"M10.2201858,72.217956 C7.53356827,72.217956 4.71568281,71.3341432 2.40099118,68.5378319 C-1.49022861,63.8369723 -0.473491646,58.0194923 4.71246775,54.1838948 C10.9183792,49.5956651 15.9907251,44.0878855 16.0966146,36.1980561 C15.9907251,28.3077851 10.9119513,23.0677135 4.71246775,18.4561916 C0.135480195,15.0515727 -1.49022861,8.55869822 2.40099118,3.8578387 C4.71612037,1.06152735 7.53313071,0.178156214 10.2201858,0.178156214 C13.1667138,0.178156214 15.9565955,1.2408517 17.7545289,2.00850122 C25.5956015,5.35868626 43.4366298,22.10568 43.5747924,36.1980561 C43.530607,49.4808626 25.5956015,67.0369843 17.7545289,70.3871693 C15.9565955,71.1552605 13.1671514,72.217956 10.2201858,72.217956 Z",id:"Fill-1-Copy-6",fill:"url(#linearGradient-2)"}),a.default.createElement("path",{d:"M22.5574576,45.6907536 C26.0330966,41.7575111 25.4436206,34.6985213 19.98821,30.9505393 C12.3413834,25.6970081 8.69567546,19.6736662 8.74146003,13.2554847 C8.79337889,5.97738477 13.4487153,1.42007233 14.608938,-7.10542736e-15 C-3.43614578,13.2554847 -5.15995421,41.3097495 11.6504411,49.0298251 C15.4967137,50.360352 19.5543655,49.0892336 22.5574576,45.6907536 Z",id:"Fill-9",fill:"#470000",opacity:"0.600000024",style:{mixBlendMode:"multiply"},transform:"translate(12.363636, 24.774194) rotate(-180.000000) translate(-12.363636, -24.774194) "}),a.default.createElement("path",{d:"M23.2851073,40.6957867 C25.5049514,37.9677217 25.2935353,32.7955288 22.2962461,29.9562997 C17.5302722,25.4416562 16.6793318,20.5301899 16.7085738,16.0785914 C16.7417337,11.0305604 17.7517196,8.72688611 18.4927383,7.74193548 C9.46650247,18.3502628 6.5161166,38.0769586 16.8064023,43.1999795 C19.2629652,44.1228222 21.3670725,43.0529448 23.2851073,40.6957867 Z",id:"Fill-9-Copy",fill:"#670010",transform:"translate(17.538044, 25.635896) rotate(-180.000000) translate(-17.538044, -25.635896) "}),a.default.createElement("path",{d:"M23.8890459,33.9732608 C25.305605,32.2323883 25.1706931,28.9318335 23.2580194,27.1200234 C20.2166869,24.2390736 19.1985172,20.582195 19.0844218,18.5547333 C18.9436956,16.0540468 18.9602658,15.6990227 19.3986642,13.9354839 C18.0605783,16.3448892 12.2009431,32.9714366 19.7547606,35.5712727 C21.3223782,36.1601705 22.6650817,35.4774448 23.8890459,33.9732608 Z",id:"Fill-9-Copy-2",fill:"#730000",style:{mixBlendMode:"multiply"},transform:"translate(20.404128, 24.858631) rotate(-180.000000) translate(-20.404128, -24.858631) "})))))))))))),t.StylableIcon.displayName="StylableIcon"},98617:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163),n=r(93849),s=a.__importDefault(r(20471)),o=a.__importDefault(r(93208));t.default=new n.Feature({id:"firebaseAuthUi",dependencies:[s.default.asEntity,o.default.asEntity],api:{firebaseAuthUiOptions:new n.Config({})}})},14029:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(98617);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}})},82983:(e,t,r)=>{e.exports=r(14029)},74853:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163),n=r(93849),s=a.__importStar(r(2206)),o=a.__importDefault(r(20471)),i=a.__importDefault(r(93208));t.default=new n.Feature({id:"firebaseFsPersistency",dependencies:[s.default.asEntity,o.default.asEntity,i.default.asEntity],api:{firebaseFsServiceProcessing:n.Service.withType().defineEntity(s.processingEnv).allowRemoteAccess((0,n.declareComEmitter)("onFileSystemChange","removeFileSystemChangeHandler"))}})},21479:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(74853);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}})},82039:(e,t,r)=>{e.exports=r(21479)},94703:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163),n=r(93849),s=r(5689),o=a.__importDefault(r(93208)),i=r(9011);t.default=new n.Feature({id:"firebasePersistency",dependencies:[o.default.asEntity],api:{firebasePersistencyServiceOptions:new n.Config({rootCollectionId:"projects",testingMode:!1}),firebaseConfig:new n.Config(i.firebaseConfig),firebasePersistencyService:n.Service.withType().defineEntity(s.mainEnv),firebaseAuthService:n.Service.withType().defineEntity(s.mainEnv),firebaseCloneHandlers:n.Slot.withType().defineEntity(s.mainEnv)}})},70537:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(94703);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}})},9011:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.firebaseConfig=void 0,t.firebaseConfig={apiKey:"AIzaSyD-IS7lkB3o9GioLGayvTlOAgl2EFQnKrY",authDomain:"localhost",projectId:"demo-project",storageBucket:"core3-firebase-9b327.appspot.com",messagingSenderId:"491604166384",appId:"1:491604166384:web:fb676c56b4fdb306bd6435"}},20471:(e,t,r)=>{e.exports=r(70537)},83135:(e,t,r)=>{e.exports=r(77467)},71299:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FileResource=void 0;const a=r(60814),n=r(78204);class s extends a.Resource{delete(){this.invalidate(n.FILE_RESOURCE_DELETE_MESSAGE)}restoreDeleted(){this.setStatus({valid:!0})}isDeleted(){return!this.isValid()&&this.getInvalidationMessage()===n.FILE_RESOURCE_DELETE_MESSAGE}}t.FileResource=s},78432:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useResources=t.useResource=t.useResourceApplyChange=t.useResourceValidity=t.useResourceValue=t.useResourceState=t.useApplyChange=t.useValidity=t.useValue=t.useResourceSubscriber=t.useHoldResource=t.useResourceInstance=void 0;const a=r(87363),n=r(93849),s=r(60814),o=r(69202);function i({resource:e,defaultValue:t,enabled:r=!0}){const s=(0,o.useForceUpdate)(),i=(0,a.useRef)(!1),l=(0,o.useLatest)(r),u=(0,a.useCallback)((()=>{l.current&&!i.current&&s()}),[l,s]);return(0,a.useEffect)((()=>(e&&e.subscribe(u),(null==e?void 0:e.ready)&&e.ready.then(u).catch(n.reportError),()=>{null==e||e.unsubscribe(u)})),[u,e]),(0,a.useEffect)((()=>()=>{i.current=!0}),[]),function(e,t){return e&&e.isReady()&&e.isValid()?e.getLatest():t}(e,t)}function l({resource:e,enabled:t=!0}){const[r,n]=(0,a.useState)(),s=(0,a.useCallback)((()=>{if(t){const t=e&&e.isReady()?e.isValid():void 0;n(t)}}),[e,t]);return(0,a.useEffect)((()=>{var r;if(!e)return void(t&&n(void 0));let a=!1;const o=()=>{a||s()};return e.subscribe(o),o(),null===(r=e.ready)||void 0===r||r.then(o).catch(o),()=>{a=!0,e.unsubscribe(o)}}),[e,s,t]),r}function u(e){return(0,a.useCallback)((t=>{null==e||e.applyChange(t)}),[e])}function d(e){return!!e.ids}t.useResourceInstance=({resourceManager:e,resourceId:t,enabled:r=!0})=>{const n=(0,a.useMemo)((()=>({})),[]),s=(0,a.useRef)({resourceManager:e,resourceId:t}),o=(0,a.useMemo)((()=>{if(void 0===t)return;const{current:a}=s;return function(e,t,r){return e||t.resourceId!==r.resourceId||t.resourceManager!==r.resourceManager}(r,a,{resourceManager:e,resourceId:t})?e.get(t,n):a.resourceInstance}),[t,r,e,n]);return s.current={resourceManager:e,resourceId:t,resourceInstance:o},(0,a.useEffect)((()=>()=>null==o?void 0:o.release(n)),[o,n]),o},t.useHoldResource=e=>{(0,a.useEffect)((()=>{const t={};return e.use(t),()=>{e.release(t)}}),[e])},t.useResourceSubscriber=(e,t)=>{(0,a.useEffect)((()=>{const r=()=>t(e.getLatest());return null==e||e.subscribe(r),()=>null==e?void 0:e.unsubscribe(r)}),[t,e])},t.useValue=i,t.useValidity=l,t.useApplyChange=u,t.useResourceState=function({resource:e,enabled:t,defaultValue:r}){const n=i({resource:e,enabled:t,defaultValue:(null==e?void 0:e.getLatest())||r}),o=u(e),l=(0,a.useCallback)((e=>o((0,s.fullChange)(e))),[o]);return[n,l,e]},t.useResourceValue=function({resourceManager:e,resourceId:r,defaultValue:a,enabled:n=!0}){return i({resource:(0,t.useResourceInstance)({resourceManager:e,resourceId:r,enabled:n}),defaultValue:a,enabled:n})},t.useResourceValidity=function({resourceManager:e,resourceId:r,enabled:a=!0}){return l({resource:(0,t.useResourceInstance)({resourceManager:e,resourceId:r,enabled:a}),enabled:a})},t.useResourceApplyChange=function({resourceManager:e,resourceId:r}){return u((0,t.useResourceInstance)({resourceManager:e,resourceId:r}))},t.useResource=function(e,t){const[r,n]=(0,a.useState)(t);return(0,a.useEffect)((()=>{var r;let a=!1;if(!e)return;const s=()=>{a||(e.isReady()&&e.isValid()?n(e.getLatest()):n(t))};return e.subscribe(s),s(),null===(r=e.ready)||void 0===r||r.then(s).catch(s),()=>{a=!0,e.unsubscribe(s)}}),[e,t]),e&&e.isReady()?e.getLatest():r};const c=new WeakMap,f=e=>{const t=c.get(e);if(t)for(const r of Object.keys(t))for(const a of Object.keys(t[r]))t[r][a].resource.isReady()&&t[r][a].resource.release(e)},p=(e,t,r,a,n)=>{const s=t.getType();t.isReady()||n.push(t.ready),e[s]||(e[s]={}),e[s][t.getSerializedId()]={resource:t,field:r,isInnerRecord:a}},m={valid:!1,message:"Loading"},v=(e,t)=>{for(const r of Object.keys(e))if(t[r])for(const a of t[r])if(e[r][a])return!0;return!1};t.useResources=function(e,t=!0){const r=(e=>JSON.stringify(e,((e,t)=>t instanceof s.ResourceManager?t.getTypeName():t)))(e),[o]=(0,a.useState)({cleanupRequested:!1,enabled:t,hasChanges:!1,used:new Set});o.enabled=t;const[i,l]=(0,a.useState)(0),u=Object.keys(e),g=u.length?e[u[0]].resourceManager.getBatcher():void 0,y=c.get(o)||{},b=(0,a.useCallback)((e=>{if(!o.enabled)return;const t=v(y,e.changed),r=v(y,e.changedStatus);(t||r)&&l(Math.random())}),[y,o]);return c.has(o)||(c.set(o,y),g.subscribe(b)),(0,a.useMemo)((()=>{const t=[];o.enabled&&(g.batchAll((()=>{const r=new Set;for(const[a,n]of Object.entries(e))if(d(n))for(const e of n.ids){const s=n.resourceManager.get(e,o);r.add(s),p(y,s,a,!0,t)}else if(n.id){const e=n.resourceManager.get(n.id,o);r.add(e),p(y,e,a,!0,t)}for(const e of Object.values(y))for(const[t,a]of Object.entries(e))r.has(a.resource)||(a.resource.isReady()?(a.resource.release(o),delete e[t]):a.resource.ready.then((()=>{o.used.has(a.resource)||(a.resource.release(o),delete e[t])})).catch(n.reportError));o.used=r})),t.length&&o.enabled&&Promise.all(t).then((e=>{o.cleanupRequested?f(o):l(Math.random())})).catch((e=>{throw e})))}),[r,o,g,y]),(0,a.useEffect)((()=>()=>{f(o),g.unsubscribe(b),o.cleanupRequested=!0}),[o]),(0,a.useMemo)((()=>{return Object.keys(e).reduce(((r,a)=>{const n=e[a];if(d(n))r[a]={getResource:e=>t(a,e),getValue(e){const r=t(a,e);return r&&r.isValid()?r.getLatest():n.defaultValue},getStatus(e){const r=t(a,e);return r&&r.isReady()?r.getStatus():m}};else{const e=t(a,n.id);r[a]={value:e&&e.isValid()?e.getLatest():n.defaultValue,status:e?e.getStatus():m,resource:e}}return r}),{});function t(t,r){const a=e[t],n=d(a)?r:a.id;if(!n||!y[a.resourceManager.getTypeName()])return;const o=y[a.resourceManager.getTypeName()][(0,s.serializeId)(n)];return o&&o.resource&&o.resource.isReady()?o.resource:void 0}}),[i,t,r])}},40386:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163);a.__exportStar(r(78432),t),a.__exportStar(r(23496),t)},23496:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createJSONResource=void 0;const a=r(60814);t.createJSONResource=function(e){return new a.JSONResource("data",{provider:{provide:()=>({value:e})},resourceType:"state-resource",batcher:new a.Batcher})}},27941:(e,t,r)=>{e.exports=r(40386)},26427:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=r(5163);var n=r(16894);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(n).default}}),a.__exportStar(r(16894),t)},93673:(e,t,r)=>{e.exports=r(26427)},98066:(e,t,r)=>{e.exports=r(3092)},26904:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=r(5163);var n=r(59320);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(n).default}}),a.__exportStar(r(59320),t)},59320:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simulationElementRects=t.simulationPreviewDataManager=t.EXCLUDE_EDITING_TRANSFOTMERS_QUERY_FLAG=t.previewEnv=void 0;const a=r(5163),n=r(93849),s=a.__importStar(r(32510)),o=r(5689),i=a.__importStar(r(93104)),l=a.__importDefault(r(25447)),u=a.__importDefault(r(93208)),d=a.__importDefault(r(1529)),c=a.__importStar(r(2206)),f=a.__importDefault(r(93673)),p=a.__importDefault(r(44479));t.previewEnv=new n.Environment("preview","iframe","multi",[i.codeExecutionRenderer]),t.EXCLUDE_EDITING_TRANSFOTMERS_QUERY_FLAG="excludeEditingTransformers";const m=n.Service.withType().defineEntity(t.previewEnv),v=(0,s.defineTwoWayResource)().defineEntity(o.mainEnv);t.simulationPreviewDataManager=(0,s.defineOneWayResource)().defineEntity(c.processingEnv),t.simulationElementRects=(0,s.defineOneWayResource)().defineEntity(t.previewEnv),t.default=new n.Feature({id:"simulationPreview",dependencies:[i.default.asEntity,n.COM.asEntity,u.default.asEntity,c.default.asEntity,l.default.asEntity,s.default.asEntity,f.default.asEntity,d.default.asEntity,p.default.asEntity],api:{simulationWindowController:m.allowRemoteAccess((0,n.declareComEmitter)("addCanvasIsEmptyListener","removeCanvasIsEmptyListener")),localSimulationWindowController:m,previewController:n.Service.withType().defineEntity(t.previewEnv).allowRemoteAccess((0,n.declareComEmitter)("subscribe","unsubscribe")),previewRenderers:n.MapSlot.withType().defineEntity(t.previewEnv),demoErrorManager:f.default.api.demoErrorManager.defineConsumer(t.previewEnv),consoleResourceManager:v,consoleResourceManagerPreview:v.defineConsumer(t.previewEnv),previewConfiguration:c.default.api.pluggableProjectConfig.entry({environmentVariables:{}},"previewConfiguration"),globalPreviewData:n.Slot.withType().defineEntity(c.processingEnv),simulationElementRects:t.simulationElementRects,simulationPreviewDataManager:t.simulationPreviewDataManager}})},24394:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePreviewCanvasIsEmpty=t.usePreviewFrame=void 0;const a=r(87363),n=r(93849),s=r(69202),o=r(2502),i=r(26904),l=r(9029);t.usePreviewFrame=e=>{const{simulationPreview:{previewController:t,simulationWindowController:r}}=(0,l.useMainContext)(),[u,d]=(0,a.useState)(!0),[c,f]=(0,a.useState)(!1),p=(0,a.useRef)({version:0,boardPath:e}),m=(0,a.useCallback)((e=>{"beforeRender"===e.type?f(!1):"afterRender"===e.type&&f(!0)}),[]),{boardPath:v}=p.current;e&&v&&v!==e&&p.current.version++,p.current.boardPath=e;const{renderFrame:g,id:y,iframeRef:b,reloadPreview:E}=(0,o.useEngineFrame)(i.previewEnv,e?{boardPath:e}:void 0,!!e),_=(0,a.useMemo)((()=>({envInstanceId:y,previewController:t.get({id:y}),windowController:r.get({id:y})})),[y,t,r]);(0,a.useEffect)((()=>{let e=!0;return _.previewController.subscribe(m).catch((()=>{e&&E()})),()=>{e=!1,_.previewController.unsubscribe(m).catch(n.reportError)}}),[_,m,E]);const h=(0,s.useIsMountedRef)(),w=(0,a.useCallback)((({className:e,onFrameReady:t,onScroll:r,style:n})=>{const s=(0,a.useCallback)((e=>{h.current&&d(!1);const r=t&&t(e);return()=>{h.current&&(d(!0),r&&r())}}),[t]);return g({className:e,onScroll:r,style:n,onFrameReady:s})}),[g,h]);return{previewFrameManager:_,previewLoading:u,reloadPreview:E,PreviewFrame:w,iframeRef:b,renderComplete:c}},t.usePreviewCanvasIsEmpty=e=>{const[t,r]=(0,a.useState)(),o=(0,s.useIsMountedRef)();return(0,a.useEffect)((()=>{r(void 0);const t=e=>o.current&&r(e),a=e=>o.current&&(0,n.reportError)(e);return null==e||e.isCanvasEmpty().then(t).catch(a),null==e||e.addCanvasIsEmptyListener(t).catch(a),()=>{null==e||e.removeCanvasIsEmptyListener(t).catch(a)}}),[e,o]),t}},21734:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SimulationThumbPlaceholder=t.SimulationThumb=void 0;const a=r(5163),n=r(69202),s=r(27941),o=r(98066),i=r(70268),l=a.__importStar(r(87363)),u=r(80673),d=r(24394),c=r(50210),f=r(58487);r(49389);const p=e=>{var t;return null===(t=e.contentDocument)||void 0===t?void 0:t.querySelector(`.${u.SIMULATION_CANVAS_CLASS_NAME}`)};t.SimulationThumb=({className:e,boardPath:t,width:r,height:a,environmentPropsResourceManager:u,demoErrorManager:m})=>{var v,g,y;const b=(0,i.useVisibility)(),E=null===(v=(0,s.useResourceValue)({resourceManager:m,resourceId:t,enabled:b}))||void 0===v?void 0:v.errors,_=E?(0,o.getTypeOfMostSevereDemoError)(E):void 0,h=E&&void 0!==_?E[_]:void 0,[w,C]=(0,l.useState)(0),[S,M]=(0,l.useState)(0),[P,R]=(0,l.useState)(0),[O,x]=(0,l.useState)(0),I=(0,s.useResourceValue)({resourceManager:u,resourceId:t,enabled:b}),D=null!==(g=null==I?void 0:I.windowWidth)&&void 0!==g?g:c.defaultEnvironmentProperties.windowWidth,T=null!==(y=null==I?void 0:I.windowHeight)&&void 0!==y?y:c.defaultEnvironmentProperties.windowHeight,j=e=>{if(e&&null!==e.offsetParent){const t=e.getBoundingClientRect();C(t.width),M(t.height),R(t.left),x(t.top)}},{renderComplete:k,PreviewFrame:F,iframeRef:N}=(0,d.usePreviewFrame)(t),L=(0,n.useIsMountedRef)();(0,l.useEffect)((()=>{if(!k||!N.current||!L.current)return;const e=p(N.current);if(e){const t=new ResizeObserver((()=>{L.current&&j(e)}));return t.observe(e,{box:"border-box"}),()=>{t.unobserve(e),t.disconnect()}}}),[k,N,L]),(0,l.useEffect)((()=>{N.current&&k&&j(p(N.current))}),[k,D,T,N]);const A=Math.max(0,P),W=Math.max(0,O),B=Math.min(D,P+w),V=Math.min(T,O+S),H=Math.min(1,(r-24)/(B-A)||1/0,(a-24)/(V-W)||1/0),$={width:D,height:T,transform:`translate(${.5*(r-H*(A+B))}px, ${.5*(a-H*(W+V))}px) scale(${H})`};return l.default.createElement("div",{className:(0,f.style)(f.classes.root,e),style:{width:r,height:a}},l.default.createElement("div",{className:f.classes.iframeContainer},F({style:$,className:f.classes.iframe})),k?void 0!==h?l.default.createElement(i.Tooltip,{className:f.classes.errorTooltip,content:h},l.default.createElement("div",{className:f.classes.error},l.default.createElement(n.BlockIcon,{className:f.classes.errorIcon}),l.default.createElement("div",{className:f.classes.errorTitle},"Error"))):null:l.default.createElement("div",{className:f.classes.loading},l.default.createElement(i.Spinner,{className:f.classes.spinner})))},t.SimulationThumbPlaceholder=({width:e,height:t})=>l.default.createElement("div",{style:{width:e,height:t}})},72776:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163);a.__exportStar(r(21734),t),a.__exportStar(r(24394),t),a.__exportStar(r(27487),t)},27487:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},80673:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.ENVIRONMENT_PROPERTIES_KEYS=t.CodeExecutionMessageType=t.SIMULATION_CANVAS_CLASS_NAME=void 0,t.SIMULATION_CANVAS_CLASS_NAME="simulationCanvas",(r=t.CodeExecutionMessageType||(t.CodeExecutionMessageType={}))[r.consoleError=0]="consoleError",r[r.consoleWarn=1]="consoleWarn",r[r.consoleLog=2]="consoleLog",r[r.consoleInfo=3]="consoleInfo",r[r.previewRenderStart=4]="previewRenderStart",t.ENVIRONMENT_PROPERTIES_KEYS=["windowHeight","windowWidth","windowBackgroundColor","canvasHeight","canvasWidth","canvasBackgroundColor","canvasMargin","canvasPadding"]},86695:(e,t,r)=>{e.exports=r(72776)},64578:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163),n=r(93849),s=a.__importDefault(r(45059)),o=a.__importDefault(r(33142)),i=a.__importDefault(r(7959)),l=a.__importDefault(r(23719)),u=a.__importDefault(r(18380)),d=a.__importStar(r(43934)),c=a.__importDefault(r(2618)),f=a.__importStar(r(30383)),p=a.__importDefault(r(32562)),m=a.__importDefault(r(97569)),v=a.__importDefault(r(26904)),g=a.__importDefault(r(20471)),y=a.__importDefault(r(82039)),b=a.__importDefault(r(82983)),E=r(32510),_=(0,E.defineComputedResource)().defineEntity(d.processingEnv);t.default=new n.Feature({id:"stylable-playground",dependencies:[s.default.asEntity,o.default.asEntity,m.default.asEntity,i.default.asEntity,u.default.asEntity,g.default.asEntity,y.default.asEntity,b.default.asEntity,l.default.asEntity,d.default.asEntity,c.default.asEntity,v.default.asEntity,f.StylableCompiler.asEntity,f.default.asEntity,f.StylableLanguageService.asEntity,p.default.asEntity],api:{compiled:_,stylablePlaygroundOptions:new n.Config({key:"default value"}),stylableMetaManager:(0,E.defineComputedResource)().defineEntity(d.processingEnv)}})},71054:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163),n=a.__importStar(r(87363)),s=r(5689),o=r(60814),i=a.__importDefault(r(64578)),l=r(2127),u=r(23144),d=r(30736),c=r(86695),f=r(5531),p=r(83135),m=r(57770),v=r(3859),g=r(71299),y={readOnly:!0,theme:"vs-dark",minimap:{enabled:!1},scrollBeyondLastLine:!1},b={[m.DiagnosticSeverity.Hint]:"hint",[m.DiagnosticSeverity.Info]:"info",[m.DiagnosticSeverity.Warning]:"warning",[m.DiagnosticSeverity.Error]:"error"};i.default.setup(s.mainEnv,(({compiled:e,stylableMetaManager:t},{gui:{panelFactory:r,panelStore:a},codeEditor:{monacoLanguages:s},codeLanguages:{languageService:i},projectUI:{fileIconSlot:p},project:{fileManagerMain:w}})=>{const C=t.consume({manipulator:o.stringManipulator,resourceConstructor:g.FileResource}),S=e.consume({manipulator:o.stringManipulator,resourceConstructor:g.FileResource});p.register({extension:"st.css",Icon:f.StylableIcon});const M=()=>{const{PreviewFrame:e}=(0,c.usePreviewFrame)("/app.board.tsx");return n.default.createElement("div",{className:d.classes.root},e({className:d.classes.preview}))};M.displayName="Preview";const P=new l.MonacoTextModelManager(S,s,{subscribeToFs:()=>({}),unsubscribeFromFs:()=>({})}),R=()=>{const e=_();return(null==e?void 0:e.endsWith(".st.css"))?n.default.createElement(u.CodeEditorPanel,{editorOptions:y,textModelStore:P,filePath:`css$${e}`}):n.default.createElement(E,{filePath:e})};R.displayName="CSSCompiledPreview";const O=()=>{const e=_();return(null==e?void 0:e.endsWith(".st.css"))?n.default.createElement(u.CodeEditorPanel,{editorOptions:y,textModelStore:P,filePath:`javascript$${e}`}):n.default.createElement(E,{filePath:e})};R.displayName="JSCompiledPreview";const x=(0,v.parse)(window.location.search),I=()=>{const e=_(),t=h(w,i,e),[r,a]=(0,n.useState)("");return(0,n.useEffect)((()=>{!async function(){if(e){const t=await w.getReady(e);a(t.getLatest())}}()}),[e]),n.default.createElement("div",{className:d.classes.diagnostics},n.default.createElement("p",{className:d.classes.diagnosticsTitle},n.default.createElement("span",{className:d.classes.filePath},e)),n.default.createElement("ul",{className:d.classes.diagnosticsList},t.length?t.map(((e,t)=>n.default.createElement("li",{key:t},`${b[e.severity]}: ${e.message} (line: ${(0,m.charPosToLinePlusOne)(r.split("\n"),e.start).line})`))):n.default.createElement("li",null,"No diagnostics")))};I.displayName="DiagnosticsPanel";const D=()=>{const e=_(),t=h(w,i,e);return n.default.createElement("div",{key:"diagnosticsHeader"},"Diagnostics (",t.length,")")};D.displayName="DiagnosticsHeader",r.register({id:"rendered",factory:()=>n.default.createElement(M,null),route:e=>({id:"file://rendered@/app.board.tsx",props:e,title:"Rendering /app.tsx",area:"rendered"})}),r.register({id:"compiledCss",factory:()=>n.default.createElement(R,null),route:e=>({id:"compiledCss",props:e,title:"Compiled CSS",area:"compiled"})}),r.register({id:"compiledJs",factory:()=>n.default.createElement(O,null),route:e=>({id:"compiledJs",props:e,title:"JS Exports",area:"compiled"})}),r.register({id:"diagnostics",factory:()=>n.default.createElement(I,null),route:e=>({id:"diagnostics",props:e,title:"Diagnostics",area:"compiled",titleComponent:n.default.createElement(D,null)})}),a.openPanel("diagnostics",{panelType:"diagnostics",area:"compiled",titleComponent:n.default.createElement(D,null)}),a.openPanel("compiledCss",{panelType:"compiledCss",title:"Compiled CSS",area:"compiled"}),a.openPanel("compiledJs",{panelType:"compiledJs",title:"JS Exports",area:"compiled"}),r.register({id:"meta",factory:()=>n.default.createElement(j,null),route:e=>({id:"meta",props:e,title:"Stylable Meta",area:"compiled"})}),x.stDebug&&a.openPanel("meta",{panelType:"meta",title:"Stylable Meta",area:"compiled"});const T=new l.MonacoTextModelManager(C,s,{subscribeToFs:()=>({}),unsubscribeFromFs:()=>({})}),j=()=>{const e=_();return(null==e?void 0:e.endsWith(".st.css"))?n.default.createElement(u.CodeEditorPanel,{editorOptions:y,textModelStore:T,filePath:`meta$${e||""}`}):n.default.createElement(E,{filePath:e})};j.displayName="MetaPreview",a.setActiveTab("diagnostics")}));const E=({filePath:e="unknown file"})=>n.default.createElement("p",null,"Not applicable to file: ",e);function _(){var e;const{panelStore:t}=(0,n.useContext)(p.AreasContext),r=null===(e=t.getState().areas.content)||void 0===e?void 0:e.activeTab,[a,s]=(0,n.useState)(r);return(0,n.useEffect)((()=>{const e=e=>{var t;const r=null===(t=e.newState.areas.content)||void 0===t?void 0:t.activeTab,a=null==r?void 0:r.split("#")[0];a&&s(a)};return t.subscribe(e),()=>t.unsubscribe(e)})),(0,n.useEffect)((()=>{"string"==typeof r&&s(r.split("#")[0])}),[r]),null==a?void 0:a.split("@")[1]}function h(e,t,r){const[a,s]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const a=r?e.get(r):void 0,n=e=>{r&&a&&e.has(a)&&t.getDiagnostics(r).then((e=>{s(e||[])}))};return a&&n(new Set([a])),e.subscribeToAny(n),()=>{e.unsubscribeFromAny(n)}}),[e,r,t]),a}},72334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StylableCompiler=t.StylableLanguageService=t.default=void 0;const a=r(5163);var n=r(70286);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(n).default}});var s=r(13427);Object.defineProperty(t,"StylableLanguageService",{enumerable:!0,get:function(){return a.__importDefault(s).default}}),a.__exportStar(r(70286),t);var o=r(84081);Object.defineProperty(t,"StylableCompiler",{enumerable:!0,get:function(){return a.__importDefault(o).default}})},84081:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163),n=r(93849),s=r(2206),o=a.__importDefault(r(25447)),i=a.__importDefault(r(93104)),l=a.__importDefault(r(70286));t.default=new n.Feature({id:"stylableCompiler",dependencies:[l.default.asEntity,o.default.asEntity,i.default.asEntity],api:{onProcessSlot:n.Slot.withType().defineEntity(s.processingEnv)}})},13427:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163),n=r(93849),s=a.__importStar(r(2206)),o=a.__importDefault(r(83341)),i=a.__importDefault(r(70286));t.default=new n.Feature({id:"stylableLanguageService",dependencies:[s.default.asEntity,o.default.asEntity,i.default.asEntity],api:{stylable:n.Service.withType().defineEntity(s.processingEnv)}})},70286:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(5163),n=a.__importStar(r(2206)),s=a.__importDefault(r(82026)),o=r(93849);t.default=new o.Feature({id:"stylable",dependencies:[n.default.asEntity,s.default.asEntity],api:{createStylable:o.Service.withType().defineEntity(n.processingEnv),createCalcDepthContext:o.Service.withType().defineEntity(n.processingEnv)}})},30383:(e,t,r)=>{e.exports=r(72334)}}]);
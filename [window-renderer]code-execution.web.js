(self.webpackChunk_wixc3_stylable_playground_feature=self.webpackChunk_wixc3_stylable_playground_feature||[]).push([[7193],{43450:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.codeExecutionRenderer=void 0;const n=r(5163),o=r(93849),i=n.__importStar(r(32510)),s=n.__importDefault(r(60456)),a=n.__importDefault(r(25447)),l=n.__importStar(r(2206)),d=r(5689),c=n.__importDefault(r(93208)),u=n.__importDefault(r(1529)),p=(0,i.defineComputedResource)().defineEntity(l.processingEnv),f=(0,i.defineComputedResource)().defineEntity(l.processingEnv),v=(0,i.defineComputedResource)().defineEntity(l.processingEnv),g=(0,i.defineQueryResource)().defineEntity(l.processingEnv),y=(0,i.defineComputedResource)().defineEntity(l.processingEnv);t.codeExecutionRenderer=new o.Environment("window-renderer","iframe","multi");const m=new o.Feature({id:"codeExecution",dependencies:[l.default.asEntity,a.default.asEntity,o.COM.asEntity,c.default.asEntity,u.default.asEntity,i.default.asEntity,s.default.asEntity],api:{requestsExtractors:o.Slot.withType().defineEntity(l.processingEnv),requestResolvers:o.Slot.withType().defineEntity(l.processingEnv),bundlePlugins:o.Slot.withType().defineEntity(l.processingEnv),resolveNodeRequest:o.Service.withType().defineEntity(l.processingEnv),resolver:o.Service.withType().defineEntity(l.processingEnv).allowRemoteAccess(),deepDependencies:y,deepDependenciesMain:y.defineConsumer(d.mainEnv),dependencyResourceFactory:p,fileDependencyResourceFactory:f,executionResourceFactory:g,executionResourceFactoryRenderer:g.defineConsumer(t.codeExecutionRenderer),fileDependencyGraphResourceFactory:v,resolveConfig:l.default.api.pluggableProjectConfig.entry({},"resolve"),injectedLibraries:o.MapSlot.withType().defineEntity(t.codeExecutionRenderer),runtimeEnvVars:o.OrderedSlot.withType().defineEntity(t.codeExecutionRenderer),createRenderer:o.Service.withType().defineEntity(t.codeExecutionRenderer),windowController:o.Service.withType().defineEntity(t.codeExecutionRenderer),globalSetupConfig:l.default.api.pluggableProjectConfig.entry(null,"boardGlobalSetup"),previewConfiguration:l.default.api.pluggableProjectConfig.entry({environmentVariables:{}},"previewConfiguration")}});t.default=m},57499:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163),o=r(73654),i=r(47915),s=r(93849),a=r(60814),l=r(2206),d=r(47951),c=r(60829),u=r(71925),p=n.__importStar(r(43450));p.default.setup(p.codeExecutionRenderer,(({dependencyResourceFactory:e,executionResourceFactory:t,resolver:r,injectedLibraries:n,runtimeEnvVars:f,onDispose:v,globalSetupConfig:g,previewConfiguration:y},{project:{pluggableProjectConfig:m,projectService:E},compilation:{compiledFilesManager:h}})=>{const _=m.consume({}),b=h.consume({manipulator:a.stringManipulator}),w=e.consume({manipulator:d.dependencyManipulator}),S=t.consume({results:[b,w]}),C=_.get(l.PROJECT_CONFIG_NAME,p.codeExecutionRenderer);n.register("path",o.win32);const M=new c.WindowController,P=new Map;return{createRenderer:async({entries:e,excludeEditingTransformers:t=!1,onEntryChange:o,beforeRender:a,loadModule:l,ensureRenderable:p,environmentVariables:m,onModuleSystemReady:h=(()=>Promise.resolve()),loadModuleHook:_,globals:R={}})=>{var x;const O=(0,i.createDisposables)(),j=(0,s.deferred)(),F=new Map,I=new Map,T=e=>{if(e.added){for(const t of[...e.changed,...e.added])t.getId().filePath?F.set(t.getId().filePath,t.getLatest()):I.set(t.getId(),t.getLatest());for(const t of[...e.removed])t.getId().filePath?F.delete(t.getId().filePath):I.delete(t.getId().filePath)}null==o||o()},A=await(0,c.resolveGlobalSetupPath)({projectConfig:C,globalSetupConfig:g,projectPath:await E.getProjectPath(),resolver:r});A&&e.push(A);const L=S.get({entries:e,excludeEditingTransformers:t});P.set("global",{query:L}),v((()=>{for(const[,{unsubscribe:e}]of P)null==e||e();P.clear()}));const N=(0,u.createNodeJSBuiltinModules)(null!==(x=R.process)&&void 0!==x?x:{},{...C.get(y).environmentVariables,...m});f.stream((({key:e,value:t})=>{N.process.env[e]=t}));const D=(0,c.createModuleSystem)({injectedLibraries:n,loadModuleHook:_,readFileSync:e=>{const t=F.get(e);if(!t)throw new d.CompilationError(`Cannot find compiled file ${e}`);return t},resolveFrom:(e,t,r)=>{if(r){const e=I.get(r);if(e)return e[t]}},globals:{...R,...N}}),k=e=>{try{return l?l({entryPath:e,moduleSystem:D}):D.requireModule(e)}catch(e){throw e instanceof Error?new d.CompilationError(e.message):e}};return L.ready?L.ready.then((()=>{for(const e of L.getResults())b.isResourceOfType(e)?F.set(e.getId().filePath,e.getLatest()):w.isResourceOfType(e)&&I.set(e.getId(),e.getLatest());return h(D)})).then(j.resolve).catch(j.reject):j.resolve(),L.subscribe(T),v((()=>L.unsubscribe(T))),{render:async e=>{var r,n;const o=[e];if(A&&o.push(A),await j.promise,A&&(0,c.loadGlobalSetup)(A,L,b,D.requireModule,t),P.has(e)){const{unsubscribe:t}=P.get(e);null==t||t()}const i=S.get({entries:o,excludeEditingTransformers:t});if(i.subscribe(T),P.set(e,{query:i,unsubscribe:()=>i.unsubscribe(T)}),await i.ready,!L.isValid())throw new d.CompilationError(null!==(r=L.getStatus().message)&&void 0!==r?r:"Compilation failed");if(!i.isValid())throw new d.CompilationError(null!==(n=i.getStatus().message)&&void 0!==n?n:"Compilation failed");for(const e of i.getResults())b.isResourceOfType(e)?F.set(e.getId().filePath,e.getLatest()):w.isResourceOfType(e)&&I.set(e.getId(),e.getLatest());const{beforeEntry:s,afterEntry:l}=i.getMetaData();s.forEach((e=>k(e)));const u=p(k(e),e);l.forEach((e=>k(e)));const{canvas:f}=(0,c.getOrCreateStage)(u,M);return O.add((()=>u.cleanup(f))),u.environmentProps&&M.updateEnvironmentProperties(u.environmentProps,d.ENVIRONMENT_PROPERTIES_KEYS),await(null==a?void 0:a({canvas:f,renderable:u})),await u.render(f),performance.mark("preview-finished-loading"),{query:i,renderable:u}},cleanup:O.dispose,moduleSystem:D,resolvedSetupPath:A}},windowController:M,executionResourceFactoryRenderer:S}}))},23575:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SIMULATION_CANVAS_CLASS_NAME=t.ENVIRONMENT_PROPERTIES_KEYS=void 0,t.ENVIRONMENT_PROPERTIES_KEYS=["windowHeight","windowWidth","windowBackgroundColor","canvasHeight","canvasWidth","canvasBackgroundColor","canvasMargin","canvasPadding"],t.SIMULATION_CANVAS_CLASS_NAME="simulationCanvas"},32228:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompilationError=t.FormatError=void 0;class r extends Error{constructor(){super(...arguments),this.name="FormatError"}}t.FormatError=r;class n extends Error{constructor(){super(...arguments),this.name="CompilationError"}}t.CompilationError=n},37024:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dependencyManipulator=void 0;const n=r(60814);t.dependencyManipulator={reducer:(e,t)=>({value:t.value,invertingChanges:[(0,n.fullChange)(e)]}),squasher:e=>[e[e.length-1]]}},47951:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163);n.__exportStar(r(37024),t),n.__exportStar(r(65084),t),n.__exportStar(r(23575),t),n.__exportStar(r(32228),t)},65084:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.compiledFileId=void 0,t.compiledFileId=(e,t=!1)=>({filePath:e,outputLang:"javascript",excludeEditingTransformers:t})},86656:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addReactToWindow=void 0,t.addReactToWindow=async function(e,t,r){const{resolvedRequest:n}=await e.resolveFromFile(t,"react");if("string"!=typeof n)throw new Error(`cannot resolve "react" for ${t}`);const{resolvedRequest:o}=await e.resolveFromFile(t,"react-dom");if("string"!=typeof o)throw new Error(`cannot resolve "react-dom" for ${t}`);window.React=r(n),window.ReactDOM=r(o)}},71925:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createNodeJSBuiltinModules=void 0;const n=r(5163),o=r(43368),i=n.__importDefault(r(34406));t.createNodeJSBuiltinModules=function(e,t){return{process:{...i.default,...e,env:{...e.env,...i.default.env,...t}},Buffer:o.Buffer}}},21759:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBoardFromModule=void 0;const n=r(91570);t.getBoardFromModule=e=>{if(!(0,n.isRecord)(e))throw new Error("Couldn't get exports of the board file.");const t=e.default;if(!(0,n.isRecord)(t))throw new Error("File doesn't contain a board.");if(!t.name)throw new Error("Board name is missing.");if("function"!=typeof t.Board)throw new Error("Board render function is missing.");return t}},60829:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163);n.__exportStar(r(86656),t),n.__exportStar(r(21759),t),n.__exportStar(r(64897),t),n.__exportStar(r(98139),t),n.__exportStar(r(23),t)},98139:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadGlobalSetup=t.getOrCreateStage=t.resolveGlobalSetupPath=t.createModuleSystem=t.registerToFileChanges=void 0;const n=r(73654),o=r(96435),i=r(93849),s=r(47951);t.registerToFileChanges=function(e,t,r){e.unsubscribeAll(!1);const n=e=>{for(const r of[...e.changed])r.getId().filePath&&(0,o.invalidateModule)(r.getId().filePath,t.requireCache);if(r){const e=r();e instanceof Promise&&e.catch(i.reportError)}};return e.subscribe(n),()=>e.unsubscribe(n)},t.createModuleSystem=function({injectedLibraries:e,loadModuleHook:t,readFileSync:r,resolveFrom:i,globals:s={}}){const a=(0,o.createBaseCjsModuleSystem)({dirname:n.win32.dirname,readFileSync:r,resolveFrom:i,globals:s,loadModuleHook:t});for(const[t,r]of e)a.requireCache.set(t,{filename:t,id:t,exports:r,children:[]});return a},t.resolveGlobalSetupPath=async function({globalSetupConfig:e,projectConfig:t,projectPath:r,resolver:o}){await t.ready;const i=t.isValid()?t.get(e):null;if(i){const e=n.win32.isAbsolute(r)&&!n.posix.isAbsolute(r)?n.win32.join(r,"package.json"):n.posix.join(r,"package.json"),{resolvedRequest:t}=await o.resolveFromFile(e,i);if(!t)throw new s.CompilationError(`global setup file doesn't exist at ${i}`);return t}return null},t.getOrCreateStage=function(e,t){const r=t.getStage();if(!r){const r=e.setupStage();return t.setStage(r),r}return r},t.loadGlobalSetup=function(e,t,r,n,o){if(e){const i=t.getResult(r,(0,s.compiledFileId)(e,o));(null==i?void 0:i.isValid())&&n(e)}}},23:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},64897:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WindowController=void 0;const n=r(23575);t.WindowController=class{constructor(){this.environmentProperties={},this.canvasIsEmptyListeners=new Set,this.generateStylesheet(),this.createBaseElement()}setStage(e){this.stage=e,this.stage.canvas.classList.add(n.SIMULATION_CANVAS_CLASS_NAME),this.observeCanvasIsEmpty()}getStage(){return this.stage}getStageDimensions(){return this.stage?{window:document.body.getBoundingClientRect().toJSON(),canvas:this.stage.canvas.getBoundingClientRect().toJSON()}:{}}isCanvasEmpty(){var e;return!(null===(e=this.stage)||void 0===e?void 0:e.canvas)||""===this.stage.canvas.innerHTML}setWindowInlineStyleRule(e,t){document.body.style.setProperty(e,t)}updateEnvironmentProperties(e,t=[]){var r,n;const o={};for(const r of t)o[r]=e[r];this.environmentProperties={...this.environmentProperties,...e,...o},null===(r=this.stage)||void 0===r||r.updateCanvas(this.environmentProperties),null===(n=this.stage)||void 0===n||n.updateWindow(this.environmentProperties)}createBaseElement(){const e=document.head.querySelector("base");if(!e||"_blank"!==e.target){const e=document.createElement("base");e.target="_blank",document.head.appendChild(e)}}generateStylesheet(){const e=`<style>\n            html {\n                height: 100%;\n            }\n\n            body {\n                height: 100%;\n                margin: 0;\n                box-sizing: border-box;\n                scrollbar-width: none;\n                -ms-overflow-style: none;\n                overflow: auto;\n                display: flex;\n            }\n\n            body::-webkit-scrollbar {\n                display: none;\n            }\n\n            .${n.SIMULATION_CANVAS_CLASS_NAME} {\n                position: relative;\n            }\n            </style>`;document.head.insertAdjacentHTML("beforeend",e)}addCanvasIsEmptyListener(e){this.canvasIsEmptyListeners.add(e)}removeCanvasIsEmptyListener(e){this.canvasIsEmptyListeners.delete(e)}observeCanvasIsEmpty(){var e;if(null===(e=this.stage)||void 0===e?void 0:e.canvas){let e=this.isCanvasEmpty();const t=new MutationObserver((()=>{var t;if(null===(t=this.stage)||void 0===t?void 0:t.canvas){const t=this.isCanvasEmpty();t!==e&&(e=t,this.canvasIsEmptyListeners.forEach((e=>e(t))))}}));t.observe(this.stage.canvas,{childList:!0})}}}},80134:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultCompiledFileExtention=void 0;const n=r(5163),o=r(93849),i=n.__importStar(r(32510)),s=n.__importDefault(r(93208)),a=n.__importStar(r(2206)),l=n.__importDefault(r(19608));t.defaultCompiledFileExtention=".compiled";const d=a.default.api.pluggableProjectConfig.entry({compiledFilesExtention:t.defaultCompiledFileExtention},"compilation");t.default=new o.Feature({id:"compilation",dependencies:[s.default.asEntity,a.default.asEntity,i.default.asEntity,l.default.asEntity],api:{compilationSlot:o.Slot.withType().defineEntity(a.processingEnv),compilationStore:o.Service.withType().defineEntity(a.processingEnv).allowRemoteAccess(),compiledFilesManager:(0,i.defineComputedResource)().defineEntity(a.processingEnv),compilationConfig:d}})},97569:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(80134);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},25447:(e,t,r)=>{e.exports=r(97569)},43934:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=r(5163);n.__exportStar(r(31434),t);var o=r(31434);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}})},2206:(e,t,r)=>{e.exports=r(43934)},60814:(e,t,r)=>{e.exports=r(73858)},73837:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(89102);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},89102:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(93849),o=r(2206);t.default=new n.Feature({id:"userApplicationServer",dependencies:[],api:{userApplicationServerInterface:n.Service.withType().defineEntity(o.processingEnv).allowRemoteAccess(),serverRootSlot:n.Slot.withType().defineEntity(o.processingEnv),applicationHandlerSlot:n.Slot.withType().defineEntity(o.processingEnv)},context:{serverInitializer:o.processingEnv.withContext()}})},19608:(e,t,r)=>{e.exports=r(73837)}}]);
(self.webpackChunk_wixc3_stylable_playground_feature=self.webpackChunk_wixc3_stylable_playground_feature||[]).push([[5037],{93482:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertIsString=void 0,t.assertIsString=function(e,t="Value is not string"){if("string"!=typeof e)throw Error(t)}},5296:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clamp=void 0,t.clamp=function(e,t,r){return e<t?t:e>r?r:e}},25561:(e,t)=>{"use strict";var r,n,o,i;Object.defineProperty(t,"__esModule",{value:!0}),t.DiagnosticSeverity=t.SymbolKind=t.DocumentHighlightKind=t.CompletionItemKind=void 0,(i=t.CompletionItemKind||(t.CompletionItemKind={}))[i.Method=0]="Method",i[i.Function=1]="Function",i[i.Constructor=2]="Constructor",i[i.Field=3]="Field",i[i.Variable=4]="Variable",i[i.Class=5]="Class",i[i.Struct=6]="Struct",i[i.Interface=7]="Interface",i[i.Module=8]="Module",i[i.Property=9]="Property",i[i.Event=10]="Event",i[i.Operator=11]="Operator",i[i.Unit=12]="Unit",i[i.Value=13]="Value",i[i.Constant=14]="Constant",i[i.Enum=15]="Enum",i[i.EnumMember=16]="EnumMember",i[i.Keyword=17]="Keyword",i[i.Text=18]="Text",i[i.Color=19]="Color",i[i.File=20]="File",i[i.Reference=21]="Reference",i[i.Customcolor=22]="Customcolor",i[i.Folder=23]="Folder",i[i.TypeParameter=24]="TypeParameter",i[i.Snippet=25]="Snippet",(o=t.DocumentHighlightKind||(t.DocumentHighlightKind={}))[o.Text=0]="Text",o[o.Read=1]="Read",o[o.Write=2]="Write",(n=t.SymbolKind||(t.SymbolKind={}))[n.File=0]="File",n[n.Module=1]="Module",n[n.Namespace=2]="Namespace",n[n.Package=3]="Package",n[n.Class=4]="Class",n[n.Method=5]="Method",n[n.Property=6]="Property",n[n.Field=7]="Field",n[n.Constructor=8]="Constructor",n[n.Enum=9]="Enum",n[n.Interface=10]="Interface",n[n.Function=11]="Function",n[n.Variable=12]="Variable",n[n.Constant=13]="Constant",n[n.String=14]="String",n[n.Number=15]="Number",n[n.Boolean=16]="Boolean",n[n.Array=17]="Array",n[n.Object=18]="Object",n[n.Key=19]="Key",n[n.Null=20]="Null",n[n.EnumMember=21]="EnumMember",n[n.Struct=22]="Struct",n[n.Event=23]="Event",n[n.Operator=24]="Operator",n[n.TypeParameter=25]="TypeParameter",(r=t.DiagnosticSeverity||(t.DiagnosticSeverity={}))[r.Hint=0]="Hint",r[r.Info=1]="Info",r[r.Warning=2]="Warning",r[r.Error=3]="Error"},15494:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.content=void 0,t.content={applicationName:"Wix Component Studio"}},24529:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Debouncer=void 0,t.Debouncer=class{constructor(e,t,r,n=((...e)=>setTimeout(...e)),o=(e=>clearTimeout(e))){this.cb=e,this.waitTime=t,this.maxWaitTime=r,this._setTimeout=n,this._clearTimeout=o}trigger(...e){return new Promise(((t,r)=>{this.timeout&&this._clearTimeout(this.timeout),this.timeout=this._setTimeout((()=>{try{t(this.cb(...e))}catch(e){r(e)}this.maxTimeout&&this._clearTimeout(this.maxTimeout)}),this.waitTime),this.maxTimeout||(this.maxTimeout=this._setTimeout((()=>{try{t(this.cb(...e))}catch(e){r(e)}this.timeout&&this._clearTimeout(this.timeout)}),this.maxWaitTime))}))}cancel(){this.timeout&&this._clearTimeout(this.timeout),this.maxTimeout&&this._clearTimeout(this.maxTimeout)}}},53321:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isErrorLikeObject=t.errorToPlainObject=t.stringifyErrorStack=t.ErrorWithCode=t.getErrorCode=t.toError=void 0;const n=r(33841);t.toError=e=>e instanceof Error?e:new Error(void 0===e?void 0:String(e)),t.getErrorCode=e=>"string"==typeof e.code?e.code:void 0;class o extends Error{constructor(e,t){const{code:r,...n}=null!=t?t:{};super(e,n),this.code=r}}function i(e){return(0,n.isRecord)(e)&&"string"==typeof e.name&&"string"==typeof e.message}t.ErrorWithCode=o,t.stringifyErrorStack=function(e){if(i(e)){const{name:t,message:r,stack:n=""}=e,o=`${t}: ${r}`;return n.startsWith(o)?n:`${o}\n${n}`}return String(e)},t.errorToPlainObject=function(e){return{...e,message:e.message,name:e.name,stack:e.stack}},t.isErrorLikeObject=i},1230:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSubPath=t.getPackagePath=t.getPackageJsonPath=t.createImportPath=t.adjustRelativeImportPath=t.getBareImportSpecifier=t.getRelativeImportPath=t.getRelativeModulePath=t.rebaseRelativeModulePath=t.addRelativePrefix=t.isRelativeImportPath=t.isRelativeModulePath=t.formatToOSpaths=t.replaceWinSlashes=void 0;const n=r(73654),o=r(63328),i=r(33841);function s(e){return e.startsWith("./")||e.startsWith("../")||e.startsWith("/")}function a(e){return"."===e||".."===e||e.startsWith("./")||e.startsWith("../")}function c(e){return s(e)?e:`./${e}`}function u(e,r){const{relative:o,dirname:s}=n.posix,c=(0,i.getImportPath)(o(s((0,t.replaceWinSlashes)(e)),(0,t.replaceWinSlashes)(r)));return a(c)?c:`./${c}`}function l(e,r,o){const{dirname:s}=n.posix;return(0,i.getImportPath)((0,t.replaceWinSlashes)(e).replace(s((0,t.replaceWinSlashes)(r)),o))}function d({importedFilePath:e,targetFilePath:t,targetPackageJsonPath:r,fs:n}){const i=p(e,n),s=i?(0,o.getPackageName)(i,n):void 0;return i!==r&&i&&s?l(e,i,s):u(t,e)}function p(e,t){return t.findClosestFileSync(e,"package.json")}t.replaceWinSlashes=e=>e.replace(/\\/g,"/"),t.formatToOSpaths=e=>(0,i.isWindowsStyleAbsolutePath)(e)?e.replace(/\//g,"\\"):e,t.isRelativeModulePath=s,t.isRelativeImportPath=a,t.addRelativePrefix=c,t.rebaseRelativeModulePath=function(e,t){return s(t)||(0,i.isWindowsStyleAbsolutePath)(t)?c(n.posix.relative(n.posix.dirname(e),t)):t},t.getRelativeModulePath=function(e,r){const{relative:o,dirname:i}=n.win32;return c((0,t.replaceWinSlashes)(o(i(e),r)))},t.getRelativeImportPath=u,t.getBareImportSpecifier=l,t.adjustRelativeImportPath=function({importPath:e,sourceFilePath:t,targetFilePath:r,targetPackageJsonPath:n,fs:o}){return a(e)?d({importedFilePath:o.join(o.dirname(t),e),targetFilePath:r,targetPackageJsonPath:n,fs:o}):e},t.createImportPath=d,t.getPackageJsonPath=p,t.getPackagePath=function(e,t){const r=p(e,t);return r?t.dirname(r):void 0},t.isSubPath=function(e,t,r){if(!r.isAbsolute(e)||!r.isAbsolute(t))return!1;const n=r.relative(t,e);return""===n||!n.startsWith("..")&&!r.isAbsolute(n)}},63328:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPackageName=void 0,t.getPackageName=function(e,t){try{const{name:r}=JSON.parse(t.readFileSync(e,"utf8"));if(!r||"string"!=typeof r)return;return r}catch{return}}},33841:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.escapeCSS=t.newMacrotask=t.prev=t.next=t.last=t.getCartesianProductOfArrays=t.getImportPath=t.getFullExtname=t.isWindowsStyleAbsolutePath=t.awaitRecord=t.groupBy=t.getDTSPath=t.isTsOrJS=t.isTypeAffectingFileOrDir=t.isDirPath=t.isJavaScriptFile=t.isTypeScriptFile=t.isJsonFile=t.reportError=t.asyncNoop=t.noop=t.notNullish=t.isRecord=t.getObjectKeys=t.unique=void 0;const n=r(73654),o=r(69462);t.unique=e=>Array.from(new Set(e)),t.getObjectKeys=e=>Object.keys(e),t.isRecord=function(e){return null!==e&&"object"==typeof e},t.notNullish=function(e){return null!=e},t.noop=()=>{},t.asyncNoop=()=>Promise.resolve(),t.reportError=e=>console.error(e),t.isJsonFile=e=>e.endsWith(".json"),t.isTypeScriptFile=e=>e.endsWith(".ts")||e.endsWith(".tsx"),t.isJavaScriptFile=e=>e.endsWith(".js")||e.endsWith(".jsx")||e.endsWith(".mjs")||e.endsWith(".cjs"),t.isDirPath=e=>0===(0,n.extname)(e).length,t.isTypeAffectingFileOrDir=e=>(0,t.isJsonFile)(e)||(0,t.isTypeScriptFile)(e)||(0,t.isJavaScriptFile)(e)||(0,t.isDirPath)(e),t.isTsOrJS=e=>(0,t.isTypeScriptFile)(e)||(0,t.isJavaScriptFile)(e),t.getDTSPath=e=>(e.endsWith(".js")?e=e.slice(0,e.length-3):e.endsWith(".jsx")&&(e=e.slice(0,e.length-4)),e+".d.ts"),t.groupBy=function(e,t){return e.reduce(((e,r)=>{const n=e.get(r[t]);return n?n.push(r):e.set(r[t],[r]),e}),new Map)},t.awaitRecord=async function(e){const t=Object.keys(e),r=await Promise.all(t.map((t=>e[t]))),n={};for(let e=0;e<t.length;e++)n[t[e]]=r[e];return n},t.isWindowsStyleAbsolutePath=function(e){return!n.posix.isAbsolute(e)&&n.win32.isAbsolute(e)},t.getFullExtname=function(e){let t=e;const r=[];let o=n.win32.extname(t);for(;o&&o.length>0;)r.unshift(o),t=t.slice(0,-o.length),o=n.win32.extname(t);return r.join("")},t.getImportPath=function(e){const t=[".d.ts",".ts",".tsx",".js",".jsx"];for(const r of t)if(e.endsWith(r))return e.slice(0,-r.length);return e},t.getCartesianProductOfArrays=function e(t){if(0===t.length)return[];if(1===t.length)return t[0].map((e=>[e]));{const r=e(t.slice(1)),n=[];for(const e of t[0])for(const t of r)n.push([e,...t]);return n}},t.last=function(e){return e.at(-1)},t.next=function(e,t){const r=e.indexOf(t);return-1===r?void 0:e[r+1]},t.prev=function(e,t){const r=e.indexOf(t);return-1===r?void 0:e[r-1]},t.newMacrotask=()=>(0,o.sleep)(0),t.escapeCSS=e=>e.replace(/\W/giu,(e=>{var t;return`\\${(null!==(t=e.codePointAt(0))&&void 0!==t?t:65533).toString(16)} `}))},57770:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163);n.__exportStar(r(93482),t),n.__exportStar(r(5296),t),n.__exportStar(r(25561),t),n.__exportStar(r(15494),t),n.__exportStar(r(24529),t),n.__exportStar(r(53321),t),n.__exportStar(r(1230),t),n.__exportStar(r(33841),t),n.__exportStar(r(99453),t),n.__exportStar(r(21254),t),n.__exportStar(r(35889),t),n.__exportStar(r(21343),t),n.__exportStar(r(105),t),n.__exportStar(r(24537),t),n.__exportStar(r(49714),t),n.__exportStar(r(74252),t),n.__exportStar(r(78442),t),n.__exportStar(r(15243),t),n.__exportStar(r(32370),t),n.__exportStar(r(3568),t)},99453:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadScript=void 0,t.loadScript=(e,t)=>new Promise(((r,n)=>{const o=t.createElement("script");o.src=e,o.onload=()=>r(),o.onerror=n,o.crossOrigin="anonymous",t.head.appendChild(o)}))},21254:(e,t)=>{"use strict";function r(e,t,r){if(e.caseSensitive){const n=e.join(t,r);return e.existsSync(n)?r:void 0}try{const n=r.toLowerCase();return e.readdirSync(t).find((e=>e.toLowerCase()===n))}catch{return}}Object.defineProperty(t,"__esModule",{value:!0}),t.pathToTrueCase=void 0,t.pathToTrueCase=function(e,t){const n=e.resolve(t);if(e.caseSensitive)return n;const o=function(e,t){const r=[];for(;;){const n=e.basename(t);if(""===t||"."===t||".."===t||""===n)return r.unshift(t||"."),r;r.unshift(n),t=e.dirname(t)}}(e,n);for(let t=1;t<o.length;t++){const n=e.join(...o.slice(0,t)),i=r(e,n,o[t]);if(!i)break;o[t]=i}return e.join(...o)}},35889:(e,t,r)=>{"use strict";var n,o=r(34406);Object.defineProperty(t,"__esModule",{value:!0}),t.getOs=t.isElectronRendererProcess=t.isWindows=t.isMac=void 0;const i=null===(n=globalThis.process)||void 0===n?void 0:n.platform;t.isMac=i?"darwin"===i:navigator.platform.includes("Mac"),t.isWindows=i?"win32"===i:navigator.platform.includes("Win32"),t.isElectronRendererProcess="object"==typeof o&&"renderer"===o.type,t.getOs=()=>i||(navigator.platform.includes("Mac")?"darwin":navigator.platform.includes("Win")?"win32":navigator.platform.includes("Linux")?"linux":navigator.platform)},21343:(e,t)=>{"use strict";function r(e,t){let r=0,n=0;for(const o of e){if(r+1+o.length>t)return{line:n,char:t-r};n++,r+=o.length+1}return{line:e.length-1,char:e[e.length-1].length}}function n(e,t,r){return void 0===e[t]?e.join(",").length+1:e.slice(0,t).join(" ").length+(t?1:0)+Math.min(r,e[t].length+1)}Object.defineProperty(t,"__esModule",{value:!0}),t.linePosToCharPosPlusOne=t.linePosToCharPos=t.charPosToLinePlusOne=t.charPosToLinePos=void 0,t.charPosToLinePos=r,t.charPosToLinePlusOne=function(e,t){const n=r(e,t);return{line:n.line+1,char:n.char+1}},t.linePosToCharPos=n,t.linePosToCharPosPlusOne=function(e,t,r){return n(e,t-1,r-1)}},32370:(e,t)=>{"use strict";function r(e,t,r){return e*(r-t)+t}function n(e=0){return function(){let t=e+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function o(e){const t=n(e);return(e,n)=>Math.floor(r(t(),e,n))}Object.defineProperty(t,"__esModule",{value:!0}),t.seededRandomInt=t.createRandomIntWithSeed=t.mulberry32=t.normToRage=void 0,t.normToRage=r,t.mulberry32=n,t.createRandomIntWithSeed=o,t.seededRandomInt=o(1)},105:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolveExtensions=void 0,t.resolveExtensions=[".ts",".tsx",".js",".jsx",".json"]},15243:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.REQUIRED_PARAMS=void 0,t.REQUIRED_PARAMS=["feature","config"]},3568:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addToSet=void 0,t.addToSet=(e,t)=>{for(const r of t)e.add(r)}},24537:(e,t)=>{"use strict";var r;function n(e){return 0===e.length?e:e.charAt(0).toUpperCase()+e.slice(1)}function o(e){return(0,t.splitIntoWords)(e).join("-").toLowerCase()}function i(e){return(0,t.splitIntoWords)(e).map((e=>n(e.toLowerCase()))).join("")}function s(e){return(0,t.splitIntoWords)(e).map(((e,t)=>t>0?n(e.toLowerCase()):e.toLowerCase())).join("")}Object.defineProperty(t,"__esModule",{value:!0}),t.includesCaseInsensitive=t.toCSSCamelCase=t.toCSSKebabCase=t.toNamingConvention=t.toCamelCase=t.toPascalCase=t.toKebabCase=t.splitIntoWords=t.capitalizeFirstLetter=t.isValidNamingConvention=t.NamingConvention=void 0,function(e){e.KebabCase="kebab-case",e.PascalCase="pascal-case",e.CamelCase="camel-case"}(r=t.NamingConvention||(t.NamingConvention={})),t.isValidNamingConvention=function(e){return Object.values(r).some((t=>t===e))},t.capitalizeFirstLetter=n,t.splitIntoWords=e=>{var t;let r=null!==(t=e.match(/[a-z0-9]+/gi))&&void 0!==t?t:[];return r=r.flatMap((e=>e.split(/(\d+)/g))),r=r.flatMap((e=>e.split(/([A-Z]+)(?=[A-Z][a-z])/g))),r=r.flatMap((e=>e.split(/([A-Z]?[a-z]+)/g))),r.filter((e=>e))},t.toKebabCase=o,t.toPascalCase=i,t.toCamelCase=s,t.toNamingConvention=function(e,t){switch(t){case r.KebabCase:return o(e);case r.PascalCase:return i(e);case r.CamelCase:return s(e)}},t.toCSSKebabCase=function(e){const t=e.charAt(0);return e.length&&t===t.toUpperCase()&&t!==t.toLowerCase()?`-${o(e)}`:o(e)},t.toCSSCamelCase=function(e){return"-"===e.charAt(0)?n(s(e)):s(e)},t.includesCaseInsensitive=function(e,t){return e.toLowerCase().includes(t.toLowerCase())}},49714:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setupSubscribers=void 0,t.setupSubscribers=function(){const e={listeners:new Set,notify(t){for(const r of e.listeners)r(t)}};return{internals:e,subscribe:t=>{e.listeners.add(t)},unsubscribe:t=>{e.listeners.delete(t)}}}},74252:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tokenizeCSSURLS=t.tokenize=void 0;const r=e=>"("===e||")"===e||","===e||";"===e||":"===e,n=e=>" "===e||"\t"===e||"\r"===e||"\n"===e;function o(e){const t=[];let o="",i="",s="",a="",c=0,u=0;for(const t of e)u+=t.length,a?(i+=t,t===a&&"\\"!==o&&(a="",d("string"))):s?(i+=t,"line-comment"===s&&"\n"===t?(s="",d("line-comment")):"multi-comment"===s&&"/"===t&&"*"===o&&(s="",d("multi-comment"))):"/"===t&&"/"===e[u]?(d(),i+=t,s="line-comment"):"/"===t&&"*"===e[u]?(d(),i+=t,s="multi-comment"):"'"===(l=t)||'"'===l||"`"===l?(d(),i+=t,a=t):r(t)?(d(),i+=t,d(t)):n(t)&&!n(o)||!n(t)&&n(o)?(d(),i+=t):i+=t,o=t;var l;function d(e){if(0===i.length)return;const r=c+i.length;t.push({value:i,type:null!=e?e:i.trim().length?"text":"space",start:c,end:r}),c=r,i=""}return i.length&&(s?d("line-comment"===s?"line-comment":"unclosed-comment"):a?d("unclosed-string"):d()),t}t.tokenize=o,t.tokenizeCSSURLS=function(e){return function(e){var t;const r=[];let n;for(let o=0;o<e.length;o++){const i=e[o];n?(n.push(i),")"===i.type&&(r.push(n),n=void 0)):"text"===i.type&&"url"===i.value&&"("===(null===(t=e[o+1])||void 0===t?void 0:t.type)&&(n=[i])}return r}(o(e))}},78442:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},91570:(e,t,r)=>{e.exports=r(57770)},21086:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=r(5163);n.__exportStar(r(35855),t);var o=r(35855);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}})},35855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mainEnv=t.MainContext=void 0;const n=r(93849),o=r(10067),i=r(86420);Object.defineProperty(t,"mainEnv",{enumerable:!0,get:function(){return i.mainEnv}}),t.default=new n.Feature({id:"reactRenderer",api:{rendererService:n.Service.withType().defineEntity(i.mainEnv),reactMainContext:o.reactMainContext}}),t.MainContext=i.mainEnv.useContext("window")},65174:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContextEntryDefinition=t.ContextField=t.ContextSlot=t.defineReactContext=void 0;const n=r(93849);function o(){return function(e){const t=e instanceof c?e.providedFrom:e,r=new c(t,e instanceof c?e:void 0);return{use:()=>r.getReact().useContext(r.initAndGetContext())(),contextSlot:r}}}let i;t.defineReactContext=o;const s=(e,t,r)=>{const n=n=>{var o;const s=e.getReact();i=i||s.createContext(null);const c=e.initAndGetContext(),u=s.useContext((null===(o=e.parentSlot)||void 0===o?void 0:o.initAndGetContext())||i),{value:l,disposers:d}=s.useMemo((()=>{const e=u?u():t();return[...r].reduce(((t,r)=>{t.value[r.featureName]||(t.value[r.featureName]={});const{value:o,dispose:i}=r.provide(n.params,e);return t.value[r.featureName][r.entryName]=o,i&&t.disposers.add(i),t}),{value:a(e),disposers:new Set})}),[u,n.params]);s.useEffect((()=>()=>{for(const e of d)e()}),[d]);const p=s.useCallback((()=>l),[l]);return s.createElement(c.Provider,{value:p},n.children)};return n.displayName="ReactSlotProvider",n},a=e=>Object.entries(e).reduce(((e,[t,r])=>(e[t]=Object.entries(r).reduce(((e,[t,r])=>(e[t]=r,e)),{}),e)),{});class c extends n.FeatureInput{constructor(e,t){super(e,e),this.parentSlot=t,this.__thisOrParents={},this.defineChildContext=()=>o()(this)}init(e){this.React=e}defineContext(){return new l(this.providedFrom,this)}defineGuiSlot(){return{slot:n.Slot.withType().defineEntity(this.providedFrom),use:()=>this.getReact().useContext(this.initAndGetContext())()}}[n.CREATE_RUNTIME](e){const t=new n.Registry;return{registry:t,definitionSlot:this,Provider:s(this,(()=>{const t={};for(const[r,n]of e.features)t[r.id]=n.api;return t}),t)}}[n.REGISTER_VALUE](e,t,r,o,i){if(!this.parentSlot&&!this.React){const{communication:t}=e.get(n.COM).api;if(t.getEnvironmentName()==this.providedFrom.env)throw new Error("React not inited for "+o+" "+i)}return r}getReact(){var e;return this.React||(null===(e=this.parentSlot)||void 0===e?void 0:e.getReact())}initAndGetContext(){return this.context=this.context||this.getReact().createContext((()=>({}))),this.context}}t.ContextSlot=c;class u{constructor(e,t){this.featureName=e,this.entryName=t}init(e){this.provider={provide:e,entryName:this.entryName,featureName:this.featureName}}}t.ContextField=u;class l extends n.FeatureInput{constructor(e,t){super(e,e),this.slot=t}[n.CREATE_RUNTIME](e,t,r){return new u(t,r)}[n.REGISTER_VALUE](e,t,r){if(!r.provider){const{api:{communication:t}}=e.get(n.COM);if(t.getEnvironmentName()==this.providedFrom.env)throw new Error("context field not inited "+r.featureName+" : "+r.entryName)}let o=!1;for(const[t,n]of e.features.entries()){for(const[e,i]of Object.entries(t.api))if(i===this.slot&&(o=!0,n.api[e].registry.register(r.provider)),o)break;if(o)break}if(!o)throw new Error("target slot not found");return r}}t.ContextEntryDefinition=l},10067:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163);n.__exportStar(r(65174),t),n.__exportStar(r(18818),t),n.__exportStar(r(67968),t)},86420:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mainEnv=void 0;const n=r(93849);t.mainEnv=new n.SingleEndpointContextualEnvironment("main",[new n.Environment("window","window","single"),new n.Environment("electron-renderer","electron-renderer","single")])},67968:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.useMainContext=t.reactMainContext=void 0;const o=r(86420);n=(0,r(65174).defineReactContext)()(o.mainEnv),t.reactMainContext=n.contextSlot,t.useMainContext=n.use},18818:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},5689:(e,t,r)=>{e.exports=r(21086)}}]);
(self.webpackChunk_wixc3_stylable_playground_feature=self.webpackChunk_wixc3_stylable_playground_feature||[]).push([[487],{20329:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.universalCtrl=t.ACTIONS=t.MOUSE=t.KEYBOARD=void 0;const n=i(91570);t.KEYBOARD={UNIDENTIFIED:"Unidentified",ESCAPE:"Escape",MINUS:"Minus",DASH:"Minus",EQUALS:"Equal",BACK_SPACE:"Backspace",TAB:"Tab",ENTER:"Enter",RETURN:"Enter",SHIFT:"Shift",CONTROL:"Control",ALT:"Alt",PAUSE:"Pause",CAPS_LOCK:"CapsLock",SPACE:"Space",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown",PRINTSCREEN:"PrintScreen",INSERT:"Insert",DELETE:"Delete",0:"Digit0",1:"Digit1",2:"Digit2",3:"Digit3",4:"Digit4",5:"Digit5",6:"Digit6",7:"Digit7",8:"Digit8",9:"Digit9",A:"KeyA",B:"KeyB",C:"KeyC",D:"KeyD",E:"KeyE",F:"KeyF",G:"KeyG",H:"KeyH",I:"KeyI",J:"KeyJ",K:"KeyK",L:"KeyL",M:"KeyM",N:"KeyN",O:"KeyO",P:"KeyP",Q:"KeyQ",R:"KeyR",S:"KeyS",T:"KeyT",U:"KeyU",V:"KeyV",W:"KeyW",X:"KeyX",Y:"KeyY",Z:"KeyZ",META:"Meta",OS_LEFT:"OSLeft",CONTEXT_MENU:"ContextMenu",NUMPAD0:"Numpad0",NUMPAD1:"Numpad1",NUMPAD2:"Numpad2",NUMPAD3:"Numpad3",NUMPAD4:"Numpad4",NUMPAD5:"Numpad5",NUMPAD6:"Numpad6",NUMPAD7:"Numpad7",NUMPAD8:"Numpad8",NUMPAD9:"Numpad9",NUMPAD_MULTIPLY:"NumpadMultiply",NUMPAD_ADD:"NumpadAdd",NUMPAD_SUBTRACT:"NumpadSubtract",NUMPAD_DECIMAL:"NumpadDecimal",NUMPAD_DIVIDE:"NumpadDivide",NUMPAD_ENTER:"NumpadEnter",F1:"F1",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",F10:"F10",F11:"F11",F12:"F12",F13:"F13",F14:"F14",F15:"F15",F16:"F16",F17:"F17",F18:"F18",F19:"F19",F20:"F20",F21:"F21",F22:"F22",F23:"F23",F24:"F24",NUM_LOCK:"NumLock",SCROLL_LOCK:"ScrollLock",SEMICOLON:"Semicolon",COMMA:"Comma",PERIOD:"Period",SLASH:"Slash",BACK_QUOTE:"Backquote",OPEN_BRACKET:"BracketLeft",BACK_SLASH:"Backslash",CLOSE_BRACKET:"BracketRight",QUOTE:"Quote",UNIVERSAL_CONTROL:n.isMac?"Meta":"Control"},t.MOUSE={WHEEL_VERTICAL:"wheelVertical",WHEEL_HORIZONTAL:"wheelHorizontal"},t.ACTIONS={DELETE:"delete"},t.universalCtrl=n.isMac?t.KEYBOARD.META:t.KEYBOARD.CONTROL},90925:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163);n.__exportStar(i(20329),t),n.__exportStar(i(81588),t),n.__exportStar(i(31287),t)},81588:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScopesService=void 0,t.ScopesService=class{constructor(){this.isolatedScope=!1}removeScope(e){this.scope===e&&(this.scope=void 0,this.isolatedScope=!1)}setScope(e,t={isIsolated:!1}){const{isIsolated:i}=t;this.scope=e,this.isolatedScope=null!=i&&i}getScope(){return this.scope}getIsolatedScope(){return this.isolatedScope}}},31287:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},62202:(e,t,i)=>{e.exports=i(90925)},50497:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163),o=i(93849),r=n.__importDefault(i(46548)),a=n.__importStar(i(2206)),s=n.__importDefault(i(12763)),l=new o.Feature({id:"code-editor-commands",api:{getFiles:o.Service.withType().defineEntity(a.processingEnv).allowRemoteAccess()},dependencies:[s.default.asEntity,r.default.asEntity,a.default.asEntity]});t.default=l},12763:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultMonacoOptions=t.binaryExtensions=t.CODE_PANEL_ENTRY_ID=t.CODE_PANEL_PANEL_TYPE=void 0;const n=i(5163),o=i(93849),r=i(5689),a=n.__importDefault(i(93208)),s=n.__importDefault(i(2206)),l=n.__importDefault(i(82026));t.CODE_PANEL_PANEL_TYPE="code",t.CODE_PANEL_ENTRY_ID="open_code_editor",t.binaryExtensions=[".jpg",".bmp",".gif",".png"],t.defaultMonacoOptions={readOnly:!1};const u=new o.Feature({id:"codeEditor",dependencies:[a.default.asEntity,s.default.asEntity,l.default.asEntity],api:{monacoLanguages:o.Service.withType().defineEntity(r.mainEnv),monacoTextModels:o.Service.withType().defineEntity(r.mainEnv),monacoOptions:o.Config.withType().defineEntity(t.defaultMonacoOptions)}});t.default=u},45059:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeEditorCommandsFeature=t.default=void 0;const n=i(5163);var o=i(12763);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}}),n.__exportStar(i(12763),t);var r=i(50497);Object.defineProperty(t,"CodeEditorCommandsFeature",{enumerable:!0,get:function(){return n.__importDefault(r).default}})},30520:(e,t,i)=>{e.exports=i(45059)},23870:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163),o=i(93849),r=i(5689),a=n.__importDefault(i(93208)),s=i(2206),l=n.__importDefault(i(82026)),u=n.__importDefault(i(30520));t.default=new o.Feature({id:"codeLanguages",dependencies:[a.default.asEntity,l.default.asEntity,u.default.asEntity],api:{languageSlot:o.MapSlot.withType().defineEntity(r.mainEnv),languageProviderSlot:o.MapSlot.withType().defineEntity(s.processingEnv),languageService:o.Service.withType().defineEntity(s.processingEnv).allowRemoteAccess()}})},33610:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163).__importDefault(i(23870)),o=i(2206),r=i(50784);n.default.setup(o.processingEnv,(({run:e,languageProviderSlot:t})=>{const i=new r.ProvidersFacade;return e((()=>{i.setProviders(t)})),{languageService:i}}))},50784:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProvidersFacade=void 0;const n=i(93849),o=(e,t)=>"function"==typeof e[t];t.ProvidersFacade=class{constructor(){this.providers=new n.MapRegistry,this.config=[]}setProviders(e){this.config=[];for(const[t,i]of e)this.providers.register(t,i),this.config.push(this.getProviderConfig(t,i))}getLanguageId(e){const t=this.getLang(e);return t?t.langName:"unknown"}getConfig(){return this.config}async getCompletionItems(e,t,i){const{provider:n}=this.getLang(e);if("function"==typeof(null==n?void 0:n.getCompletionItems))return n.getCompletionItems(e,t,i)}async getCompletionItemDetails(e,t,i){const{provider:n}=this.getLang(e);if("function"==typeof(null==n?void 0:n.getCompletionItemDetails))return n.getCompletionItemDetails(e,t,i)}async getSignatureHelp(e,t){const{provider:i}=this.getLang(e);if("function"==typeof(null==i?void 0:i.getSignatureHelp))return i.getSignatureHelp(e,t)}async getHoverInfo(e,t){const{provider:i}=this.getLang(e);if("function"==typeof(null==i?void 0:i.getHoverInfo))return i.getHoverInfo(e,t)}async getDefinitions(e,t){const{provider:i}=this.getLang(e);if("function"==typeof(null==i?void 0:i.getDefinitions))return i.getDefinitions(e,t)}async getDocumentHighlights(e,t){const{provider:i}=this.getLang(e);if("function"==typeof(null==i?void 0:i.getDocumentHighlights))return i.getDocumentHighlights(e,t)}async getDocumentSymbols(e){const{provider:t}=this.getLang(e);if("function"==typeof(null==t?void 0:t.getDocumentSymbols))return t.getDocumentSymbols(e)}async getReferences(e,t){const{provider:i}=this.getLang(e);if("function"==typeof(null==i?void 0:i.getReferences))return i.getReferences(e,t)}async getRangeFormattingEdits(e,t,i){const{provider:n}=this.getLang(e);if("function"==typeof(null==n?void 0:n.getRangeFormattingEdits))return n.getRangeFormattingEdits(e,t,i)}async getOnTypeFormatting(e,t,i,n){const{provider:o}=this.getLang(e);if("function"==typeof(null==o?void 0:o.getOnTypeFormatting))return o.getOnTypeFormatting(e,t,i,n)}async getDiagnostics(e){const{provider:t}=this.getLang(e);if("function"==typeof(null==t?void 0:t.getDiagnostics))return t.getDiagnostics(e)}async getDocumentColors(e){const{provider:t}=this.getLang(e);if("function"==typeof(null==t?void 0:t.provideDocumentColors))return t.provideDocumentColors(e)}async getColorPresentation(e,t){const{provider:i}=this.getLang(e);if("function"==typeof(null==i?void 0:i.provideColorPresentations))return i.provideColorPresentations(e,t)}getProviderConfig(e,t){const{completionTriggerChars:i=[],signatureHelpTriggerChars:n=[],autoFormatTriggerCharacters:r=[]}=t;return{languageId:e,completionTriggerChars:i,signatureHelpTriggerChars:n,autoFormatTriggerCharacters:r,capabilities:{completion:o(t,"getCompletionItems"),completionDetails:o(t,"getCompletionItemDetails"),signatureHelp:o(t,"getSignatureHelp"),hover:o(t,"getHoverInfo"),definitions:o(t,"getDefinitions"),documentHighlights:o(t,"getDocumentHighlights"),documentSymbols:o(t,"getDocumentSymbols"),references:o(t,"getReferences"),rangeFormatting:o(t,"getRangeFormattingEdits"),onTypeFormatting:o(t,"getOnTypeFormatting"),diagnostics:o(t,"getDiagnostics"),colors:o(t,"provideDocumentColors")}}}getLang(e){const t=[...this.providers].find((([t,i])=>i.supportsFileType(e)));return t?{langName:t[0],provider:t[1]}:{langName:void 0,provider:void 0}}}},93107:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163),o=i(93849),r=i(5689),a=n.__importDefault(i(93208)),s=n.__importDefault(i(1529));t.default=new o.Feature({id:"commander",dependencies:[a.default.asEntity,s.default.asEntity],api:{textualCommandsSlot:o.Slot.withType().defineEntity(r.mainEnv),commandsPrefixesSlot:o.Slot.withType().defineEntity(r.mainEnv),commanderControllerService:o.Service.withType().defineEntity(r.mainEnv),commanderConfig:o.Config.withType().defineEntity({},void 0,r.mainEnv)}})},34262:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=i(5163);var o=i(93107);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}}),n.__exportStar(i(93107),t),n.__exportStar(i(22165),t)},22165:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HIDDEN_PREFIX=t.DEFAULT_PREFIX=void 0;const n=i(36904);t.DEFAULT_PREFIX={prefix:"",isHidden:!1,description:"WCS Commands",defaultShortcut:n.defaultOpenCommanderShortcut},t.HIDDEN_PREFIX={prefix:">>",isHidden:!0,description:"WCS engineer commands"}},36904:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOpenCommanderShortcut=void 0;const n=i(62202);t.defaultOpenCommanderShortcut=[n.KEYBOARD.UNIVERSAL_CONTROL,n.KEYBOARD.P]},46548:(e,t,i)=>{e.exports=i(34262)},2618:function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(43345);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},43345:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultFileTreeConfig=void 0;const n=i(5163),o=i(93849),r=n.__importDefault(i(60456)),a=n.__importDefault(i(2206)),s=n.__importDefault(i(93208)),l=i(5689),u=n.__importDefault(i(83654)),d=n.__importDefault(i(1529));t.defaultFileTreeConfig={openedItems:[]},t.default=new o.Feature({id:"projectUI",dependencies:[a.default.asEntity,s.default.asEntity,u.default.asEntity,d.default.asEntity,r.default.asEntity],api:{slotsProcessor:o.Service.withType().defineEntity(l.mainEnv),fileTreeStore:o.Service.withType().defineEntity(l.mainEnv),fileTreeConfig:new o.Config(t.defaultFileTreeConfig),openFilesService:o.Service.withType().defineEntity(l.mainEnv),openFilesConfig:new o.Config({targetAreaGroup:"content",openFiles:[]}),openFileSlot:o.MapSlot.withType().defineEntity(l.mainEnv),contextMenuSlot:o.Slot.withType().defineEntity(l.mainEnv),fileChildrenSlot:o.Slot.withType().defineEntity(l.mainEnv),decorationIconsSlot:o.Slot.withType().defineEntity(l.mainEnv),copyPasteManager:o.Service.withType().defineEntity(l.mainEnv),fileStylingSlot:o.OrderedSlot.withType().defineEntity(l.mainEnv),fileStylingConfig:new o.Config([]),fileIconSlot:o.OrderedSlot.withType().defineEntity(l.mainEnv),fileIconService:o.Service.withType().defineEntity(l.mainEnv),renderFileIconConfig:new o.Config([["extension",["default"]]])}})},82026:(e,t,i)=>{e.exports=i(2618)},43934:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=i(5163);n.__exportStar(i(31434),t);var o=i(31434);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}})},2206:(e,t,i)=>{e.exports=i(43934)}}]);
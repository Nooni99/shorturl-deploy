goog.provide('app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

app.core.app = (function (){var G__44945 = (function app$core$app_render(props__41490__auto__,maybe_ref__41491__auto__){
var vec__44946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__41490__auto__),maybe_ref__41491__auto__], null);

var vec__44949 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slug","slug",2029314850),null,new cljs.core.Keyword(null,"url","url",276297046),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44949,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44949,(1),null);
var fetch_slug = (function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___43960__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch("/api/redirect/",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null),new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(({"url": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state)}))], null)))),(function (_response){
return promesa.protocols._mcat(promesa.protocols._promise(_response.json()),(function (response){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))),(function (data){
return promesa.protocols._promise((function (){var G__44952 = cljs.core.assoc;
var G__44953 = new cljs.core.Keyword(null,"slug","slug",2029314850);
var G__44954 = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(data);
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__44952,G__44953,G__44954) : set_state.call(null,G__44952,G__44953,G__44954));
})());
}));
}));
}));
}));
});
var redirect_link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(state)),"/"].join('');
var G__44955 = "div";
var G__44956 = (function (){var obj44958 = ({"className":"bg-neutral-900 grid place-items-center h-screen","children":(cljs.core.truth_(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(state))?(function (){var G__44959 = "div";
var G__44960 = (function (){var obj44962 = ({"children":(function (){var G__44963 = "a";
var G__44964 = (function (){var obj44966 = ({"href":redirect_link,"children":redirect_link});
return obj44966;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44963,G__44964) : helix.core.jsx.call(null,G__44963,G__44964));
})()});
return obj44962;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44959,G__44960) : helix.core.jsx.call(null,G__44959,G__44960));
})():(function (){var G__44967 = "div";
var G__44968 = (function (){var obj44970 = ({"children":[(function (){var G__44971 = "img";
var G__44972 = (function (){var obj44974 = ({"src":"https://i.ibb.co/PGzB89j/3-DFuss-Logo-High-Res-NEW-1-1.png","alt":"3DFussLogo"});
return obj44974;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44971,G__44972) : helix.core.jsx.call(null,G__44971,G__44972));
})(),(function (){var G__44975 = "h1";
var G__44976 = (function (){var obj44978 = ({"className":"text-center text-[#fd714b] text-xl","children":"More coming soon..."});
return obj44978;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44975,G__44976) : helix.core.jsx.call(null,G__44975,G__44976));
})(),(function (){var G__44979 = "input";
var G__44980 = (function (){var obj44982 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__44943_SHARP_){
var G__44983 = cljs.core.assoc;
var G__44984 = new cljs.core.Keyword(null,"url","url",276297046);
var G__44985 = p1__44943_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__44983,G__44984,G__44985) : set_state.call(null,G__44983,G__44984,G__44985));
}),"className":"form-control border border-solid border-gray-600","placeholder":"Enter URL"});
return obj44982;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44979,G__44980) : helix.core.jsx.call(null,G__44979,G__44980));
})(),(function (){var G__44986 = "button";
var G__44987 = (function (){var obj44989 = ({"onClick":(function (){
return fetch_slug();
}),"className":"border-2 rounded px-4 uppercase","children":"Shorten Url"});
return obj44989;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44986,G__44987) : helix.core.jsx.call(null,G__44986,G__44987));
})()]});
return obj44970;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44967,G__44968) : helix.core.jsxs.call(null,G__44967,G__44968));
})())});
return obj44958;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44955,G__44956) : helix.core.jsx.call(null,G__44955,G__44956));
});
if(goog.DEBUG === true){
var G__44990 = G__44945;
(G__44990.displayName = "app.core/app");

return G__44990;
} else {
return G__44945;
}
})();



if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
app.core.root.render((function (){var G__44991 = app.core.app;
var G__44992 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44991,G__44992) : helix.core.jsx.call(null,G__44991,G__44992));
})());
app.core.init = (function app$core$init(){
return console.log("howzit");
});
goog.exportSymbol('app.core.init', app.core.init);
alert("hello");

//# sourceMappingURL=app.core.js.map

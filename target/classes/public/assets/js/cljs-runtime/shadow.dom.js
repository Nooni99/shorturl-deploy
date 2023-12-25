goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38393 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38393(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38403 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38403(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37093 = coll;
var G__37094 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37093,G__37094) : shadow.dom.lazy_native_coll_seq.call(null,G__37093,G__37094));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37137 = arguments.length;
switch (G__37137) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37146 = arguments.length;
switch (G__37146) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37157 = arguments.length;
switch (G__37157) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37165 = arguments.length;
switch (G__37165) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37182 = arguments.length;
switch (G__37182) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37193 = arguments.length;
switch (G__37193) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37207){if((e37207 instanceof Object)){
var e = e37207;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37207;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37213 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37214 = null;
var count__37215 = (0);
var i__37216 = (0);
while(true){
if((i__37216 < count__37215)){
var el = chunk__37214.cljs$core$IIndexed$_nth$arity$2(null,i__37216);
var handler_38471__$1 = ((function (seq__37213,chunk__37214,count__37215,i__37216,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37213,chunk__37214,count__37215,i__37216,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38471__$1);


var G__38485 = seq__37213;
var G__38486 = chunk__37214;
var G__38487 = count__37215;
var G__38488 = (i__37216 + (1));
seq__37213 = G__38485;
chunk__37214 = G__38486;
count__37215 = G__38487;
i__37216 = G__38488;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37213);
if(temp__5804__auto__){
var seq__37213__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37213__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37213__$1);
var G__38493 = cljs.core.chunk_rest(seq__37213__$1);
var G__38494 = c__5568__auto__;
var G__38495 = cljs.core.count(c__5568__auto__);
var G__38496 = (0);
seq__37213 = G__38493;
chunk__37214 = G__38494;
count__37215 = G__38495;
i__37216 = G__38496;
continue;
} else {
var el = cljs.core.first(seq__37213__$1);
var handler_38497__$1 = ((function (seq__37213,chunk__37214,count__37215,i__37216,el,seq__37213__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37213,chunk__37214,count__37215,i__37216,el,seq__37213__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38497__$1);


var G__38498 = cljs.core.next(seq__37213__$1);
var G__38499 = null;
var G__38500 = (0);
var G__38501 = (0);
seq__37213 = G__38498;
chunk__37214 = G__38499;
count__37215 = G__38500;
i__37216 = G__38501;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37263 = arguments.length;
switch (G__37263) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37327 = cljs.core.seq(events);
var chunk__37328 = null;
var count__37329 = (0);
var i__37330 = (0);
while(true){
if((i__37330 < count__37329)){
var vec__37366 = chunk__37328.cljs$core$IIndexed$_nth$arity$2(null,i__37330);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37366,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37366,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38532 = seq__37327;
var G__38533 = chunk__37328;
var G__38534 = count__37329;
var G__38535 = (i__37330 + (1));
seq__37327 = G__38532;
chunk__37328 = G__38533;
count__37329 = G__38534;
i__37330 = G__38535;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37327);
if(temp__5804__auto__){
var seq__37327__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37327__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37327__$1);
var G__38540 = cljs.core.chunk_rest(seq__37327__$1);
var G__38541 = c__5568__auto__;
var G__38542 = cljs.core.count(c__5568__auto__);
var G__38543 = (0);
seq__37327 = G__38540;
chunk__37328 = G__38541;
count__37329 = G__38542;
i__37330 = G__38543;
continue;
} else {
var vec__37378 = cljs.core.first(seq__37327__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37378,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38544 = cljs.core.next(seq__37327__$1);
var G__38545 = null;
var G__38546 = (0);
var G__38547 = (0);
seq__37327 = G__38544;
chunk__37328 = G__38545;
count__37329 = G__38546;
i__37330 = G__38547;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37388 = cljs.core.seq(styles);
var chunk__37389 = null;
var count__37390 = (0);
var i__37391 = (0);
while(true){
if((i__37391 < count__37390)){
var vec__37415 = chunk__37389.cljs$core$IIndexed$_nth$arity$2(null,i__37391);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37415,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38552 = seq__37388;
var G__38553 = chunk__37389;
var G__38554 = count__37390;
var G__38555 = (i__37391 + (1));
seq__37388 = G__38552;
chunk__37389 = G__38553;
count__37390 = G__38554;
i__37391 = G__38555;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37388);
if(temp__5804__auto__){
var seq__37388__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37388__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37388__$1);
var G__38556 = cljs.core.chunk_rest(seq__37388__$1);
var G__38557 = c__5568__auto__;
var G__38558 = cljs.core.count(c__5568__auto__);
var G__38559 = (0);
seq__37388 = G__38556;
chunk__37389 = G__38557;
count__37390 = G__38558;
i__37391 = G__38559;
continue;
} else {
var vec__37423 = cljs.core.first(seq__37388__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37423,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38560 = cljs.core.next(seq__37388__$1);
var G__38561 = null;
var G__38563 = (0);
var G__38564 = (0);
seq__37388 = G__38560;
chunk__37389 = G__38561;
count__37390 = G__38563;
i__37391 = G__38564;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37432_38569 = key;
var G__37432_38570__$1 = (((G__37432_38569 instanceof cljs.core.Keyword))?G__37432_38569.fqn:null);
switch (G__37432_38570__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38573 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38573,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38573,"aria-");
}
})())){
el.setAttribute(ks_38573,value);
} else {
(el[ks_38573] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37467){
var map__37468 = p__37467;
var map__37468__$1 = cljs.core.__destructure_map(map__37468);
var props = map__37468__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37468__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37469 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37469,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37469,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37469,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37472 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37472,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37472;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37479 = arguments.length;
switch (G__37479) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37488){
var vec__37489 = p__37488;
var seq__37490 = cljs.core.seq(vec__37489);
var first__37491 = cljs.core.first(seq__37490);
var seq__37490__$1 = cljs.core.next(seq__37490);
var nn = first__37491;
var first__37491__$1 = cljs.core.first(seq__37490__$1);
var seq__37490__$2 = cljs.core.next(seq__37490__$1);
var np = first__37491__$1;
var nc = seq__37490__$2;
var node = vec__37489;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37513 = nn;
var G__37515 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37513,G__37515) : create_fn.call(null,G__37513,G__37515));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37516 = nn;
var G__37517 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37516,G__37517) : create_fn.call(null,G__37516,G__37517));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37526 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37526,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37526,(1),null);
var seq__37530_38591 = cljs.core.seq(node_children);
var chunk__37531_38592 = null;
var count__37533_38593 = (0);
var i__37534_38594 = (0);
while(true){
if((i__37534_38594 < count__37533_38593)){
var child_struct_38595 = chunk__37531_38592.cljs$core$IIndexed$_nth$arity$2(null,i__37534_38594);
var children_38598 = shadow.dom.dom_node(child_struct_38595);
if(cljs.core.seq_QMARK_(children_38598)){
var seq__37596_38601 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38598));
var chunk__37601_38602 = null;
var count__37602_38603 = (0);
var i__37603_38604 = (0);
while(true){
if((i__37603_38604 < count__37602_38603)){
var child_38605 = chunk__37601_38602.cljs$core$IIndexed$_nth$arity$2(null,i__37603_38604);
if(cljs.core.truth_(child_38605)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38605);


var G__38606 = seq__37596_38601;
var G__38607 = chunk__37601_38602;
var G__38608 = count__37602_38603;
var G__38609 = (i__37603_38604 + (1));
seq__37596_38601 = G__38606;
chunk__37601_38602 = G__38607;
count__37602_38603 = G__38608;
i__37603_38604 = G__38609;
continue;
} else {
var G__38610 = seq__37596_38601;
var G__38611 = chunk__37601_38602;
var G__38612 = count__37602_38603;
var G__38613 = (i__37603_38604 + (1));
seq__37596_38601 = G__38610;
chunk__37601_38602 = G__38611;
count__37602_38603 = G__38612;
i__37603_38604 = G__38613;
continue;
}
} else {
var temp__5804__auto___38614 = cljs.core.seq(seq__37596_38601);
if(temp__5804__auto___38614){
var seq__37596_38615__$1 = temp__5804__auto___38614;
if(cljs.core.chunked_seq_QMARK_(seq__37596_38615__$1)){
var c__5568__auto___38616 = cljs.core.chunk_first(seq__37596_38615__$1);
var G__38617 = cljs.core.chunk_rest(seq__37596_38615__$1);
var G__38618 = c__5568__auto___38616;
var G__38619 = cljs.core.count(c__5568__auto___38616);
var G__38620 = (0);
seq__37596_38601 = G__38617;
chunk__37601_38602 = G__38618;
count__37602_38603 = G__38619;
i__37603_38604 = G__38620;
continue;
} else {
var child_38621 = cljs.core.first(seq__37596_38615__$1);
if(cljs.core.truth_(child_38621)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38621);


var G__38622 = cljs.core.next(seq__37596_38615__$1);
var G__38623 = null;
var G__38624 = (0);
var G__38625 = (0);
seq__37596_38601 = G__38622;
chunk__37601_38602 = G__38623;
count__37602_38603 = G__38624;
i__37603_38604 = G__38625;
continue;
} else {
var G__38628 = cljs.core.next(seq__37596_38615__$1);
var G__38629 = null;
var G__38630 = (0);
var G__38631 = (0);
seq__37596_38601 = G__38628;
chunk__37601_38602 = G__38629;
count__37602_38603 = G__38630;
i__37603_38604 = G__38631;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38598);
}


var G__38634 = seq__37530_38591;
var G__38635 = chunk__37531_38592;
var G__38636 = count__37533_38593;
var G__38637 = (i__37534_38594 + (1));
seq__37530_38591 = G__38634;
chunk__37531_38592 = G__38635;
count__37533_38593 = G__38636;
i__37534_38594 = G__38637;
continue;
} else {
var temp__5804__auto___38638 = cljs.core.seq(seq__37530_38591);
if(temp__5804__auto___38638){
var seq__37530_38639__$1 = temp__5804__auto___38638;
if(cljs.core.chunked_seq_QMARK_(seq__37530_38639__$1)){
var c__5568__auto___38640 = cljs.core.chunk_first(seq__37530_38639__$1);
var G__38641 = cljs.core.chunk_rest(seq__37530_38639__$1);
var G__38642 = c__5568__auto___38640;
var G__38643 = cljs.core.count(c__5568__auto___38640);
var G__38644 = (0);
seq__37530_38591 = G__38641;
chunk__37531_38592 = G__38642;
count__37533_38593 = G__38643;
i__37534_38594 = G__38644;
continue;
} else {
var child_struct_38645 = cljs.core.first(seq__37530_38639__$1);
var children_38646 = shadow.dom.dom_node(child_struct_38645);
if(cljs.core.seq_QMARK_(children_38646)){
var seq__37640_38647 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38646));
var chunk__37642_38648 = null;
var count__37646_38649 = (0);
var i__37647_38650 = (0);
while(true){
if((i__37647_38650 < count__37646_38649)){
var child_38651 = chunk__37642_38648.cljs$core$IIndexed$_nth$arity$2(null,i__37647_38650);
if(cljs.core.truth_(child_38651)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38651);


var G__38652 = seq__37640_38647;
var G__38653 = chunk__37642_38648;
var G__38654 = count__37646_38649;
var G__38655 = (i__37647_38650 + (1));
seq__37640_38647 = G__38652;
chunk__37642_38648 = G__38653;
count__37646_38649 = G__38654;
i__37647_38650 = G__38655;
continue;
} else {
var G__38656 = seq__37640_38647;
var G__38657 = chunk__37642_38648;
var G__38658 = count__37646_38649;
var G__38659 = (i__37647_38650 + (1));
seq__37640_38647 = G__38656;
chunk__37642_38648 = G__38657;
count__37646_38649 = G__38658;
i__37647_38650 = G__38659;
continue;
}
} else {
var temp__5804__auto___38660__$1 = cljs.core.seq(seq__37640_38647);
if(temp__5804__auto___38660__$1){
var seq__37640_38661__$1 = temp__5804__auto___38660__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37640_38661__$1)){
var c__5568__auto___38662 = cljs.core.chunk_first(seq__37640_38661__$1);
var G__38663 = cljs.core.chunk_rest(seq__37640_38661__$1);
var G__38664 = c__5568__auto___38662;
var G__38665 = cljs.core.count(c__5568__auto___38662);
var G__38666 = (0);
seq__37640_38647 = G__38663;
chunk__37642_38648 = G__38664;
count__37646_38649 = G__38665;
i__37647_38650 = G__38666;
continue;
} else {
var child_38667 = cljs.core.first(seq__37640_38661__$1);
if(cljs.core.truth_(child_38667)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38667);


var G__38668 = cljs.core.next(seq__37640_38661__$1);
var G__38669 = null;
var G__38670 = (0);
var G__38671 = (0);
seq__37640_38647 = G__38668;
chunk__37642_38648 = G__38669;
count__37646_38649 = G__38670;
i__37647_38650 = G__38671;
continue;
} else {
var G__38672 = cljs.core.next(seq__37640_38661__$1);
var G__38673 = null;
var G__38674 = (0);
var G__38675 = (0);
seq__37640_38647 = G__38672;
chunk__37642_38648 = G__38673;
count__37646_38649 = G__38674;
i__37647_38650 = G__38675;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38646);
}


var G__38676 = cljs.core.next(seq__37530_38639__$1);
var G__38677 = null;
var G__38678 = (0);
var G__38679 = (0);
seq__37530_38591 = G__38676;
chunk__37531_38592 = G__38677;
count__37533_38593 = G__38678;
i__37534_38594 = G__38679;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37689 = cljs.core.seq(node);
var chunk__37690 = null;
var count__37691 = (0);
var i__37692 = (0);
while(true){
if((i__37692 < count__37691)){
var n = chunk__37690.cljs$core$IIndexed$_nth$arity$2(null,i__37692);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38680 = seq__37689;
var G__38681 = chunk__37690;
var G__38682 = count__37691;
var G__38683 = (i__37692 + (1));
seq__37689 = G__38680;
chunk__37690 = G__38681;
count__37691 = G__38682;
i__37692 = G__38683;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37689);
if(temp__5804__auto__){
var seq__37689__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37689__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37689__$1);
var G__38684 = cljs.core.chunk_rest(seq__37689__$1);
var G__38685 = c__5568__auto__;
var G__38686 = cljs.core.count(c__5568__auto__);
var G__38687 = (0);
seq__37689 = G__38684;
chunk__37690 = G__38685;
count__37691 = G__38686;
i__37692 = G__38687;
continue;
} else {
var n = cljs.core.first(seq__37689__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38688 = cljs.core.next(seq__37689__$1);
var G__38689 = null;
var G__38690 = (0);
var G__38691 = (0);
seq__37689 = G__38688;
chunk__37690 = G__38689;
count__37691 = G__38690;
i__37692 = G__38691;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37720 = arguments.length;
switch (G__37720) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37739 = arguments.length;
switch (G__37739) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37758 = arguments.length;
switch (G__37758) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38695 = arguments.length;
var i__5770__auto___38696 = (0);
while(true){
if((i__5770__auto___38696 < len__5769__auto___38695)){
args__5775__auto__.push((arguments[i__5770__auto___38696]));

var G__38697 = (i__5770__auto___38696 + (1));
i__5770__auto___38696 = G__38697;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37796_38698 = cljs.core.seq(nodes);
var chunk__37797_38699 = null;
var count__37798_38700 = (0);
var i__37799_38701 = (0);
while(true){
if((i__37799_38701 < count__37798_38700)){
var node_38702 = chunk__37797_38699.cljs$core$IIndexed$_nth$arity$2(null,i__37799_38701);
fragment.appendChild(shadow.dom._to_dom(node_38702));


var G__38703 = seq__37796_38698;
var G__38704 = chunk__37797_38699;
var G__38705 = count__37798_38700;
var G__38706 = (i__37799_38701 + (1));
seq__37796_38698 = G__38703;
chunk__37797_38699 = G__38704;
count__37798_38700 = G__38705;
i__37799_38701 = G__38706;
continue;
} else {
var temp__5804__auto___38707 = cljs.core.seq(seq__37796_38698);
if(temp__5804__auto___38707){
var seq__37796_38708__$1 = temp__5804__auto___38707;
if(cljs.core.chunked_seq_QMARK_(seq__37796_38708__$1)){
var c__5568__auto___38709 = cljs.core.chunk_first(seq__37796_38708__$1);
var G__38710 = cljs.core.chunk_rest(seq__37796_38708__$1);
var G__38711 = c__5568__auto___38709;
var G__38712 = cljs.core.count(c__5568__auto___38709);
var G__38713 = (0);
seq__37796_38698 = G__38710;
chunk__37797_38699 = G__38711;
count__37798_38700 = G__38712;
i__37799_38701 = G__38713;
continue;
} else {
var node_38715 = cljs.core.first(seq__37796_38708__$1);
fragment.appendChild(shadow.dom._to_dom(node_38715));


var G__38718 = cljs.core.next(seq__37796_38708__$1);
var G__38719 = null;
var G__38720 = (0);
var G__38721 = (0);
seq__37796_38698 = G__38718;
chunk__37797_38699 = G__38719;
count__37798_38700 = G__38720;
i__37799_38701 = G__38721;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37790){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37790));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37831_38723 = cljs.core.seq(scripts);
var chunk__37832_38724 = null;
var count__37833_38725 = (0);
var i__37834_38726 = (0);
while(true){
if((i__37834_38726 < count__37833_38725)){
var vec__37851_38730 = chunk__37832_38724.cljs$core$IIndexed$_nth$arity$2(null,i__37834_38726);
var script_tag_38731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37851_38730,(0),null);
var script_body_38732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37851_38730,(1),null);
eval(script_body_38732);


var G__38733 = seq__37831_38723;
var G__38734 = chunk__37832_38724;
var G__38735 = count__37833_38725;
var G__38736 = (i__37834_38726 + (1));
seq__37831_38723 = G__38733;
chunk__37832_38724 = G__38734;
count__37833_38725 = G__38735;
i__37834_38726 = G__38736;
continue;
} else {
var temp__5804__auto___38737 = cljs.core.seq(seq__37831_38723);
if(temp__5804__auto___38737){
var seq__37831_38738__$1 = temp__5804__auto___38737;
if(cljs.core.chunked_seq_QMARK_(seq__37831_38738__$1)){
var c__5568__auto___38739 = cljs.core.chunk_first(seq__37831_38738__$1);
var G__38740 = cljs.core.chunk_rest(seq__37831_38738__$1);
var G__38741 = c__5568__auto___38739;
var G__38742 = cljs.core.count(c__5568__auto___38739);
var G__38743 = (0);
seq__37831_38723 = G__38740;
chunk__37832_38724 = G__38741;
count__37833_38725 = G__38742;
i__37834_38726 = G__38743;
continue;
} else {
var vec__37855_38744 = cljs.core.first(seq__37831_38738__$1);
var script_tag_38745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37855_38744,(0),null);
var script_body_38746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37855_38744,(1),null);
eval(script_body_38746);


var G__38747 = cljs.core.next(seq__37831_38738__$1);
var G__38748 = null;
var G__38749 = (0);
var G__38750 = (0);
seq__37831_38723 = G__38747;
chunk__37832_38724 = G__38748;
count__37833_38725 = G__38749;
i__37834_38726 = G__38750;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37861){
var vec__37862 = p__37861;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37862,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37862,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37895 = arguments.length;
switch (G__37895) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37952 = cljs.core.seq(style_keys);
var chunk__37953 = null;
var count__37954 = (0);
var i__37955 = (0);
while(true){
if((i__37955 < count__37954)){
var it = chunk__37953.cljs$core$IIndexed$_nth$arity$2(null,i__37955);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38761 = seq__37952;
var G__38762 = chunk__37953;
var G__38763 = count__37954;
var G__38764 = (i__37955 + (1));
seq__37952 = G__38761;
chunk__37953 = G__38762;
count__37954 = G__38763;
i__37955 = G__38764;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37952);
if(temp__5804__auto__){
var seq__37952__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37952__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37952__$1);
var G__38766 = cljs.core.chunk_rest(seq__37952__$1);
var G__38767 = c__5568__auto__;
var G__38768 = cljs.core.count(c__5568__auto__);
var G__38769 = (0);
seq__37952 = G__38766;
chunk__37953 = G__38767;
count__37954 = G__38768;
i__37955 = G__38769;
continue;
} else {
var it = cljs.core.first(seq__37952__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38770 = cljs.core.next(seq__37952__$1);
var G__38771 = null;
var G__38772 = (0);
var G__38773 = (0);
seq__37952 = G__38770;
chunk__37953 = G__38771;
count__37954 = G__38772;
i__37955 = G__38773;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37983,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37999 = k37983;
var G__37999__$1 = (((G__37999 instanceof cljs.core.Keyword))?G__37999.fqn:null);
switch (G__37999__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37983,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38002){
var vec__38004 = p__38002;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38004,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38004,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37982){
var self__ = this;
var G__37982__$1 = this;
return (new cljs.core.RecordIter((0),G__37982__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37984,other37985){
var self__ = this;
var this37984__$1 = this;
return (((!((other37985 == null)))) && ((((this37984__$1.constructor === other37985.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37984__$1.x,other37985.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37984__$1.y,other37985.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37984__$1.__extmap,other37985.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37983){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38043 = k37983;
var G__38043__$1 = (((G__38043 instanceof cljs.core.Keyword))?G__38043.fqn:null);
switch (G__38043__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37983);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37982){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38047 = cljs.core.keyword_identical_QMARK_;
var expr__38048 = k__5352__auto__;
if(cljs.core.truth_((pred__38047.cljs$core$IFn$_invoke$arity$2 ? pred__38047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38048) : pred__38047.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38048)))){
return (new shadow.dom.Coordinate(G__37982,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38047.cljs$core$IFn$_invoke$arity$2 ? pred__38047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38048) : pred__38047.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38048)))){
return (new shadow.dom.Coordinate(self__.x,G__37982,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37982),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37982){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37982,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37987){
var extmap__5385__auto__ = (function (){var G__38070 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37987,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37987)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38070);
} else {
return G__38070;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37987),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37987),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38095,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38109 = k38095;
var G__38109__$1 = (((G__38109 instanceof cljs.core.Keyword))?G__38109.fqn:null);
switch (G__38109__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38095,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38113){
var vec__38116 = p__38113;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38094){
var self__ = this;
var G__38094__$1 = this;
return (new cljs.core.RecordIter((0),G__38094__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38096,other38097){
var self__ = this;
var this38096__$1 = this;
return (((!((other38097 == null)))) && ((((this38096__$1.constructor === other38097.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38096__$1.w,other38097.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38096__$1.h,other38097.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38096__$1.__extmap,other38097.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38095){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38167 = k38095;
var G__38167__$1 = (((G__38167 instanceof cljs.core.Keyword))?G__38167.fqn:null);
switch (G__38167__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38095);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38094){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38168 = cljs.core.keyword_identical_QMARK_;
var expr__38169 = k__5352__auto__;
if(cljs.core.truth_((pred__38168.cljs$core$IFn$_invoke$arity$2 ? pred__38168.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38169) : pred__38168.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38169)))){
return (new shadow.dom.Size(G__38094,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38168.cljs$core$IFn$_invoke$arity$2 ? pred__38168.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38169) : pred__38168.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38169)))){
return (new shadow.dom.Size(self__.w,G__38094,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38094),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38094){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38094,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38098){
var extmap__5385__auto__ = (function (){var G__38179 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38098,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38098)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38179);
} else {
return G__38179;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38098),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38098),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38875 = (i + (1));
var G__38877 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38875;
ret = G__38877;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38206){
var vec__38207 = p__38206;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38207,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38211 = arguments.length;
switch (G__38211) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38911 = ps;
var G__38912 = (i + (1));
el__$1 = G__38911;
i = G__38912;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38228 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38228,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38228,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38228,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38234_38914 = cljs.core.seq(props);
var chunk__38235_38915 = null;
var count__38236_38916 = (0);
var i__38237_38917 = (0);
while(true){
if((i__38237_38917 < count__38236_38916)){
var vec__38245_38918 = chunk__38235_38915.cljs$core$IIndexed$_nth$arity$2(null,i__38237_38917);
var k_38919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38245_38918,(0),null);
var v_38920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38245_38918,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38919);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38919),v_38920);


var G__38921 = seq__38234_38914;
var G__38922 = chunk__38235_38915;
var G__38923 = count__38236_38916;
var G__38924 = (i__38237_38917 + (1));
seq__38234_38914 = G__38921;
chunk__38235_38915 = G__38922;
count__38236_38916 = G__38923;
i__38237_38917 = G__38924;
continue;
} else {
var temp__5804__auto___38925 = cljs.core.seq(seq__38234_38914);
if(temp__5804__auto___38925){
var seq__38234_38928__$1 = temp__5804__auto___38925;
if(cljs.core.chunked_seq_QMARK_(seq__38234_38928__$1)){
var c__5568__auto___38929 = cljs.core.chunk_first(seq__38234_38928__$1);
var G__38930 = cljs.core.chunk_rest(seq__38234_38928__$1);
var G__38931 = c__5568__auto___38929;
var G__38932 = cljs.core.count(c__5568__auto___38929);
var G__38933 = (0);
seq__38234_38914 = G__38930;
chunk__38235_38915 = G__38931;
count__38236_38916 = G__38932;
i__38237_38917 = G__38933;
continue;
} else {
var vec__38251_38934 = cljs.core.first(seq__38234_38928__$1);
var k_38935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38251_38934,(0),null);
var v_38936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38251_38934,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38935);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38935),v_38936);


var G__38938 = cljs.core.next(seq__38234_38928__$1);
var G__38939 = null;
var G__38940 = (0);
var G__38941 = (0);
seq__38234_38914 = G__38938;
chunk__38235_38915 = G__38939;
count__38236_38916 = G__38940;
i__38237_38917 = G__38941;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38266 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38266,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38266,(1),null);
var seq__38269_38945 = cljs.core.seq(node_children);
var chunk__38271_38946 = null;
var count__38272_38947 = (0);
var i__38273_38948 = (0);
while(true){
if((i__38273_38948 < count__38272_38947)){
var child_struct_38949 = chunk__38271_38946.cljs$core$IIndexed$_nth$arity$2(null,i__38273_38948);
if((!((child_struct_38949 == null)))){
if(typeof child_struct_38949 === 'string'){
var text_38950 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38950),child_struct_38949].join(''));
} else {
var children_38951 = shadow.dom.svg_node(child_struct_38949);
if(cljs.core.seq_QMARK_(children_38951)){
var seq__38304_38952 = cljs.core.seq(children_38951);
var chunk__38306_38953 = null;
var count__38307_38954 = (0);
var i__38308_38955 = (0);
while(true){
if((i__38308_38955 < count__38307_38954)){
var child_38956 = chunk__38306_38953.cljs$core$IIndexed$_nth$arity$2(null,i__38308_38955);
if(cljs.core.truth_(child_38956)){
node.appendChild(child_38956);


var G__38957 = seq__38304_38952;
var G__38958 = chunk__38306_38953;
var G__38959 = count__38307_38954;
var G__38960 = (i__38308_38955 + (1));
seq__38304_38952 = G__38957;
chunk__38306_38953 = G__38958;
count__38307_38954 = G__38959;
i__38308_38955 = G__38960;
continue;
} else {
var G__38961 = seq__38304_38952;
var G__38962 = chunk__38306_38953;
var G__38963 = count__38307_38954;
var G__38964 = (i__38308_38955 + (1));
seq__38304_38952 = G__38961;
chunk__38306_38953 = G__38962;
count__38307_38954 = G__38963;
i__38308_38955 = G__38964;
continue;
}
} else {
var temp__5804__auto___38965 = cljs.core.seq(seq__38304_38952);
if(temp__5804__auto___38965){
var seq__38304_38966__$1 = temp__5804__auto___38965;
if(cljs.core.chunked_seq_QMARK_(seq__38304_38966__$1)){
var c__5568__auto___38967 = cljs.core.chunk_first(seq__38304_38966__$1);
var G__38968 = cljs.core.chunk_rest(seq__38304_38966__$1);
var G__38969 = c__5568__auto___38967;
var G__38970 = cljs.core.count(c__5568__auto___38967);
var G__38971 = (0);
seq__38304_38952 = G__38968;
chunk__38306_38953 = G__38969;
count__38307_38954 = G__38970;
i__38308_38955 = G__38971;
continue;
} else {
var child_38973 = cljs.core.first(seq__38304_38966__$1);
if(cljs.core.truth_(child_38973)){
node.appendChild(child_38973);


var G__38975 = cljs.core.next(seq__38304_38966__$1);
var G__38976 = null;
var G__38977 = (0);
var G__38978 = (0);
seq__38304_38952 = G__38975;
chunk__38306_38953 = G__38976;
count__38307_38954 = G__38977;
i__38308_38955 = G__38978;
continue;
} else {
var G__38979 = cljs.core.next(seq__38304_38966__$1);
var G__38980 = null;
var G__38981 = (0);
var G__38982 = (0);
seq__38304_38952 = G__38979;
chunk__38306_38953 = G__38980;
count__38307_38954 = G__38981;
i__38308_38955 = G__38982;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38951);
}
}


var G__38987 = seq__38269_38945;
var G__38988 = chunk__38271_38946;
var G__38989 = count__38272_38947;
var G__38990 = (i__38273_38948 + (1));
seq__38269_38945 = G__38987;
chunk__38271_38946 = G__38988;
count__38272_38947 = G__38989;
i__38273_38948 = G__38990;
continue;
} else {
var G__38991 = seq__38269_38945;
var G__38992 = chunk__38271_38946;
var G__38993 = count__38272_38947;
var G__38994 = (i__38273_38948 + (1));
seq__38269_38945 = G__38991;
chunk__38271_38946 = G__38992;
count__38272_38947 = G__38993;
i__38273_38948 = G__38994;
continue;
}
} else {
var temp__5804__auto___38999 = cljs.core.seq(seq__38269_38945);
if(temp__5804__auto___38999){
var seq__38269_39001__$1 = temp__5804__auto___38999;
if(cljs.core.chunked_seq_QMARK_(seq__38269_39001__$1)){
var c__5568__auto___39002 = cljs.core.chunk_first(seq__38269_39001__$1);
var G__39004 = cljs.core.chunk_rest(seq__38269_39001__$1);
var G__39005 = c__5568__auto___39002;
var G__39006 = cljs.core.count(c__5568__auto___39002);
var G__39007 = (0);
seq__38269_38945 = G__39004;
chunk__38271_38946 = G__39005;
count__38272_38947 = G__39006;
i__38273_38948 = G__39007;
continue;
} else {
var child_struct_39008 = cljs.core.first(seq__38269_39001__$1);
if((!((child_struct_39008 == null)))){
if(typeof child_struct_39008 === 'string'){
var text_39013 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39013),child_struct_39008].join(''));
} else {
var children_39014 = shadow.dom.svg_node(child_struct_39008);
if(cljs.core.seq_QMARK_(children_39014)){
var seq__38311_39015 = cljs.core.seq(children_39014);
var chunk__38313_39016 = null;
var count__38314_39017 = (0);
var i__38315_39018 = (0);
while(true){
if((i__38315_39018 < count__38314_39017)){
var child_39019 = chunk__38313_39016.cljs$core$IIndexed$_nth$arity$2(null,i__38315_39018);
if(cljs.core.truth_(child_39019)){
node.appendChild(child_39019);


var G__39020 = seq__38311_39015;
var G__39021 = chunk__38313_39016;
var G__39022 = count__38314_39017;
var G__39023 = (i__38315_39018 + (1));
seq__38311_39015 = G__39020;
chunk__38313_39016 = G__39021;
count__38314_39017 = G__39022;
i__38315_39018 = G__39023;
continue;
} else {
var G__39024 = seq__38311_39015;
var G__39025 = chunk__38313_39016;
var G__39026 = count__38314_39017;
var G__39027 = (i__38315_39018 + (1));
seq__38311_39015 = G__39024;
chunk__38313_39016 = G__39025;
count__38314_39017 = G__39026;
i__38315_39018 = G__39027;
continue;
}
} else {
var temp__5804__auto___39028__$1 = cljs.core.seq(seq__38311_39015);
if(temp__5804__auto___39028__$1){
var seq__38311_39029__$1 = temp__5804__auto___39028__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38311_39029__$1)){
var c__5568__auto___39030 = cljs.core.chunk_first(seq__38311_39029__$1);
var G__39031 = cljs.core.chunk_rest(seq__38311_39029__$1);
var G__39032 = c__5568__auto___39030;
var G__39033 = cljs.core.count(c__5568__auto___39030);
var G__39034 = (0);
seq__38311_39015 = G__39031;
chunk__38313_39016 = G__39032;
count__38314_39017 = G__39033;
i__38315_39018 = G__39034;
continue;
} else {
var child_39038 = cljs.core.first(seq__38311_39029__$1);
if(cljs.core.truth_(child_39038)){
node.appendChild(child_39038);


var G__39039 = cljs.core.next(seq__38311_39029__$1);
var G__39040 = null;
var G__39041 = (0);
var G__39042 = (0);
seq__38311_39015 = G__39039;
chunk__38313_39016 = G__39040;
count__38314_39017 = G__39041;
i__38315_39018 = G__39042;
continue;
} else {
var G__39046 = cljs.core.next(seq__38311_39029__$1);
var G__39047 = null;
var G__39048 = (0);
var G__39049 = (0);
seq__38311_39015 = G__39046;
chunk__38313_39016 = G__39047;
count__38314_39017 = G__39048;
i__38315_39018 = G__39049;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39014);
}
}


var G__39050 = cljs.core.next(seq__38269_39001__$1);
var G__39051 = null;
var G__39052 = (0);
var G__39053 = (0);
seq__38269_38945 = G__39050;
chunk__38271_38946 = G__39051;
count__38272_38947 = G__39052;
i__38273_38948 = G__39053;
continue;
} else {
var G__39054 = cljs.core.next(seq__38269_39001__$1);
var G__39055 = null;
var G__39056 = (0);
var G__39057 = (0);
seq__38269_38945 = G__39054;
chunk__38271_38946 = G__39055;
count__38272_38947 = G__39056;
i__38273_38948 = G__39057;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39058 = arguments.length;
var i__5770__auto___39059 = (0);
while(true){
if((i__5770__auto___39059 < len__5769__auto___39058)){
args__5775__auto__.push((arguments[i__5770__auto___39059]));

var G__39060 = (i__5770__auto___39059 + (1));
i__5770__auto___39059 = G__39060;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38324){
var G__38325 = cljs.core.first(seq38324);
var seq38324__$1 = cljs.core.next(seq38324);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38325,seq38324__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38336 = arguments.length;
switch (G__38336) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33679__auto___39063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_38377){
var state_val_38378 = (state_38377[(1)]);
if((state_val_38378 === (1))){
var state_38377__$1 = state_38377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38377__$1,(2),once_or_cleanup);
} else {
if((state_val_38378 === (2))){
var inst_38374 = (state_38377[(2)]);
var inst_38375 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38377__$1 = (function (){var statearr_38379 = state_38377;
(statearr_38379[(7)] = inst_38374);

return statearr_38379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38377__$1,inst_38375);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33364__auto__ = null;
var shadow$dom$state_machine__33364__auto____0 = (function (){
var statearr_38380 = [null,null,null,null,null,null,null,null];
(statearr_38380[(0)] = shadow$dom$state_machine__33364__auto__);

(statearr_38380[(1)] = (1));

return statearr_38380;
});
var shadow$dom$state_machine__33364__auto____1 = (function (state_38377){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_38377);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e38381){var ex__33367__auto__ = e38381;
var statearr_38382_39064 = state_38377;
(statearr_38382_39064[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_38377[(4)]))){
var statearr_38383_39065 = state_38377;
(statearr_38383_39065[(1)] = cljs.core.first((state_38377[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39066 = state_38377;
state_38377 = G__39066;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
shadow$dom$state_machine__33364__auto__ = function(state_38377){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33364__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33364__auto____1.call(this,state_38377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33364__auto____0;
shadow$dom$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33364__auto____1;
return shadow$dom$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_38388 = f__33680__auto__();
(statearr_38388[(6)] = c__33679__auto___39063);

return statearr_38388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33906){
var map__33907 = p__33906;
var map__33907__$1 = cljs.core.__destructure_map(map__33907);
var runtime = map__33907__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33907__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_34190 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_34190)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__33920 = runtime;
var G__33921 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_34190);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__33920,G__33921) : shadow.remote.runtime.shared.process.call(null,G__33920,G__33921));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33940,res){
var map__33944 = p__33940;
var map__33944__$1 = cljs.core.__destructure_map(map__33944);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33944__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33944__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33949 = res;
var G__33949__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33949,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33949);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33949__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33949__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33958 = arguments.length;
switch (G__33958) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33967,msg,handlers,timeout_after_ms){
var map__33969 = p__33967;
var map__33969__$1 = cljs.core.__destructure_map(map__33969);
var runtime = map__33969__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33969__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34201 = arguments.length;
var i__5770__auto___34203 = (0);
while(true){
if((i__5770__auto___34203 < len__5769__auto___34201)){
args__5775__auto__.push((arguments[i__5770__auto___34203]));

var G__34204 = (i__5770__auto___34203 + (1));
i__5770__auto___34203 = G__34204;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33989,ev,args){
var map__33991 = p__33989;
var map__33991__$1 = cljs.core.__destructure_map(map__33991);
var runtime = map__33991__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33991__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33992 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33995 = null;
var count__33996 = (0);
var i__33997 = (0);
while(true){
if((i__33997 < count__33996)){
var ext = chunk__33995.cljs$core$IIndexed$_nth$arity$2(null,i__33997);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34208 = seq__33992;
var G__34209 = chunk__33995;
var G__34210 = count__33996;
var G__34211 = (i__33997 + (1));
seq__33992 = G__34208;
chunk__33995 = G__34209;
count__33996 = G__34210;
i__33997 = G__34211;
continue;
} else {
var G__34212 = seq__33992;
var G__34213 = chunk__33995;
var G__34214 = count__33996;
var G__34215 = (i__33997 + (1));
seq__33992 = G__34212;
chunk__33995 = G__34213;
count__33996 = G__34214;
i__33997 = G__34215;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33992);
if(temp__5804__auto__){
var seq__33992__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33992__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33992__$1);
var G__34218 = cljs.core.chunk_rest(seq__33992__$1);
var G__34219 = c__5568__auto__;
var G__34220 = cljs.core.count(c__5568__auto__);
var G__34221 = (0);
seq__33992 = G__34218;
chunk__33995 = G__34219;
count__33996 = G__34220;
i__33997 = G__34221;
continue;
} else {
var ext = cljs.core.first(seq__33992__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34223 = cljs.core.next(seq__33992__$1);
var G__34224 = null;
var G__34225 = (0);
var G__34226 = (0);
seq__33992 = G__34223;
chunk__33995 = G__34224;
count__33996 = G__34225;
i__33997 = G__34226;
continue;
} else {
var G__34228 = cljs.core.next(seq__33992__$1);
var G__34229 = null;
var G__34230 = (0);
var G__34231 = (0);
seq__33992 = G__34228;
chunk__33995 = G__34229;
count__33996 = G__34230;
i__33997 = G__34231;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33978){
var G__33979 = cljs.core.first(seq33978);
var seq33978__$1 = cljs.core.next(seq33978);
var G__33980 = cljs.core.first(seq33978__$1);
var seq33978__$2 = cljs.core.next(seq33978__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33979,G__33980,seq33978__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34017,p__34018){
var map__34019 = p__34017;
var map__34019__$1 = cljs.core.__destructure_map(map__34019);
var runtime = map__34019__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34019__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34020 = p__34018;
var map__34020__$1 = cljs.core.__destructure_map(map__34020);
var msg = map__34020__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34020__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34025 = cljs.core.deref(state_ref);
var map__34025__$1 = cljs.core.__destructure_map(map__34025);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34025__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34025__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34035,msg){
var map__34036 = p__34035;
var map__34036__$1 = cljs.core.__destructure_map(map__34036);
var runtime = map__34036__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34036__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34056,key,p__34057){
var map__34061 = p__34056;
var map__34061__$1 = cljs.core.__destructure_map(map__34061);
var state = map__34061__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34061__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34062 = p__34057;
var map__34062__$1 = cljs.core.__destructure_map(map__34062);
var spec = map__34062__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34062__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34081,key,spec){
var map__34082 = p__34081;
var map__34082__$1 = cljs.core.__destructure_map(map__34082);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34082__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34083_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34083_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34084_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34084_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34085_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34085_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34086_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34086_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34087_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34087_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34098,key){
var map__34099 = p__34098;
var map__34099__$1 = cljs.core.__destructure_map(map__34099);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34099__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34104,msg){
var map__34105 = p__34104;
var map__34105__$1 = cljs.core.__destructure_map(map__34105);
var runtime = map__34105__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34105__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34124,p__34125){
var map__34126 = p__34124;
var map__34126__$1 = cljs.core.__destructure_map(map__34126);
var runtime = map__34126__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34126__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34127 = p__34125;
var map__34127__$1 = cljs.core.__destructure_map(map__34127);
var msg = map__34127__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34127__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34127__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34139 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34141 = null;
var count__34142 = (0);
var i__34143 = (0);
while(true){
if((i__34143 < count__34142)){
var map__34165 = chunk__34141.cljs$core$IIndexed$_nth$arity$2(null,i__34143);
var map__34165__$1 = cljs.core.__destructure_map(map__34165);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34165__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34300 = seq__34139;
var G__34301 = chunk__34141;
var G__34302 = count__34142;
var G__34303 = (i__34143 + (1));
seq__34139 = G__34300;
chunk__34141 = G__34301;
count__34142 = G__34302;
i__34143 = G__34303;
continue;
} else {
var G__34305 = seq__34139;
var G__34306 = chunk__34141;
var G__34307 = count__34142;
var G__34308 = (i__34143 + (1));
seq__34139 = G__34305;
chunk__34141 = G__34306;
count__34142 = G__34307;
i__34143 = G__34308;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34139);
if(temp__5804__auto__){
var seq__34139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34139__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34139__$1);
var G__34309 = cljs.core.chunk_rest(seq__34139__$1);
var G__34310 = c__5568__auto__;
var G__34311 = cljs.core.count(c__5568__auto__);
var G__34312 = (0);
seq__34139 = G__34309;
chunk__34141 = G__34310;
count__34142 = G__34311;
i__34143 = G__34312;
continue;
} else {
var map__34175 = cljs.core.first(seq__34139__$1);
var map__34175__$1 = cljs.core.__destructure_map(map__34175);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34175__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34315 = cljs.core.next(seq__34139__$1);
var G__34316 = null;
var G__34317 = (0);
var G__34318 = (0);
seq__34139 = G__34315;
chunk__34141 = G__34316;
count__34142 = G__34317;
i__34143 = G__34318;
continue;
} else {
var G__34319 = cljs.core.next(seq__34139__$1);
var G__34320 = null;
var G__34321 = (0);
var G__34322 = (0);
seq__34139 = G__34319;
chunk__34141 = G__34320;
count__34142 = G__34321;
i__34143 = G__34322;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

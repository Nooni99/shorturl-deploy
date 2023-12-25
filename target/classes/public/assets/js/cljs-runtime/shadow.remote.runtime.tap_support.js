goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40013,p__40014){
var map__40018 = p__40013;
var map__40018__$1 = cljs.core.__destructure_map(map__40018);
var svc = map__40018__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40019 = p__40014;
var map__40019__$1 = cljs.core.__destructure_map(map__40019);
var msg = map__40019__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40019__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40019__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40019__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40019__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40021,p__40022){
var map__40023 = p__40021;
var map__40023__$1 = cljs.core.__destructure_map(map__40023);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40023__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40024 = p__40022;
var map__40024__$1 = cljs.core.__destructure_map(map__40024);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40025,p__40026){
var map__40027 = p__40025;
var map__40027__$1 = cljs.core.__destructure_map(map__40027);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40027__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40027__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40028 = p__40026;
var map__40028__$1 = cljs.core.__destructure_map(map__40028);
var msg = map__40028__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40028__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40029,tid){
var map__40030 = p__40029;
var map__40030__$1 = cljs.core.__destructure_map(map__40030);
var svc = map__40030__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40030__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40035 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40036 = null;
var count__40037 = (0);
var i__40038 = (0);
while(true){
if((i__40038 < count__40037)){
var vec__40051 = chunk__40036.cljs$core$IIndexed$_nth$arity$2(null,i__40038);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40051,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40051,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40076 = seq__40035;
var G__40077 = chunk__40036;
var G__40078 = count__40037;
var G__40079 = (i__40038 + (1));
seq__40035 = G__40076;
chunk__40036 = G__40077;
count__40037 = G__40078;
i__40038 = G__40079;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40035);
if(temp__5804__auto__){
var seq__40035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40035__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40035__$1);
var G__40080 = cljs.core.chunk_rest(seq__40035__$1);
var G__40081 = c__5568__auto__;
var G__40082 = cljs.core.count(c__5568__auto__);
var G__40083 = (0);
seq__40035 = G__40080;
chunk__40036 = G__40081;
count__40037 = G__40082;
i__40038 = G__40083;
continue;
} else {
var vec__40057 = cljs.core.first(seq__40035__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40057,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40057,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40084 = cljs.core.next(seq__40035__$1);
var G__40085 = null;
var G__40086 = (0);
var G__40087 = (0);
seq__40035 = G__40084;
chunk__40036 = G__40085;
count__40037 = G__40086;
i__40038 = G__40087;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40031_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40031_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40032_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40032_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40033_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40033_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40034_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40034_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40073){
var map__40074 = p__40073;
var map__40074__$1 = cljs.core.__destructure_map(map__40074);
var svc = map__40074__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40074__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40074__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41621 = arguments.length;
var i__5770__auto___41622 = (0);
while(true){
if((i__5770__auto___41622 < len__5769__auto___41621)){
args__5775__auto__.push((arguments[i__5770__auto___41622]));

var G__41623 = (i__5770__auto___41622 + (1));
i__5770__auto___41622 = G__41623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40541){
var G__40542 = cljs.core.first(seq40541);
var seq40541__$1 = cljs.core.next(seq40541);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40542,seq40541__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40545 = cljs.core.seq(sources);
var chunk__40546 = null;
var count__40547 = (0);
var i__40548 = (0);
while(true){
if((i__40548 < count__40547)){
var map__40555 = chunk__40546.cljs$core$IIndexed$_nth$arity$2(null,i__40548);
var map__40555__$1 = cljs.core.__destructure_map(map__40555);
var src = map__40555__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40555__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40555__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40555__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40555__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40556){var e_41626 = e40556;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41626);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41626.message)].join('')));
}

var G__41627 = seq__40545;
var G__41628 = chunk__40546;
var G__41629 = count__40547;
var G__41630 = (i__40548 + (1));
seq__40545 = G__41627;
chunk__40546 = G__41628;
count__40547 = G__41629;
i__40548 = G__41630;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40545);
if(temp__5804__auto__){
var seq__40545__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40545__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40545__$1);
var G__41631 = cljs.core.chunk_rest(seq__40545__$1);
var G__41632 = c__5568__auto__;
var G__41633 = cljs.core.count(c__5568__auto__);
var G__41634 = (0);
seq__40545 = G__41631;
chunk__40546 = G__41632;
count__40547 = G__41633;
i__40548 = G__41634;
continue;
} else {
var map__40561 = cljs.core.first(seq__40545__$1);
var map__40561__$1 = cljs.core.__destructure_map(map__40561);
var src = map__40561__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40561__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40561__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40561__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40561__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40563){var e_41639 = e40563;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41639);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41639.message)].join('')));
}

var G__41640 = cljs.core.next(seq__40545__$1);
var G__41641 = null;
var G__41642 = (0);
var G__41643 = (0);
seq__40545 = G__41640;
chunk__40546 = G__41641;
count__40547 = G__41642;
i__40548 = G__41643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40569 = cljs.core.seq(js_requires);
var chunk__40570 = null;
var count__40571 = (0);
var i__40572 = (0);
while(true){
if((i__40572 < count__40571)){
var js_ns = chunk__40570.cljs$core$IIndexed$_nth$arity$2(null,i__40572);
var require_str_41644 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41644);


var G__41645 = seq__40569;
var G__41646 = chunk__40570;
var G__41647 = count__40571;
var G__41648 = (i__40572 + (1));
seq__40569 = G__41645;
chunk__40570 = G__41646;
count__40571 = G__41647;
i__40572 = G__41648;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40569);
if(temp__5804__auto__){
var seq__40569__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40569__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40569__$1);
var G__41649 = cljs.core.chunk_rest(seq__40569__$1);
var G__41650 = c__5568__auto__;
var G__41651 = cljs.core.count(c__5568__auto__);
var G__41652 = (0);
seq__40569 = G__41649;
chunk__40570 = G__41650;
count__40571 = G__41651;
i__40572 = G__41652;
continue;
} else {
var js_ns = cljs.core.first(seq__40569__$1);
var require_str_41653 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41653);


var G__41654 = cljs.core.next(seq__40569__$1);
var G__41655 = null;
var G__41656 = (0);
var G__41657 = (0);
seq__40569 = G__41654;
chunk__40570 = G__41655;
count__40571 = G__41656;
i__40572 = G__41657;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40604){
var map__40605 = p__40604;
var map__40605__$1 = cljs.core.__destructure_map(map__40605);
var msg = map__40605__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40605__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40605__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40606(s__40607){
return (new cljs.core.LazySeq(null,(function (){
var s__40607__$1 = s__40607;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40607__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__40612 = cljs.core.first(xs__6360__auto__);
var map__40612__$1 = cljs.core.__destructure_map(map__40612);
var src = map__40612__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40612__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40612__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__40607__$1,map__40612,map__40612__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40605,map__40605__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40606_$_iter__40608(s__40609){
return (new cljs.core.LazySeq(null,((function (s__40607__$1,map__40612,map__40612__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40605,map__40605__$1,msg,info,reload_info){
return (function (){
var s__40609__$1 = s__40609;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40609__$1);
if(temp__5804__auto____$1){
var s__40609__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40609__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40609__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40611 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40610 = (0);
while(true){
if((i__40610 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__40610);
cljs.core.chunk_append(b__40611,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41662 = (i__40610 + (1));
i__40610 = G__41662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40611),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40606_$_iter__40608(cljs.core.chunk_rest(s__40609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40611),null);
}
} else {
var warning = cljs.core.first(s__40609__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40606_$_iter__40608(cljs.core.rest(s__40609__$2)));
}
} else {
return null;
}
break;
}
});})(s__40607__$1,map__40612,map__40612__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40605,map__40605__$1,msg,info,reload_info))
,null,null));
});})(s__40607__$1,map__40612,map__40612__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40605,map__40605__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40606(cljs.core.rest(s__40607__$1)));
} else {
var G__41663 = cljs.core.rest(s__40607__$1);
s__40607__$1 = G__41663;
continue;
}
} else {
var G__41664 = cljs.core.rest(s__40607__$1);
s__40607__$1 = G__41664;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40639_41665 = cljs.core.seq(warnings);
var chunk__40640_41666 = null;
var count__40641_41667 = (0);
var i__40642_41668 = (0);
while(true){
if((i__40642_41668 < count__40641_41667)){
var map__40661_41669 = chunk__40640_41666.cljs$core$IIndexed$_nth$arity$2(null,i__40642_41668);
var map__40661_41670__$1 = cljs.core.__destructure_map(map__40661_41669);
var w_41671 = map__40661_41670__$1;
var msg_41672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40661_41670__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40661_41670__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40661_41670__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40661_41670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41675)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41673),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41674),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41672__$1)].join(''));


var G__41678 = seq__40639_41665;
var G__41679 = chunk__40640_41666;
var G__41680 = count__40641_41667;
var G__41681 = (i__40642_41668 + (1));
seq__40639_41665 = G__41678;
chunk__40640_41666 = G__41679;
count__40641_41667 = G__41680;
i__40642_41668 = G__41681;
continue;
} else {
var temp__5804__auto___41682 = cljs.core.seq(seq__40639_41665);
if(temp__5804__auto___41682){
var seq__40639_41683__$1 = temp__5804__auto___41682;
if(cljs.core.chunked_seq_QMARK_(seq__40639_41683__$1)){
var c__5568__auto___41684 = cljs.core.chunk_first(seq__40639_41683__$1);
var G__41685 = cljs.core.chunk_rest(seq__40639_41683__$1);
var G__41686 = c__5568__auto___41684;
var G__41687 = cljs.core.count(c__5568__auto___41684);
var G__41688 = (0);
seq__40639_41665 = G__41685;
chunk__40640_41666 = G__41686;
count__40641_41667 = G__41687;
i__40642_41668 = G__41688;
continue;
} else {
var map__40667_41689 = cljs.core.first(seq__40639_41683__$1);
var map__40667_41690__$1 = cljs.core.__destructure_map(map__40667_41689);
var w_41691 = map__40667_41690__$1;
var msg_41692__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40667_41690__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40667_41690__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40667_41690__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40667_41690__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41695)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41693),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41694),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41692__$1)].join(''));


var G__41696 = cljs.core.next(seq__40639_41683__$1);
var G__41697 = null;
var G__41698 = (0);
var G__41699 = (0);
seq__40639_41665 = G__41696;
chunk__40640_41666 = G__41697;
count__40641_41667 = G__41698;
i__40642_41668 = G__41699;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40603_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40603_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40727){
var map__40728 = p__40727;
var map__40728__$1 = cljs.core.__destructure_map(map__40728);
var msg = map__40728__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40728__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40728__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40730 = cljs.core.seq(updates);
var chunk__40732 = null;
var count__40733 = (0);
var i__40734 = (0);
while(true){
if((i__40734 < count__40733)){
var path = chunk__40732.cljs$core$IIndexed$_nth$arity$2(null,i__40734);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41207_41700 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41211_41701 = null;
var count__41212_41702 = (0);
var i__41213_41703 = (0);
while(true){
if((i__41213_41703 < count__41212_41702)){
var node_41704 = chunk__41211_41701.cljs$core$IIndexed$_nth$arity$2(null,i__41213_41703);
if(cljs.core.not(node_41704.shadow$old)){
var path_match_41705 = shadow.cljs.devtools.client.browser.match_paths(node_41704.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41705)){
var new_link_41706 = (function (){var G__41270 = node_41704.cloneNode(true);
G__41270.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41705),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41270;
})();
(node_41704.shadow$old = true);

(new_link_41706.onload = ((function (seq__41207_41700,chunk__41211_41701,count__41212_41702,i__41213_41703,seq__40730,chunk__40732,count__40733,i__40734,new_link_41706,path_match_41705,node_41704,path,map__40728,map__40728__$1,msg,updates,reload_info){
return (function (e){
var seq__41271_41707 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41273_41708 = null;
var count__41274_41709 = (0);
var i__41275_41710 = (0);
while(true){
if((i__41275_41710 < count__41274_41709)){
var map__41297_41711 = chunk__41273_41708.cljs$core$IIndexed$_nth$arity$2(null,i__41275_41710);
var map__41297_41712__$1 = cljs.core.__destructure_map(map__41297_41711);
var task_41713 = map__41297_41712__$1;
var fn_str_41714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41297_41712__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41297_41712__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41716 = goog.getObjectByName(fn_str_41714,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41715)].join(''));

(fn_obj_41716.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41716.cljs$core$IFn$_invoke$arity$2(path,new_link_41706) : fn_obj_41716.call(null,path,new_link_41706));


var G__41717 = seq__41271_41707;
var G__41718 = chunk__41273_41708;
var G__41719 = count__41274_41709;
var G__41720 = (i__41275_41710 + (1));
seq__41271_41707 = G__41717;
chunk__41273_41708 = G__41718;
count__41274_41709 = G__41719;
i__41275_41710 = G__41720;
continue;
} else {
var temp__5804__auto___41721 = cljs.core.seq(seq__41271_41707);
if(temp__5804__auto___41721){
var seq__41271_41722__$1 = temp__5804__auto___41721;
if(cljs.core.chunked_seq_QMARK_(seq__41271_41722__$1)){
var c__5568__auto___41723 = cljs.core.chunk_first(seq__41271_41722__$1);
var G__41724 = cljs.core.chunk_rest(seq__41271_41722__$1);
var G__41725 = c__5568__auto___41723;
var G__41726 = cljs.core.count(c__5568__auto___41723);
var G__41727 = (0);
seq__41271_41707 = G__41724;
chunk__41273_41708 = G__41725;
count__41274_41709 = G__41726;
i__41275_41710 = G__41727;
continue;
} else {
var map__41298_41728 = cljs.core.first(seq__41271_41722__$1);
var map__41298_41729__$1 = cljs.core.__destructure_map(map__41298_41728);
var task_41730 = map__41298_41729__$1;
var fn_str_41731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41298_41729__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41298_41729__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41733 = goog.getObjectByName(fn_str_41731,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41732)].join(''));

(fn_obj_41733.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41733.cljs$core$IFn$_invoke$arity$2(path,new_link_41706) : fn_obj_41733.call(null,path,new_link_41706));


var G__41734 = cljs.core.next(seq__41271_41722__$1);
var G__41735 = null;
var G__41736 = (0);
var G__41737 = (0);
seq__41271_41707 = G__41734;
chunk__41273_41708 = G__41735;
count__41274_41709 = G__41736;
i__41275_41710 = G__41737;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41704);
});})(seq__41207_41700,chunk__41211_41701,count__41212_41702,i__41213_41703,seq__40730,chunk__40732,count__40733,i__40734,new_link_41706,path_match_41705,node_41704,path,map__40728,map__40728__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41705], 0));

goog.dom.insertSiblingAfter(new_link_41706,node_41704);


var G__41738 = seq__41207_41700;
var G__41739 = chunk__41211_41701;
var G__41740 = count__41212_41702;
var G__41741 = (i__41213_41703 + (1));
seq__41207_41700 = G__41738;
chunk__41211_41701 = G__41739;
count__41212_41702 = G__41740;
i__41213_41703 = G__41741;
continue;
} else {
var G__41742 = seq__41207_41700;
var G__41743 = chunk__41211_41701;
var G__41744 = count__41212_41702;
var G__41745 = (i__41213_41703 + (1));
seq__41207_41700 = G__41742;
chunk__41211_41701 = G__41743;
count__41212_41702 = G__41744;
i__41213_41703 = G__41745;
continue;
}
} else {
var G__41746 = seq__41207_41700;
var G__41747 = chunk__41211_41701;
var G__41748 = count__41212_41702;
var G__41749 = (i__41213_41703 + (1));
seq__41207_41700 = G__41746;
chunk__41211_41701 = G__41747;
count__41212_41702 = G__41748;
i__41213_41703 = G__41749;
continue;
}
} else {
var temp__5804__auto___41750 = cljs.core.seq(seq__41207_41700);
if(temp__5804__auto___41750){
var seq__41207_41751__$1 = temp__5804__auto___41750;
if(cljs.core.chunked_seq_QMARK_(seq__41207_41751__$1)){
var c__5568__auto___41752 = cljs.core.chunk_first(seq__41207_41751__$1);
var G__41753 = cljs.core.chunk_rest(seq__41207_41751__$1);
var G__41754 = c__5568__auto___41752;
var G__41755 = cljs.core.count(c__5568__auto___41752);
var G__41756 = (0);
seq__41207_41700 = G__41753;
chunk__41211_41701 = G__41754;
count__41212_41702 = G__41755;
i__41213_41703 = G__41756;
continue;
} else {
var node_41757 = cljs.core.first(seq__41207_41751__$1);
if(cljs.core.not(node_41757.shadow$old)){
var path_match_41758 = shadow.cljs.devtools.client.browser.match_paths(node_41757.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41758)){
var new_link_41759 = (function (){var G__41300 = node_41757.cloneNode(true);
G__41300.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41758),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41300;
})();
(node_41757.shadow$old = true);

(new_link_41759.onload = ((function (seq__41207_41700,chunk__41211_41701,count__41212_41702,i__41213_41703,seq__40730,chunk__40732,count__40733,i__40734,new_link_41759,path_match_41758,node_41757,seq__41207_41751__$1,temp__5804__auto___41750,path,map__40728,map__40728__$1,msg,updates,reload_info){
return (function (e){
var seq__41301_41760 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41303_41761 = null;
var count__41304_41762 = (0);
var i__41305_41763 = (0);
while(true){
if((i__41305_41763 < count__41304_41762)){
var map__41312_41764 = chunk__41303_41761.cljs$core$IIndexed$_nth$arity$2(null,i__41305_41763);
var map__41312_41765__$1 = cljs.core.__destructure_map(map__41312_41764);
var task_41766 = map__41312_41765__$1;
var fn_str_41767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41312_41765__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41312_41765__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41769 = goog.getObjectByName(fn_str_41767,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41768)].join(''));

(fn_obj_41769.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41769.cljs$core$IFn$_invoke$arity$2(path,new_link_41759) : fn_obj_41769.call(null,path,new_link_41759));


var G__41770 = seq__41301_41760;
var G__41771 = chunk__41303_41761;
var G__41772 = count__41304_41762;
var G__41773 = (i__41305_41763 + (1));
seq__41301_41760 = G__41770;
chunk__41303_41761 = G__41771;
count__41304_41762 = G__41772;
i__41305_41763 = G__41773;
continue;
} else {
var temp__5804__auto___41774__$1 = cljs.core.seq(seq__41301_41760);
if(temp__5804__auto___41774__$1){
var seq__41301_41775__$1 = temp__5804__auto___41774__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41301_41775__$1)){
var c__5568__auto___41776 = cljs.core.chunk_first(seq__41301_41775__$1);
var G__41777 = cljs.core.chunk_rest(seq__41301_41775__$1);
var G__41778 = c__5568__auto___41776;
var G__41779 = cljs.core.count(c__5568__auto___41776);
var G__41780 = (0);
seq__41301_41760 = G__41777;
chunk__41303_41761 = G__41778;
count__41304_41762 = G__41779;
i__41305_41763 = G__41780;
continue;
} else {
var map__41313_41781 = cljs.core.first(seq__41301_41775__$1);
var map__41313_41782__$1 = cljs.core.__destructure_map(map__41313_41781);
var task_41783 = map__41313_41782__$1;
var fn_str_41784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41313_41782__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41313_41782__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41786 = goog.getObjectByName(fn_str_41784,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41785)].join(''));

(fn_obj_41786.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41786.cljs$core$IFn$_invoke$arity$2(path,new_link_41759) : fn_obj_41786.call(null,path,new_link_41759));


var G__41787 = cljs.core.next(seq__41301_41775__$1);
var G__41788 = null;
var G__41789 = (0);
var G__41790 = (0);
seq__41301_41760 = G__41787;
chunk__41303_41761 = G__41788;
count__41304_41762 = G__41789;
i__41305_41763 = G__41790;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41757);
});})(seq__41207_41700,chunk__41211_41701,count__41212_41702,i__41213_41703,seq__40730,chunk__40732,count__40733,i__40734,new_link_41759,path_match_41758,node_41757,seq__41207_41751__$1,temp__5804__auto___41750,path,map__40728,map__40728__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41758], 0));

goog.dom.insertSiblingAfter(new_link_41759,node_41757);


var G__41791 = cljs.core.next(seq__41207_41751__$1);
var G__41792 = null;
var G__41793 = (0);
var G__41794 = (0);
seq__41207_41700 = G__41791;
chunk__41211_41701 = G__41792;
count__41212_41702 = G__41793;
i__41213_41703 = G__41794;
continue;
} else {
var G__41795 = cljs.core.next(seq__41207_41751__$1);
var G__41796 = null;
var G__41797 = (0);
var G__41798 = (0);
seq__41207_41700 = G__41795;
chunk__41211_41701 = G__41796;
count__41212_41702 = G__41797;
i__41213_41703 = G__41798;
continue;
}
} else {
var G__41799 = cljs.core.next(seq__41207_41751__$1);
var G__41800 = null;
var G__41801 = (0);
var G__41802 = (0);
seq__41207_41700 = G__41799;
chunk__41211_41701 = G__41800;
count__41212_41702 = G__41801;
i__41213_41703 = G__41802;
continue;
}
}
} else {
}
}
break;
}


var G__41803 = seq__40730;
var G__41804 = chunk__40732;
var G__41805 = count__40733;
var G__41806 = (i__40734 + (1));
seq__40730 = G__41803;
chunk__40732 = G__41804;
count__40733 = G__41805;
i__40734 = G__41806;
continue;
} else {
var G__41807 = seq__40730;
var G__41808 = chunk__40732;
var G__41809 = count__40733;
var G__41810 = (i__40734 + (1));
seq__40730 = G__41807;
chunk__40732 = G__41808;
count__40733 = G__41809;
i__40734 = G__41810;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40730);
if(temp__5804__auto__){
var seq__40730__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40730__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40730__$1);
var G__41811 = cljs.core.chunk_rest(seq__40730__$1);
var G__41812 = c__5568__auto__;
var G__41813 = cljs.core.count(c__5568__auto__);
var G__41814 = (0);
seq__40730 = G__41811;
chunk__40732 = G__41812;
count__40733 = G__41813;
i__40734 = G__41814;
continue;
} else {
var path = cljs.core.first(seq__40730__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41319_41815 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41323_41816 = null;
var count__41324_41817 = (0);
var i__41325_41818 = (0);
while(true){
if((i__41325_41818 < count__41324_41817)){
var node_41819 = chunk__41323_41816.cljs$core$IIndexed$_nth$arity$2(null,i__41325_41818);
if(cljs.core.not(node_41819.shadow$old)){
var path_match_41861 = shadow.cljs.devtools.client.browser.match_paths(node_41819.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41861)){
var new_link_41862 = (function (){var G__41438 = node_41819.cloneNode(true);
G__41438.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41861),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41438;
})();
(node_41819.shadow$old = true);

(new_link_41862.onload = ((function (seq__41319_41815,chunk__41323_41816,count__41324_41817,i__41325_41818,seq__40730,chunk__40732,count__40733,i__40734,new_link_41862,path_match_41861,node_41819,path,seq__40730__$1,temp__5804__auto__,map__40728,map__40728__$1,msg,updates,reload_info){
return (function (e){
var seq__41439_41863 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41441_41864 = null;
var count__41442_41865 = (0);
var i__41443_41866 = (0);
while(true){
if((i__41443_41866 < count__41442_41865)){
var map__41467_41867 = chunk__41441_41864.cljs$core$IIndexed$_nth$arity$2(null,i__41443_41866);
var map__41467_41868__$1 = cljs.core.__destructure_map(map__41467_41867);
var task_41869 = map__41467_41868__$1;
var fn_str_41870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467_41868__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467_41868__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41872 = goog.getObjectByName(fn_str_41870,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41871)].join(''));

(fn_obj_41872.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41872.cljs$core$IFn$_invoke$arity$2(path,new_link_41862) : fn_obj_41872.call(null,path,new_link_41862));


var G__41873 = seq__41439_41863;
var G__41874 = chunk__41441_41864;
var G__41875 = count__41442_41865;
var G__41876 = (i__41443_41866 + (1));
seq__41439_41863 = G__41873;
chunk__41441_41864 = G__41874;
count__41442_41865 = G__41875;
i__41443_41866 = G__41876;
continue;
} else {
var temp__5804__auto___41877__$1 = cljs.core.seq(seq__41439_41863);
if(temp__5804__auto___41877__$1){
var seq__41439_41878__$1 = temp__5804__auto___41877__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41439_41878__$1)){
var c__5568__auto___41879 = cljs.core.chunk_first(seq__41439_41878__$1);
var G__41880 = cljs.core.chunk_rest(seq__41439_41878__$1);
var G__41881 = c__5568__auto___41879;
var G__41882 = cljs.core.count(c__5568__auto___41879);
var G__41883 = (0);
seq__41439_41863 = G__41880;
chunk__41441_41864 = G__41881;
count__41442_41865 = G__41882;
i__41443_41866 = G__41883;
continue;
} else {
var map__41471_41884 = cljs.core.first(seq__41439_41878__$1);
var map__41471_41885__$1 = cljs.core.__destructure_map(map__41471_41884);
var task_41886 = map__41471_41885__$1;
var fn_str_41887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41471_41885__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41471_41885__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41889 = goog.getObjectByName(fn_str_41887,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41888)].join(''));

(fn_obj_41889.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41889.cljs$core$IFn$_invoke$arity$2(path,new_link_41862) : fn_obj_41889.call(null,path,new_link_41862));


var G__41891 = cljs.core.next(seq__41439_41878__$1);
var G__41892 = null;
var G__41893 = (0);
var G__41894 = (0);
seq__41439_41863 = G__41891;
chunk__41441_41864 = G__41892;
count__41442_41865 = G__41893;
i__41443_41866 = G__41894;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41819);
});})(seq__41319_41815,chunk__41323_41816,count__41324_41817,i__41325_41818,seq__40730,chunk__40732,count__40733,i__40734,new_link_41862,path_match_41861,node_41819,path,seq__40730__$1,temp__5804__auto__,map__40728,map__40728__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41861], 0));

goog.dom.insertSiblingAfter(new_link_41862,node_41819);


var G__41895 = seq__41319_41815;
var G__41896 = chunk__41323_41816;
var G__41897 = count__41324_41817;
var G__41898 = (i__41325_41818 + (1));
seq__41319_41815 = G__41895;
chunk__41323_41816 = G__41896;
count__41324_41817 = G__41897;
i__41325_41818 = G__41898;
continue;
} else {
var G__41899 = seq__41319_41815;
var G__41900 = chunk__41323_41816;
var G__41901 = count__41324_41817;
var G__41902 = (i__41325_41818 + (1));
seq__41319_41815 = G__41899;
chunk__41323_41816 = G__41900;
count__41324_41817 = G__41901;
i__41325_41818 = G__41902;
continue;
}
} else {
var G__41903 = seq__41319_41815;
var G__41904 = chunk__41323_41816;
var G__41905 = count__41324_41817;
var G__41906 = (i__41325_41818 + (1));
seq__41319_41815 = G__41903;
chunk__41323_41816 = G__41904;
count__41324_41817 = G__41905;
i__41325_41818 = G__41906;
continue;
}
} else {
var temp__5804__auto___41907__$1 = cljs.core.seq(seq__41319_41815);
if(temp__5804__auto___41907__$1){
var seq__41319_41908__$1 = temp__5804__auto___41907__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41319_41908__$1)){
var c__5568__auto___41909 = cljs.core.chunk_first(seq__41319_41908__$1);
var G__41910 = cljs.core.chunk_rest(seq__41319_41908__$1);
var G__41911 = c__5568__auto___41909;
var G__41912 = cljs.core.count(c__5568__auto___41909);
var G__41913 = (0);
seq__41319_41815 = G__41910;
chunk__41323_41816 = G__41911;
count__41324_41817 = G__41912;
i__41325_41818 = G__41913;
continue;
} else {
var node_41914 = cljs.core.first(seq__41319_41908__$1);
if(cljs.core.not(node_41914.shadow$old)){
var path_match_41915 = shadow.cljs.devtools.client.browser.match_paths(node_41914.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41915)){
var new_link_41916 = (function (){var G__41476 = node_41914.cloneNode(true);
G__41476.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41915),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41476;
})();
(node_41914.shadow$old = true);

(new_link_41916.onload = ((function (seq__41319_41815,chunk__41323_41816,count__41324_41817,i__41325_41818,seq__40730,chunk__40732,count__40733,i__40734,new_link_41916,path_match_41915,node_41914,seq__41319_41908__$1,temp__5804__auto___41907__$1,path,seq__40730__$1,temp__5804__auto__,map__40728,map__40728__$1,msg,updates,reload_info){
return (function (e){
var seq__41479_41917 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41481_41918 = null;
var count__41482_41919 = (0);
var i__41483_41920 = (0);
while(true){
if((i__41483_41920 < count__41482_41919)){
var map__41513_41921 = chunk__41481_41918.cljs$core$IIndexed$_nth$arity$2(null,i__41483_41920);
var map__41513_41922__$1 = cljs.core.__destructure_map(map__41513_41921);
var task_41923 = map__41513_41922__$1;
var fn_str_41924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41513_41922__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41513_41922__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41926 = goog.getObjectByName(fn_str_41924,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41925)].join(''));

(fn_obj_41926.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41926.cljs$core$IFn$_invoke$arity$2(path,new_link_41916) : fn_obj_41926.call(null,path,new_link_41916));


var G__41927 = seq__41479_41917;
var G__41928 = chunk__41481_41918;
var G__41929 = count__41482_41919;
var G__41930 = (i__41483_41920 + (1));
seq__41479_41917 = G__41927;
chunk__41481_41918 = G__41928;
count__41482_41919 = G__41929;
i__41483_41920 = G__41930;
continue;
} else {
var temp__5804__auto___41931__$2 = cljs.core.seq(seq__41479_41917);
if(temp__5804__auto___41931__$2){
var seq__41479_41932__$1 = temp__5804__auto___41931__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41479_41932__$1)){
var c__5568__auto___41933 = cljs.core.chunk_first(seq__41479_41932__$1);
var G__41934 = cljs.core.chunk_rest(seq__41479_41932__$1);
var G__41935 = c__5568__auto___41933;
var G__41936 = cljs.core.count(c__5568__auto___41933);
var G__41937 = (0);
seq__41479_41917 = G__41934;
chunk__41481_41918 = G__41935;
count__41482_41919 = G__41936;
i__41483_41920 = G__41937;
continue;
} else {
var map__41514_41938 = cljs.core.first(seq__41479_41932__$1);
var map__41514_41939__$1 = cljs.core.__destructure_map(map__41514_41938);
var task_41940 = map__41514_41939__$1;
var fn_str_41941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41514_41939__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41514_41939__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41943 = goog.getObjectByName(fn_str_41941,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41942)].join(''));

(fn_obj_41943.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41943.cljs$core$IFn$_invoke$arity$2(path,new_link_41916) : fn_obj_41943.call(null,path,new_link_41916));


var G__41944 = cljs.core.next(seq__41479_41932__$1);
var G__41945 = null;
var G__41946 = (0);
var G__41947 = (0);
seq__41479_41917 = G__41944;
chunk__41481_41918 = G__41945;
count__41482_41919 = G__41946;
i__41483_41920 = G__41947;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41914);
});})(seq__41319_41815,chunk__41323_41816,count__41324_41817,i__41325_41818,seq__40730,chunk__40732,count__40733,i__40734,new_link_41916,path_match_41915,node_41914,seq__41319_41908__$1,temp__5804__auto___41907__$1,path,seq__40730__$1,temp__5804__auto__,map__40728,map__40728__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41915], 0));

goog.dom.insertSiblingAfter(new_link_41916,node_41914);


var G__41948 = cljs.core.next(seq__41319_41908__$1);
var G__41949 = null;
var G__41950 = (0);
var G__41951 = (0);
seq__41319_41815 = G__41948;
chunk__41323_41816 = G__41949;
count__41324_41817 = G__41950;
i__41325_41818 = G__41951;
continue;
} else {
var G__41952 = cljs.core.next(seq__41319_41908__$1);
var G__41953 = null;
var G__41954 = (0);
var G__41955 = (0);
seq__41319_41815 = G__41952;
chunk__41323_41816 = G__41953;
count__41324_41817 = G__41954;
i__41325_41818 = G__41955;
continue;
}
} else {
var G__41956 = cljs.core.next(seq__41319_41908__$1);
var G__41957 = null;
var G__41958 = (0);
var G__41959 = (0);
seq__41319_41815 = G__41956;
chunk__41323_41816 = G__41957;
count__41324_41817 = G__41958;
i__41325_41818 = G__41959;
continue;
}
}
} else {
}
}
break;
}


var G__41960 = cljs.core.next(seq__40730__$1);
var G__41961 = null;
var G__41962 = (0);
var G__41963 = (0);
seq__40730 = G__41960;
chunk__40732 = G__41961;
count__40733 = G__41962;
i__40734 = G__41963;
continue;
} else {
var G__41964 = cljs.core.next(seq__40730__$1);
var G__41965 = null;
var G__41966 = (0);
var G__41967 = (0);
seq__40730 = G__41964;
chunk__40732 = G__41965;
count__40733 = G__41966;
i__40734 = G__41967;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__41520){
var map__41521 = p__41520;
var map__41521__$1 = cljs.core.__destructure_map(map__41521);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41521__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41534,done,error){
var map__41536 = p__41534;
var map__41536__$1 = cljs.core.__destructure_map(map__41536);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41536__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41546,done,error){
var map__41547 = p__41546;
var map__41547__$1 = cljs.core.__destructure_map(map__41547);
var msg = map__41547__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41547__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41547__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41547__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41548){
var map__41549 = p__41548;
var map__41549__$1 = cljs.core.__destructure_map(map__41549);
var src = map__41549__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41549__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41553 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41553) : done.call(null,G__41553));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41555){
var map__41556 = p__41555;
var map__41556__$1 = cljs.core.__destructure_map(map__41556);
var msg__$1 = map__41556__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41556__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41581){var ex = e41581;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41583){
var map__41584 = p__41583;
var map__41584__$1 = cljs.core.__destructure_map(map__41584);
var env = map__41584__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41584__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41604){
var map__41607 = p__41604;
var map__41607__$1 = cljs.core.__destructure_map(map__41607);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41607__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41607__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__41619){
var map__41620 = p__41619;
var map__41620__$1 = cljs.core.__destructure_map(map__41620);
var svc = map__41620__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41620__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

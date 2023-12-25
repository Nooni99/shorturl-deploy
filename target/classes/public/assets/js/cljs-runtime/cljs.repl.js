goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38412){
var map__38415 = p__38412;
var map__38415__$1 = cljs.core.__destructure_map(map__38415);
var m = map__38415__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38415__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38415__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38418_38849 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38419_38850 = null;
var count__38420_38851 = (0);
var i__38421_38852 = (0);
while(true){
if((i__38421_38852 < count__38420_38851)){
var f_38853 = chunk__38419_38850.cljs$core$IIndexed$_nth$arity$2(null,i__38421_38852);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38853], 0));


var G__38854 = seq__38418_38849;
var G__38855 = chunk__38419_38850;
var G__38856 = count__38420_38851;
var G__38857 = (i__38421_38852 + (1));
seq__38418_38849 = G__38854;
chunk__38419_38850 = G__38855;
count__38420_38851 = G__38856;
i__38421_38852 = G__38857;
continue;
} else {
var temp__5804__auto___38858 = cljs.core.seq(seq__38418_38849);
if(temp__5804__auto___38858){
var seq__38418_38859__$1 = temp__5804__auto___38858;
if(cljs.core.chunked_seq_QMARK_(seq__38418_38859__$1)){
var c__5568__auto___38860 = cljs.core.chunk_first(seq__38418_38859__$1);
var G__38861 = cljs.core.chunk_rest(seq__38418_38859__$1);
var G__38862 = c__5568__auto___38860;
var G__38863 = cljs.core.count(c__5568__auto___38860);
var G__38864 = (0);
seq__38418_38849 = G__38861;
chunk__38419_38850 = G__38862;
count__38420_38851 = G__38863;
i__38421_38852 = G__38864;
continue;
} else {
var f_38865 = cljs.core.first(seq__38418_38859__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38865], 0));


var G__38866 = cljs.core.next(seq__38418_38859__$1);
var G__38867 = null;
var G__38868 = (0);
var G__38869 = (0);
seq__38418_38849 = G__38866;
chunk__38419_38850 = G__38867;
count__38420_38851 = G__38868;
i__38421_38852 = G__38869;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38870 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38870], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38870)))?cljs.core.second(arglists_38870):arglists_38870)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38489_38871 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38490_38872 = null;
var count__38491_38873 = (0);
var i__38492_38874 = (0);
while(true){
if((i__38492_38874 < count__38491_38873)){
var vec__38574_38876 = chunk__38490_38872.cljs$core$IIndexed$_nth$arity$2(null,i__38492_38874);
var name_38878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38574_38876,(0),null);
var map__38577_38879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38574_38876,(1),null);
var map__38577_38880__$1 = cljs.core.__destructure_map(map__38577_38879);
var doc_38881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38577_38880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38577_38880__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38878], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38882], 0));

if(cljs.core.truth_(doc_38881)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38881], 0));
} else {
}


var G__38883 = seq__38489_38871;
var G__38884 = chunk__38490_38872;
var G__38885 = count__38491_38873;
var G__38886 = (i__38492_38874 + (1));
seq__38489_38871 = G__38883;
chunk__38490_38872 = G__38884;
count__38491_38873 = G__38885;
i__38492_38874 = G__38886;
continue;
} else {
var temp__5804__auto___38887 = cljs.core.seq(seq__38489_38871);
if(temp__5804__auto___38887){
var seq__38489_38888__$1 = temp__5804__auto___38887;
if(cljs.core.chunked_seq_QMARK_(seq__38489_38888__$1)){
var c__5568__auto___38889 = cljs.core.chunk_first(seq__38489_38888__$1);
var G__38891 = cljs.core.chunk_rest(seq__38489_38888__$1);
var G__38892 = c__5568__auto___38889;
var G__38893 = cljs.core.count(c__5568__auto___38889);
var G__38894 = (0);
seq__38489_38871 = G__38891;
chunk__38490_38872 = G__38892;
count__38491_38873 = G__38893;
i__38492_38874 = G__38894;
continue;
} else {
var vec__38578_38895 = cljs.core.first(seq__38489_38888__$1);
var name_38896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38578_38895,(0),null);
var map__38581_38897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38578_38895,(1),null);
var map__38581_38898__$1 = cljs.core.__destructure_map(map__38581_38897);
var doc_38899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581_38898__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581_38898__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38896], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38900], 0));

if(cljs.core.truth_(doc_38899)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38899], 0));
} else {
}


var G__38904 = cljs.core.next(seq__38489_38888__$1);
var G__38905 = null;
var G__38906 = (0);
var G__38907 = (0);
seq__38489_38871 = G__38904;
chunk__38490_38872 = G__38905;
count__38491_38873 = G__38906;
i__38492_38874 = G__38907;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38584 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38585 = null;
var count__38586 = (0);
var i__38587 = (0);
while(true){
if((i__38587 < count__38586)){
var role = chunk__38585.cljs$core$IIndexed$_nth$arity$2(null,i__38587);
var temp__5804__auto___38972__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38972__$1)){
var spec_38974 = temp__5804__auto___38972__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38974)], 0));
} else {
}


var G__38983 = seq__38584;
var G__38984 = chunk__38585;
var G__38985 = count__38586;
var G__38986 = (i__38587 + (1));
seq__38584 = G__38983;
chunk__38585 = G__38984;
count__38586 = G__38985;
i__38587 = G__38986;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__38584);
if(temp__5804__auto____$1){
var seq__38584__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38584__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38584__$1);
var G__38995 = cljs.core.chunk_rest(seq__38584__$1);
var G__38996 = c__5568__auto__;
var G__38997 = cljs.core.count(c__5568__auto__);
var G__38998 = (0);
seq__38584 = G__38995;
chunk__38585 = G__38996;
count__38586 = G__38997;
i__38587 = G__38998;
continue;
} else {
var role = cljs.core.first(seq__38584__$1);
var temp__5804__auto___39000__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___39000__$2)){
var spec_39003 = temp__5804__auto___39000__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39003)], 0));
} else {
}


var G__39009 = cljs.core.next(seq__38584__$1);
var G__39010 = null;
var G__39011 = (0);
var G__39012 = (0);
seq__38584 = G__39009;
chunk__38585 = G__39010;
count__38586 = G__39011;
i__38587 = G__39012;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39035 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39036 = cljs.core.ex_cause(t);
via = G__39035;
t = G__39036;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38722 = datafied_throwable;
var map__38722__$1 = cljs.core.__destructure_map(map__38722);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38722__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38722__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38722__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38727 = cljs.core.last(via);
var map__38727__$1 = cljs.core.__destructure_map(map__38727);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38727__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38727__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38727__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38728 = data;
var map__38728__$1 = cljs.core.__destructure_map(map__38728);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38728__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38728__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38728__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38729 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38729__$1 = cljs.core.__destructure_map(map__38729);
var top_data = map__38729__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38729__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38751 = phase;
var G__38751__$1 = (((G__38751 instanceof cljs.core.Keyword))?G__38751.fqn:null);
switch (G__38751__$1) {
case "read-source":
var map__38752 = data;
var map__38752__$1 = cljs.core.__destructure_map(map__38752);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38752__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38752__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38753 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38753__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38753,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38753);
var G__38753__$2 = (cljs.core.truth_((function (){var fexpr__38755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38755.cljs$core$IFn$_invoke$arity$1 ? fexpr__38755.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38755.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38753__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38753__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38753__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38753__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38756 = top_data;
var G__38756__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38756,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38756);
var G__38756__$2 = (cljs.core.truth_((function (){var fexpr__38757 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38757.cljs$core$IFn$_invoke$arity$1 ? fexpr__38757.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38757.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38756__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38756__$1);
var G__38756__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38756__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38756__$2);
var G__38756__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38756__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38756__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38756__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38756__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38758 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38758,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38758,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38758,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38758,(3),null);
var G__38765 = top_data;
var G__38765__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38765,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38765);
var G__38765__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38765__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38765__$1);
var G__38765__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38765__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38765__$2);
var G__38765__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38765__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38765__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38765__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38765__$4;
}

break;
case "execution":
var vec__38775 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38775,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38775,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38775,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38775,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38716_SHARP_){
var or__5045__auto__ = (p1__38716_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__38779 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38779.cljs$core$IFn$_invoke$arity$1 ? fexpr__38779.cljs$core$IFn$_invoke$arity$1(p1__38716_SHARP_) : fexpr__38779.call(null,p1__38716_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__38780 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38780__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38780,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38780);
var G__38780__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38780__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38780__$1);
var G__38780__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38780__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38780__$2);
var G__38780__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38780__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38780__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38780__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38780__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38751__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38792){
var map__38793 = p__38792;
var map__38793__$1 = cljs.core.__destructure_map(map__38793);
var triage_data = map__38793__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38798 = phase;
var G__38798__$1 = (((G__38798 instanceof cljs.core.Keyword))?G__38798.fqn:null);
switch (G__38798__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38805 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38806 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38807 = loc;
var G__38808 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38810_39077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38811_39078 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38812_39079 = true;
var _STAR_print_fn_STAR__temp_val__38813_39080 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38812_39079);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38813_39080);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38786_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38786_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38811_39078);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38810_39077);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38805,G__38806,G__38807,G__38808) : format.call(null,G__38805,G__38806,G__38807,G__38808));

break;
case "macroexpansion":
var G__38817 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38818 = cause_type;
var G__38819 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38820 = loc;
var G__38821 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38817,G__38818,G__38819,G__38820,G__38821) : format.call(null,G__38817,G__38818,G__38819,G__38820,G__38821));

break;
case "compile-syntax-check":
var G__38822 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38823 = cause_type;
var G__38824 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38825 = loc;
var G__38826 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38822,G__38823,G__38824,G__38825,G__38826) : format.call(null,G__38822,G__38823,G__38824,G__38825,G__38826));

break;
case "compilation":
var G__38827 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38828 = cause_type;
var G__38829 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38830 = loc;
var G__38831 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38827,G__38828,G__38829,G__38830,G__38831) : format.call(null,G__38827,G__38828,G__38829,G__38830,G__38831));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38832 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38833 = symbol;
var G__38834 = loc;
var G__38835 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38836_39081 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38837_39082 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38838_39083 = true;
var _STAR_print_fn_STAR__temp_val__38839_39084 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38838_39083);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38839_39084);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38787_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38787_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38837_39082);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38836_39081);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38832,G__38833,G__38834,G__38835) : format.call(null,G__38832,G__38833,G__38834,G__38835));
} else {
var G__38843 = "Execution error%s at %s(%s).\n%s\n";
var G__38844 = cause_type;
var G__38845 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38846 = loc;
var G__38847 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38843,G__38844,G__38845,G__38846,G__38847) : format.call(null,G__38843,G__38844,G__38845,G__38846,G__38847));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38798__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

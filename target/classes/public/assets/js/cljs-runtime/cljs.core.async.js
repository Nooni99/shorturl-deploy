goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33782 = (function (f,blockable,meta33783){
this.f = f;
this.blockable = blockable;
this.meta33783 = meta33783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33784,meta33783__$1){
var self__ = this;
var _33784__$1 = this;
return (new cljs.core.async.t_cljs$core$async33782(self__.f,self__.blockable,meta33783__$1));
}));

(cljs.core.async.t_cljs$core$async33782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33784){
var self__ = this;
var _33784__$1 = this;
return self__.meta33783;
}));

(cljs.core.async.t_cljs$core$async33782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33783","meta33783",-846471153,null)], null);
}));

(cljs.core.async.t_cljs$core$async33782.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33782");

(cljs.core.async.t_cljs$core$async33782.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33782");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33782.
 */
cljs.core.async.__GT_t_cljs$core$async33782 = (function cljs$core$async$__GT_t_cljs$core$async33782(f,blockable,meta33783){
return (new cljs.core.async.t_cljs$core$async33782(f,blockable,meta33783));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33781 = arguments.length;
switch (G__33781) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33782(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33794 = arguments.length;
switch (G__33794) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33797 = arguments.length;
switch (G__33797) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33799 = arguments.length;
switch (G__33799) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36877 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36877) : fn1.call(null,val_36877));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36877) : fn1.call(null,val_36877));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33803 = arguments.length;
switch (G__33803) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36883 = n;
var x_36884 = (0);
while(true){
if((x_36884 < n__5636__auto___36883)){
(a[x_36884] = x_36884);

var G__36885 = (x_36884 + (1));
x_36884 = G__36885;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33841 = (function (flag,meta33842){
this.flag = flag;
this.meta33842 = meta33842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33843,meta33842__$1){
var self__ = this;
var _33843__$1 = this;
return (new cljs.core.async.t_cljs$core$async33841(self__.flag,meta33842__$1));
}));

(cljs.core.async.t_cljs$core$async33841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33843){
var self__ = this;
var _33843__$1 = this;
return self__.meta33842;
}));

(cljs.core.async.t_cljs$core$async33841.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33841.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33842","meta33842",1601525236,null)], null);
}));

(cljs.core.async.t_cljs$core$async33841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33841");

(cljs.core.async.t_cljs$core$async33841.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33841.
 */
cljs.core.async.__GT_t_cljs$core$async33841 = (function cljs$core$async$__GT_t_cljs$core$async33841(flag,meta33842){
return (new cljs.core.async.t_cljs$core$async33841(flag,meta33842));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33841(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33866 = (function (flag,cb,meta33867){
this.flag = flag;
this.cb = cb;
this.meta33867 = meta33867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33868,meta33867__$1){
var self__ = this;
var _33868__$1 = this;
return (new cljs.core.async.t_cljs$core$async33866(self__.flag,self__.cb,meta33867__$1));
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33868){
var self__ = this;
var _33868__$1 = this;
return self__.meta33867;
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33867","meta33867",1558612483,null)], null);
}));

(cljs.core.async.t_cljs$core$async33866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33866");

(cljs.core.async.t_cljs$core$async33866.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33866.
 */
cljs.core.async.__GT_t_cljs$core$async33866 = (function cljs$core$async$__GT_t_cljs$core$async33866(flag,cb,meta33867){
return (new cljs.core.async.t_cljs$core$async33866(flag,cb,meta33867));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33866(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33873_SHARP_){
var G__33875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33873_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33875) : fret.call(null,G__33875));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33874_SHARP_){
var G__33876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33874_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33876) : fret.call(null,G__33876));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36890 = (i + (1));
i = G__36890;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36891 = arguments.length;
var i__5770__auto___36892 = (0);
while(true){
if((i__5770__auto___36892 < len__5769__auto___36891)){
args__5775__auto__.push((arguments[i__5770__auto___36892]));

var G__36893 = (i__5770__auto___36892 + (1));
i__5770__auto___36892 = G__36893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33883){
var map__33884 = p__33883;
var map__33884__$1 = cljs.core.__destructure_map(map__33884);
var opts = map__33884__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33880){
var G__33882 = cljs.core.first(seq33880);
var seq33880__$1 = cljs.core.next(seq33880);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33882,seq33880__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33892 = arguments.length;
switch (G__33892) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33679__auto___36912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_33952){
var state_val_33953 = (state_33952[(1)]);
if((state_val_33953 === (7))){
var inst_33938 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33962_36918 = state_33952__$1;
(statearr_33962_36918[(2)] = inst_33938);

(statearr_33962_36918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (1))){
var state_33952__$1 = state_33952;
var statearr_33965_36919 = state_33952__$1;
(statearr_33965_36919[(2)] = null);

(statearr_33965_36919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (4))){
var inst_33919 = (state_33952[(7)]);
var inst_33919__$1 = (state_33952[(2)]);
var inst_33922 = (inst_33919__$1 == null);
var state_33952__$1 = (function (){var statearr_33968 = state_33952;
(statearr_33968[(7)] = inst_33919__$1);

return statearr_33968;
})();
if(cljs.core.truth_(inst_33922)){
var statearr_33970_36920 = state_33952__$1;
(statearr_33970_36920[(1)] = (5));

} else {
var statearr_33972_36921 = state_33952__$1;
(statearr_33972_36921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (13))){
var state_33952__$1 = state_33952;
var statearr_33977_36922 = state_33952__$1;
(statearr_33977_36922[(2)] = null);

(statearr_33977_36922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (6))){
var inst_33919 = (state_33952[(7)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33952__$1,(11),to,inst_33919);
} else {
if((state_val_33953 === (3))){
var inst_33942 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33952__$1,inst_33942);
} else {
if((state_val_33953 === (12))){
var state_33952__$1 = state_33952;
var statearr_33982_36924 = state_33952__$1;
(statearr_33982_36924[(2)] = null);

(statearr_33982_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (2))){
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33952__$1,(4),from);
} else {
if((state_val_33953 === (11))){
var inst_33931 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
if(cljs.core.truth_(inst_33931)){
var statearr_33987_36928 = state_33952__$1;
(statearr_33987_36928[(1)] = (12));

} else {
var statearr_33988_36929 = state_33952__$1;
(statearr_33988_36929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (9))){
var state_33952__$1 = state_33952;
var statearr_33990_36933 = state_33952__$1;
(statearr_33990_36933[(2)] = null);

(statearr_33990_36933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (5))){
var state_33952__$1 = state_33952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34000_36934 = state_33952__$1;
(statearr_34000_36934[(1)] = (8));

} else {
var statearr_34001_36935 = state_33952__$1;
(statearr_34001_36935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (14))){
var inst_33936 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_34002_36936 = state_33952__$1;
(statearr_34002_36936[(2)] = inst_33936);

(statearr_34002_36936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (10))){
var inst_33928 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_34003_36940 = state_33952__$1;
(statearr_34003_36940[(2)] = inst_33928);

(statearr_34003_36940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (8))){
var inst_33925 = cljs.core.async.close_BANG_(to);
var state_33952__$1 = state_33952;
var statearr_34004_36943 = state_33952__$1;
(statearr_34004_36943[(2)] = inst_33925);

(statearr_34004_36943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_34006 = [null,null,null,null,null,null,null,null];
(statearr_34006[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_34006[(1)] = (1));

return statearr_34006;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_33952){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_33952);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34009){var ex__33367__auto__ = e34009;
var statearr_34010_36951 = state_33952;
(statearr_34010_36951[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_33952[(4)]))){
var statearr_34012_36952 = state_33952;
(statearr_34012_36952[(1)] = cljs.core.first((state_33952[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36953 = state_33952;
state_33952 = G__36953;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_33952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_33952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_34016 = f__33680__auto__();
(statearr_34016[(6)] = c__33679__auto___36912);

return statearr_34016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__34021){
var vec__34022 = p__34021;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34022,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34022,(1),null);
var job = vec__34022;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33679__auto___36964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_34030){
var state_val_34031 = (state_34030[(1)]);
if((state_val_34031 === (1))){
var state_34030__$1 = state_34030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34030__$1,(2),res,v);
} else {
if((state_val_34031 === (2))){
var inst_34027 = (state_34030[(2)]);
var inst_34028 = cljs.core.async.close_BANG_(res);
var state_34030__$1 = (function (){var statearr_34033 = state_34030;
(statearr_34033[(7)] = inst_34027);

return statearr_34033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34030__$1,inst_34028);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0 = (function (){
var statearr_34037 = [null,null,null,null,null,null,null,null];
(statearr_34037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__);

(statearr_34037[(1)] = (1));

return statearr_34037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1 = (function (state_34030){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34030);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34042){var ex__33367__auto__ = e34042;
var statearr_34043_36969 = state_34030;
(statearr_34043_36969[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34030[(4)]))){
var statearr_34047_36971 = state_34030;
(statearr_34047_36971[(1)] = cljs.core.first((state_34030[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36972 = state_34030;
state_34030 = G__36972;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = function(state_34030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1.call(this,state_34030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_34048 = f__33680__auto__();
(statearr_34048[(6)] = c__33679__auto___36964);

return statearr_34048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34052){
var vec__34053 = p__34052;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34053,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34053,(1),null);
var job = vec__34053;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36978 = n;
var __36979 = (0);
while(true){
if((__36979 < n__5636__auto___36978)){
var G__34063_36980 = type;
var G__34063_36981__$1 = (((G__34063_36980 instanceof cljs.core.Keyword))?G__34063_36980.fqn:null);
switch (G__34063_36981__$1) {
case "compute":
var c__33679__auto___36983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36979,c__33679__auto___36983,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async){
return (function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = ((function (__36979,c__33679__auto___36983,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async){
return (function (state_34079){
var state_val_34080 = (state_34079[(1)]);
if((state_val_34080 === (1))){
var state_34079__$1 = state_34079;
var statearr_34088_36984 = state_34079__$1;
(statearr_34088_36984[(2)] = null);

(statearr_34088_36984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (2))){
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34079__$1,(4),jobs);
} else {
if((state_val_34080 === (3))){
var inst_34077 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34079__$1,inst_34077);
} else {
if((state_val_34080 === (4))){
var inst_34069 = (state_34079[(2)]);
var inst_34070 = process__$1(inst_34069);
var state_34079__$1 = state_34079;
if(cljs.core.truth_(inst_34070)){
var statearr_34090_36986 = state_34079__$1;
(statearr_34090_36986[(1)] = (5));

} else {
var statearr_34091_36987 = state_34079__$1;
(statearr_34091_36987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (5))){
var state_34079__$1 = state_34079;
var statearr_34092_36991 = state_34079__$1;
(statearr_34092_36991[(2)] = null);

(statearr_34092_36991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (6))){
var state_34079__$1 = state_34079;
var statearr_34093_36992 = state_34079__$1;
(statearr_34093_36992[(2)] = null);

(statearr_34093_36992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (7))){
var inst_34075 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34096_36993 = state_34079__$1;
(statearr_34096_36993[(2)] = inst_34075);

(statearr_34096_36993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36979,c__33679__auto___36983,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async))
;
return ((function (__36979,switch__33363__auto__,c__33679__auto___36983,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0 = (function (){
var statearr_34100 = [null,null,null,null,null,null,null];
(statearr_34100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__);

(statearr_34100[(1)] = (1));

return statearr_34100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1 = (function (state_34079){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34079);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34101){var ex__33367__auto__ = e34101;
var statearr_34102_37000 = state_34079;
(statearr_34102_37000[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34079[(4)]))){
var statearr_34103_37004 = state_34079;
(statearr_34103_37004[(1)] = cljs.core.first((state_34079[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37005 = state_34079;
state_34079 = G__37005;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = function(state_34079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1.call(this,state_34079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__;
})()
;})(__36979,switch__33363__auto__,c__33679__auto___36983,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async))
})();
var state__33681__auto__ = (function (){var statearr_34106 = f__33680__auto__();
(statearr_34106[(6)] = c__33679__auto___36983);

return statearr_34106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
});})(__36979,c__33679__auto___36983,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async))
);


break;
case "async":
var c__33679__auto___37009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36979,c__33679__auto___37009,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async){
return (function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = ((function (__36979,c__33679__auto___37009,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async){
return (function (state_34122){
var state_val_34123 = (state_34122[(1)]);
if((state_val_34123 === (1))){
var state_34122__$1 = state_34122;
var statearr_34128_37014 = state_34122__$1;
(statearr_34128_37014[(2)] = null);

(statearr_34128_37014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (2))){
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34122__$1,(4),jobs);
} else {
if((state_val_34123 === (3))){
var inst_34120 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34122__$1,inst_34120);
} else {
if((state_val_34123 === (4))){
var inst_34112 = (state_34122[(2)]);
var inst_34113 = async(inst_34112);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34113)){
var statearr_34130_37016 = state_34122__$1;
(statearr_34130_37016[(1)] = (5));

} else {
var statearr_34131_37017 = state_34122__$1;
(statearr_34131_37017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (5))){
var state_34122__$1 = state_34122;
var statearr_34134_37018 = state_34122__$1;
(statearr_34134_37018[(2)] = null);

(statearr_34134_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (6))){
var state_34122__$1 = state_34122;
var statearr_34137_37019 = state_34122__$1;
(statearr_34137_37019[(2)] = null);

(statearr_34137_37019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (7))){
var inst_34118 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34138_37020 = state_34122__$1;
(statearr_34138_37020[(2)] = inst_34118);

(statearr_34138_37020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36979,c__33679__auto___37009,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async))
;
return ((function (__36979,switch__33363__auto__,c__33679__auto___37009,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0 = (function (){
var statearr_34149 = [null,null,null,null,null,null,null];
(statearr_34149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__);

(statearr_34149[(1)] = (1));

return statearr_34149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1 = (function (state_34122){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34122);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34151){var ex__33367__auto__ = e34151;
var statearr_34153_37022 = state_34122;
(statearr_34153_37022[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34122[(4)]))){
var statearr_34154_37023 = state_34122;
(statearr_34154_37023[(1)] = cljs.core.first((state_34122[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37028 = state_34122;
state_34122 = G__37028;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = function(state_34122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1.call(this,state_34122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__;
})()
;})(__36979,switch__33363__auto__,c__33679__auto___37009,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async))
})();
var state__33681__auto__ = (function (){var statearr_34158 = f__33680__auto__();
(statearr_34158[(6)] = c__33679__auto___37009);

return statearr_34158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
});})(__36979,c__33679__auto___37009,G__34063_36980,G__34063_36981__$1,n__5636__auto___36978,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34063_36981__$1)].join('')));

}

var G__37029 = (__36979 + (1));
__36979 = G__37029;
continue;
} else {
}
break;
}

var c__33679__auto___37030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_34188){
var state_val_34189 = (state_34188[(1)]);
if((state_val_34189 === (7))){
var inst_34184 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
var statearr_34191_37035 = state_34188__$1;
(statearr_34191_37035[(2)] = inst_34184);

(statearr_34191_37035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (1))){
var state_34188__$1 = state_34188;
var statearr_34192_37036 = state_34188__$1;
(statearr_34192_37036[(2)] = null);

(statearr_34192_37036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (4))){
var inst_34168 = (state_34188[(7)]);
var inst_34168__$1 = (state_34188[(2)]);
var inst_34169 = (inst_34168__$1 == null);
var state_34188__$1 = (function (){var statearr_34194 = state_34188;
(statearr_34194[(7)] = inst_34168__$1);

return statearr_34194;
})();
if(cljs.core.truth_(inst_34169)){
var statearr_34195_37037 = state_34188__$1;
(statearr_34195_37037[(1)] = (5));

} else {
var statearr_34196_37038 = state_34188__$1;
(statearr_34196_37038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (6))){
var inst_34168 = (state_34188[(7)]);
var inst_34173 = (state_34188[(8)]);
var inst_34173__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34176 = [inst_34168,inst_34173__$1];
var inst_34177 = (new cljs.core.PersistentVector(null,2,(5),inst_34174,inst_34176,null));
var state_34188__$1 = (function (){var statearr_34199 = state_34188;
(statearr_34199[(8)] = inst_34173__$1);

return statearr_34199;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34188__$1,(8),jobs,inst_34177);
} else {
if((state_val_34189 === (3))){
var inst_34186 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34188__$1,inst_34186);
} else {
if((state_val_34189 === (2))){
var state_34188__$1 = state_34188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34188__$1,(4),from);
} else {
if((state_val_34189 === (9))){
var inst_34181 = (state_34188[(2)]);
var state_34188__$1 = (function (){var statearr_34200 = state_34188;
(statearr_34200[(9)] = inst_34181);

return statearr_34200;
})();
var statearr_34202_37042 = state_34188__$1;
(statearr_34202_37042[(2)] = null);

(statearr_34202_37042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (5))){
var inst_34171 = cljs.core.async.close_BANG_(jobs);
var state_34188__$1 = state_34188;
var statearr_34205_37044 = state_34188__$1;
(statearr_34205_37044[(2)] = inst_34171);

(statearr_34205_37044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (8))){
var inst_34173 = (state_34188[(8)]);
var inst_34179 = (state_34188[(2)]);
var state_34188__$1 = (function (){var statearr_34206 = state_34188;
(statearr_34206[(10)] = inst_34179);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34188__$1,(9),results,inst_34173);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0 = (function (){
var statearr_34216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__);

(statearr_34216[(1)] = (1));

return statearr_34216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1 = (function (state_34188){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34188);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34227){var ex__33367__auto__ = e34227;
var statearr_34232_37050 = state_34188;
(statearr_34232_37050[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34188[(4)]))){
var statearr_34233_37051 = state_34188;
(statearr_34233_37051[(1)] = cljs.core.first((state_34188[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37052 = state_34188;
state_34188 = G__37052;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = function(state_34188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1.call(this,state_34188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_34236 = f__33680__auto__();
(statearr_34236[(6)] = c__33679__auto___37030);

return statearr_34236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


var c__33679__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_34279){
var state_val_34280 = (state_34279[(1)]);
if((state_val_34280 === (7))){
var inst_34275 = (state_34279[(2)]);
var state_34279__$1 = state_34279;
var statearr_34283_37053 = state_34279__$1;
(statearr_34283_37053[(2)] = inst_34275);

(statearr_34283_37053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (20))){
var state_34279__$1 = state_34279;
var statearr_34284_37054 = state_34279__$1;
(statearr_34284_37054[(2)] = null);

(statearr_34284_37054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (1))){
var state_34279__$1 = state_34279;
var statearr_34287_37055 = state_34279__$1;
(statearr_34287_37055[(2)] = null);

(statearr_34287_37055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (4))){
var inst_34240 = (state_34279[(7)]);
var inst_34240__$1 = (state_34279[(2)]);
var inst_34241 = (inst_34240__$1 == null);
var state_34279__$1 = (function (){var statearr_34288 = state_34279;
(statearr_34288[(7)] = inst_34240__$1);

return statearr_34288;
})();
if(cljs.core.truth_(inst_34241)){
var statearr_34289_37057 = state_34279__$1;
(statearr_34289_37057[(1)] = (5));

} else {
var statearr_34290_37059 = state_34279__$1;
(statearr_34290_37059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (15))){
var inst_34256 = (state_34279[(8)]);
var state_34279__$1 = state_34279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34279__$1,(18),to,inst_34256);
} else {
if((state_val_34280 === (21))){
var inst_34270 = (state_34279[(2)]);
var state_34279__$1 = state_34279;
var statearr_34291_37060 = state_34279__$1;
(statearr_34291_37060[(2)] = inst_34270);

(statearr_34291_37060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (13))){
var inst_34272 = (state_34279[(2)]);
var state_34279__$1 = (function (){var statearr_34292 = state_34279;
(statearr_34292[(9)] = inst_34272);

return statearr_34292;
})();
var statearr_34293_37061 = state_34279__$1;
(statearr_34293_37061[(2)] = null);

(statearr_34293_37061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (6))){
var inst_34240 = (state_34279[(7)]);
var state_34279__$1 = state_34279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34279__$1,(11),inst_34240);
} else {
if((state_val_34280 === (17))){
var inst_34265 = (state_34279[(2)]);
var state_34279__$1 = state_34279;
if(cljs.core.truth_(inst_34265)){
var statearr_34294_37064 = state_34279__$1;
(statearr_34294_37064[(1)] = (19));

} else {
var statearr_34295_37065 = state_34279__$1;
(statearr_34295_37065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (3))){
var inst_34277 = (state_34279[(2)]);
var state_34279__$1 = state_34279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34279__$1,inst_34277);
} else {
if((state_val_34280 === (12))){
var inst_34252 = (state_34279[(10)]);
var state_34279__$1 = state_34279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34279__$1,(14),inst_34252);
} else {
if((state_val_34280 === (2))){
var state_34279__$1 = state_34279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34279__$1,(4),results);
} else {
if((state_val_34280 === (19))){
var state_34279__$1 = state_34279;
var statearr_34304_37069 = state_34279__$1;
(statearr_34304_37069[(2)] = null);

(statearr_34304_37069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (11))){
var inst_34252 = (state_34279[(2)]);
var state_34279__$1 = (function (){var statearr_34313 = state_34279;
(statearr_34313[(10)] = inst_34252);

return statearr_34313;
})();
var statearr_34314_37070 = state_34279__$1;
(statearr_34314_37070[(2)] = null);

(statearr_34314_37070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (9))){
var state_34279__$1 = state_34279;
var statearr_34327_37071 = state_34279__$1;
(statearr_34327_37071[(2)] = null);

(statearr_34327_37071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (5))){
var state_34279__$1 = state_34279;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34334_37072 = state_34279__$1;
(statearr_34334_37072[(1)] = (8));

} else {
var statearr_34337_37073 = state_34279__$1;
(statearr_34337_37073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (14))){
var inst_34256 = (state_34279[(8)]);
var inst_34258 = (state_34279[(11)]);
var inst_34256__$1 = (state_34279[(2)]);
var inst_34257 = (inst_34256__$1 == null);
var inst_34258__$1 = cljs.core.not(inst_34257);
var state_34279__$1 = (function (){var statearr_34349 = state_34279;
(statearr_34349[(8)] = inst_34256__$1);

(statearr_34349[(11)] = inst_34258__$1);

return statearr_34349;
})();
if(inst_34258__$1){
var statearr_34350_37077 = state_34279__$1;
(statearr_34350_37077[(1)] = (15));

} else {
var statearr_34351_37078 = state_34279__$1;
(statearr_34351_37078[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (16))){
var inst_34258 = (state_34279[(11)]);
var state_34279__$1 = state_34279;
var statearr_34353_37079 = state_34279__$1;
(statearr_34353_37079[(2)] = inst_34258);

(statearr_34353_37079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (10))){
var inst_34249 = (state_34279[(2)]);
var state_34279__$1 = state_34279;
var statearr_34355_37083 = state_34279__$1;
(statearr_34355_37083[(2)] = inst_34249);

(statearr_34355_37083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (18))){
var inst_34262 = (state_34279[(2)]);
var state_34279__$1 = state_34279;
var statearr_34357_37084 = state_34279__$1;
(statearr_34357_37084[(2)] = inst_34262);

(statearr_34357_37084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (8))){
var inst_34244 = cljs.core.async.close_BANG_(to);
var state_34279__$1 = state_34279;
var statearr_34358_37085 = state_34279__$1;
(statearr_34358_37085[(2)] = inst_34244);

(statearr_34358_37085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0 = (function (){
var statearr_34361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__);

(statearr_34361[(1)] = (1));

return statearr_34361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1 = (function (state_34279){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34279);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34362){var ex__33367__auto__ = e34362;
var statearr_34363_37086 = state_34279;
(statearr_34363_37086[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34279[(4)]))){
var statearr_34364_37087 = state_34279;
(statearr_34364_37087[(1)] = cljs.core.first((state_34279[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37088 = state_34279;
state_34279 = G__37088;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__ = function(state_34279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1.call(this,state_34279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_34365 = f__33680__auto__();
(statearr_34365[(6)] = c__33679__auto__);

return statearr_34365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));

return c__33679__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34380 = arguments.length;
switch (G__34380) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34415 = arguments.length;
switch (G__34415) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34442 = arguments.length;
switch (G__34442) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33679__auto___37095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_34481){
var state_val_34482 = (state_34481[(1)]);
if((state_val_34482 === (7))){
var inst_34477 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34483_37096 = state_34481__$1;
(statearr_34483_37096[(2)] = inst_34477);

(statearr_34483_37096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (1))){
var state_34481__$1 = state_34481;
var statearr_34485_37097 = state_34481__$1;
(statearr_34485_37097[(2)] = null);

(statearr_34485_37097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (4))){
var inst_34454 = (state_34481[(7)]);
var inst_34454__$1 = (state_34481[(2)]);
var inst_34455 = (inst_34454__$1 == null);
var state_34481__$1 = (function (){var statearr_34486 = state_34481;
(statearr_34486[(7)] = inst_34454__$1);

return statearr_34486;
})();
if(cljs.core.truth_(inst_34455)){
var statearr_34487_37098 = state_34481__$1;
(statearr_34487_37098[(1)] = (5));

} else {
var statearr_34488_37099 = state_34481__$1;
(statearr_34488_37099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (13))){
var state_34481__$1 = state_34481;
var statearr_34489_37100 = state_34481__$1;
(statearr_34489_37100[(2)] = null);

(statearr_34489_37100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (6))){
var inst_34454 = (state_34481[(7)]);
var inst_34460 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34454) : p.call(null,inst_34454));
var state_34481__$1 = state_34481;
if(cljs.core.truth_(inst_34460)){
var statearr_34490_37101 = state_34481__$1;
(statearr_34490_37101[(1)] = (9));

} else {
var statearr_34491_37102 = state_34481__$1;
(statearr_34491_37102[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (3))){
var inst_34479 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34481__$1,inst_34479);
} else {
if((state_val_34482 === (12))){
var state_34481__$1 = state_34481;
var statearr_34492_37103 = state_34481__$1;
(statearr_34492_37103[(2)] = null);

(statearr_34492_37103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (2))){
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34481__$1,(4),ch);
} else {
if((state_val_34482 === (11))){
var inst_34454 = (state_34481[(7)]);
var inst_34468 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34481__$1,(8),inst_34468,inst_34454);
} else {
if((state_val_34482 === (9))){
var state_34481__$1 = state_34481;
var statearr_34493_37111 = state_34481__$1;
(statearr_34493_37111[(2)] = tc);

(statearr_34493_37111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (5))){
var inst_34457 = cljs.core.async.close_BANG_(tc);
var inst_34458 = cljs.core.async.close_BANG_(fc);
var state_34481__$1 = (function (){var statearr_34494 = state_34481;
(statearr_34494[(8)] = inst_34457);

return statearr_34494;
})();
var statearr_34495_37112 = state_34481__$1;
(statearr_34495_37112[(2)] = inst_34458);

(statearr_34495_37112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (14))){
var inst_34475 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34497_37116 = state_34481__$1;
(statearr_34497_37116[(2)] = inst_34475);

(statearr_34497_37116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (10))){
var state_34481__$1 = state_34481;
var statearr_34498_37117 = state_34481__$1;
(statearr_34498_37117[(2)] = fc);

(statearr_34498_37117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (8))){
var inst_34470 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
if(cljs.core.truth_(inst_34470)){
var statearr_34501_37118 = state_34481__$1;
(statearr_34501_37118[(1)] = (12));

} else {
var statearr_34502_37119 = state_34481__$1;
(statearr_34502_37119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_34503 = [null,null,null,null,null,null,null,null,null];
(statearr_34503[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_34503[(1)] = (1));

return statearr_34503;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_34481){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34481);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34504){var ex__33367__auto__ = e34504;
var statearr_34505_37120 = state_34481;
(statearr_34505_37120[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34481[(4)]))){
var statearr_34506_37121 = state_34481;
(statearr_34506_37121[(1)] = cljs.core.first((state_34481[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37122 = state_34481;
state_34481 = G__37122;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_34481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_34481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_34507 = f__33680__auto__();
(statearr_34507[(6)] = c__33679__auto___37095);

return statearr_34507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33679__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_34529){
var state_val_34530 = (state_34529[(1)]);
if((state_val_34530 === (7))){
var inst_34525 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
var statearr_34531_37126 = state_34529__$1;
(statearr_34531_37126[(2)] = inst_34525);

(statearr_34531_37126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (1))){
var inst_34508 = init;
var inst_34509 = inst_34508;
var state_34529__$1 = (function (){var statearr_34532 = state_34529;
(statearr_34532[(7)] = inst_34509);

return statearr_34532;
})();
var statearr_34533_37127 = state_34529__$1;
(statearr_34533_37127[(2)] = null);

(statearr_34533_37127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (4))){
var inst_34512 = (state_34529[(8)]);
var inst_34512__$1 = (state_34529[(2)]);
var inst_34513 = (inst_34512__$1 == null);
var state_34529__$1 = (function (){var statearr_34534 = state_34529;
(statearr_34534[(8)] = inst_34512__$1);

return statearr_34534;
})();
if(cljs.core.truth_(inst_34513)){
var statearr_34535_37128 = state_34529__$1;
(statearr_34535_37128[(1)] = (5));

} else {
var statearr_34536_37129 = state_34529__$1;
(statearr_34536_37129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (6))){
var inst_34509 = (state_34529[(7)]);
var inst_34516 = (state_34529[(9)]);
var inst_34512 = (state_34529[(8)]);
var inst_34516__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34509,inst_34512) : f.call(null,inst_34509,inst_34512));
var inst_34517 = cljs.core.reduced_QMARK_(inst_34516__$1);
var state_34529__$1 = (function (){var statearr_34537 = state_34529;
(statearr_34537[(9)] = inst_34516__$1);

return statearr_34537;
})();
if(inst_34517){
var statearr_34538_37131 = state_34529__$1;
(statearr_34538_37131[(1)] = (8));

} else {
var statearr_34539_37132 = state_34529__$1;
(statearr_34539_37132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (3))){
var inst_34527 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34529__$1,inst_34527);
} else {
if((state_val_34530 === (2))){
var state_34529__$1 = state_34529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34529__$1,(4),ch);
} else {
if((state_val_34530 === (9))){
var inst_34516 = (state_34529[(9)]);
var inst_34509 = inst_34516;
var state_34529__$1 = (function (){var statearr_34540 = state_34529;
(statearr_34540[(7)] = inst_34509);

return statearr_34540;
})();
var statearr_34541_37133 = state_34529__$1;
(statearr_34541_37133[(2)] = null);

(statearr_34541_37133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (5))){
var inst_34509 = (state_34529[(7)]);
var state_34529__$1 = state_34529;
var statearr_34542_37134 = state_34529__$1;
(statearr_34542_37134[(2)] = inst_34509);

(statearr_34542_37134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (10))){
var inst_34523 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
var statearr_34545_37136 = state_34529__$1;
(statearr_34545_37136[(2)] = inst_34523);

(statearr_34545_37136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (8))){
var inst_34516 = (state_34529[(9)]);
var inst_34519 = cljs.core.deref(inst_34516);
var state_34529__$1 = state_34529;
var statearr_34546_37138 = state_34529__$1;
(statearr_34546_37138[(2)] = inst_34519);

(statearr_34546_37138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33364__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33364__auto____0 = (function (){
var statearr_34549 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34549[(0)] = cljs$core$async$reduce_$_state_machine__33364__auto__);

(statearr_34549[(1)] = (1));

return statearr_34549;
});
var cljs$core$async$reduce_$_state_machine__33364__auto____1 = (function (state_34529){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34529);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34550){var ex__33367__auto__ = e34550;
var statearr_34551_37139 = state_34529;
(statearr_34551_37139[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34529[(4)]))){
var statearr_34552_37140 = state_34529;
(statearr_34552_37140[(1)] = cljs.core.first((state_34529[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37141 = state_34529;
state_34529 = G__37141;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33364__auto__ = function(state_34529){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33364__auto____1.call(this,state_34529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33364__auto____0;
cljs$core$async$reduce_$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33364__auto____1;
return cljs$core$async$reduce_$_state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_34553 = f__33680__auto__();
(statearr_34553[(6)] = c__33679__auto__);

return statearr_34553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));

return c__33679__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33679__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_34564){
var state_val_34565 = (state_34564[(1)]);
if((state_val_34565 === (1))){
var inst_34558 = cljs.core.async.reduce(f__$1,init,ch);
var state_34564__$1 = state_34564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34564__$1,(2),inst_34558);
} else {
if((state_val_34565 === (2))){
var inst_34560 = (state_34564[(2)]);
var inst_34562 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34560) : f__$1.call(null,inst_34560));
var state_34564__$1 = state_34564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34564__$1,inst_34562);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33364__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33364__auto____0 = (function (){
var statearr_34566 = [null,null,null,null,null,null,null];
(statearr_34566[(0)] = cljs$core$async$transduce_$_state_machine__33364__auto__);

(statearr_34566[(1)] = (1));

return statearr_34566;
});
var cljs$core$async$transduce_$_state_machine__33364__auto____1 = (function (state_34564){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34564);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34567){var ex__33367__auto__ = e34567;
var statearr_34568_37151 = state_34564;
(statearr_34568_37151[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34564[(4)]))){
var statearr_34569_37152 = state_34564;
(statearr_34569_37152[(1)] = cljs.core.first((state_34564[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37153 = state_34564;
state_34564 = G__37153;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33364__auto__ = function(state_34564){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33364__auto____1.call(this,state_34564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33364__auto____0;
cljs$core$async$transduce_$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33364__auto____1;
return cljs$core$async$transduce_$_state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_34571 = f__33680__auto__();
(statearr_34571[(6)] = c__33679__auto__);

return statearr_34571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));

return c__33679__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34578 = arguments.length;
switch (G__34578) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33679__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_34608){
var state_val_34609 = (state_34608[(1)]);
if((state_val_34609 === (7))){
var inst_34589 = (state_34608[(2)]);
var state_34608__$1 = state_34608;
var statearr_34611_37158 = state_34608__$1;
(statearr_34611_37158[(2)] = inst_34589);

(statearr_34611_37158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (1))){
var inst_34581 = cljs.core.seq(coll);
var inst_34582 = inst_34581;
var state_34608__$1 = (function (){var statearr_34612 = state_34608;
(statearr_34612[(7)] = inst_34582);

return statearr_34612;
})();
var statearr_34613_37159 = state_34608__$1;
(statearr_34613_37159[(2)] = null);

(statearr_34613_37159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (4))){
var inst_34582 = (state_34608[(7)]);
var inst_34587 = cljs.core.first(inst_34582);
var state_34608__$1 = state_34608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34608__$1,(7),ch,inst_34587);
} else {
if((state_val_34609 === (13))){
var inst_34601 = (state_34608[(2)]);
var state_34608__$1 = state_34608;
var statearr_34615_37160 = state_34608__$1;
(statearr_34615_37160[(2)] = inst_34601);

(statearr_34615_37160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (6))){
var inst_34592 = (state_34608[(2)]);
var state_34608__$1 = state_34608;
if(cljs.core.truth_(inst_34592)){
var statearr_34616_37161 = state_34608__$1;
(statearr_34616_37161[(1)] = (8));

} else {
var statearr_34617_37162 = state_34608__$1;
(statearr_34617_37162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (3))){
var inst_34606 = (state_34608[(2)]);
var state_34608__$1 = state_34608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34608__$1,inst_34606);
} else {
if((state_val_34609 === (12))){
var state_34608__$1 = state_34608;
var statearr_34619_37163 = state_34608__$1;
(statearr_34619_37163[(2)] = null);

(statearr_34619_37163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (2))){
var inst_34582 = (state_34608[(7)]);
var state_34608__$1 = state_34608;
if(cljs.core.truth_(inst_34582)){
var statearr_34621_37166 = state_34608__$1;
(statearr_34621_37166[(1)] = (4));

} else {
var statearr_34622_37167 = state_34608__$1;
(statearr_34622_37167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (11))){
var inst_34598 = cljs.core.async.close_BANG_(ch);
var state_34608__$1 = state_34608;
var statearr_34626_37168 = state_34608__$1;
(statearr_34626_37168[(2)] = inst_34598);

(statearr_34626_37168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (9))){
var state_34608__$1 = state_34608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34627_37173 = state_34608__$1;
(statearr_34627_37173[(1)] = (11));

} else {
var statearr_34628_37174 = state_34608__$1;
(statearr_34628_37174[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (5))){
var inst_34582 = (state_34608[(7)]);
var state_34608__$1 = state_34608;
var statearr_34629_37177 = state_34608__$1;
(statearr_34629_37177[(2)] = inst_34582);

(statearr_34629_37177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (10))){
var inst_34603 = (state_34608[(2)]);
var state_34608__$1 = state_34608;
var statearr_34630_37178 = state_34608__$1;
(statearr_34630_37178[(2)] = inst_34603);

(statearr_34630_37178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (8))){
var inst_34582 = (state_34608[(7)]);
var inst_34594 = cljs.core.next(inst_34582);
var inst_34582__$1 = inst_34594;
var state_34608__$1 = (function (){var statearr_34632 = state_34608;
(statearr_34632[(7)] = inst_34582__$1);

return statearr_34632;
})();
var statearr_34633_37180 = state_34608__$1;
(statearr_34633_37180[(2)] = null);

(statearr_34633_37180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_34634 = [null,null,null,null,null,null,null,null];
(statearr_34634[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_34634[(1)] = (1));

return statearr_34634;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_34608){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34608);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e34635){var ex__33367__auto__ = e34635;
var statearr_34636_37188 = state_34608;
(statearr_34636_37188[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34608[(4)]))){
var statearr_34637_37192 = state_34608;
(statearr_34637_37192[(1)] = cljs.core.first((state_34608[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37194 = state_34608;
state_34608 = G__37194;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_34608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_34608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_34638 = f__33680__auto__();
(statearr_34638[(6)] = c__33679__auto__);

return statearr_34638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));

return c__33679__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34645 = arguments.length;
switch (G__34645) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37202 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37202(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37206 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37206(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37210 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37210(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37212 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37212(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34715 = (function (ch,cs,meta34716){
this.ch = ch;
this.cs = cs;
this.meta34716 = meta34716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34717,meta34716__$1){
var self__ = this;
var _34717__$1 = this;
return (new cljs.core.async.t_cljs$core$async34715(self__.ch,self__.cs,meta34716__$1));
}));

(cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34717){
var self__ = this;
var _34717__$1 = this;
return self__.meta34716;
}));

(cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34716","meta34716",-757621055,null)], null);
}));

(cljs.core.async.t_cljs$core$async34715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34715");

(cljs.core.async.t_cljs$core$async34715.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34715.
 */
cljs.core.async.__GT_t_cljs$core$async34715 = (function cljs$core$async$__GT_t_cljs$core$async34715(ch,cs,meta34716){
return (new cljs.core.async.t_cljs$core$async34715(ch,cs,meta34716));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34715(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33679__auto___37219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_34906){
var state_val_34907 = (state_34906[(1)]);
if((state_val_34907 === (7))){
var inst_34901 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_34908_37220 = state_34906__$1;
(statearr_34908_37220[(2)] = inst_34901);

(statearr_34908_37220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (20))){
var inst_34786 = (state_34906[(7)]);
var inst_34803 = cljs.core.first(inst_34786);
var inst_34804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34803,(0),null);
var inst_34805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34803,(1),null);
var state_34906__$1 = (function (){var statearr_34913 = state_34906;
(statearr_34913[(8)] = inst_34804);

return statearr_34913;
})();
if(cljs.core.truth_(inst_34805)){
var statearr_34914_37224 = state_34906__$1;
(statearr_34914_37224[(1)] = (22));

} else {
var statearr_34915_37225 = state_34906__$1;
(statearr_34915_37225[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (27))){
var inst_34843 = (state_34906[(9)]);
var inst_34742 = (state_34906[(10)]);
var inst_34850 = (state_34906[(11)]);
var inst_34841 = (state_34906[(12)]);
var inst_34850__$1 = cljs.core._nth(inst_34841,inst_34843);
var inst_34851 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34850__$1,inst_34742,done);
var state_34906__$1 = (function (){var statearr_34917 = state_34906;
(statearr_34917[(11)] = inst_34850__$1);

return statearr_34917;
})();
if(cljs.core.truth_(inst_34851)){
var statearr_34918_37226 = state_34906__$1;
(statearr_34918_37226[(1)] = (30));

} else {
var statearr_34919_37227 = state_34906__$1;
(statearr_34919_37227[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (1))){
var state_34906__$1 = state_34906;
var statearr_34922_37228 = state_34906__$1;
(statearr_34922_37228[(2)] = null);

(statearr_34922_37228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (24))){
var inst_34786 = (state_34906[(7)]);
var inst_34812 = (state_34906[(2)]);
var inst_34813 = cljs.core.next(inst_34786);
var inst_34753 = inst_34813;
var inst_34754 = null;
var inst_34755 = (0);
var inst_34756 = (0);
var state_34906__$1 = (function (){var statearr_34926 = state_34906;
(statearr_34926[(13)] = inst_34812);

(statearr_34926[(14)] = inst_34753);

(statearr_34926[(15)] = inst_34755);

(statearr_34926[(16)] = inst_34754);

(statearr_34926[(17)] = inst_34756);

return statearr_34926;
})();
var statearr_34927_37230 = state_34906__$1;
(statearr_34927_37230[(2)] = null);

(statearr_34927_37230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (39))){
var state_34906__$1 = state_34906;
var statearr_34932_37231 = state_34906__$1;
(statearr_34932_37231[(2)] = null);

(statearr_34932_37231[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (4))){
var inst_34742 = (state_34906[(10)]);
var inst_34742__$1 = (state_34906[(2)]);
var inst_34743 = (inst_34742__$1 == null);
var state_34906__$1 = (function (){var statearr_34934 = state_34906;
(statearr_34934[(10)] = inst_34742__$1);

return statearr_34934;
})();
if(cljs.core.truth_(inst_34743)){
var statearr_34935_37241 = state_34906__$1;
(statearr_34935_37241[(1)] = (5));

} else {
var statearr_34938_37242 = state_34906__$1;
(statearr_34938_37242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (15))){
var inst_34753 = (state_34906[(14)]);
var inst_34755 = (state_34906[(15)]);
var inst_34754 = (state_34906[(16)]);
var inst_34756 = (state_34906[(17)]);
var inst_34781 = (state_34906[(2)]);
var inst_34782 = (inst_34756 + (1));
var tmp34928 = inst_34753;
var tmp34929 = inst_34755;
var tmp34930 = inst_34754;
var inst_34753__$1 = tmp34928;
var inst_34754__$1 = tmp34930;
var inst_34755__$1 = tmp34929;
var inst_34756__$1 = inst_34782;
var state_34906__$1 = (function (){var statearr_34942 = state_34906;
(statearr_34942[(14)] = inst_34753__$1);

(statearr_34942[(18)] = inst_34781);

(statearr_34942[(15)] = inst_34755__$1);

(statearr_34942[(16)] = inst_34754__$1);

(statearr_34942[(17)] = inst_34756__$1);

return statearr_34942;
})();
var statearr_34944_37256 = state_34906__$1;
(statearr_34944_37256[(2)] = null);

(statearr_34944_37256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (21))){
var inst_34816 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_34953_37257 = state_34906__$1;
(statearr_34953_37257[(2)] = inst_34816);

(statearr_34953_37257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (31))){
var inst_34850 = (state_34906[(11)]);
var inst_34854 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34850);
var state_34906__$1 = state_34906;
var statearr_34955_37258 = state_34906__$1;
(statearr_34955_37258[(2)] = inst_34854);

(statearr_34955_37258[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (32))){
var inst_34843 = (state_34906[(9)]);
var inst_34840 = (state_34906[(19)]);
var inst_34841 = (state_34906[(12)]);
var inst_34842 = (state_34906[(20)]);
var inst_34856 = (state_34906[(2)]);
var inst_34857 = (inst_34843 + (1));
var tmp34946 = inst_34840;
var tmp34947 = inst_34841;
var tmp34948 = inst_34842;
var inst_34840__$1 = tmp34946;
var inst_34841__$1 = tmp34947;
var inst_34842__$1 = tmp34948;
var inst_34843__$1 = inst_34857;
var state_34906__$1 = (function (){var statearr_34956 = state_34906;
(statearr_34956[(9)] = inst_34843__$1);

(statearr_34956[(21)] = inst_34856);

(statearr_34956[(19)] = inst_34840__$1);

(statearr_34956[(12)] = inst_34841__$1);

(statearr_34956[(20)] = inst_34842__$1);

return statearr_34956;
})();
var statearr_34958_37272 = state_34906__$1;
(statearr_34958_37272[(2)] = null);

(statearr_34958_37272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (40))){
var inst_34874 = (state_34906[(22)]);
var inst_34878 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34874);
var state_34906__$1 = state_34906;
var statearr_34959_37279 = state_34906__$1;
(statearr_34959_37279[(2)] = inst_34878);

(statearr_34959_37279[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (33))){
var inst_34860 = (state_34906[(23)]);
var inst_34863 = cljs.core.chunked_seq_QMARK_(inst_34860);
var state_34906__$1 = state_34906;
if(inst_34863){
var statearr_34965_37280 = state_34906__$1;
(statearr_34965_37280[(1)] = (36));

} else {
var statearr_34968_37287 = state_34906__$1;
(statearr_34968_37287[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (13))){
var inst_34773 = (state_34906[(24)]);
var inst_34778 = cljs.core.async.close_BANG_(inst_34773);
var state_34906__$1 = state_34906;
var statearr_34975_37288 = state_34906__$1;
(statearr_34975_37288[(2)] = inst_34778);

(statearr_34975_37288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (22))){
var inst_34804 = (state_34906[(8)]);
var inst_34809 = cljs.core.async.close_BANG_(inst_34804);
var state_34906__$1 = state_34906;
var statearr_34982_37289 = state_34906__$1;
(statearr_34982_37289[(2)] = inst_34809);

(statearr_34982_37289[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (36))){
var inst_34860 = (state_34906[(23)]);
var inst_34867 = cljs.core.chunk_first(inst_34860);
var inst_34868 = cljs.core.chunk_rest(inst_34860);
var inst_34869 = cljs.core.count(inst_34867);
var inst_34840 = inst_34868;
var inst_34841 = inst_34867;
var inst_34842 = inst_34869;
var inst_34843 = (0);
var state_34906__$1 = (function (){var statearr_34984 = state_34906;
(statearr_34984[(9)] = inst_34843);

(statearr_34984[(19)] = inst_34840);

(statearr_34984[(12)] = inst_34841);

(statearr_34984[(20)] = inst_34842);

return statearr_34984;
})();
var statearr_34986_37297 = state_34906__$1;
(statearr_34986_37297[(2)] = null);

(statearr_34986_37297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (41))){
var inst_34860 = (state_34906[(23)]);
var inst_34880 = (state_34906[(2)]);
var inst_34881 = cljs.core.next(inst_34860);
var inst_34840 = inst_34881;
var inst_34841 = null;
var inst_34842 = (0);
var inst_34843 = (0);
var state_34906__$1 = (function (){var statearr_34991 = state_34906;
(statearr_34991[(9)] = inst_34843);

(statearr_34991[(19)] = inst_34840);

(statearr_34991[(25)] = inst_34880);

(statearr_34991[(12)] = inst_34841);

(statearr_34991[(20)] = inst_34842);

return statearr_34991;
})();
var statearr_34992_37311 = state_34906__$1;
(statearr_34992_37311[(2)] = null);

(statearr_34992_37311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (43))){
var state_34906__$1 = state_34906;
var statearr_34993_37315 = state_34906__$1;
(statearr_34993_37315[(2)] = null);

(statearr_34993_37315[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (29))){
var inst_34889 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_34994_37316 = state_34906__$1;
(statearr_34994_37316[(2)] = inst_34889);

(statearr_34994_37316[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (44))){
var inst_34898 = (state_34906[(2)]);
var state_34906__$1 = (function (){var statearr_34996 = state_34906;
(statearr_34996[(26)] = inst_34898);

return statearr_34996;
})();
var statearr_34997_37321 = state_34906__$1;
(statearr_34997_37321[(2)] = null);

(statearr_34997_37321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (6))){
var inst_34831 = (state_34906[(27)]);
var inst_34830 = cljs.core.deref(cs);
var inst_34831__$1 = cljs.core.keys(inst_34830);
var inst_34833 = cljs.core.count(inst_34831__$1);
var inst_34834 = cljs.core.reset_BANG_(dctr,inst_34833);
var inst_34839 = cljs.core.seq(inst_34831__$1);
var inst_34840 = inst_34839;
var inst_34841 = null;
var inst_34842 = (0);
var inst_34843 = (0);
var state_34906__$1 = (function (){var statearr_35003 = state_34906;
(statearr_35003[(9)] = inst_34843);

(statearr_35003[(27)] = inst_34831__$1);

(statearr_35003[(19)] = inst_34840);

(statearr_35003[(28)] = inst_34834);

(statearr_35003[(12)] = inst_34841);

(statearr_35003[(20)] = inst_34842);

return statearr_35003;
})();
var statearr_35004_37340 = state_34906__$1;
(statearr_35004_37340[(2)] = null);

(statearr_35004_37340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (28))){
var inst_34840 = (state_34906[(19)]);
var inst_34860 = (state_34906[(23)]);
var inst_34860__$1 = cljs.core.seq(inst_34840);
var state_34906__$1 = (function (){var statearr_35005 = state_34906;
(statearr_35005[(23)] = inst_34860__$1);

return statearr_35005;
})();
if(inst_34860__$1){
var statearr_35006_37348 = state_34906__$1;
(statearr_35006_37348[(1)] = (33));

} else {
var statearr_35007_37353 = state_34906__$1;
(statearr_35007_37353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (25))){
var inst_34843 = (state_34906[(9)]);
var inst_34842 = (state_34906[(20)]);
var inst_34845 = (inst_34843 < inst_34842);
var inst_34846 = inst_34845;
var state_34906__$1 = state_34906;
if(cljs.core.truth_(inst_34846)){
var statearr_35013_37354 = state_34906__$1;
(statearr_35013_37354[(1)] = (27));

} else {
var statearr_35014_37355 = state_34906__$1;
(statearr_35014_37355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (34))){
var state_34906__$1 = state_34906;
var statearr_35015_37356 = state_34906__$1;
(statearr_35015_37356[(2)] = null);

(statearr_35015_37356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (17))){
var state_34906__$1 = state_34906;
var statearr_35016_37361 = state_34906__$1;
(statearr_35016_37361[(2)] = null);

(statearr_35016_37361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (3))){
var inst_34903 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34906__$1,inst_34903);
} else {
if((state_val_34907 === (12))){
var inst_34821 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_35018_37362 = state_34906__$1;
(statearr_35018_37362[(2)] = inst_34821);

(statearr_35018_37362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (2))){
var state_34906__$1 = state_34906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34906__$1,(4),ch);
} else {
if((state_val_34907 === (23))){
var state_34906__$1 = state_34906;
var statearr_35020_37369 = state_34906__$1;
(statearr_35020_37369[(2)] = null);

(statearr_35020_37369[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (35))){
var inst_34887 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_35022_37373 = state_34906__$1;
(statearr_35022_37373[(2)] = inst_34887);

(statearr_35022_37373[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (19))){
var inst_34786 = (state_34906[(7)]);
var inst_34790 = cljs.core.chunk_first(inst_34786);
var inst_34791 = cljs.core.chunk_rest(inst_34786);
var inst_34792 = cljs.core.count(inst_34790);
var inst_34753 = inst_34791;
var inst_34754 = inst_34790;
var inst_34755 = inst_34792;
var inst_34756 = (0);
var state_34906__$1 = (function (){var statearr_35027 = state_34906;
(statearr_35027[(14)] = inst_34753);

(statearr_35027[(15)] = inst_34755);

(statearr_35027[(16)] = inst_34754);

(statearr_35027[(17)] = inst_34756);

return statearr_35027;
})();
var statearr_35031_37375 = state_34906__$1;
(statearr_35031_37375[(2)] = null);

(statearr_35031_37375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (11))){
var inst_34753 = (state_34906[(14)]);
var inst_34786 = (state_34906[(7)]);
var inst_34786__$1 = cljs.core.seq(inst_34753);
var state_34906__$1 = (function (){var statearr_35032 = state_34906;
(statearr_35032[(7)] = inst_34786__$1);

return statearr_35032;
})();
if(inst_34786__$1){
var statearr_35034_37382 = state_34906__$1;
(statearr_35034_37382[(1)] = (16));

} else {
var statearr_35035_37383 = state_34906__$1;
(statearr_35035_37383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (9))){
var inst_34823 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_35036_37384 = state_34906__$1;
(statearr_35036_37384[(2)] = inst_34823);

(statearr_35036_37384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (5))){
var inst_34751 = cljs.core.deref(cs);
var inst_34752 = cljs.core.seq(inst_34751);
var inst_34753 = inst_34752;
var inst_34754 = null;
var inst_34755 = (0);
var inst_34756 = (0);
var state_34906__$1 = (function (){var statearr_35037 = state_34906;
(statearr_35037[(14)] = inst_34753);

(statearr_35037[(15)] = inst_34755);

(statearr_35037[(16)] = inst_34754);

(statearr_35037[(17)] = inst_34756);

return statearr_35037;
})();
var statearr_35038_37385 = state_34906__$1;
(statearr_35038_37385[(2)] = null);

(statearr_35038_37385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (14))){
var state_34906__$1 = state_34906;
var statearr_35039_37386 = state_34906__$1;
(statearr_35039_37386[(2)] = null);

(statearr_35039_37386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (45))){
var inst_34895 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_35041_37387 = state_34906__$1;
(statearr_35041_37387[(2)] = inst_34895);

(statearr_35041_37387[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (26))){
var inst_34831 = (state_34906[(27)]);
var inst_34891 = (state_34906[(2)]);
var inst_34892 = cljs.core.seq(inst_34831);
var state_34906__$1 = (function (){var statearr_35042 = state_34906;
(statearr_35042[(29)] = inst_34891);

return statearr_35042;
})();
if(inst_34892){
var statearr_35043_37395 = state_34906__$1;
(statearr_35043_37395[(1)] = (42));

} else {
var statearr_35044_37397 = state_34906__$1;
(statearr_35044_37397[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (16))){
var inst_34786 = (state_34906[(7)]);
var inst_34788 = cljs.core.chunked_seq_QMARK_(inst_34786);
var state_34906__$1 = state_34906;
if(inst_34788){
var statearr_35047_37398 = state_34906__$1;
(statearr_35047_37398[(1)] = (19));

} else {
var statearr_35048_37400 = state_34906__$1;
(statearr_35048_37400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (38))){
var inst_34884 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_35049_37402 = state_34906__$1;
(statearr_35049_37402[(2)] = inst_34884);

(statearr_35049_37402[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (30))){
var state_34906__$1 = state_34906;
var statearr_35050_37403 = state_34906__$1;
(statearr_35050_37403[(2)] = null);

(statearr_35050_37403[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (10))){
var inst_34754 = (state_34906[(16)]);
var inst_34756 = (state_34906[(17)]);
var inst_34772 = cljs.core._nth(inst_34754,inst_34756);
var inst_34773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34772,(0),null);
var inst_34774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34772,(1),null);
var state_34906__$1 = (function (){var statearr_35051 = state_34906;
(statearr_35051[(24)] = inst_34773);

return statearr_35051;
})();
if(cljs.core.truth_(inst_34774)){
var statearr_35053_37411 = state_34906__$1;
(statearr_35053_37411[(1)] = (13));

} else {
var statearr_35054_37412 = state_34906__$1;
(statearr_35054_37412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (18))){
var inst_34819 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_35058_37413 = state_34906__$1;
(statearr_35058_37413[(2)] = inst_34819);

(statearr_35058_37413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (42))){
var state_34906__$1 = state_34906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34906__$1,(45),dchan);
} else {
if((state_val_34907 === (37))){
var inst_34742 = (state_34906[(10)]);
var inst_34874 = (state_34906[(22)]);
var inst_34860 = (state_34906[(23)]);
var inst_34874__$1 = cljs.core.first(inst_34860);
var inst_34875 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34874__$1,inst_34742,done);
var state_34906__$1 = (function (){var statearr_35062 = state_34906;
(statearr_35062[(22)] = inst_34874__$1);

return statearr_35062;
})();
if(cljs.core.truth_(inst_34875)){
var statearr_35063_37418 = state_34906__$1;
(statearr_35063_37418[(1)] = (39));

} else {
var statearr_35064_37419 = state_34906__$1;
(statearr_35064_37419[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (8))){
var inst_34755 = (state_34906[(15)]);
var inst_34756 = (state_34906[(17)]);
var inst_34766 = (inst_34756 < inst_34755);
var inst_34767 = inst_34766;
var state_34906__$1 = state_34906;
if(cljs.core.truth_(inst_34767)){
var statearr_35065_37421 = state_34906__$1;
(statearr_35065_37421[(1)] = (10));

} else {
var statearr_35066_37422 = state_34906__$1;
(statearr_35066_37422[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33364__auto__ = null;
var cljs$core$async$mult_$_state_machine__33364__auto____0 = (function (){
var statearr_35071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35071[(0)] = cljs$core$async$mult_$_state_machine__33364__auto__);

(statearr_35071[(1)] = (1));

return statearr_35071;
});
var cljs$core$async$mult_$_state_machine__33364__auto____1 = (function (state_34906){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_34906);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e35072){var ex__33367__auto__ = e35072;
var statearr_35073_37426 = state_34906;
(statearr_35073_37426[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_34906[(4)]))){
var statearr_35074_37427 = state_34906;
(statearr_35074_37427[(1)] = cljs.core.first((state_34906[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37428 = state_34906;
state_34906 = G__37428;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33364__auto__ = function(state_34906){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33364__auto____1.call(this,state_34906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33364__auto____0;
cljs$core$async$mult_$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33364__auto____1;
return cljs$core$async$mult_$_state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_35131 = f__33680__auto__();
(statearr_35131[(6)] = c__33679__auto___37219);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35134 = arguments.length;
switch (G__35134) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37434 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37434(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37436 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37436(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37439 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37439(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37444 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37444(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37446 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37446(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37449 = arguments.length;
var i__5770__auto___37450 = (0);
while(true){
if((i__5770__auto___37450 < len__5769__auto___37449)){
args__5775__auto__.push((arguments[i__5770__auto___37450]));

var G__37451 = (i__5770__auto___37450 + (1));
i__5770__auto___37450 = G__37451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35171){
var map__35172 = p__35171;
var map__35172__$1 = cljs.core.__destructure_map(map__35172);
var opts = map__35172__$1;
var statearr_35173_37455 = state;
(statearr_35173_37455[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35178_37460 = state;
(statearr_35178_37460[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35179_37462 = state;
(statearr_35179_37462[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35162){
var G__35163 = cljs.core.first(seq35162);
var seq35162__$1 = cljs.core.next(seq35162);
var G__35164 = cljs.core.first(seq35162__$1);
var seq35162__$2 = cljs.core.next(seq35162__$1);
var G__35165 = cljs.core.first(seq35162__$2);
var seq35162__$3 = cljs.core.next(seq35162__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35163,G__35164,G__35165,seq35162__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35187 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35188){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35188 = meta35188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35189,meta35188__$1){
var self__ = this;
var _35189__$1 = this;
return (new cljs.core.async.t_cljs$core$async35187(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35188__$1));
}));

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35189){
var self__ = this;
var _35189__$1 = this;
return self__.meta35188;
}));

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35187.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35188","meta35188",-1567181342,null)], null);
}));

(cljs.core.async.t_cljs$core$async35187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35187");

(cljs.core.async.t_cljs$core$async35187.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35187.
 */
cljs.core.async.__GT_t_cljs$core$async35187 = (function cljs$core$async$__GT_t_cljs$core$async35187(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35188){
return (new cljs.core.async.t_cljs$core$async35187(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35188));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async35187(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33679__auto___37478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_35284){
var state_val_35285 = (state_35284[(1)]);
if((state_val_35285 === (7))){
var inst_35242 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35242)){
var statearr_35288_37480 = state_35284__$1;
(statearr_35288_37480[(1)] = (8));

} else {
var statearr_35289_37482 = state_35284__$1;
(statearr_35289_37482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (20))){
var inst_35230 = (state_35284[(7)]);
var state_35284__$1 = state_35284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35284__$1,(23),out,inst_35230);
} else {
if((state_val_35285 === (1))){
var inst_35205 = calc_state();
var inst_35206 = cljs.core.__destructure_map(inst_35205);
var inst_35207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35206,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35206,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35206,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35210 = inst_35205;
var state_35284__$1 = (function (){var statearr_35294 = state_35284;
(statearr_35294[(8)] = inst_35208);

(statearr_35294[(9)] = inst_35207);

(statearr_35294[(10)] = inst_35210);

(statearr_35294[(11)] = inst_35209);

return statearr_35294;
})();
var statearr_35295_37483 = state_35284__$1;
(statearr_35295_37483[(2)] = null);

(statearr_35295_37483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (24))){
var inst_35217 = (state_35284[(12)]);
var inst_35210 = inst_35217;
var state_35284__$1 = (function (){var statearr_35297 = state_35284;
(statearr_35297[(10)] = inst_35210);

return statearr_35297;
})();
var statearr_35298_37484 = state_35284__$1;
(statearr_35298_37484[(2)] = null);

(statearr_35298_37484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (4))){
var inst_35237 = (state_35284[(13)]);
var inst_35230 = (state_35284[(7)]);
var inst_35229 = (state_35284[(2)]);
var inst_35230__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35229,(0),null);
var inst_35235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35229,(1),null);
var inst_35237__$1 = (inst_35230__$1 == null);
var state_35284__$1 = (function (){var statearr_35299 = state_35284;
(statearr_35299[(14)] = inst_35235);

(statearr_35299[(13)] = inst_35237__$1);

(statearr_35299[(7)] = inst_35230__$1);

return statearr_35299;
})();
if(cljs.core.truth_(inst_35237__$1)){
var statearr_35302_37485 = state_35284__$1;
(statearr_35302_37485[(1)] = (5));

} else {
var statearr_35303_37487 = state_35284__$1;
(statearr_35303_37487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (15))){
var inst_35218 = (state_35284[(15)]);
var inst_35258 = (state_35284[(16)]);
var inst_35258__$1 = cljs.core.empty_QMARK_(inst_35218);
var state_35284__$1 = (function (){var statearr_35305 = state_35284;
(statearr_35305[(16)] = inst_35258__$1);

return statearr_35305;
})();
if(inst_35258__$1){
var statearr_35306_37493 = state_35284__$1;
(statearr_35306_37493[(1)] = (17));

} else {
var statearr_35307_37494 = state_35284__$1;
(statearr_35307_37494[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (21))){
var inst_35217 = (state_35284[(12)]);
var inst_35210 = inst_35217;
var state_35284__$1 = (function (){var statearr_35309 = state_35284;
(statearr_35309[(10)] = inst_35210);

return statearr_35309;
})();
var statearr_35310_37497 = state_35284__$1;
(statearr_35310_37497[(2)] = null);

(statearr_35310_37497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (13))){
var inst_35249 = (state_35284[(2)]);
var inst_35250 = calc_state();
var inst_35210 = inst_35250;
var state_35284__$1 = (function (){var statearr_35313 = state_35284;
(statearr_35313[(17)] = inst_35249);

(statearr_35313[(10)] = inst_35210);

return statearr_35313;
})();
var statearr_35317_37498 = state_35284__$1;
(statearr_35317_37498[(2)] = null);

(statearr_35317_37498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (22))){
var inst_35278 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35323_37499 = state_35284__$1;
(statearr_35323_37499[(2)] = inst_35278);

(statearr_35323_37499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (6))){
var inst_35235 = (state_35284[(14)]);
var inst_35240 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35235,change);
var state_35284__$1 = state_35284;
var statearr_35329_37504 = state_35284__$1;
(statearr_35329_37504[(2)] = inst_35240);

(statearr_35329_37504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (25))){
var state_35284__$1 = state_35284;
var statearr_35331_37507 = state_35284__$1;
(statearr_35331_37507[(2)] = null);

(statearr_35331_37507[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (17))){
var inst_35219 = (state_35284[(18)]);
var inst_35235 = (state_35284[(14)]);
var inst_35260 = (inst_35219.cljs$core$IFn$_invoke$arity$1 ? inst_35219.cljs$core$IFn$_invoke$arity$1(inst_35235) : inst_35219.call(null,inst_35235));
var inst_35261 = cljs.core.not(inst_35260);
var state_35284__$1 = state_35284;
var statearr_35334_37508 = state_35284__$1;
(statearr_35334_37508[(2)] = inst_35261);

(statearr_35334_37508[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (3))){
var inst_35282 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35284__$1,inst_35282);
} else {
if((state_val_35285 === (12))){
var state_35284__$1 = state_35284;
var statearr_35338_37514 = state_35284__$1;
(statearr_35338_37514[(2)] = null);

(statearr_35338_37514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (2))){
var inst_35217 = (state_35284[(12)]);
var inst_35210 = (state_35284[(10)]);
var inst_35217__$1 = cljs.core.__destructure_map(inst_35210);
var inst_35218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35217__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35217__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35217__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35284__$1 = (function (){var statearr_35341 = state_35284;
(statearr_35341[(12)] = inst_35217__$1);

(statearr_35341[(18)] = inst_35219);

(statearr_35341[(15)] = inst_35218);

return statearr_35341;
})();
return cljs.core.async.ioc_alts_BANG_(state_35284__$1,(4),inst_35224);
} else {
if((state_val_35285 === (23))){
var inst_35269 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35269)){
var statearr_35346_37518 = state_35284__$1;
(statearr_35346_37518[(1)] = (24));

} else {
var statearr_35349_37521 = state_35284__$1;
(statearr_35349_37521[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (19))){
var inst_35264 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35355_37523 = state_35284__$1;
(statearr_35355_37523[(2)] = inst_35264);

(statearr_35355_37523[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (11))){
var inst_35235 = (state_35284[(14)]);
var inst_35246 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35235);
var state_35284__$1 = state_35284;
var statearr_35356_37524 = state_35284__$1;
(statearr_35356_37524[(2)] = inst_35246);

(statearr_35356_37524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (9))){
var inst_35253 = (state_35284[(19)]);
var inst_35235 = (state_35284[(14)]);
var inst_35218 = (state_35284[(15)]);
var inst_35253__$1 = (inst_35218.cljs$core$IFn$_invoke$arity$1 ? inst_35218.cljs$core$IFn$_invoke$arity$1(inst_35235) : inst_35218.call(null,inst_35235));
var state_35284__$1 = (function (){var statearr_35357 = state_35284;
(statearr_35357[(19)] = inst_35253__$1);

return statearr_35357;
})();
if(cljs.core.truth_(inst_35253__$1)){
var statearr_35359_37529 = state_35284__$1;
(statearr_35359_37529[(1)] = (14));

} else {
var statearr_35362_37532 = state_35284__$1;
(statearr_35362_37532[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (5))){
var inst_35237 = (state_35284[(13)]);
var state_35284__$1 = state_35284;
var statearr_35364_37538 = state_35284__$1;
(statearr_35364_37538[(2)] = inst_35237);

(statearr_35364_37538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (14))){
var inst_35253 = (state_35284[(19)]);
var state_35284__$1 = state_35284;
var statearr_35365_37542 = state_35284__$1;
(statearr_35365_37542[(2)] = inst_35253);

(statearr_35365_37542[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (26))){
var inst_35274 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35366_37552 = state_35284__$1;
(statearr_35366_37552[(2)] = inst_35274);

(statearr_35366_37552[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (16))){
var inst_35266 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35266)){
var statearr_35367_37553 = state_35284__$1;
(statearr_35367_37553[(1)] = (20));

} else {
var statearr_35369_37556 = state_35284__$1;
(statearr_35369_37556[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (10))){
var inst_35280 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35371_37557 = state_35284__$1;
(statearr_35371_37557[(2)] = inst_35280);

(statearr_35371_37557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (18))){
var inst_35258 = (state_35284[(16)]);
var state_35284__$1 = state_35284;
var statearr_35373_37559 = state_35284__$1;
(statearr_35373_37559[(2)] = inst_35258);

(statearr_35373_37559[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (8))){
var inst_35230 = (state_35284[(7)]);
var inst_35244 = (inst_35230 == null);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35244)){
var statearr_35374_37560 = state_35284__$1;
(statearr_35374_37560[(1)] = (11));

} else {
var statearr_35375_37561 = state_35284__$1;
(statearr_35375_37561[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33364__auto__ = null;
var cljs$core$async$mix_$_state_machine__33364__auto____0 = (function (){
var statearr_35378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35378[(0)] = cljs$core$async$mix_$_state_machine__33364__auto__);

(statearr_35378[(1)] = (1));

return statearr_35378;
});
var cljs$core$async$mix_$_state_machine__33364__auto____1 = (function (state_35284){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_35284);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e35383){var ex__33367__auto__ = e35383;
var statearr_35384_37566 = state_35284;
(statearr_35384_37566[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_35284[(4)]))){
var statearr_35385_37567 = state_35284;
(statearr_35385_37567[(1)] = cljs.core.first((state_35284[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37568 = state_35284;
state_35284 = G__37568;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33364__auto__ = function(state_35284){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33364__auto____1.call(this,state_35284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33364__auto____0;
cljs$core$async$mix_$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33364__auto____1;
return cljs$core$async$mix_$_state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_35389 = f__33680__auto__();
(statearr_35389[(6)] = c__33679__auto___37478);

return statearr_35389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37569 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37569(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37570 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37570(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37586 = (function() {
var G__37587 = null;
var G__37587__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37587__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37587 = function(p,v){
switch(arguments.length){
case 1:
return G__37587__1.call(this,p);
case 2:
return G__37587__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37587.cljs$core$IFn$_invoke$arity$1 = G__37587__1;
G__37587.cljs$core$IFn$_invoke$arity$2 = G__37587__2;
return G__37587;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35409 = arguments.length;
switch (G__35409) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37586(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37586(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35433 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35434){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35434 = meta35434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35435,meta35434__$1){
var self__ = this;
var _35435__$1 = this;
return (new cljs.core.async.t_cljs$core$async35433(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35434__$1));
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35435){
var self__ = this;
var _35435__$1 = this;
return self__.meta35434;
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35433.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35434","meta35434",840184924,null)], null);
}));

(cljs.core.async.t_cljs$core$async35433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35433");

(cljs.core.async.t_cljs$core$async35433.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35433.
 */
cljs.core.async.__GT_t_cljs$core$async35433 = (function cljs$core$async$__GT_t_cljs$core$async35433(ch,topic_fn,buf_fn,mults,ensure_mult,meta35434){
return (new cljs.core.async.t_cljs$core$async35433(ch,topic_fn,buf_fn,mults,ensure_mult,meta35434));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35424 = arguments.length;
switch (G__35424) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35421_SHARP_){
if(cljs.core.truth_((p1__35421_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35421_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35421_SHARP_.call(null,topic)))){
return p1__35421_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35421_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35433(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33679__auto___37612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_35525){
var state_val_35526 = (state_35525[(1)]);
if((state_val_35526 === (7))){
var inst_35521 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
var statearr_35527_37620 = state_35525__$1;
(statearr_35527_37620[(2)] = inst_35521);

(statearr_35527_37620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (20))){
var state_35525__$1 = state_35525;
var statearr_35528_37624 = state_35525__$1;
(statearr_35528_37624[(2)] = null);

(statearr_35528_37624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (1))){
var state_35525__$1 = state_35525;
var statearr_35530_37625 = state_35525__$1;
(statearr_35530_37625[(2)] = null);

(statearr_35530_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (24))){
var inst_35504 = (state_35525[(7)]);
var inst_35513 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35504);
var state_35525__$1 = state_35525;
var statearr_35531_37626 = state_35525__$1;
(statearr_35531_37626[(2)] = inst_35513);

(statearr_35531_37626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (4))){
var inst_35451 = (state_35525[(8)]);
var inst_35451__$1 = (state_35525[(2)]);
var inst_35453 = (inst_35451__$1 == null);
var state_35525__$1 = (function (){var statearr_35532 = state_35525;
(statearr_35532[(8)] = inst_35451__$1);

return statearr_35532;
})();
if(cljs.core.truth_(inst_35453)){
var statearr_35534_37627 = state_35525__$1;
(statearr_35534_37627[(1)] = (5));

} else {
var statearr_35535_37628 = state_35525__$1;
(statearr_35535_37628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (15))){
var inst_35498 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
var statearr_35536_37629 = state_35525__$1;
(statearr_35536_37629[(2)] = inst_35498);

(statearr_35536_37629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (21))){
var inst_35518 = (state_35525[(2)]);
var state_35525__$1 = (function (){var statearr_35537 = state_35525;
(statearr_35537[(9)] = inst_35518);

return statearr_35537;
})();
var statearr_35538_37630 = state_35525__$1;
(statearr_35538_37630[(2)] = null);

(statearr_35538_37630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (13))){
var inst_35479 = (state_35525[(10)]);
var inst_35481 = cljs.core.chunked_seq_QMARK_(inst_35479);
var state_35525__$1 = state_35525;
if(inst_35481){
var statearr_35540_37634 = state_35525__$1;
(statearr_35540_37634[(1)] = (16));

} else {
var statearr_35541_37639 = state_35525__$1;
(statearr_35541_37639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (22))){
var inst_35510 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
if(cljs.core.truth_(inst_35510)){
var statearr_35543_37649 = state_35525__$1;
(statearr_35543_37649[(1)] = (23));

} else {
var statearr_35544_37650 = state_35525__$1;
(statearr_35544_37650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (6))){
var inst_35506 = (state_35525[(11)]);
var inst_35504 = (state_35525[(7)]);
var inst_35451 = (state_35525[(8)]);
var inst_35504__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35451) : topic_fn.call(null,inst_35451));
var inst_35505 = cljs.core.deref(mults);
var inst_35506__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35505,inst_35504__$1);
var state_35525__$1 = (function (){var statearr_35547 = state_35525;
(statearr_35547[(11)] = inst_35506__$1);

(statearr_35547[(7)] = inst_35504__$1);

return statearr_35547;
})();
if(cljs.core.truth_(inst_35506__$1)){
var statearr_35548_37654 = state_35525__$1;
(statearr_35548_37654[(1)] = (19));

} else {
var statearr_35549_37655 = state_35525__$1;
(statearr_35549_37655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (25))){
var inst_35515 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
var statearr_35554_37656 = state_35525__$1;
(statearr_35554_37656[(2)] = inst_35515);

(statearr_35554_37656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (17))){
var inst_35479 = (state_35525[(10)]);
var inst_35488 = cljs.core.first(inst_35479);
var inst_35490 = cljs.core.async.muxch_STAR_(inst_35488);
var inst_35491 = cljs.core.async.close_BANG_(inst_35490);
var inst_35492 = cljs.core.next(inst_35479);
var inst_35465 = inst_35492;
var inst_35466 = null;
var inst_35467 = (0);
var inst_35468 = (0);
var state_35525__$1 = (function (){var statearr_35556 = state_35525;
(statearr_35556[(12)] = inst_35491);

(statearr_35556[(13)] = inst_35468);

(statearr_35556[(14)] = inst_35467);

(statearr_35556[(15)] = inst_35465);

(statearr_35556[(16)] = inst_35466);

return statearr_35556;
})();
var statearr_35557_37664 = state_35525__$1;
(statearr_35557_37664[(2)] = null);

(statearr_35557_37664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (3))){
var inst_35523 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35525__$1,inst_35523);
} else {
if((state_val_35526 === (12))){
var inst_35500 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
var statearr_35558_37665 = state_35525__$1;
(statearr_35558_37665[(2)] = inst_35500);

(statearr_35558_37665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (2))){
var state_35525__$1 = state_35525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35525__$1,(4),ch);
} else {
if((state_val_35526 === (23))){
var state_35525__$1 = state_35525;
var statearr_35559_37666 = state_35525__$1;
(statearr_35559_37666[(2)] = null);

(statearr_35559_37666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (19))){
var inst_35506 = (state_35525[(11)]);
var inst_35451 = (state_35525[(8)]);
var inst_35508 = cljs.core.async.muxch_STAR_(inst_35506);
var state_35525__$1 = state_35525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35525__$1,(22),inst_35508,inst_35451);
} else {
if((state_val_35526 === (11))){
var inst_35465 = (state_35525[(15)]);
var inst_35479 = (state_35525[(10)]);
var inst_35479__$1 = cljs.core.seq(inst_35465);
var state_35525__$1 = (function (){var statearr_35560 = state_35525;
(statearr_35560[(10)] = inst_35479__$1);

return statearr_35560;
})();
if(inst_35479__$1){
var statearr_35561_37669 = state_35525__$1;
(statearr_35561_37669[(1)] = (13));

} else {
var statearr_35563_37670 = state_35525__$1;
(statearr_35563_37670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (9))){
var inst_35502 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
var statearr_35564_37671 = state_35525__$1;
(statearr_35564_37671[(2)] = inst_35502);

(statearr_35564_37671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (5))){
var inst_35462 = cljs.core.deref(mults);
var inst_35463 = cljs.core.vals(inst_35462);
var inst_35464 = cljs.core.seq(inst_35463);
var inst_35465 = inst_35464;
var inst_35466 = null;
var inst_35467 = (0);
var inst_35468 = (0);
var state_35525__$1 = (function (){var statearr_35570 = state_35525;
(statearr_35570[(13)] = inst_35468);

(statearr_35570[(14)] = inst_35467);

(statearr_35570[(15)] = inst_35465);

(statearr_35570[(16)] = inst_35466);

return statearr_35570;
})();
var statearr_35571_37672 = state_35525__$1;
(statearr_35571_37672[(2)] = null);

(statearr_35571_37672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (14))){
var state_35525__$1 = state_35525;
var statearr_35576_37673 = state_35525__$1;
(statearr_35576_37673[(2)] = null);

(statearr_35576_37673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (16))){
var inst_35479 = (state_35525[(10)]);
var inst_35483 = cljs.core.chunk_first(inst_35479);
var inst_35484 = cljs.core.chunk_rest(inst_35479);
var inst_35485 = cljs.core.count(inst_35483);
var inst_35465 = inst_35484;
var inst_35466 = inst_35483;
var inst_35467 = inst_35485;
var inst_35468 = (0);
var state_35525__$1 = (function (){var statearr_35578 = state_35525;
(statearr_35578[(13)] = inst_35468);

(statearr_35578[(14)] = inst_35467);

(statearr_35578[(15)] = inst_35465);

(statearr_35578[(16)] = inst_35466);

return statearr_35578;
})();
var statearr_35579_37674 = state_35525__$1;
(statearr_35579_37674[(2)] = null);

(statearr_35579_37674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (10))){
var inst_35468 = (state_35525[(13)]);
var inst_35467 = (state_35525[(14)]);
var inst_35465 = (state_35525[(15)]);
var inst_35466 = (state_35525[(16)]);
var inst_35473 = cljs.core._nth(inst_35466,inst_35468);
var inst_35474 = cljs.core.async.muxch_STAR_(inst_35473);
var inst_35475 = cljs.core.async.close_BANG_(inst_35474);
var inst_35476 = (inst_35468 + (1));
var tmp35572 = inst_35467;
var tmp35573 = inst_35465;
var tmp35574 = inst_35466;
var inst_35465__$1 = tmp35573;
var inst_35466__$1 = tmp35574;
var inst_35467__$1 = tmp35572;
var inst_35468__$1 = inst_35476;
var state_35525__$1 = (function (){var statearr_35584 = state_35525;
(statearr_35584[(13)] = inst_35468__$1);

(statearr_35584[(17)] = inst_35475);

(statearr_35584[(14)] = inst_35467__$1);

(statearr_35584[(15)] = inst_35465__$1);

(statearr_35584[(16)] = inst_35466__$1);

return statearr_35584;
})();
var statearr_35585_37675 = state_35525__$1;
(statearr_35585_37675[(2)] = null);

(statearr_35585_37675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (18))){
var inst_35495 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
var statearr_35587_37676 = state_35525__$1;
(statearr_35587_37676[(2)] = inst_35495);

(statearr_35587_37676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (8))){
var inst_35468 = (state_35525[(13)]);
var inst_35467 = (state_35525[(14)]);
var inst_35470 = (inst_35468 < inst_35467);
var inst_35471 = inst_35470;
var state_35525__$1 = state_35525;
if(cljs.core.truth_(inst_35471)){
var statearr_35588_37680 = state_35525__$1;
(statearr_35588_37680[(1)] = (10));

} else {
var statearr_35589_37681 = state_35525__$1;
(statearr_35589_37681[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_35590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35590[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_35590[(1)] = (1));

return statearr_35590;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_35525){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_35525);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e35593){var ex__33367__auto__ = e35593;
var statearr_35594_37682 = state_35525;
(statearr_35594_37682[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_35525[(4)]))){
var statearr_35595_37683 = state_35525;
(statearr_35595_37683[(1)] = cljs.core.first((state_35525[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37684 = state_35525;
state_35525 = G__37684;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_35525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_35525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_35604 = f__33680__auto__();
(statearr_35604[(6)] = c__33679__auto___37612);

return statearr_35604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35606 = arguments.length;
switch (G__35606) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35620 = arguments.length;
switch (G__35620) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35623 = arguments.length;
switch (G__35623) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33679__auto___37693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_35691){
var state_val_35692 = (state_35691[(1)]);
if((state_val_35692 === (7))){
var state_35691__$1 = state_35691;
var statearr_35693_37694 = state_35691__$1;
(statearr_35693_37694[(2)] = null);

(statearr_35693_37694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (1))){
var state_35691__$1 = state_35691;
var statearr_35697_37695 = state_35691__$1;
(statearr_35697_37695[(2)] = null);

(statearr_35697_37695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (4))){
var inst_35636 = (state_35691[(7)]);
var inst_35635 = (state_35691[(8)]);
var inst_35639 = (inst_35636 < inst_35635);
var state_35691__$1 = state_35691;
if(cljs.core.truth_(inst_35639)){
var statearr_35705_37696 = state_35691__$1;
(statearr_35705_37696[(1)] = (6));

} else {
var statearr_35706_37697 = state_35691__$1;
(statearr_35706_37697[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (15))){
var inst_35673 = (state_35691[(9)]);
var inst_35678 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35673);
var state_35691__$1 = state_35691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35691__$1,(17),out,inst_35678);
} else {
if((state_val_35692 === (13))){
var inst_35673 = (state_35691[(9)]);
var inst_35673__$1 = (state_35691[(2)]);
var inst_35674 = cljs.core.some(cljs.core.nil_QMARK_,inst_35673__$1);
var state_35691__$1 = (function (){var statearr_35712 = state_35691;
(statearr_35712[(9)] = inst_35673__$1);

return statearr_35712;
})();
if(cljs.core.truth_(inst_35674)){
var statearr_35715_37698 = state_35691__$1;
(statearr_35715_37698[(1)] = (14));

} else {
var statearr_35716_37699 = state_35691__$1;
(statearr_35716_37699[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (6))){
var state_35691__$1 = state_35691;
var statearr_35721_37700 = state_35691__$1;
(statearr_35721_37700[(2)] = null);

(statearr_35721_37700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (17))){
var inst_35680 = (state_35691[(2)]);
var state_35691__$1 = (function (){var statearr_35738 = state_35691;
(statearr_35738[(10)] = inst_35680);

return statearr_35738;
})();
var statearr_35739_37701 = state_35691__$1;
(statearr_35739_37701[(2)] = null);

(statearr_35739_37701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (3))){
var inst_35685 = (state_35691[(2)]);
var state_35691__$1 = state_35691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35691__$1,inst_35685);
} else {
if((state_val_35692 === (12))){
var _ = (function (){var statearr_35745 = state_35691;
(statearr_35745[(4)] = cljs.core.rest((state_35691[(4)])));

return statearr_35745;
})();
var state_35691__$1 = state_35691;
var ex35735 = (state_35691__$1[(2)]);
var statearr_35749_37716 = state_35691__$1;
(statearr_35749_37716[(5)] = ex35735);


if((ex35735 instanceof Object)){
var statearr_35751_37717 = state_35691__$1;
(statearr_35751_37717[(1)] = (11));

(statearr_35751_37717[(5)] = null);

} else {
throw ex35735;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (2))){
var inst_35634 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35635 = cnt;
var inst_35636 = (0);
var state_35691__$1 = (function (){var statearr_35759 = state_35691;
(statearr_35759[(7)] = inst_35636);

(statearr_35759[(8)] = inst_35635);

(statearr_35759[(11)] = inst_35634);

return statearr_35759;
})();
var statearr_35762_37719 = state_35691__$1;
(statearr_35762_37719[(2)] = null);

(statearr_35762_37719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (11))){
var inst_35646 = (state_35691[(2)]);
var inst_35647 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35691__$1 = (function (){var statearr_35765 = state_35691;
(statearr_35765[(12)] = inst_35646);

return statearr_35765;
})();
var statearr_35767_37721 = state_35691__$1;
(statearr_35767_37721[(2)] = inst_35647);

(statearr_35767_37721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (9))){
var inst_35636 = (state_35691[(7)]);
var _ = (function (){var statearr_35768 = state_35691;
(statearr_35768[(4)] = cljs.core.cons((12),(state_35691[(4)])));

return statearr_35768;
})();
var inst_35654 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35636) : chs__$1.call(null,inst_35636));
var inst_35655 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35636) : done.call(null,inst_35636));
var inst_35656 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35654,inst_35655);
var ___$1 = (function (){var statearr_35770 = state_35691;
(statearr_35770[(4)] = cljs.core.rest((state_35691[(4)])));

return statearr_35770;
})();
var state_35691__$1 = state_35691;
var statearr_35773_37723 = state_35691__$1;
(statearr_35773_37723[(2)] = inst_35656);

(statearr_35773_37723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (5))){
var inst_35666 = (state_35691[(2)]);
var state_35691__$1 = (function (){var statearr_35774 = state_35691;
(statearr_35774[(13)] = inst_35666);

return statearr_35774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35691__$1,(13),dchan);
} else {
if((state_val_35692 === (14))){
var inst_35676 = cljs.core.async.close_BANG_(out);
var state_35691__$1 = state_35691;
var statearr_35778_37734 = state_35691__$1;
(statearr_35778_37734[(2)] = inst_35676);

(statearr_35778_37734[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (16))){
var inst_35683 = (state_35691[(2)]);
var state_35691__$1 = state_35691;
var statearr_35780_37735 = state_35691__$1;
(statearr_35780_37735[(2)] = inst_35683);

(statearr_35780_37735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (10))){
var inst_35636 = (state_35691[(7)]);
var inst_35659 = (state_35691[(2)]);
var inst_35660 = (inst_35636 + (1));
var inst_35636__$1 = inst_35660;
var state_35691__$1 = (function (){var statearr_35782 = state_35691;
(statearr_35782[(14)] = inst_35659);

(statearr_35782[(7)] = inst_35636__$1);

return statearr_35782;
})();
var statearr_35783_37736 = state_35691__$1;
(statearr_35783_37736[(2)] = null);

(statearr_35783_37736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (8))){
var inst_35664 = (state_35691[(2)]);
var state_35691__$1 = state_35691;
var statearr_35787_37738 = state_35691__$1;
(statearr_35787_37738[(2)] = inst_35664);

(statearr_35787_37738[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_35789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35789[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_35789[(1)] = (1));

return statearr_35789;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_35691){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_35691);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e35793){var ex__33367__auto__ = e35793;
var statearr_35794_37741 = state_35691;
(statearr_35794_37741[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_35691[(4)]))){
var statearr_35795_37742 = state_35691;
(statearr_35795_37742[(1)] = cljs.core.first((state_35691[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37743 = state_35691;
state_35691 = G__37743;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_35691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_35691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_35800 = f__33680__auto__();
(statearr_35800[(6)] = c__33679__auto___37693);

return statearr_35800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35808 = arguments.length;
switch (G__35808) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33679__auto___37746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_35851){
var state_val_35852 = (state_35851[(1)]);
if((state_val_35852 === (7))){
var inst_35826 = (state_35851[(7)]);
var inst_35827 = (state_35851[(8)]);
var inst_35826__$1 = (state_35851[(2)]);
var inst_35827__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35826__$1,(0),null);
var inst_35828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35826__$1,(1),null);
var inst_35830 = (inst_35827__$1 == null);
var state_35851__$1 = (function (){var statearr_35858 = state_35851;
(statearr_35858[(7)] = inst_35826__$1);

(statearr_35858[(9)] = inst_35828);

(statearr_35858[(8)] = inst_35827__$1);

return statearr_35858;
})();
if(cljs.core.truth_(inst_35830)){
var statearr_35859_37747 = state_35851__$1;
(statearr_35859_37747[(1)] = (8));

} else {
var statearr_35860_37748 = state_35851__$1;
(statearr_35860_37748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (1))){
var inst_35813 = cljs.core.vec(chs);
var inst_35814 = inst_35813;
var state_35851__$1 = (function (){var statearr_35866 = state_35851;
(statearr_35866[(10)] = inst_35814);

return statearr_35866;
})();
var statearr_35867_37749 = state_35851__$1;
(statearr_35867_37749[(2)] = null);

(statearr_35867_37749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (4))){
var inst_35814 = (state_35851[(10)]);
var state_35851__$1 = state_35851;
return cljs.core.async.ioc_alts_BANG_(state_35851__$1,(7),inst_35814);
} else {
if((state_val_35852 === (6))){
var inst_35845 = (state_35851[(2)]);
var state_35851__$1 = state_35851;
var statearr_35872_37750 = state_35851__$1;
(statearr_35872_37750[(2)] = inst_35845);

(statearr_35872_37750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (3))){
var inst_35847 = (state_35851[(2)]);
var state_35851__$1 = state_35851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35851__$1,inst_35847);
} else {
if((state_val_35852 === (2))){
var inst_35814 = (state_35851[(10)]);
var inst_35817 = cljs.core.count(inst_35814);
var inst_35818 = (inst_35817 > (0));
var state_35851__$1 = state_35851;
if(cljs.core.truth_(inst_35818)){
var statearr_35875_37751 = state_35851__$1;
(statearr_35875_37751[(1)] = (4));

} else {
var statearr_35876_37752 = state_35851__$1;
(statearr_35876_37752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (11))){
var inst_35814 = (state_35851[(10)]);
var inst_35838 = (state_35851[(2)]);
var tmp35873 = inst_35814;
var inst_35814__$1 = tmp35873;
var state_35851__$1 = (function (){var statearr_35881 = state_35851;
(statearr_35881[(11)] = inst_35838);

(statearr_35881[(10)] = inst_35814__$1);

return statearr_35881;
})();
var statearr_35882_37754 = state_35851__$1;
(statearr_35882_37754[(2)] = null);

(statearr_35882_37754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (9))){
var inst_35827 = (state_35851[(8)]);
var state_35851__$1 = state_35851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35851__$1,(11),out,inst_35827);
} else {
if((state_val_35852 === (5))){
var inst_35843 = cljs.core.async.close_BANG_(out);
var state_35851__$1 = state_35851;
var statearr_35889_37759 = state_35851__$1;
(statearr_35889_37759[(2)] = inst_35843);

(statearr_35889_37759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (10))){
var inst_35841 = (state_35851[(2)]);
var state_35851__$1 = state_35851;
var statearr_35893_37764 = state_35851__$1;
(statearr_35893_37764[(2)] = inst_35841);

(statearr_35893_37764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35852 === (8))){
var inst_35826 = (state_35851[(7)]);
var inst_35814 = (state_35851[(10)]);
var inst_35828 = (state_35851[(9)]);
var inst_35827 = (state_35851[(8)]);
var inst_35833 = (function (){var cs = inst_35814;
var vec__35821 = inst_35826;
var v = inst_35827;
var c = inst_35828;
return (function (p1__35806_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35806_SHARP_);
});
})();
var inst_35834 = cljs.core.filterv(inst_35833,inst_35814);
var inst_35814__$1 = inst_35834;
var state_35851__$1 = (function (){var statearr_35895 = state_35851;
(statearr_35895[(10)] = inst_35814__$1);

return statearr_35895;
})();
var statearr_35898_37772 = state_35851__$1;
(statearr_35898_37772[(2)] = null);

(statearr_35898_37772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_35903 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35903[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_35903[(1)] = (1));

return statearr_35903;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_35851){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_35851);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e35904){var ex__33367__auto__ = e35904;
var statearr_35906_37776 = state_35851;
(statearr_35906_37776[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_35851[(4)]))){
var statearr_35913_37777 = state_35851;
(statearr_35913_37777[(1)] = cljs.core.first((state_35851[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37778 = state_35851;
state_35851 = G__37778;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_35851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_35851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_35917 = f__33680__auto__();
(statearr_35917[(6)] = c__33679__auto___37746);

return statearr_35917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35931 = arguments.length;
switch (G__35931) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33679__auto___37780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_35963){
var state_val_35964 = (state_35963[(1)]);
if((state_val_35964 === (7))){
var inst_35942 = (state_35963[(7)]);
var inst_35942__$1 = (state_35963[(2)]);
var inst_35945 = (inst_35942__$1 == null);
var inst_35946 = cljs.core.not(inst_35945);
var state_35963__$1 = (function (){var statearr_35970 = state_35963;
(statearr_35970[(7)] = inst_35942__$1);

return statearr_35970;
})();
if(inst_35946){
var statearr_35972_37783 = state_35963__$1;
(statearr_35972_37783[(1)] = (8));

} else {
var statearr_35974_37784 = state_35963__$1;
(statearr_35974_37784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (1))){
var inst_35937 = (0);
var state_35963__$1 = (function (){var statearr_35977 = state_35963;
(statearr_35977[(8)] = inst_35937);

return statearr_35977;
})();
var statearr_35979_37786 = state_35963__$1;
(statearr_35979_37786[(2)] = null);

(statearr_35979_37786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (4))){
var state_35963__$1 = state_35963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35963__$1,(7),ch);
} else {
if((state_val_35964 === (6))){
var inst_35958 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_35981_37787 = state_35963__$1;
(statearr_35981_37787[(2)] = inst_35958);

(statearr_35981_37787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (3))){
var inst_35960 = (state_35963[(2)]);
var inst_35961 = cljs.core.async.close_BANG_(out);
var state_35963__$1 = (function (){var statearr_35986 = state_35963;
(statearr_35986[(9)] = inst_35960);

return statearr_35986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35963__$1,inst_35961);
} else {
if((state_val_35964 === (2))){
var inst_35937 = (state_35963[(8)]);
var inst_35939 = (inst_35937 < n);
var state_35963__$1 = state_35963;
if(cljs.core.truth_(inst_35939)){
var statearr_35989_37789 = state_35963__$1;
(statearr_35989_37789[(1)] = (4));

} else {
var statearr_35990_37791 = state_35963__$1;
(statearr_35990_37791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (11))){
var inst_35937 = (state_35963[(8)]);
var inst_35950 = (state_35963[(2)]);
var inst_35951 = (inst_35937 + (1));
var inst_35937__$1 = inst_35951;
var state_35963__$1 = (function (){var statearr_35994 = state_35963;
(statearr_35994[(8)] = inst_35937__$1);

(statearr_35994[(10)] = inst_35950);

return statearr_35994;
})();
var statearr_35995_37792 = state_35963__$1;
(statearr_35995_37792[(2)] = null);

(statearr_35995_37792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (9))){
var state_35963__$1 = state_35963;
var statearr_36000_37793 = state_35963__$1;
(statearr_36000_37793[(2)] = null);

(statearr_36000_37793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (5))){
var state_35963__$1 = state_35963;
var statearr_36004_37794 = state_35963__$1;
(statearr_36004_37794[(2)] = null);

(statearr_36004_37794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (10))){
var inst_35955 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_36005_37795 = state_35963__$1;
(statearr_36005_37795[(2)] = inst_35955);

(statearr_36005_37795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (8))){
var inst_35942 = (state_35963[(7)]);
var state_35963__$1 = state_35963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35963__$1,(11),out,inst_35942);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_36008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36008[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_36008[(1)] = (1));

return statearr_36008;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_35963){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_35963);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e36011){var ex__33367__auto__ = e36011;
var statearr_36012_37802 = state_35963;
(statearr_36012_37802[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_35963[(4)]))){
var statearr_36013_37804 = state_35963;
(statearr_36013_37804[(1)] = cljs.core.first((state_35963[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37807 = state_35963;
state_35963 = G__37807;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_35963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_35963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_36014 = f__33680__auto__();
(statearr_36014[(6)] = c__33679__auto___37780);

return statearr_36014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36030 = (function (f,ch,meta36018,_,fn1,meta36031){
this.f = f;
this.ch = ch;
this.meta36018 = meta36018;
this._ = _;
this.fn1 = fn1;
this.meta36031 = meta36031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36032,meta36031__$1){
var self__ = this;
var _36032__$1 = this;
return (new cljs.core.async.t_cljs$core$async36030(self__.f,self__.ch,self__.meta36018,self__._,self__.fn1,meta36031__$1));
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36032){
var self__ = this;
var _36032__$1 = this;
return self__.meta36031;
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36015_SHARP_){
var G__36059 = (((p1__36015_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36015_SHARP_) : self__.f.call(null,p1__36015_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36059) : f1.call(null,G__36059));
});
}));

(cljs.core.async.t_cljs$core$async36030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36018","meta36018",-1904446047,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36017","cljs.core.async/t_cljs$core$async36017",1338268150,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36031","meta36031",69191431,null)], null);
}));

(cljs.core.async.t_cljs$core$async36030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36030");

(cljs.core.async.t_cljs$core$async36030.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36030.
 */
cljs.core.async.__GT_t_cljs$core$async36030 = (function cljs$core$async$__GT_t_cljs$core$async36030(f,ch,meta36018,_,fn1,meta36031){
return (new cljs.core.async.t_cljs$core$async36030(f,ch,meta36018,_,fn1,meta36031));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36017 = (function (f,ch,meta36018){
this.f = f;
this.ch = ch;
this.meta36018 = meta36018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36019,meta36018__$1){
var self__ = this;
var _36019__$1 = this;
return (new cljs.core.async.t_cljs$core$async36017(self__.f,self__.ch,meta36018__$1));
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36019){
var self__ = this;
var _36019__$1 = this;
return self__.meta36018;
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async36030(self__.f,self__.ch,self__.meta36018,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36070 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36070) : self__.f.call(null,G__36070));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36018","meta36018",-1904446047,null)], null);
}));

(cljs.core.async.t_cljs$core$async36017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36017");

(cljs.core.async.t_cljs$core$async36017.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36017.
 */
cljs.core.async.__GT_t_cljs$core$async36017 = (function cljs$core$async$__GT_t_cljs$core$async36017(f,ch,meta36018){
return (new cljs.core.async.t_cljs$core$async36017(f,ch,meta36018));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36017(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36081 = (function (f,ch,meta36082){
this.f = f;
this.ch = ch;
this.meta36082 = meta36082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36083,meta36082__$1){
var self__ = this;
var _36083__$1 = this;
return (new cljs.core.async.t_cljs$core$async36081(self__.f,self__.ch,meta36082__$1));
}));

(cljs.core.async.t_cljs$core$async36081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36083){
var self__ = this;
var _36083__$1 = this;
return self__.meta36082;
}));

(cljs.core.async.t_cljs$core$async36081.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36081.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36081.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36082","meta36082",900658775,null)], null);
}));

(cljs.core.async.t_cljs$core$async36081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36081");

(cljs.core.async.t_cljs$core$async36081.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36081.
 */
cljs.core.async.__GT_t_cljs$core$async36081 = (function cljs$core$async$__GT_t_cljs$core$async36081(f,ch,meta36082){
return (new cljs.core.async.t_cljs$core$async36081(f,ch,meta36082));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36081(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36104 = (function (p,ch,meta36105){
this.p = p;
this.ch = ch;
this.meta36105 = meta36105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36106,meta36105__$1){
var self__ = this;
var _36106__$1 = this;
return (new cljs.core.async.t_cljs$core$async36104(self__.p,self__.ch,meta36105__$1));
}));

(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36106){
var self__ = this;
var _36106__$1 = this;
return self__.meta36105;
}));

(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36104.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36105","meta36105",-1009396223,null)], null);
}));

(cljs.core.async.t_cljs$core$async36104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36104");

(cljs.core.async.t_cljs$core$async36104.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36104.
 */
cljs.core.async.__GT_t_cljs$core$async36104 = (function cljs$core$async$__GT_t_cljs$core$async36104(p,ch,meta36105){
return (new cljs.core.async.t_cljs$core$async36104(p,ch,meta36105));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async36104(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36143 = arguments.length;
switch (G__36143) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33679__auto___37858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_36172){
var state_val_36173 = (state_36172[(1)]);
if((state_val_36173 === (7))){
var inst_36168 = (state_36172[(2)]);
var state_36172__$1 = state_36172;
var statearr_36178_37859 = state_36172__$1;
(statearr_36178_37859[(2)] = inst_36168);

(statearr_36178_37859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (1))){
var state_36172__$1 = state_36172;
var statearr_36179_37860 = state_36172__$1;
(statearr_36179_37860[(2)] = null);

(statearr_36179_37860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (4))){
var inst_36153 = (state_36172[(7)]);
var inst_36153__$1 = (state_36172[(2)]);
var inst_36155 = (inst_36153__$1 == null);
var state_36172__$1 = (function (){var statearr_36180 = state_36172;
(statearr_36180[(7)] = inst_36153__$1);

return statearr_36180;
})();
if(cljs.core.truth_(inst_36155)){
var statearr_36181_37874 = state_36172__$1;
(statearr_36181_37874[(1)] = (5));

} else {
var statearr_36182_37875 = state_36172__$1;
(statearr_36182_37875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (6))){
var inst_36153 = (state_36172[(7)]);
var inst_36159 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36153) : p.call(null,inst_36153));
var state_36172__$1 = state_36172;
if(cljs.core.truth_(inst_36159)){
var statearr_36184_37878 = state_36172__$1;
(statearr_36184_37878[(1)] = (8));

} else {
var statearr_36186_37879 = state_36172__$1;
(statearr_36186_37879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (3))){
var inst_36170 = (state_36172[(2)]);
var state_36172__$1 = state_36172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36172__$1,inst_36170);
} else {
if((state_val_36173 === (2))){
var state_36172__$1 = state_36172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36172__$1,(4),ch);
} else {
if((state_val_36173 === (11))){
var inst_36162 = (state_36172[(2)]);
var state_36172__$1 = state_36172;
var statearr_36188_37883 = state_36172__$1;
(statearr_36188_37883[(2)] = inst_36162);

(statearr_36188_37883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (9))){
var state_36172__$1 = state_36172;
var statearr_36189_37884 = state_36172__$1;
(statearr_36189_37884[(2)] = null);

(statearr_36189_37884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (5))){
var inst_36157 = cljs.core.async.close_BANG_(out);
var state_36172__$1 = state_36172;
var statearr_36194_37885 = state_36172__$1;
(statearr_36194_37885[(2)] = inst_36157);

(statearr_36194_37885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (10))){
var inst_36165 = (state_36172[(2)]);
var state_36172__$1 = (function (){var statearr_36198 = state_36172;
(statearr_36198[(8)] = inst_36165);

return statearr_36198;
})();
var statearr_36200_37886 = state_36172__$1;
(statearr_36200_37886[(2)] = null);

(statearr_36200_37886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (8))){
var inst_36153 = (state_36172[(7)]);
var state_36172__$1 = state_36172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36172__$1,(11),out,inst_36153);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_36202 = [null,null,null,null,null,null,null,null,null];
(statearr_36202[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_36202[(1)] = (1));

return statearr_36202;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_36172){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_36172);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e36203){var ex__33367__auto__ = e36203;
var statearr_36204_37888 = state_36172;
(statearr_36204_37888[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_36172[(4)]))){
var statearr_36208_37889 = state_36172;
(statearr_36208_37889[(1)] = cljs.core.first((state_36172[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37890 = state_36172;
state_36172 = G__37890;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_36172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_36172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_36213 = f__33680__auto__();
(statearr_36213[(6)] = c__33679__auto___37858);

return statearr_36213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36216 = arguments.length;
switch (G__36216) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33679__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_36301){
var state_val_36302 = (state_36301[(1)]);
if((state_val_36302 === (7))){
var inst_36297 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36307_37896 = state_36301__$1;
(statearr_36307_37896[(2)] = inst_36297);

(statearr_36307_37896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (20))){
var inst_36261 = (state_36301[(7)]);
var inst_36278 = (state_36301[(2)]);
var inst_36279 = cljs.core.next(inst_36261);
var inst_36242 = inst_36279;
var inst_36243 = null;
var inst_36244 = (0);
var inst_36245 = (0);
var state_36301__$1 = (function (){var statearr_36315 = state_36301;
(statearr_36315[(8)] = inst_36243);

(statearr_36315[(9)] = inst_36278);

(statearr_36315[(10)] = inst_36245);

(statearr_36315[(11)] = inst_36244);

(statearr_36315[(12)] = inst_36242);

return statearr_36315;
})();
var statearr_36316_37900 = state_36301__$1;
(statearr_36316_37900[(2)] = null);

(statearr_36316_37900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (1))){
var state_36301__$1 = state_36301;
var statearr_36322_37901 = state_36301__$1;
(statearr_36322_37901[(2)] = null);

(statearr_36322_37901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (4))){
var inst_36231 = (state_36301[(13)]);
var inst_36231__$1 = (state_36301[(2)]);
var inst_36232 = (inst_36231__$1 == null);
var state_36301__$1 = (function (){var statearr_36327 = state_36301;
(statearr_36327[(13)] = inst_36231__$1);

return statearr_36327;
})();
if(cljs.core.truth_(inst_36232)){
var statearr_36328_37902 = state_36301__$1;
(statearr_36328_37902[(1)] = (5));

} else {
var statearr_36329_37903 = state_36301__$1;
(statearr_36329_37903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (15))){
var state_36301__$1 = state_36301;
var statearr_36333_37904 = state_36301__$1;
(statearr_36333_37904[(2)] = null);

(statearr_36333_37904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (21))){
var state_36301__$1 = state_36301;
var statearr_36337_37905 = state_36301__$1;
(statearr_36337_37905[(2)] = null);

(statearr_36337_37905[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (13))){
var inst_36243 = (state_36301[(8)]);
var inst_36245 = (state_36301[(10)]);
var inst_36244 = (state_36301[(11)]);
var inst_36242 = (state_36301[(12)]);
var inst_36253 = (state_36301[(2)]);
var inst_36258 = (inst_36245 + (1));
var tmp36330 = inst_36243;
var tmp36331 = inst_36244;
var tmp36332 = inst_36242;
var inst_36242__$1 = tmp36332;
var inst_36243__$1 = tmp36330;
var inst_36244__$1 = tmp36331;
var inst_36245__$1 = inst_36258;
var state_36301__$1 = (function (){var statearr_36340 = state_36301;
(statearr_36340[(8)] = inst_36243__$1);

(statearr_36340[(14)] = inst_36253);

(statearr_36340[(10)] = inst_36245__$1);

(statearr_36340[(11)] = inst_36244__$1);

(statearr_36340[(12)] = inst_36242__$1);

return statearr_36340;
})();
var statearr_36341_37907 = state_36301__$1;
(statearr_36341_37907[(2)] = null);

(statearr_36341_37907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (22))){
var state_36301__$1 = state_36301;
var statearr_36342_37908 = state_36301__$1;
(statearr_36342_37908[(2)] = null);

(statearr_36342_37908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (6))){
var inst_36231 = (state_36301[(13)]);
var inst_36240 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36231) : f.call(null,inst_36231));
var inst_36241 = cljs.core.seq(inst_36240);
var inst_36242 = inst_36241;
var inst_36243 = null;
var inst_36244 = (0);
var inst_36245 = (0);
var state_36301__$1 = (function (){var statearr_36345 = state_36301;
(statearr_36345[(8)] = inst_36243);

(statearr_36345[(10)] = inst_36245);

(statearr_36345[(11)] = inst_36244);

(statearr_36345[(12)] = inst_36242);

return statearr_36345;
})();
var statearr_36352_37916 = state_36301__$1;
(statearr_36352_37916[(2)] = null);

(statearr_36352_37916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (17))){
var inst_36261 = (state_36301[(7)]);
var inst_36268 = cljs.core.chunk_first(inst_36261);
var inst_36272 = cljs.core.chunk_rest(inst_36261);
var inst_36273 = cljs.core.count(inst_36268);
var inst_36242 = inst_36272;
var inst_36243 = inst_36268;
var inst_36244 = inst_36273;
var inst_36245 = (0);
var state_36301__$1 = (function (){var statearr_36359 = state_36301;
(statearr_36359[(8)] = inst_36243);

(statearr_36359[(10)] = inst_36245);

(statearr_36359[(11)] = inst_36244);

(statearr_36359[(12)] = inst_36242);

return statearr_36359;
})();
var statearr_36362_37920 = state_36301__$1;
(statearr_36362_37920[(2)] = null);

(statearr_36362_37920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (3))){
var inst_36299 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36301__$1,inst_36299);
} else {
if((state_val_36302 === (12))){
var inst_36287 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36384_37924 = state_36301__$1;
(statearr_36384_37924[(2)] = inst_36287);

(statearr_36384_37924[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (2))){
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36301__$1,(4),in$);
} else {
if((state_val_36302 === (23))){
var inst_36295 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36388_37938 = state_36301__$1;
(statearr_36388_37938[(2)] = inst_36295);

(statearr_36388_37938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (19))){
var inst_36282 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36390_37942 = state_36301__$1;
(statearr_36390_37942[(2)] = inst_36282);

(statearr_36390_37942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (11))){
var inst_36261 = (state_36301[(7)]);
var inst_36242 = (state_36301[(12)]);
var inst_36261__$1 = cljs.core.seq(inst_36242);
var state_36301__$1 = (function (){var statearr_36391 = state_36301;
(statearr_36391[(7)] = inst_36261__$1);

return statearr_36391;
})();
if(inst_36261__$1){
var statearr_36392_37950 = state_36301__$1;
(statearr_36392_37950[(1)] = (14));

} else {
var statearr_36393_37951 = state_36301__$1;
(statearr_36393_37951[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (9))){
var inst_36289 = (state_36301[(2)]);
var inst_36290 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36301__$1 = (function (){var statearr_36394 = state_36301;
(statearr_36394[(15)] = inst_36289);

return statearr_36394;
})();
if(cljs.core.truth_(inst_36290)){
var statearr_36399_37956 = state_36301__$1;
(statearr_36399_37956[(1)] = (21));

} else {
var statearr_36400_37957 = state_36301__$1;
(statearr_36400_37957[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (5))){
var inst_36234 = cljs.core.async.close_BANG_(out);
var state_36301__$1 = state_36301;
var statearr_36405_37959 = state_36301__$1;
(statearr_36405_37959[(2)] = inst_36234);

(statearr_36405_37959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (14))){
var inst_36261 = (state_36301[(7)]);
var inst_36266 = cljs.core.chunked_seq_QMARK_(inst_36261);
var state_36301__$1 = state_36301;
if(inst_36266){
var statearr_36410_37960 = state_36301__$1;
(statearr_36410_37960[(1)] = (17));

} else {
var statearr_36411_37961 = state_36301__$1;
(statearr_36411_37961[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (16))){
var inst_36285 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36412_37962 = state_36301__$1;
(statearr_36412_37962[(2)] = inst_36285);

(statearr_36412_37962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (10))){
var inst_36243 = (state_36301[(8)]);
var inst_36245 = (state_36301[(10)]);
var inst_36251 = cljs.core._nth(inst_36243,inst_36245);
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36301__$1,(13),out,inst_36251);
} else {
if((state_val_36302 === (18))){
var inst_36261 = (state_36301[(7)]);
var inst_36276 = cljs.core.first(inst_36261);
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36301__$1,(20),out,inst_36276);
} else {
if((state_val_36302 === (8))){
var inst_36245 = (state_36301[(10)]);
var inst_36244 = (state_36301[(11)]);
var inst_36247 = (inst_36245 < inst_36244);
var inst_36248 = inst_36247;
var state_36301__$1 = state_36301;
if(cljs.core.truth_(inst_36248)){
var statearr_36417_37969 = state_36301__$1;
(statearr_36417_37969[(1)] = (10));

} else {
var statearr_36418_37970 = state_36301__$1;
(statearr_36418_37970[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33364__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33364__auto____0 = (function (){
var statearr_36420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36420[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33364__auto__);

(statearr_36420[(1)] = (1));

return statearr_36420;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33364__auto____1 = (function (state_36301){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_36301);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e36422){var ex__33367__auto__ = e36422;
var statearr_36423_37973 = state_36301;
(statearr_36423_37973[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_36301[(4)]))){
var statearr_36424_37974 = state_36301;
(statearr_36424_37974[(1)] = cljs.core.first((state_36301[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37975 = state_36301;
state_36301 = G__37975;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33364__auto__ = function(state_36301){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33364__auto____1.call(this,state_36301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33364__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33364__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_36425 = f__33680__auto__();
(statearr_36425[(6)] = c__33679__auto__);

return statearr_36425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));

return c__33679__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36433 = arguments.length;
switch (G__36433) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36446 = arguments.length;
switch (G__36446) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36452 = arguments.length;
switch (G__36452) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33679__auto___37990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_36480){
var state_val_36481 = (state_36480[(1)]);
if((state_val_36481 === (7))){
var inst_36475 = (state_36480[(2)]);
var state_36480__$1 = state_36480;
var statearr_36487_37994 = state_36480__$1;
(statearr_36487_37994[(2)] = inst_36475);

(statearr_36487_37994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (1))){
var inst_36455 = null;
var state_36480__$1 = (function (){var statearr_36489 = state_36480;
(statearr_36489[(7)] = inst_36455);

return statearr_36489;
})();
var statearr_36492_37995 = state_36480__$1;
(statearr_36492_37995[(2)] = null);

(statearr_36492_37995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (4))){
var inst_36458 = (state_36480[(8)]);
var inst_36458__$1 = (state_36480[(2)]);
var inst_36459 = (inst_36458__$1 == null);
var inst_36460 = cljs.core.not(inst_36459);
var state_36480__$1 = (function (){var statearr_36498 = state_36480;
(statearr_36498[(8)] = inst_36458__$1);

return statearr_36498;
})();
if(inst_36460){
var statearr_36504_37997 = state_36480__$1;
(statearr_36504_37997[(1)] = (5));

} else {
var statearr_36505_37998 = state_36480__$1;
(statearr_36505_37998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (6))){
var state_36480__$1 = state_36480;
var statearr_36506_38000 = state_36480__$1;
(statearr_36506_38000[(2)] = null);

(statearr_36506_38000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (3))){
var inst_36477 = (state_36480[(2)]);
var inst_36478 = cljs.core.async.close_BANG_(out);
var state_36480__$1 = (function (){var statearr_36512 = state_36480;
(statearr_36512[(9)] = inst_36477);

return statearr_36512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36480__$1,inst_36478);
} else {
if((state_val_36481 === (2))){
var state_36480__$1 = state_36480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36480__$1,(4),ch);
} else {
if((state_val_36481 === (11))){
var inst_36458 = (state_36480[(8)]);
var inst_36469 = (state_36480[(2)]);
var inst_36455 = inst_36458;
var state_36480__$1 = (function (){var statearr_36513 = state_36480;
(statearr_36513[(7)] = inst_36455);

(statearr_36513[(10)] = inst_36469);

return statearr_36513;
})();
var statearr_36514_38001 = state_36480__$1;
(statearr_36514_38001[(2)] = null);

(statearr_36514_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (9))){
var inst_36458 = (state_36480[(8)]);
var state_36480__$1 = state_36480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36480__$1,(11),out,inst_36458);
} else {
if((state_val_36481 === (5))){
var inst_36455 = (state_36480[(7)]);
var inst_36458 = (state_36480[(8)]);
var inst_36462 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36458,inst_36455);
var state_36480__$1 = state_36480;
if(inst_36462){
var statearr_36520_38003 = state_36480__$1;
(statearr_36520_38003[(1)] = (8));

} else {
var statearr_36521_38007 = state_36480__$1;
(statearr_36521_38007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (10))){
var inst_36472 = (state_36480[(2)]);
var state_36480__$1 = state_36480;
var statearr_36522_38008 = state_36480__$1;
(statearr_36522_38008[(2)] = inst_36472);

(statearr_36522_38008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (8))){
var inst_36455 = (state_36480[(7)]);
var tmp36516 = inst_36455;
var inst_36455__$1 = tmp36516;
var state_36480__$1 = (function (){var statearr_36523 = state_36480;
(statearr_36523[(7)] = inst_36455__$1);

return statearr_36523;
})();
var statearr_36524_38009 = state_36480__$1;
(statearr_36524_38009[(2)] = null);

(statearr_36524_38009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_36525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36525[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_36525[(1)] = (1));

return statearr_36525;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_36480){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_36480);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e36526){var ex__33367__auto__ = e36526;
var statearr_36527_38016 = state_36480;
(statearr_36527_38016[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_36480[(4)]))){
var statearr_36530_38017 = state_36480;
(statearr_36530_38017[(1)] = cljs.core.first((state_36480[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38018 = state_36480;
state_36480 = G__38018;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_36480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_36480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_36531 = f__33680__auto__();
(statearr_36531[(6)] = c__33679__auto___37990);

return statearr_36531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36533 = arguments.length;
switch (G__36533) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33679__auto___38020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_36574){
var state_val_36575 = (state_36574[(1)]);
if((state_val_36575 === (7))){
var inst_36570 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36580_38022 = state_36574__$1;
(statearr_36580_38022[(2)] = inst_36570);

(statearr_36580_38022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (1))){
var inst_36536 = (new Array(n));
var inst_36537 = inst_36536;
var inst_36538 = (0);
var state_36574__$1 = (function (){var statearr_36581 = state_36574;
(statearr_36581[(7)] = inst_36537);

(statearr_36581[(8)] = inst_36538);

return statearr_36581;
})();
var statearr_36582_38023 = state_36574__$1;
(statearr_36582_38023[(2)] = null);

(statearr_36582_38023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (4))){
var inst_36541 = (state_36574[(9)]);
var inst_36541__$1 = (state_36574[(2)]);
var inst_36542 = (inst_36541__$1 == null);
var inst_36543 = cljs.core.not(inst_36542);
var state_36574__$1 = (function (){var statearr_36584 = state_36574;
(statearr_36584[(9)] = inst_36541__$1);

return statearr_36584;
})();
if(inst_36543){
var statearr_36586_38025 = state_36574__$1;
(statearr_36586_38025[(1)] = (5));

} else {
var statearr_36587_38029 = state_36574__$1;
(statearr_36587_38029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (15))){
var inst_36564 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36588_38033 = state_36574__$1;
(statearr_36588_38033[(2)] = inst_36564);

(statearr_36588_38033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (13))){
var state_36574__$1 = state_36574;
var statearr_36589_38034 = state_36574__$1;
(statearr_36589_38034[(2)] = null);

(statearr_36589_38034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (6))){
var inst_36538 = (state_36574[(8)]);
var inst_36559 = (inst_36538 > (0));
var state_36574__$1 = state_36574;
if(cljs.core.truth_(inst_36559)){
var statearr_36590_38035 = state_36574__$1;
(statearr_36590_38035[(1)] = (12));

} else {
var statearr_36591_38036 = state_36574__$1;
(statearr_36591_38036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (3))){
var inst_36572 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36574__$1,inst_36572);
} else {
if((state_val_36575 === (12))){
var inst_36537 = (state_36574[(7)]);
var inst_36561 = cljs.core.vec(inst_36537);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36574__$1,(15),out,inst_36561);
} else {
if((state_val_36575 === (2))){
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36574__$1,(4),ch);
} else {
if((state_val_36575 === (11))){
var inst_36553 = (state_36574[(2)]);
var inst_36554 = (new Array(n));
var inst_36537 = inst_36554;
var inst_36538 = (0);
var state_36574__$1 = (function (){var statearr_36597 = state_36574;
(statearr_36597[(10)] = inst_36553);

(statearr_36597[(7)] = inst_36537);

(statearr_36597[(8)] = inst_36538);

return statearr_36597;
})();
var statearr_36598_38037 = state_36574__$1;
(statearr_36598_38037[(2)] = null);

(statearr_36598_38037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (9))){
var inst_36537 = (state_36574[(7)]);
var inst_36551 = cljs.core.vec(inst_36537);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36574__$1,(11),out,inst_36551);
} else {
if((state_val_36575 === (5))){
var inst_36546 = (state_36574[(11)]);
var inst_36537 = (state_36574[(7)]);
var inst_36541 = (state_36574[(9)]);
var inst_36538 = (state_36574[(8)]);
var inst_36545 = (inst_36537[inst_36538] = inst_36541);
var inst_36546__$1 = (inst_36538 + (1));
var inst_36547 = (inst_36546__$1 < n);
var state_36574__$1 = (function (){var statearr_36601 = state_36574;
(statearr_36601[(11)] = inst_36546__$1);

(statearr_36601[(12)] = inst_36545);

return statearr_36601;
})();
if(cljs.core.truth_(inst_36547)){
var statearr_36602_38039 = state_36574__$1;
(statearr_36602_38039[(1)] = (8));

} else {
var statearr_36603_38040 = state_36574__$1;
(statearr_36603_38040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (14))){
var inst_36567 = (state_36574[(2)]);
var inst_36568 = cljs.core.async.close_BANG_(out);
var state_36574__$1 = (function (){var statearr_36611 = state_36574;
(statearr_36611[(13)] = inst_36567);

return statearr_36611;
})();
var statearr_36612_38041 = state_36574__$1;
(statearr_36612_38041[(2)] = inst_36568);

(statearr_36612_38041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (10))){
var inst_36557 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36617_38042 = state_36574__$1;
(statearr_36617_38042[(2)] = inst_36557);

(statearr_36617_38042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (8))){
var inst_36546 = (state_36574[(11)]);
var inst_36537 = (state_36574[(7)]);
var tmp36606 = inst_36537;
var inst_36537__$1 = tmp36606;
var inst_36538 = inst_36546;
var state_36574__$1 = (function (){var statearr_36618 = state_36574;
(statearr_36618[(7)] = inst_36537__$1);

(statearr_36618[(8)] = inst_36538);

return statearr_36618;
})();
var statearr_36619_38044 = state_36574__$1;
(statearr_36619_38044[(2)] = null);

(statearr_36619_38044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_36621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36621[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_36621[(1)] = (1));

return statearr_36621;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_36574){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_36574);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e36622){var ex__33367__auto__ = e36622;
var statearr_36623_38050 = state_36574;
(statearr_36623_38050[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_36574[(4)]))){
var statearr_36631_38051 = state_36574;
(statearr_36631_38051[(1)] = cljs.core.first((state_36574[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38052 = state_36574;
state_36574 = G__38052;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_36574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_36574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_36640 = f__33680__auto__();
(statearr_36640[(6)] = c__33679__auto___38020);

return statearr_36640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36652 = arguments.length;
switch (G__36652) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33679__auto___38059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33680__auto__ = (function (){var switch__33363__auto__ = (function (state_36735){
var state_val_36736 = (state_36735[(1)]);
if((state_val_36736 === (7))){
var inst_36731 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36742_38060 = state_36735__$1;
(statearr_36742_38060[(2)] = inst_36731);

(statearr_36742_38060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (1))){
var inst_36687 = [];
var inst_36688 = inst_36687;
var inst_36689 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36735__$1 = (function (){var statearr_36743 = state_36735;
(statearr_36743[(7)] = inst_36688);

(statearr_36743[(8)] = inst_36689);

return statearr_36743;
})();
var statearr_36744_38061 = state_36735__$1;
(statearr_36744_38061[(2)] = null);

(statearr_36744_38061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (4))){
var inst_36692 = (state_36735[(9)]);
var inst_36692__$1 = (state_36735[(2)]);
var inst_36693 = (inst_36692__$1 == null);
var inst_36694 = cljs.core.not(inst_36693);
var state_36735__$1 = (function (){var statearr_36745 = state_36735;
(statearr_36745[(9)] = inst_36692__$1);

return statearr_36745;
})();
if(inst_36694){
var statearr_36746_38062 = state_36735__$1;
(statearr_36746_38062[(1)] = (5));

} else {
var statearr_36747_38063 = state_36735__$1;
(statearr_36747_38063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (15))){
var inst_36688 = (state_36735[(7)]);
var inst_36723 = cljs.core.vec(inst_36688);
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36735__$1,(18),out,inst_36723);
} else {
if((state_val_36736 === (13))){
var inst_36718 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36750_38065 = state_36735__$1;
(statearr_36750_38065[(2)] = inst_36718);

(statearr_36750_38065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (6))){
var inst_36688 = (state_36735[(7)]);
var inst_36720 = inst_36688.length;
var inst_36721 = (inst_36720 > (0));
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36721)){
var statearr_36752_38066 = state_36735__$1;
(statearr_36752_38066[(1)] = (15));

} else {
var statearr_36753_38068 = state_36735__$1;
(statearr_36753_38068[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (17))){
var inst_36728 = (state_36735[(2)]);
var inst_36729 = cljs.core.async.close_BANG_(out);
var state_36735__$1 = (function (){var statearr_36756 = state_36735;
(statearr_36756[(10)] = inst_36728);

return statearr_36756;
})();
var statearr_36757_38069 = state_36735__$1;
(statearr_36757_38069[(2)] = inst_36729);

(statearr_36757_38069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (3))){
var inst_36733 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36735__$1,inst_36733);
} else {
if((state_val_36736 === (12))){
var inst_36688 = (state_36735[(7)]);
var inst_36711 = cljs.core.vec(inst_36688);
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36735__$1,(14),out,inst_36711);
} else {
if((state_val_36736 === (2))){
var state_36735__$1 = state_36735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36735__$1,(4),ch);
} else {
if((state_val_36736 === (11))){
var inst_36699 = (state_36735[(11)]);
var inst_36688 = (state_36735[(7)]);
var inst_36692 = (state_36735[(9)]);
var inst_36708 = inst_36688.push(inst_36692);
var tmp36760 = inst_36688;
var inst_36688__$1 = tmp36760;
var inst_36689 = inst_36699;
var state_36735__$1 = (function (){var statearr_36765 = state_36735;
(statearr_36765[(12)] = inst_36708);

(statearr_36765[(7)] = inst_36688__$1);

(statearr_36765[(8)] = inst_36689);

return statearr_36765;
})();
var statearr_36768_38071 = state_36735__$1;
(statearr_36768_38071[(2)] = null);

(statearr_36768_38071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (9))){
var inst_36689 = (state_36735[(8)]);
var inst_36704 = cljs.core.keyword_identical_QMARK_(inst_36689,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36735__$1 = state_36735;
var statearr_36771_38072 = state_36735__$1;
(statearr_36771_38072[(2)] = inst_36704);

(statearr_36771_38072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (5))){
var inst_36700 = (state_36735[(13)]);
var inst_36699 = (state_36735[(11)]);
var inst_36692 = (state_36735[(9)]);
var inst_36689 = (state_36735[(8)]);
var inst_36699__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36692) : f.call(null,inst_36692));
var inst_36700__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36699__$1,inst_36689);
var state_36735__$1 = (function (){var statearr_36773 = state_36735;
(statearr_36773[(13)] = inst_36700__$1);

(statearr_36773[(11)] = inst_36699__$1);

return statearr_36773;
})();
if(inst_36700__$1){
var statearr_36774_38073 = state_36735__$1;
(statearr_36774_38073[(1)] = (8));

} else {
var statearr_36775_38074 = state_36735__$1;
(statearr_36775_38074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (14))){
var inst_36699 = (state_36735[(11)]);
var inst_36692 = (state_36735[(9)]);
var inst_36713 = (state_36735[(2)]);
var inst_36714 = [];
var inst_36715 = inst_36714.push(inst_36692);
var inst_36688 = inst_36714;
var inst_36689 = inst_36699;
var state_36735__$1 = (function (){var statearr_36777 = state_36735;
(statearr_36777[(7)] = inst_36688);

(statearr_36777[(14)] = inst_36713);

(statearr_36777[(15)] = inst_36715);

(statearr_36777[(8)] = inst_36689);

return statearr_36777;
})();
var statearr_36779_38075 = state_36735__$1;
(statearr_36779_38075[(2)] = null);

(statearr_36779_38075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (16))){
var state_36735__$1 = state_36735;
var statearr_36782_38076 = state_36735__$1;
(statearr_36782_38076[(2)] = null);

(statearr_36782_38076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (10))){
var inst_36706 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
if(cljs.core.truth_(inst_36706)){
var statearr_36788_38077 = state_36735__$1;
(statearr_36788_38077[(1)] = (11));

} else {
var statearr_36789_38078 = state_36735__$1;
(statearr_36789_38078[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (18))){
var inst_36725 = (state_36735[(2)]);
var state_36735__$1 = state_36735;
var statearr_36791_38079 = state_36735__$1;
(statearr_36791_38079[(2)] = inst_36725);

(statearr_36791_38079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36736 === (8))){
var inst_36700 = (state_36735[(13)]);
var state_36735__$1 = state_36735;
var statearr_36793_38080 = state_36735__$1;
(statearr_36793_38080[(2)] = inst_36700);

(statearr_36793_38080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33364__auto__ = null;
var cljs$core$async$state_machine__33364__auto____0 = (function (){
var statearr_36798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36798[(0)] = cljs$core$async$state_machine__33364__auto__);

(statearr_36798[(1)] = (1));

return statearr_36798;
});
var cljs$core$async$state_machine__33364__auto____1 = (function (state_36735){
while(true){
var ret_value__33365__auto__ = (function (){try{while(true){
var result__33366__auto__ = switch__33363__auto__(state_36735);
if(cljs.core.keyword_identical_QMARK_(result__33366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33366__auto__;
}
break;
}
}catch (e36801){var ex__33367__auto__ = e36801;
var statearr_36802_38084 = state_36735;
(statearr_36802_38084[(2)] = ex__33367__auto__);


if(cljs.core.seq((state_36735[(4)]))){
var statearr_36804_38085 = state_36735;
(statearr_36804_38085[(1)] = cljs.core.first((state_36735[(4)])));

} else {
throw ex__33367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38086 = state_36735;
state_36735 = G__38086;
continue;
} else {
return ret_value__33365__auto__;
}
break;
}
});
cljs$core$async$state_machine__33364__auto__ = function(state_36735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33364__auto____1.call(this,state_36735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33364__auto____0;
cljs$core$async$state_machine__33364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33364__auto____1;
return cljs$core$async$state_machine__33364__auto__;
})()
})();
var state__33681__auto__ = (function (){var statearr_36807 = f__33680__auto__();
(statearr_36807[(6)] = c__33679__auto___38059);

return statearr_36807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33681__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

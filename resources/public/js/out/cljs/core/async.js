// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t29755 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29755 = (function (fn_handler,f,meta29756){
this.fn_handler = fn_handler;
this.f = f;
this.meta29756 = meta29756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29757,meta29756__$1){
var self__ = this;
var _29757__$1 = this;
return (new cljs.core.async.t29755(self__.fn_handler,self__.f,meta29756__$1));
});

cljs.core.async.t29755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29757){
var self__ = this;
var _29757__$1 = this;
return self__.meta29756;
});

cljs.core.async.t29755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29756","meta29756",-153537296,null)], null);
});

cljs.core.async.t29755.cljs$lang$type = true;

cljs.core.async.t29755.cljs$lang$ctorStr = "cljs.core.async/t29755";

cljs.core.async.t29755.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29755");
});

cljs.core.async.__GT_t29755 = (function cljs$core$async$fn_handler_$___GT_t29755(fn_handler__$1,f__$1,meta29756){
return (new cljs.core.async.t29755(fn_handler__$1,f__$1,meta29756));
});

}

return (new cljs.core.async.t29755(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__29759 = buff;
if(G__29759){
var bit__21241__auto__ = null;
if(cljs.core.truth_((function (){var or__20567__auto__ = bit__21241__auto__;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return G__29759.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29759.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29759);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29759);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__29761 = arguments.length;
switch (G__29761) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__29764 = arguments.length;
switch (G__29764) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29766 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29766);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29766,ret){
return (function (){
return fn1.call(null,val_29766);
});})(val_29766,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__29768 = arguments.length;
switch (G__29768) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21452__auto___29770 = n;
var x_29771 = (0);
while(true){
if((x_29771 < n__21452__auto___29770)){
(a[x_29771] = (0));

var G__29772 = (x_29771 + (1));
x_29771 = G__29772;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29773 = (i + (1));
i = G__29773;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29777 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29777 = (function (alt_flag,flag,meta29778){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29778 = meta29778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29779,meta29778__$1){
var self__ = this;
var _29779__$1 = this;
return (new cljs.core.async.t29777(self__.alt_flag,self__.flag,meta29778__$1));
});})(flag))
;

cljs.core.async.t29777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29779){
var self__ = this;
var _29779__$1 = this;
return self__.meta29778;
});})(flag))
;

cljs.core.async.t29777.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29777.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29778","meta29778",-330217543,null)], null);
});})(flag))
;

cljs.core.async.t29777.cljs$lang$type = true;

cljs.core.async.t29777.cljs$lang$ctorStr = "cljs.core.async/t29777";

cljs.core.async.t29777.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29777");
});})(flag))
;

cljs.core.async.__GT_t29777 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t29777(alt_flag__$1,flag__$1,meta29778){
return (new cljs.core.async.t29777(alt_flag__$1,flag__$1,meta29778));
});})(flag))
;

}

return (new cljs.core.async.t29777(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t29783 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29783 = (function (alt_handler,flag,cb,meta29784){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29784 = meta29784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29785,meta29784__$1){
var self__ = this;
var _29785__$1 = this;
return (new cljs.core.async.t29783(self__.alt_handler,self__.flag,self__.cb,meta29784__$1));
});

cljs.core.async.t29783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29785){
var self__ = this;
var _29785__$1 = this;
return self__.meta29784;
});

cljs.core.async.t29783.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29784","meta29784",2062342503,null)], null);
});

cljs.core.async.t29783.cljs$lang$type = true;

cljs.core.async.t29783.cljs$lang$ctorStr = "cljs.core.async/t29783";

cljs.core.async.t29783.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29783");
});

cljs.core.async.__GT_t29783 = (function cljs$core$async$alt_handler_$___GT_t29783(alt_handler__$1,flag__$1,cb__$1,meta29784){
return (new cljs.core.async.t29783(alt_handler__$1,flag__$1,cb__$1,meta29784));
});

}

return (new cljs.core.async.t29783(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29786_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29786_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29787_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29787_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20567__auto__ = wport;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29788 = (i + (1));
i = G__29788;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20567__auto__ = ret;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__20555__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20555__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20555__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__21607__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21607__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29791){
var map__29792 = p__29791;
var map__29792__$1 = ((cljs.core.seq_QMARK_.call(null,map__29792))?cljs.core.apply.call(null,cljs.core.hash_map,map__29792):map__29792);
var opts = map__29792__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29789){
var G__29790 = cljs.core.first.call(null,seq29789);
var seq29789__$1 = cljs.core.next.call(null,seq29789);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29790,seq29789__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__29794 = arguments.length;
switch (G__29794) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23938__auto___29843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___29843){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___29843){
return (function (state_29818){
var state_val_29819 = (state_29818[(1)]);
if((state_val_29819 === (7))){
var inst_29814 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29820_29844 = state_29818__$1;
(statearr_29820_29844[(2)] = inst_29814);

(statearr_29820_29844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (1))){
var state_29818__$1 = state_29818;
var statearr_29821_29845 = state_29818__$1;
(statearr_29821_29845[(2)] = null);

(statearr_29821_29845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (4))){
var inst_29797 = (state_29818[(7)]);
var inst_29797__$1 = (state_29818[(2)]);
var inst_29798 = (inst_29797__$1 == null);
var state_29818__$1 = (function (){var statearr_29822 = state_29818;
(statearr_29822[(7)] = inst_29797__$1);

return statearr_29822;
})();
if(cljs.core.truth_(inst_29798)){
var statearr_29823_29846 = state_29818__$1;
(statearr_29823_29846[(1)] = (5));

} else {
var statearr_29824_29847 = state_29818__$1;
(statearr_29824_29847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (13))){
var state_29818__$1 = state_29818;
var statearr_29825_29848 = state_29818__$1;
(statearr_29825_29848[(2)] = null);

(statearr_29825_29848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (6))){
var inst_29797 = (state_29818[(7)]);
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29818__$1,(11),to,inst_29797);
} else {
if((state_val_29819 === (3))){
var inst_29816 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29818__$1,inst_29816);
} else {
if((state_val_29819 === (12))){
var state_29818__$1 = state_29818;
var statearr_29826_29849 = state_29818__$1;
(statearr_29826_29849[(2)] = null);

(statearr_29826_29849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (2))){
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29818__$1,(4),from);
} else {
if((state_val_29819 === (11))){
var inst_29807 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
if(cljs.core.truth_(inst_29807)){
var statearr_29827_29850 = state_29818__$1;
(statearr_29827_29850[(1)] = (12));

} else {
var statearr_29828_29851 = state_29818__$1;
(statearr_29828_29851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (9))){
var state_29818__$1 = state_29818;
var statearr_29829_29852 = state_29818__$1;
(statearr_29829_29852[(2)] = null);

(statearr_29829_29852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (5))){
var state_29818__$1 = state_29818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29830_29853 = state_29818__$1;
(statearr_29830_29853[(1)] = (8));

} else {
var statearr_29831_29854 = state_29818__$1;
(statearr_29831_29854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (14))){
var inst_29812 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29832_29855 = state_29818__$1;
(statearr_29832_29855[(2)] = inst_29812);

(statearr_29832_29855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (10))){
var inst_29804 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29833_29856 = state_29818__$1;
(statearr_29833_29856[(2)] = inst_29804);

(statearr_29833_29856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (8))){
var inst_29801 = cljs.core.async.close_BANG_.call(null,to);
var state_29818__$1 = state_29818;
var statearr_29834_29857 = state_29818__$1;
(statearr_29834_29857[(2)] = inst_29801);

(statearr_29834_29857[(1)] = (10));


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
});})(c__23938__auto___29843))
;
return ((function (switch__23876__auto__,c__23938__auto___29843){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_29838 = [null,null,null,null,null,null,null,null];
(statearr_29838[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_29838[(1)] = (1));

return statearr_29838;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_29818){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_29818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e29839){if((e29839 instanceof Object)){
var ex__23880__auto__ = e29839;
var statearr_29840_29858 = state_29818;
(statearr_29840_29858[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29859 = state_29818;
state_29818 = G__29859;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_29818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_29818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___29843))
})();
var state__23940__auto__ = (function (){var statearr_29841 = f__23939__auto__.call(null);
(statearr_29841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___29843);

return statearr_29841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___29843))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30043){
var vec__30044 = p__30043;
var v = cljs.core.nth.call(null,vec__30044,(0),null);
var p = cljs.core.nth.call(null,vec__30044,(1),null);
var job = vec__30044;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23938__auto___30226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___30226,res,vec__30044,v,p,job,jobs,results){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___30226,res,vec__30044,v,p,job,jobs,results){
return (function (state_30049){
var state_val_30050 = (state_30049[(1)]);
if((state_val_30050 === (1))){
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30049__$1,(2),res,v);
} else {
if((state_val_30050 === (2))){
var inst_30046 = (state_30049[(2)]);
var inst_30047 = cljs.core.async.close_BANG_.call(null,res);
var state_30049__$1 = (function (){var statearr_30051 = state_30049;
(statearr_30051[(7)] = inst_30046);

return statearr_30051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30049__$1,inst_30047);
} else {
return null;
}
}
});})(c__23938__auto___30226,res,vec__30044,v,p,job,jobs,results))
;
return ((function (switch__23876__auto__,c__23938__auto___30226,res,vec__30044,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0 = (function (){
var statearr_30055 = [null,null,null,null,null,null,null,null];
(statearr_30055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__);

(statearr_30055[(1)] = (1));

return statearr_30055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1 = (function (state_30049){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30056){if((e30056 instanceof Object)){
var ex__23880__auto__ = e30056;
var statearr_30057_30227 = state_30049;
(statearr_30057_30227[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30228 = state_30049;
state_30049 = G__30228;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = function(state_30049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1.call(this,state_30049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___30226,res,vec__30044,v,p,job,jobs,results))
})();
var state__23940__auto__ = (function (){var statearr_30058 = f__23939__auto__.call(null);
(statearr_30058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___30226);

return statearr_30058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___30226,res,vec__30044,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30059){
var vec__30060 = p__30059;
var v = cljs.core.nth.call(null,vec__30060,(0),null);
var p = cljs.core.nth.call(null,vec__30060,(1),null);
var job = vec__30060;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21452__auto___30229 = n;
var __30230 = (0);
while(true){
if((__30230 < n__21452__auto___30229)){
var G__30061_30231 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30061_30231) {
case "compute":
var c__23938__auto___30233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30230,c__23938__auto___30233,G__30061_30231,n__21452__auto___30229,jobs,results,process,async){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (__30230,c__23938__auto___30233,G__30061_30231,n__21452__auto___30229,jobs,results,process,async){
return (function (state_30074){
var state_val_30075 = (state_30074[(1)]);
if((state_val_30075 === (1))){
var state_30074__$1 = state_30074;
var statearr_30076_30234 = state_30074__$1;
(statearr_30076_30234[(2)] = null);

(statearr_30076_30234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (2))){
var state_30074__$1 = state_30074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30074__$1,(4),jobs);
} else {
if((state_val_30075 === (3))){
var inst_30072 = (state_30074[(2)]);
var state_30074__$1 = state_30074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30074__$1,inst_30072);
} else {
if((state_val_30075 === (4))){
var inst_30064 = (state_30074[(2)]);
var inst_30065 = process.call(null,inst_30064);
var state_30074__$1 = state_30074;
if(cljs.core.truth_(inst_30065)){
var statearr_30077_30235 = state_30074__$1;
(statearr_30077_30235[(1)] = (5));

} else {
var statearr_30078_30236 = state_30074__$1;
(statearr_30078_30236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (5))){
var state_30074__$1 = state_30074;
var statearr_30079_30237 = state_30074__$1;
(statearr_30079_30237[(2)] = null);

(statearr_30079_30237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (6))){
var state_30074__$1 = state_30074;
var statearr_30080_30238 = state_30074__$1;
(statearr_30080_30238[(2)] = null);

(statearr_30080_30238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (7))){
var inst_30070 = (state_30074[(2)]);
var state_30074__$1 = state_30074;
var statearr_30081_30239 = state_30074__$1;
(statearr_30081_30239[(2)] = inst_30070);

(statearr_30081_30239[(1)] = (3));


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
});})(__30230,c__23938__auto___30233,G__30061_30231,n__21452__auto___30229,jobs,results,process,async))
;
return ((function (__30230,switch__23876__auto__,c__23938__auto___30233,G__30061_30231,n__21452__auto___30229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0 = (function (){
var statearr_30085 = [null,null,null,null,null,null,null];
(statearr_30085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__);

(statearr_30085[(1)] = (1));

return statearr_30085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1 = (function (state_30074){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30086){if((e30086 instanceof Object)){
var ex__23880__auto__ = e30086;
var statearr_30087_30240 = state_30074;
(statearr_30087_30240[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30241 = state_30074;
state_30074 = G__30241;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = function(state_30074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1.call(this,state_30074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__;
})()
;})(__30230,switch__23876__auto__,c__23938__auto___30233,G__30061_30231,n__21452__auto___30229,jobs,results,process,async))
})();
var state__23940__auto__ = (function (){var statearr_30088 = f__23939__auto__.call(null);
(statearr_30088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___30233);

return statearr_30088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(__30230,c__23938__auto___30233,G__30061_30231,n__21452__auto___30229,jobs,results,process,async))
);


break;
case "async":
var c__23938__auto___30242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30230,c__23938__auto___30242,G__30061_30231,n__21452__auto___30229,jobs,results,process,async){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (__30230,c__23938__auto___30242,G__30061_30231,n__21452__auto___30229,jobs,results,process,async){
return (function (state_30101){
var state_val_30102 = (state_30101[(1)]);
if((state_val_30102 === (1))){
var state_30101__$1 = state_30101;
var statearr_30103_30243 = state_30101__$1;
(statearr_30103_30243[(2)] = null);

(statearr_30103_30243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (2))){
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30101__$1,(4),jobs);
} else {
if((state_val_30102 === (3))){
var inst_30099 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30101__$1,inst_30099);
} else {
if((state_val_30102 === (4))){
var inst_30091 = (state_30101[(2)]);
var inst_30092 = async.call(null,inst_30091);
var state_30101__$1 = state_30101;
if(cljs.core.truth_(inst_30092)){
var statearr_30104_30244 = state_30101__$1;
(statearr_30104_30244[(1)] = (5));

} else {
var statearr_30105_30245 = state_30101__$1;
(statearr_30105_30245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (5))){
var state_30101__$1 = state_30101;
var statearr_30106_30246 = state_30101__$1;
(statearr_30106_30246[(2)] = null);

(statearr_30106_30246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (6))){
var state_30101__$1 = state_30101;
var statearr_30107_30247 = state_30101__$1;
(statearr_30107_30247[(2)] = null);

(statearr_30107_30247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (7))){
var inst_30097 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
var statearr_30108_30248 = state_30101__$1;
(statearr_30108_30248[(2)] = inst_30097);

(statearr_30108_30248[(1)] = (3));


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
});})(__30230,c__23938__auto___30242,G__30061_30231,n__21452__auto___30229,jobs,results,process,async))
;
return ((function (__30230,switch__23876__auto__,c__23938__auto___30242,G__30061_30231,n__21452__auto___30229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0 = (function (){
var statearr_30112 = [null,null,null,null,null,null,null];
(statearr_30112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__);

(statearr_30112[(1)] = (1));

return statearr_30112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1 = (function (state_30101){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30113){if((e30113 instanceof Object)){
var ex__23880__auto__ = e30113;
var statearr_30114_30249 = state_30101;
(statearr_30114_30249[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30250 = state_30101;
state_30101 = G__30250;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = function(state_30101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1.call(this,state_30101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__;
})()
;})(__30230,switch__23876__auto__,c__23938__auto___30242,G__30061_30231,n__21452__auto___30229,jobs,results,process,async))
})();
var state__23940__auto__ = (function (){var statearr_30115 = f__23939__auto__.call(null);
(statearr_30115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___30242);

return statearr_30115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(__30230,c__23938__auto___30242,G__30061_30231,n__21452__auto___30229,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30251 = (__30230 + (1));
__30230 = G__30251;
continue;
} else {
}
break;
}

var c__23938__auto___30252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___30252,jobs,results,process,async){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___30252,jobs,results,process,async){
return (function (state_30137){
var state_val_30138 = (state_30137[(1)]);
if((state_val_30138 === (1))){
var state_30137__$1 = state_30137;
var statearr_30139_30253 = state_30137__$1;
(statearr_30139_30253[(2)] = null);

(statearr_30139_30253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30138 === (2))){
var state_30137__$1 = state_30137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30137__$1,(4),from);
} else {
if((state_val_30138 === (3))){
var inst_30135 = (state_30137[(2)]);
var state_30137__$1 = state_30137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30137__$1,inst_30135);
} else {
if((state_val_30138 === (4))){
var inst_30118 = (state_30137[(7)]);
var inst_30118__$1 = (state_30137[(2)]);
var inst_30119 = (inst_30118__$1 == null);
var state_30137__$1 = (function (){var statearr_30140 = state_30137;
(statearr_30140[(7)] = inst_30118__$1);

return statearr_30140;
})();
if(cljs.core.truth_(inst_30119)){
var statearr_30141_30254 = state_30137__$1;
(statearr_30141_30254[(1)] = (5));

} else {
var statearr_30142_30255 = state_30137__$1;
(statearr_30142_30255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30138 === (5))){
var inst_30121 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30137__$1 = state_30137;
var statearr_30143_30256 = state_30137__$1;
(statearr_30143_30256[(2)] = inst_30121);

(statearr_30143_30256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30138 === (6))){
var inst_30123 = (state_30137[(8)]);
var inst_30118 = (state_30137[(7)]);
var inst_30123__$1 = cljs.core.async.chan.call(null,(1));
var inst_30124 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30125 = [inst_30118,inst_30123__$1];
var inst_30126 = (new cljs.core.PersistentVector(null,2,(5),inst_30124,inst_30125,null));
var state_30137__$1 = (function (){var statearr_30144 = state_30137;
(statearr_30144[(8)] = inst_30123__$1);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30137__$1,(8),jobs,inst_30126);
} else {
if((state_val_30138 === (7))){
var inst_30133 = (state_30137[(2)]);
var state_30137__$1 = state_30137;
var statearr_30145_30257 = state_30137__$1;
(statearr_30145_30257[(2)] = inst_30133);

(statearr_30145_30257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30138 === (8))){
var inst_30123 = (state_30137[(8)]);
var inst_30128 = (state_30137[(2)]);
var state_30137__$1 = (function (){var statearr_30146 = state_30137;
(statearr_30146[(9)] = inst_30128);

return statearr_30146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30137__$1,(9),results,inst_30123);
} else {
if((state_val_30138 === (9))){
var inst_30130 = (state_30137[(2)]);
var state_30137__$1 = (function (){var statearr_30147 = state_30137;
(statearr_30147[(10)] = inst_30130);

return statearr_30147;
})();
var statearr_30148_30258 = state_30137__$1;
(statearr_30148_30258[(2)] = null);

(statearr_30148_30258[(1)] = (2));


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
});})(c__23938__auto___30252,jobs,results,process,async))
;
return ((function (switch__23876__auto__,c__23938__auto___30252,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0 = (function (){
var statearr_30152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__);

(statearr_30152[(1)] = (1));

return statearr_30152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1 = (function (state_30137){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30153){if((e30153 instanceof Object)){
var ex__23880__auto__ = e30153;
var statearr_30154_30259 = state_30137;
(statearr_30154_30259[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30260 = state_30137;
state_30137 = G__30260;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = function(state_30137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1.call(this,state_30137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___30252,jobs,results,process,async))
})();
var state__23940__auto__ = (function (){var statearr_30155 = f__23939__auto__.call(null);
(statearr_30155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___30252);

return statearr_30155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___30252,jobs,results,process,async))
);


var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__,jobs,results,process,async){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__,jobs,results,process,async){
return (function (state_30193){
var state_val_30194 = (state_30193[(1)]);
if((state_val_30194 === (7))){
var inst_30189 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30195_30261 = state_30193__$1;
(statearr_30195_30261[(2)] = inst_30189);

(statearr_30195_30261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (20))){
var state_30193__$1 = state_30193;
var statearr_30196_30262 = state_30193__$1;
(statearr_30196_30262[(2)] = null);

(statearr_30196_30262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (1))){
var state_30193__$1 = state_30193;
var statearr_30197_30263 = state_30193__$1;
(statearr_30197_30263[(2)] = null);

(statearr_30197_30263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (4))){
var inst_30158 = (state_30193[(7)]);
var inst_30158__$1 = (state_30193[(2)]);
var inst_30159 = (inst_30158__$1 == null);
var state_30193__$1 = (function (){var statearr_30198 = state_30193;
(statearr_30198[(7)] = inst_30158__$1);

return statearr_30198;
})();
if(cljs.core.truth_(inst_30159)){
var statearr_30199_30264 = state_30193__$1;
(statearr_30199_30264[(1)] = (5));

} else {
var statearr_30200_30265 = state_30193__$1;
(statearr_30200_30265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (15))){
var inst_30171 = (state_30193[(8)]);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30193__$1,(18),to,inst_30171);
} else {
if((state_val_30194 === (21))){
var inst_30184 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30201_30266 = state_30193__$1;
(statearr_30201_30266[(2)] = inst_30184);

(statearr_30201_30266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (13))){
var inst_30186 = (state_30193[(2)]);
var state_30193__$1 = (function (){var statearr_30202 = state_30193;
(statearr_30202[(9)] = inst_30186);

return statearr_30202;
})();
var statearr_30203_30267 = state_30193__$1;
(statearr_30203_30267[(2)] = null);

(statearr_30203_30267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (6))){
var inst_30158 = (state_30193[(7)]);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30193__$1,(11),inst_30158);
} else {
if((state_val_30194 === (17))){
var inst_30179 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
if(cljs.core.truth_(inst_30179)){
var statearr_30204_30268 = state_30193__$1;
(statearr_30204_30268[(1)] = (19));

} else {
var statearr_30205_30269 = state_30193__$1;
(statearr_30205_30269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (3))){
var inst_30191 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30193__$1,inst_30191);
} else {
if((state_val_30194 === (12))){
var inst_30168 = (state_30193[(10)]);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30193__$1,(14),inst_30168);
} else {
if((state_val_30194 === (2))){
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30193__$1,(4),results);
} else {
if((state_val_30194 === (19))){
var state_30193__$1 = state_30193;
var statearr_30206_30270 = state_30193__$1;
(statearr_30206_30270[(2)] = null);

(statearr_30206_30270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (11))){
var inst_30168 = (state_30193[(2)]);
var state_30193__$1 = (function (){var statearr_30207 = state_30193;
(statearr_30207[(10)] = inst_30168);

return statearr_30207;
})();
var statearr_30208_30271 = state_30193__$1;
(statearr_30208_30271[(2)] = null);

(statearr_30208_30271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (9))){
var state_30193__$1 = state_30193;
var statearr_30209_30272 = state_30193__$1;
(statearr_30209_30272[(2)] = null);

(statearr_30209_30272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (5))){
var state_30193__$1 = state_30193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30210_30273 = state_30193__$1;
(statearr_30210_30273[(1)] = (8));

} else {
var statearr_30211_30274 = state_30193__$1;
(statearr_30211_30274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (14))){
var inst_30173 = (state_30193[(11)]);
var inst_30171 = (state_30193[(8)]);
var inst_30171__$1 = (state_30193[(2)]);
var inst_30172 = (inst_30171__$1 == null);
var inst_30173__$1 = cljs.core.not.call(null,inst_30172);
var state_30193__$1 = (function (){var statearr_30212 = state_30193;
(statearr_30212[(11)] = inst_30173__$1);

(statearr_30212[(8)] = inst_30171__$1);

return statearr_30212;
})();
if(inst_30173__$1){
var statearr_30213_30275 = state_30193__$1;
(statearr_30213_30275[(1)] = (15));

} else {
var statearr_30214_30276 = state_30193__$1;
(statearr_30214_30276[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (16))){
var inst_30173 = (state_30193[(11)]);
var state_30193__$1 = state_30193;
var statearr_30215_30277 = state_30193__$1;
(statearr_30215_30277[(2)] = inst_30173);

(statearr_30215_30277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (10))){
var inst_30165 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30216_30278 = state_30193__$1;
(statearr_30216_30278[(2)] = inst_30165);

(statearr_30216_30278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (18))){
var inst_30176 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30217_30279 = state_30193__$1;
(statearr_30217_30279[(2)] = inst_30176);

(statearr_30217_30279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (8))){
var inst_30162 = cljs.core.async.close_BANG_.call(null,to);
var state_30193__$1 = state_30193;
var statearr_30218_30280 = state_30193__$1;
(statearr_30218_30280[(2)] = inst_30162);

(statearr_30218_30280[(1)] = (10));


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
});})(c__23938__auto__,jobs,results,process,async))
;
return ((function (switch__23876__auto__,c__23938__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0 = (function (){
var statearr_30222 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__);

(statearr_30222[(1)] = (1));

return statearr_30222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1 = (function (state_30193){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30223){if((e30223 instanceof Object)){
var ex__23880__auto__ = e30223;
var statearr_30224_30281 = state_30193;
(statearr_30224_30281[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30282 = state_30193;
state_30193 = G__30282;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__ = function(state_30193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1.call(this,state_30193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23877__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__,jobs,results,process,async))
})();
var state__23940__auto__ = (function (){var statearr_30225 = f__23939__auto__.call(null);
(statearr_30225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_30225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__,jobs,results,process,async))
);

return c__23938__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__30284 = arguments.length;
switch (G__30284) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__30287 = arguments.length;
switch (G__30287) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__30290 = arguments.length;
switch (G__30290) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23938__auto___30342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___30342,tc,fc){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___30342,tc,fc){
return (function (state_30316){
var state_val_30317 = (state_30316[(1)]);
if((state_val_30317 === (7))){
var inst_30312 = (state_30316[(2)]);
var state_30316__$1 = state_30316;
var statearr_30318_30343 = state_30316__$1;
(statearr_30318_30343[(2)] = inst_30312);

(statearr_30318_30343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (1))){
var state_30316__$1 = state_30316;
var statearr_30319_30344 = state_30316__$1;
(statearr_30319_30344[(2)] = null);

(statearr_30319_30344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (4))){
var inst_30293 = (state_30316[(7)]);
var inst_30293__$1 = (state_30316[(2)]);
var inst_30294 = (inst_30293__$1 == null);
var state_30316__$1 = (function (){var statearr_30320 = state_30316;
(statearr_30320[(7)] = inst_30293__$1);

return statearr_30320;
})();
if(cljs.core.truth_(inst_30294)){
var statearr_30321_30345 = state_30316__$1;
(statearr_30321_30345[(1)] = (5));

} else {
var statearr_30322_30346 = state_30316__$1;
(statearr_30322_30346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (13))){
var state_30316__$1 = state_30316;
var statearr_30323_30347 = state_30316__$1;
(statearr_30323_30347[(2)] = null);

(statearr_30323_30347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (6))){
var inst_30293 = (state_30316[(7)]);
var inst_30299 = p.call(null,inst_30293);
var state_30316__$1 = state_30316;
if(cljs.core.truth_(inst_30299)){
var statearr_30324_30348 = state_30316__$1;
(statearr_30324_30348[(1)] = (9));

} else {
var statearr_30325_30349 = state_30316__$1;
(statearr_30325_30349[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (3))){
var inst_30314 = (state_30316[(2)]);
var state_30316__$1 = state_30316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30316__$1,inst_30314);
} else {
if((state_val_30317 === (12))){
var state_30316__$1 = state_30316;
var statearr_30326_30350 = state_30316__$1;
(statearr_30326_30350[(2)] = null);

(statearr_30326_30350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (2))){
var state_30316__$1 = state_30316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30316__$1,(4),ch);
} else {
if((state_val_30317 === (11))){
var inst_30293 = (state_30316[(7)]);
var inst_30303 = (state_30316[(2)]);
var state_30316__$1 = state_30316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30316__$1,(8),inst_30303,inst_30293);
} else {
if((state_val_30317 === (9))){
var state_30316__$1 = state_30316;
var statearr_30327_30351 = state_30316__$1;
(statearr_30327_30351[(2)] = tc);

(statearr_30327_30351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (5))){
var inst_30296 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30297 = cljs.core.async.close_BANG_.call(null,fc);
var state_30316__$1 = (function (){var statearr_30328 = state_30316;
(statearr_30328[(8)] = inst_30296);

return statearr_30328;
})();
var statearr_30329_30352 = state_30316__$1;
(statearr_30329_30352[(2)] = inst_30297);

(statearr_30329_30352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (14))){
var inst_30310 = (state_30316[(2)]);
var state_30316__$1 = state_30316;
var statearr_30330_30353 = state_30316__$1;
(statearr_30330_30353[(2)] = inst_30310);

(statearr_30330_30353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (10))){
var state_30316__$1 = state_30316;
var statearr_30331_30354 = state_30316__$1;
(statearr_30331_30354[(2)] = fc);

(statearr_30331_30354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30317 === (8))){
var inst_30305 = (state_30316[(2)]);
var state_30316__$1 = state_30316;
if(cljs.core.truth_(inst_30305)){
var statearr_30332_30355 = state_30316__$1;
(statearr_30332_30355[(1)] = (12));

} else {
var statearr_30333_30356 = state_30316__$1;
(statearr_30333_30356[(1)] = (13));

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
});})(c__23938__auto___30342,tc,fc))
;
return ((function (switch__23876__auto__,c__23938__auto___30342,tc,fc){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_30337 = [null,null,null,null,null,null,null,null,null];
(statearr_30337[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_30337[(1)] = (1));

return statearr_30337;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_30316){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30338){if((e30338 instanceof Object)){
var ex__23880__auto__ = e30338;
var statearr_30339_30357 = state_30316;
(statearr_30339_30357[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30316;
state_30316 = G__30358;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_30316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_30316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___30342,tc,fc))
})();
var state__23940__auto__ = (function (){var statearr_30340 = f__23939__auto__.call(null);
(statearr_30340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___30342);

return statearr_30340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___30342,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__){
return (function (state_30405){
var state_val_30406 = (state_30405[(1)]);
if((state_val_30406 === (1))){
var inst_30391 = init;
var state_30405__$1 = (function (){var statearr_30407 = state_30405;
(statearr_30407[(7)] = inst_30391);

return statearr_30407;
})();
var statearr_30408_30423 = state_30405__$1;
(statearr_30408_30423[(2)] = null);

(statearr_30408_30423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (2))){
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(4),ch);
} else {
if((state_val_30406 === (3))){
var inst_30403 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30405__$1,inst_30403);
} else {
if((state_val_30406 === (4))){
var inst_30394 = (state_30405[(8)]);
var inst_30394__$1 = (state_30405[(2)]);
var inst_30395 = (inst_30394__$1 == null);
var state_30405__$1 = (function (){var statearr_30409 = state_30405;
(statearr_30409[(8)] = inst_30394__$1);

return statearr_30409;
})();
if(cljs.core.truth_(inst_30395)){
var statearr_30410_30424 = state_30405__$1;
(statearr_30410_30424[(1)] = (5));

} else {
var statearr_30411_30425 = state_30405__$1;
(statearr_30411_30425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (5))){
var inst_30391 = (state_30405[(7)]);
var state_30405__$1 = state_30405;
var statearr_30412_30426 = state_30405__$1;
(statearr_30412_30426[(2)] = inst_30391);

(statearr_30412_30426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (6))){
var inst_30394 = (state_30405[(8)]);
var inst_30391 = (state_30405[(7)]);
var inst_30398 = f.call(null,inst_30391,inst_30394);
var inst_30391__$1 = inst_30398;
var state_30405__$1 = (function (){var statearr_30413 = state_30405;
(statearr_30413[(7)] = inst_30391__$1);

return statearr_30413;
})();
var statearr_30414_30427 = state_30405__$1;
(statearr_30414_30427[(2)] = null);

(statearr_30414_30427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (7))){
var inst_30401 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30415_30428 = state_30405__$1;
(statearr_30415_30428[(2)] = inst_30401);

(statearr_30415_30428[(1)] = (3));


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
});})(c__23938__auto__))
;
return ((function (switch__23876__auto__,c__23938__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23877__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23877__auto____0 = (function (){
var statearr_30419 = [null,null,null,null,null,null,null,null,null];
(statearr_30419[(0)] = cljs$core$async$reduce_$_state_machine__23877__auto__);

(statearr_30419[(1)] = (1));

return statearr_30419;
});
var cljs$core$async$reduce_$_state_machine__23877__auto____1 = (function (state_30405){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30420){if((e30420 instanceof Object)){
var ex__23880__auto__ = e30420;
var statearr_30421_30429 = state_30405;
(statearr_30421_30429[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30430 = state_30405;
state_30405 = G__30430;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23877__auto__ = function(state_30405){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23877__auto____1.call(this,state_30405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23877__auto____0;
cljs$core$async$reduce_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23877__auto____1;
return cljs$core$async$reduce_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__))
})();
var state__23940__auto__ = (function (){var statearr_30422 = f__23939__auto__.call(null);
(statearr_30422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_30422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__))
);

return c__23938__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__30432 = arguments.length;
switch (G__30432) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__){
return (function (state_30457){
var state_val_30458 = (state_30457[(1)]);
if((state_val_30458 === (7))){
var inst_30439 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
var statearr_30459_30483 = state_30457__$1;
(statearr_30459_30483[(2)] = inst_30439);

(statearr_30459_30483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (1))){
var inst_30433 = cljs.core.seq.call(null,coll);
var inst_30434 = inst_30433;
var state_30457__$1 = (function (){var statearr_30460 = state_30457;
(statearr_30460[(7)] = inst_30434);

return statearr_30460;
})();
var statearr_30461_30484 = state_30457__$1;
(statearr_30461_30484[(2)] = null);

(statearr_30461_30484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (4))){
var inst_30434 = (state_30457[(7)]);
var inst_30437 = cljs.core.first.call(null,inst_30434);
var state_30457__$1 = state_30457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30457__$1,(7),ch,inst_30437);
} else {
if((state_val_30458 === (13))){
var inst_30451 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
var statearr_30462_30485 = state_30457__$1;
(statearr_30462_30485[(2)] = inst_30451);

(statearr_30462_30485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (6))){
var inst_30442 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
if(cljs.core.truth_(inst_30442)){
var statearr_30463_30486 = state_30457__$1;
(statearr_30463_30486[(1)] = (8));

} else {
var statearr_30464_30487 = state_30457__$1;
(statearr_30464_30487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (3))){
var inst_30455 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30457__$1,inst_30455);
} else {
if((state_val_30458 === (12))){
var state_30457__$1 = state_30457;
var statearr_30465_30488 = state_30457__$1;
(statearr_30465_30488[(2)] = null);

(statearr_30465_30488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (2))){
var inst_30434 = (state_30457[(7)]);
var state_30457__$1 = state_30457;
if(cljs.core.truth_(inst_30434)){
var statearr_30466_30489 = state_30457__$1;
(statearr_30466_30489[(1)] = (4));

} else {
var statearr_30467_30490 = state_30457__$1;
(statearr_30467_30490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (11))){
var inst_30448 = cljs.core.async.close_BANG_.call(null,ch);
var state_30457__$1 = state_30457;
var statearr_30468_30491 = state_30457__$1;
(statearr_30468_30491[(2)] = inst_30448);

(statearr_30468_30491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (9))){
var state_30457__$1 = state_30457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30469_30492 = state_30457__$1;
(statearr_30469_30492[(1)] = (11));

} else {
var statearr_30470_30493 = state_30457__$1;
(statearr_30470_30493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (5))){
var inst_30434 = (state_30457[(7)]);
var state_30457__$1 = state_30457;
var statearr_30471_30494 = state_30457__$1;
(statearr_30471_30494[(2)] = inst_30434);

(statearr_30471_30494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (10))){
var inst_30453 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
var statearr_30472_30495 = state_30457__$1;
(statearr_30472_30495[(2)] = inst_30453);

(statearr_30472_30495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (8))){
var inst_30434 = (state_30457[(7)]);
var inst_30444 = cljs.core.next.call(null,inst_30434);
var inst_30434__$1 = inst_30444;
var state_30457__$1 = (function (){var statearr_30473 = state_30457;
(statearr_30473[(7)] = inst_30434__$1);

return statearr_30473;
})();
var statearr_30474_30496 = state_30457__$1;
(statearr_30474_30496[(2)] = null);

(statearr_30474_30496[(1)] = (2));


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
});})(c__23938__auto__))
;
return ((function (switch__23876__auto__,c__23938__auto__){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_30478 = [null,null,null,null,null,null,null,null];
(statearr_30478[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_30478[(1)] = (1));

return statearr_30478;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_30457){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30479){if((e30479 instanceof Object)){
var ex__23880__auto__ = e30479;
var statearr_30480_30497 = state_30457;
(statearr_30480_30497[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30498 = state_30457;
state_30457 = G__30498;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_30457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_30457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__))
})();
var state__23940__auto__ = (function (){var statearr_30481 = f__23939__auto__.call(null);
(statearr_30481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__))
);

return c__23938__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj30500 = {};
return obj30500;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__20555__auto__ = _;
if(and__20555__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__20555__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21203__auto__ = (((_ == null))?null:_);
return (function (){var or__20567__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj30502 = {};
return obj30502;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30724 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30724 = (function (mult,ch,cs,meta30725){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30725 = meta30725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30726,meta30725__$1){
var self__ = this;
var _30726__$1 = this;
return (new cljs.core.async.t30724(self__.mult,self__.ch,self__.cs,meta30725__$1));
});})(cs))
;

cljs.core.async.t30724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30726){
var self__ = this;
var _30726__$1 = this;
return self__.meta30725;
});})(cs))
;

cljs.core.async.t30724.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30724.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30724.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30724.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30724.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30724.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30725","meta30725",-1671293187,null)], null);
});})(cs))
;

cljs.core.async.t30724.cljs$lang$type = true;

cljs.core.async.t30724.cljs$lang$ctorStr = "cljs.core.async/t30724";

cljs.core.async.t30724.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t30724");
});})(cs))
;

cljs.core.async.__GT_t30724 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t30724(mult__$1,ch__$1,cs__$1,meta30725){
return (new cljs.core.async.t30724(mult__$1,ch__$1,cs__$1,meta30725));
});})(cs))
;

}

return (new cljs.core.async.t30724(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23938__auto___30945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___30945,cs,m,dchan,dctr,done){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___30945,cs,m,dchan,dctr,done){
return (function (state_30857){
var state_val_30858 = (state_30857[(1)]);
if((state_val_30858 === (7))){
var inst_30853 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30859_30946 = state_30857__$1;
(statearr_30859_30946[(2)] = inst_30853);

(statearr_30859_30946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (20))){
var inst_30758 = (state_30857[(7)]);
var inst_30768 = cljs.core.first.call(null,inst_30758);
var inst_30769 = cljs.core.nth.call(null,inst_30768,(0),null);
var inst_30770 = cljs.core.nth.call(null,inst_30768,(1),null);
var state_30857__$1 = (function (){var statearr_30860 = state_30857;
(statearr_30860[(8)] = inst_30769);

return statearr_30860;
})();
if(cljs.core.truth_(inst_30770)){
var statearr_30861_30947 = state_30857__$1;
(statearr_30861_30947[(1)] = (22));

} else {
var statearr_30862_30948 = state_30857__$1;
(statearr_30862_30948[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (27))){
var inst_30800 = (state_30857[(9)]);
var inst_30729 = (state_30857[(10)]);
var inst_30798 = (state_30857[(11)]);
var inst_30805 = (state_30857[(12)]);
var inst_30805__$1 = cljs.core._nth.call(null,inst_30798,inst_30800);
var inst_30806 = cljs.core.async.put_BANG_.call(null,inst_30805__$1,inst_30729,done);
var state_30857__$1 = (function (){var statearr_30863 = state_30857;
(statearr_30863[(12)] = inst_30805__$1);

return statearr_30863;
})();
if(cljs.core.truth_(inst_30806)){
var statearr_30864_30949 = state_30857__$1;
(statearr_30864_30949[(1)] = (30));

} else {
var statearr_30865_30950 = state_30857__$1;
(statearr_30865_30950[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (1))){
var state_30857__$1 = state_30857;
var statearr_30866_30951 = state_30857__$1;
(statearr_30866_30951[(2)] = null);

(statearr_30866_30951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (24))){
var inst_30758 = (state_30857[(7)]);
var inst_30775 = (state_30857[(2)]);
var inst_30776 = cljs.core.next.call(null,inst_30758);
var inst_30738 = inst_30776;
var inst_30739 = null;
var inst_30740 = (0);
var inst_30741 = (0);
var state_30857__$1 = (function (){var statearr_30867 = state_30857;
(statearr_30867[(13)] = inst_30775);

(statearr_30867[(14)] = inst_30740);

(statearr_30867[(15)] = inst_30741);

(statearr_30867[(16)] = inst_30739);

(statearr_30867[(17)] = inst_30738);

return statearr_30867;
})();
var statearr_30868_30952 = state_30857__$1;
(statearr_30868_30952[(2)] = null);

(statearr_30868_30952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (39))){
var state_30857__$1 = state_30857;
var statearr_30872_30953 = state_30857__$1;
(statearr_30872_30953[(2)] = null);

(statearr_30872_30953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (4))){
var inst_30729 = (state_30857[(10)]);
var inst_30729__$1 = (state_30857[(2)]);
var inst_30730 = (inst_30729__$1 == null);
var state_30857__$1 = (function (){var statearr_30873 = state_30857;
(statearr_30873[(10)] = inst_30729__$1);

return statearr_30873;
})();
if(cljs.core.truth_(inst_30730)){
var statearr_30874_30954 = state_30857__$1;
(statearr_30874_30954[(1)] = (5));

} else {
var statearr_30875_30955 = state_30857__$1;
(statearr_30875_30955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (15))){
var inst_30740 = (state_30857[(14)]);
var inst_30741 = (state_30857[(15)]);
var inst_30739 = (state_30857[(16)]);
var inst_30738 = (state_30857[(17)]);
var inst_30754 = (state_30857[(2)]);
var inst_30755 = (inst_30741 + (1));
var tmp30869 = inst_30740;
var tmp30870 = inst_30739;
var tmp30871 = inst_30738;
var inst_30738__$1 = tmp30871;
var inst_30739__$1 = tmp30870;
var inst_30740__$1 = tmp30869;
var inst_30741__$1 = inst_30755;
var state_30857__$1 = (function (){var statearr_30876 = state_30857;
(statearr_30876[(18)] = inst_30754);

(statearr_30876[(14)] = inst_30740__$1);

(statearr_30876[(15)] = inst_30741__$1);

(statearr_30876[(16)] = inst_30739__$1);

(statearr_30876[(17)] = inst_30738__$1);

return statearr_30876;
})();
var statearr_30877_30956 = state_30857__$1;
(statearr_30877_30956[(2)] = null);

(statearr_30877_30956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (21))){
var inst_30779 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30881_30957 = state_30857__$1;
(statearr_30881_30957[(2)] = inst_30779);

(statearr_30881_30957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (31))){
var inst_30805 = (state_30857[(12)]);
var inst_30809 = done.call(null,null);
var inst_30810 = cljs.core.async.untap_STAR_.call(null,m,inst_30805);
var state_30857__$1 = (function (){var statearr_30882 = state_30857;
(statearr_30882[(19)] = inst_30809);

return statearr_30882;
})();
var statearr_30883_30958 = state_30857__$1;
(statearr_30883_30958[(2)] = inst_30810);

(statearr_30883_30958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (32))){
var inst_30799 = (state_30857[(20)]);
var inst_30797 = (state_30857[(21)]);
var inst_30800 = (state_30857[(9)]);
var inst_30798 = (state_30857[(11)]);
var inst_30812 = (state_30857[(2)]);
var inst_30813 = (inst_30800 + (1));
var tmp30878 = inst_30799;
var tmp30879 = inst_30797;
var tmp30880 = inst_30798;
var inst_30797__$1 = tmp30879;
var inst_30798__$1 = tmp30880;
var inst_30799__$1 = tmp30878;
var inst_30800__$1 = inst_30813;
var state_30857__$1 = (function (){var statearr_30884 = state_30857;
(statearr_30884[(20)] = inst_30799__$1);

(statearr_30884[(21)] = inst_30797__$1);

(statearr_30884[(9)] = inst_30800__$1);

(statearr_30884[(22)] = inst_30812);

(statearr_30884[(11)] = inst_30798__$1);

return statearr_30884;
})();
var statearr_30885_30959 = state_30857__$1;
(statearr_30885_30959[(2)] = null);

(statearr_30885_30959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (40))){
var inst_30825 = (state_30857[(23)]);
var inst_30829 = done.call(null,null);
var inst_30830 = cljs.core.async.untap_STAR_.call(null,m,inst_30825);
var state_30857__$1 = (function (){var statearr_30886 = state_30857;
(statearr_30886[(24)] = inst_30829);

return statearr_30886;
})();
var statearr_30887_30960 = state_30857__$1;
(statearr_30887_30960[(2)] = inst_30830);

(statearr_30887_30960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (33))){
var inst_30816 = (state_30857[(25)]);
var inst_30818 = cljs.core.chunked_seq_QMARK_.call(null,inst_30816);
var state_30857__$1 = state_30857;
if(inst_30818){
var statearr_30888_30961 = state_30857__$1;
(statearr_30888_30961[(1)] = (36));

} else {
var statearr_30889_30962 = state_30857__$1;
(statearr_30889_30962[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (13))){
var inst_30748 = (state_30857[(26)]);
var inst_30751 = cljs.core.async.close_BANG_.call(null,inst_30748);
var state_30857__$1 = state_30857;
var statearr_30890_30963 = state_30857__$1;
(statearr_30890_30963[(2)] = inst_30751);

(statearr_30890_30963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (22))){
var inst_30769 = (state_30857[(8)]);
var inst_30772 = cljs.core.async.close_BANG_.call(null,inst_30769);
var state_30857__$1 = state_30857;
var statearr_30891_30964 = state_30857__$1;
(statearr_30891_30964[(2)] = inst_30772);

(statearr_30891_30964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (36))){
var inst_30816 = (state_30857[(25)]);
var inst_30820 = cljs.core.chunk_first.call(null,inst_30816);
var inst_30821 = cljs.core.chunk_rest.call(null,inst_30816);
var inst_30822 = cljs.core.count.call(null,inst_30820);
var inst_30797 = inst_30821;
var inst_30798 = inst_30820;
var inst_30799 = inst_30822;
var inst_30800 = (0);
var state_30857__$1 = (function (){var statearr_30892 = state_30857;
(statearr_30892[(20)] = inst_30799);

(statearr_30892[(21)] = inst_30797);

(statearr_30892[(9)] = inst_30800);

(statearr_30892[(11)] = inst_30798);

return statearr_30892;
})();
var statearr_30893_30965 = state_30857__$1;
(statearr_30893_30965[(2)] = null);

(statearr_30893_30965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (41))){
var inst_30816 = (state_30857[(25)]);
var inst_30832 = (state_30857[(2)]);
var inst_30833 = cljs.core.next.call(null,inst_30816);
var inst_30797 = inst_30833;
var inst_30798 = null;
var inst_30799 = (0);
var inst_30800 = (0);
var state_30857__$1 = (function (){var statearr_30894 = state_30857;
(statearr_30894[(20)] = inst_30799);

(statearr_30894[(21)] = inst_30797);

(statearr_30894[(9)] = inst_30800);

(statearr_30894[(27)] = inst_30832);

(statearr_30894[(11)] = inst_30798);

return statearr_30894;
})();
var statearr_30895_30966 = state_30857__$1;
(statearr_30895_30966[(2)] = null);

(statearr_30895_30966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (43))){
var state_30857__$1 = state_30857;
var statearr_30896_30967 = state_30857__$1;
(statearr_30896_30967[(2)] = null);

(statearr_30896_30967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (29))){
var inst_30841 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30897_30968 = state_30857__$1;
(statearr_30897_30968[(2)] = inst_30841);

(statearr_30897_30968[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (44))){
var inst_30850 = (state_30857[(2)]);
var state_30857__$1 = (function (){var statearr_30898 = state_30857;
(statearr_30898[(28)] = inst_30850);

return statearr_30898;
})();
var statearr_30899_30969 = state_30857__$1;
(statearr_30899_30969[(2)] = null);

(statearr_30899_30969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (6))){
var inst_30789 = (state_30857[(29)]);
var inst_30788 = cljs.core.deref.call(null,cs);
var inst_30789__$1 = cljs.core.keys.call(null,inst_30788);
var inst_30790 = cljs.core.count.call(null,inst_30789__$1);
var inst_30791 = cljs.core.reset_BANG_.call(null,dctr,inst_30790);
var inst_30796 = cljs.core.seq.call(null,inst_30789__$1);
var inst_30797 = inst_30796;
var inst_30798 = null;
var inst_30799 = (0);
var inst_30800 = (0);
var state_30857__$1 = (function (){var statearr_30900 = state_30857;
(statearr_30900[(20)] = inst_30799);

(statearr_30900[(21)] = inst_30797);

(statearr_30900[(9)] = inst_30800);

(statearr_30900[(29)] = inst_30789__$1);

(statearr_30900[(30)] = inst_30791);

(statearr_30900[(11)] = inst_30798);

return statearr_30900;
})();
var statearr_30901_30970 = state_30857__$1;
(statearr_30901_30970[(2)] = null);

(statearr_30901_30970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (28))){
var inst_30797 = (state_30857[(21)]);
var inst_30816 = (state_30857[(25)]);
var inst_30816__$1 = cljs.core.seq.call(null,inst_30797);
var state_30857__$1 = (function (){var statearr_30902 = state_30857;
(statearr_30902[(25)] = inst_30816__$1);

return statearr_30902;
})();
if(inst_30816__$1){
var statearr_30903_30971 = state_30857__$1;
(statearr_30903_30971[(1)] = (33));

} else {
var statearr_30904_30972 = state_30857__$1;
(statearr_30904_30972[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (25))){
var inst_30799 = (state_30857[(20)]);
var inst_30800 = (state_30857[(9)]);
var inst_30802 = (inst_30800 < inst_30799);
var inst_30803 = inst_30802;
var state_30857__$1 = state_30857;
if(cljs.core.truth_(inst_30803)){
var statearr_30905_30973 = state_30857__$1;
(statearr_30905_30973[(1)] = (27));

} else {
var statearr_30906_30974 = state_30857__$1;
(statearr_30906_30974[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (34))){
var state_30857__$1 = state_30857;
var statearr_30907_30975 = state_30857__$1;
(statearr_30907_30975[(2)] = null);

(statearr_30907_30975[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (17))){
var state_30857__$1 = state_30857;
var statearr_30908_30976 = state_30857__$1;
(statearr_30908_30976[(2)] = null);

(statearr_30908_30976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (3))){
var inst_30855 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30857__$1,inst_30855);
} else {
if((state_val_30858 === (12))){
var inst_30784 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30909_30977 = state_30857__$1;
(statearr_30909_30977[(2)] = inst_30784);

(statearr_30909_30977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (2))){
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30857__$1,(4),ch);
} else {
if((state_val_30858 === (23))){
var state_30857__$1 = state_30857;
var statearr_30910_30978 = state_30857__$1;
(statearr_30910_30978[(2)] = null);

(statearr_30910_30978[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (35))){
var inst_30839 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30911_30979 = state_30857__$1;
(statearr_30911_30979[(2)] = inst_30839);

(statearr_30911_30979[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (19))){
var inst_30758 = (state_30857[(7)]);
var inst_30762 = cljs.core.chunk_first.call(null,inst_30758);
var inst_30763 = cljs.core.chunk_rest.call(null,inst_30758);
var inst_30764 = cljs.core.count.call(null,inst_30762);
var inst_30738 = inst_30763;
var inst_30739 = inst_30762;
var inst_30740 = inst_30764;
var inst_30741 = (0);
var state_30857__$1 = (function (){var statearr_30912 = state_30857;
(statearr_30912[(14)] = inst_30740);

(statearr_30912[(15)] = inst_30741);

(statearr_30912[(16)] = inst_30739);

(statearr_30912[(17)] = inst_30738);

return statearr_30912;
})();
var statearr_30913_30980 = state_30857__$1;
(statearr_30913_30980[(2)] = null);

(statearr_30913_30980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (11))){
var inst_30758 = (state_30857[(7)]);
var inst_30738 = (state_30857[(17)]);
var inst_30758__$1 = cljs.core.seq.call(null,inst_30738);
var state_30857__$1 = (function (){var statearr_30914 = state_30857;
(statearr_30914[(7)] = inst_30758__$1);

return statearr_30914;
})();
if(inst_30758__$1){
var statearr_30915_30981 = state_30857__$1;
(statearr_30915_30981[(1)] = (16));

} else {
var statearr_30916_30982 = state_30857__$1;
(statearr_30916_30982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (9))){
var inst_30786 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30917_30983 = state_30857__$1;
(statearr_30917_30983[(2)] = inst_30786);

(statearr_30917_30983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (5))){
var inst_30736 = cljs.core.deref.call(null,cs);
var inst_30737 = cljs.core.seq.call(null,inst_30736);
var inst_30738 = inst_30737;
var inst_30739 = null;
var inst_30740 = (0);
var inst_30741 = (0);
var state_30857__$1 = (function (){var statearr_30918 = state_30857;
(statearr_30918[(14)] = inst_30740);

(statearr_30918[(15)] = inst_30741);

(statearr_30918[(16)] = inst_30739);

(statearr_30918[(17)] = inst_30738);

return statearr_30918;
})();
var statearr_30919_30984 = state_30857__$1;
(statearr_30919_30984[(2)] = null);

(statearr_30919_30984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (14))){
var state_30857__$1 = state_30857;
var statearr_30920_30985 = state_30857__$1;
(statearr_30920_30985[(2)] = null);

(statearr_30920_30985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (45))){
var inst_30847 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30921_30986 = state_30857__$1;
(statearr_30921_30986[(2)] = inst_30847);

(statearr_30921_30986[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (26))){
var inst_30789 = (state_30857[(29)]);
var inst_30843 = (state_30857[(2)]);
var inst_30844 = cljs.core.seq.call(null,inst_30789);
var state_30857__$1 = (function (){var statearr_30922 = state_30857;
(statearr_30922[(31)] = inst_30843);

return statearr_30922;
})();
if(inst_30844){
var statearr_30923_30987 = state_30857__$1;
(statearr_30923_30987[(1)] = (42));

} else {
var statearr_30924_30988 = state_30857__$1;
(statearr_30924_30988[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (16))){
var inst_30758 = (state_30857[(7)]);
var inst_30760 = cljs.core.chunked_seq_QMARK_.call(null,inst_30758);
var state_30857__$1 = state_30857;
if(inst_30760){
var statearr_30925_30989 = state_30857__$1;
(statearr_30925_30989[(1)] = (19));

} else {
var statearr_30926_30990 = state_30857__$1;
(statearr_30926_30990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (38))){
var inst_30836 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30927_30991 = state_30857__$1;
(statearr_30927_30991[(2)] = inst_30836);

(statearr_30927_30991[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (30))){
var state_30857__$1 = state_30857;
var statearr_30928_30992 = state_30857__$1;
(statearr_30928_30992[(2)] = null);

(statearr_30928_30992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (10))){
var inst_30741 = (state_30857[(15)]);
var inst_30739 = (state_30857[(16)]);
var inst_30747 = cljs.core._nth.call(null,inst_30739,inst_30741);
var inst_30748 = cljs.core.nth.call(null,inst_30747,(0),null);
var inst_30749 = cljs.core.nth.call(null,inst_30747,(1),null);
var state_30857__$1 = (function (){var statearr_30929 = state_30857;
(statearr_30929[(26)] = inst_30748);

return statearr_30929;
})();
if(cljs.core.truth_(inst_30749)){
var statearr_30930_30993 = state_30857__$1;
(statearr_30930_30993[(1)] = (13));

} else {
var statearr_30931_30994 = state_30857__$1;
(statearr_30931_30994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (18))){
var inst_30782 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30932_30995 = state_30857__$1;
(statearr_30932_30995[(2)] = inst_30782);

(statearr_30932_30995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (42))){
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30857__$1,(45),dchan);
} else {
if((state_val_30858 === (37))){
var inst_30825 = (state_30857[(23)]);
var inst_30816 = (state_30857[(25)]);
var inst_30729 = (state_30857[(10)]);
var inst_30825__$1 = cljs.core.first.call(null,inst_30816);
var inst_30826 = cljs.core.async.put_BANG_.call(null,inst_30825__$1,inst_30729,done);
var state_30857__$1 = (function (){var statearr_30933 = state_30857;
(statearr_30933[(23)] = inst_30825__$1);

return statearr_30933;
})();
if(cljs.core.truth_(inst_30826)){
var statearr_30934_30996 = state_30857__$1;
(statearr_30934_30996[(1)] = (39));

} else {
var statearr_30935_30997 = state_30857__$1;
(statearr_30935_30997[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (8))){
var inst_30740 = (state_30857[(14)]);
var inst_30741 = (state_30857[(15)]);
var inst_30743 = (inst_30741 < inst_30740);
var inst_30744 = inst_30743;
var state_30857__$1 = state_30857;
if(cljs.core.truth_(inst_30744)){
var statearr_30936_30998 = state_30857__$1;
(statearr_30936_30998[(1)] = (10));

} else {
var statearr_30937_30999 = state_30857__$1;
(statearr_30937_30999[(1)] = (11));

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
});})(c__23938__auto___30945,cs,m,dchan,dctr,done))
;
return ((function (switch__23876__auto__,c__23938__auto___30945,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23877__auto__ = null;
var cljs$core$async$mult_$_state_machine__23877__auto____0 = (function (){
var statearr_30941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30941[(0)] = cljs$core$async$mult_$_state_machine__23877__auto__);

(statearr_30941[(1)] = (1));

return statearr_30941;
});
var cljs$core$async$mult_$_state_machine__23877__auto____1 = (function (state_30857){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_30857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e30942){if((e30942 instanceof Object)){
var ex__23880__auto__ = e30942;
var statearr_30943_31000 = state_30857;
(statearr_30943_31000[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31001 = state_30857;
state_30857 = G__31001;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23877__auto__ = function(state_30857){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23877__auto____1.call(this,state_30857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23877__auto____0;
cljs$core$async$mult_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23877__auto____1;
return cljs$core$async$mult_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___30945,cs,m,dchan,dctr,done))
})();
var state__23940__auto__ = (function (){var statearr_30944 = f__23939__auto__.call(null);
(statearr_30944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___30945);

return statearr_30944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___30945,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__31003 = arguments.length;
switch (G__31003) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj31006 = {};
return obj31006;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__21607__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21607__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31011){
var map__31012 = p__31011;
var map__31012__$1 = ((cljs.core.seq_QMARK_.call(null,map__31012))?cljs.core.apply.call(null,cljs.core.hash_map,map__31012):map__31012);
var opts = map__31012__$1;
var statearr_31013_31016 = state;
(statearr_31013_31016[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31012,map__31012__$1,opts){
return (function (val){
var statearr_31014_31017 = state;
(statearr_31014_31017[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31012,map__31012__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31015_31018 = state;
(statearr_31015_31018[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31007){
var G__31008 = cljs.core.first.call(null,seq31007);
var seq31007__$1 = cljs.core.next.call(null,seq31007);
var G__31009 = cljs.core.first.call(null,seq31007__$1);
var seq31007__$2 = cljs.core.next.call(null,seq31007__$1);
var G__31010 = cljs.core.first.call(null,seq31007__$2);
var seq31007__$3 = cljs.core.next.call(null,seq31007__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31008,G__31009,G__31010,seq31007__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t31138 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31138 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31139){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31139 = meta31139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31140,meta31139__$1){
var self__ = this;
var _31140__$1 = this;
return (new cljs.core.async.t31138(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31139__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31140){
var self__ = this;
var _31140__$1 = this;
return self__.meta31139;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31138.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31139","meta31139",-1685156594,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31138.cljs$lang$type = true;

cljs.core.async.t31138.cljs$lang$ctorStr = "cljs.core.async/t31138";

cljs.core.async.t31138.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t31138");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31138 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t31138(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31139){
return (new cljs.core.async.t31138(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31139));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31138(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23938__auto___31257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___31257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___31257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31210){
var state_val_31211 = (state_31210[(1)]);
if((state_val_31211 === (7))){
var inst_31154 = (state_31210[(7)]);
var inst_31159 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31154);
var state_31210__$1 = state_31210;
var statearr_31212_31258 = state_31210__$1;
(statearr_31212_31258[(2)] = inst_31159);

(statearr_31212_31258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (20))){
var inst_31169 = (state_31210[(8)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31210__$1,(23),out,inst_31169);
} else {
if((state_val_31211 === (1))){
var inst_31144 = (state_31210[(9)]);
var inst_31144__$1 = calc_state.call(null);
var inst_31145 = cljs.core.seq_QMARK_.call(null,inst_31144__$1);
var state_31210__$1 = (function (){var statearr_31213 = state_31210;
(statearr_31213[(9)] = inst_31144__$1);

return statearr_31213;
})();
if(inst_31145){
var statearr_31214_31259 = state_31210__$1;
(statearr_31214_31259[(1)] = (2));

} else {
var statearr_31215_31260 = state_31210__$1;
(statearr_31215_31260[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (24))){
var inst_31162 = (state_31210[(10)]);
var inst_31154 = inst_31162;
var state_31210__$1 = (function (){var statearr_31216 = state_31210;
(statearr_31216[(7)] = inst_31154);

return statearr_31216;
})();
var statearr_31217_31261 = state_31210__$1;
(statearr_31217_31261[(2)] = null);

(statearr_31217_31261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (4))){
var inst_31144 = (state_31210[(9)]);
var inst_31150 = (state_31210[(2)]);
var inst_31151 = cljs.core.get.call(null,inst_31150,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31152 = cljs.core.get.call(null,inst_31150,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31153 = cljs.core.get.call(null,inst_31150,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31154 = inst_31144;
var state_31210__$1 = (function (){var statearr_31218 = state_31210;
(statearr_31218[(11)] = inst_31153);

(statearr_31218[(12)] = inst_31151);

(statearr_31218[(13)] = inst_31152);

(statearr_31218[(7)] = inst_31154);

return statearr_31218;
})();
var statearr_31219_31262 = state_31210__$1;
(statearr_31219_31262[(2)] = null);

(statearr_31219_31262[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (15))){
var state_31210__$1 = state_31210;
var statearr_31220_31263 = state_31210__$1;
(statearr_31220_31263[(2)] = null);

(statearr_31220_31263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (21))){
var inst_31162 = (state_31210[(10)]);
var inst_31154 = inst_31162;
var state_31210__$1 = (function (){var statearr_31221 = state_31210;
(statearr_31221[(7)] = inst_31154);

return statearr_31221;
})();
var statearr_31222_31264 = state_31210__$1;
(statearr_31222_31264[(2)] = null);

(statearr_31222_31264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (13))){
var inst_31206 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31223_31265 = state_31210__$1;
(statearr_31223_31265[(2)] = inst_31206);

(statearr_31223_31265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (22))){
var inst_31204 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31224_31266 = state_31210__$1;
(statearr_31224_31266[(2)] = inst_31204);

(statearr_31224_31266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (6))){
var inst_31208 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31210__$1,inst_31208);
} else {
if((state_val_31211 === (25))){
var state_31210__$1 = state_31210;
var statearr_31225_31267 = state_31210__$1;
(statearr_31225_31267[(2)] = null);

(statearr_31225_31267[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (17))){
var inst_31184 = (state_31210[(14)]);
var state_31210__$1 = state_31210;
var statearr_31226_31268 = state_31210__$1;
(statearr_31226_31268[(2)] = inst_31184);

(statearr_31226_31268[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (3))){
var inst_31144 = (state_31210[(9)]);
var state_31210__$1 = state_31210;
var statearr_31227_31269 = state_31210__$1;
(statearr_31227_31269[(2)] = inst_31144);

(statearr_31227_31269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (12))){
var inst_31184 = (state_31210[(14)]);
var inst_31163 = (state_31210[(15)]);
var inst_31170 = (state_31210[(16)]);
var inst_31184__$1 = inst_31163.call(null,inst_31170);
var state_31210__$1 = (function (){var statearr_31228 = state_31210;
(statearr_31228[(14)] = inst_31184__$1);

return statearr_31228;
})();
if(cljs.core.truth_(inst_31184__$1)){
var statearr_31229_31270 = state_31210__$1;
(statearr_31229_31270[(1)] = (17));

} else {
var statearr_31230_31271 = state_31210__$1;
(statearr_31230_31271[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (2))){
var inst_31144 = (state_31210[(9)]);
var inst_31147 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31144);
var state_31210__$1 = state_31210;
var statearr_31231_31272 = state_31210__$1;
(statearr_31231_31272[(2)] = inst_31147);

(statearr_31231_31272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (23))){
var inst_31195 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31195)){
var statearr_31232_31273 = state_31210__$1;
(statearr_31232_31273[(1)] = (24));

} else {
var statearr_31233_31274 = state_31210__$1;
(statearr_31233_31274[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (19))){
var inst_31192 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31192)){
var statearr_31234_31275 = state_31210__$1;
(statearr_31234_31275[(1)] = (20));

} else {
var statearr_31235_31276 = state_31210__$1;
(statearr_31235_31276[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (11))){
var inst_31169 = (state_31210[(8)]);
var inst_31175 = (inst_31169 == null);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31175)){
var statearr_31236_31277 = state_31210__$1;
(statearr_31236_31277[(1)] = (14));

} else {
var statearr_31237_31278 = state_31210__$1;
(statearr_31237_31278[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (9))){
var inst_31162 = (state_31210[(10)]);
var inst_31162__$1 = (state_31210[(2)]);
var inst_31163 = cljs.core.get.call(null,inst_31162__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31164 = cljs.core.get.call(null,inst_31162__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31165 = cljs.core.get.call(null,inst_31162__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31210__$1 = (function (){var statearr_31238 = state_31210;
(statearr_31238[(10)] = inst_31162__$1);

(statearr_31238[(15)] = inst_31163);

(statearr_31238[(17)] = inst_31164);

return statearr_31238;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31210__$1,(10),inst_31165);
} else {
if((state_val_31211 === (5))){
var inst_31154 = (state_31210[(7)]);
var inst_31157 = cljs.core.seq_QMARK_.call(null,inst_31154);
var state_31210__$1 = state_31210;
if(inst_31157){
var statearr_31239_31279 = state_31210__$1;
(statearr_31239_31279[(1)] = (7));

} else {
var statearr_31240_31280 = state_31210__$1;
(statearr_31240_31280[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (14))){
var inst_31170 = (state_31210[(16)]);
var inst_31177 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31170);
var state_31210__$1 = state_31210;
var statearr_31241_31281 = state_31210__$1;
(statearr_31241_31281[(2)] = inst_31177);

(statearr_31241_31281[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (26))){
var inst_31200 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31242_31282 = state_31210__$1;
(statearr_31242_31282[(2)] = inst_31200);

(statearr_31242_31282[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (16))){
var inst_31180 = (state_31210[(2)]);
var inst_31181 = calc_state.call(null);
var inst_31154 = inst_31181;
var state_31210__$1 = (function (){var statearr_31243 = state_31210;
(statearr_31243[(7)] = inst_31154);

(statearr_31243[(18)] = inst_31180);

return statearr_31243;
})();
var statearr_31244_31283 = state_31210__$1;
(statearr_31244_31283[(2)] = null);

(statearr_31244_31283[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (10))){
var inst_31169 = (state_31210[(8)]);
var inst_31170 = (state_31210[(16)]);
var inst_31168 = (state_31210[(2)]);
var inst_31169__$1 = cljs.core.nth.call(null,inst_31168,(0),null);
var inst_31170__$1 = cljs.core.nth.call(null,inst_31168,(1),null);
var inst_31171 = (inst_31169__$1 == null);
var inst_31172 = cljs.core._EQ_.call(null,inst_31170__$1,change);
var inst_31173 = (inst_31171) || (inst_31172);
var state_31210__$1 = (function (){var statearr_31245 = state_31210;
(statearr_31245[(8)] = inst_31169__$1);

(statearr_31245[(16)] = inst_31170__$1);

return statearr_31245;
})();
if(cljs.core.truth_(inst_31173)){
var statearr_31246_31284 = state_31210__$1;
(statearr_31246_31284[(1)] = (11));

} else {
var statearr_31247_31285 = state_31210__$1;
(statearr_31247_31285[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (18))){
var inst_31163 = (state_31210[(15)]);
var inst_31170 = (state_31210[(16)]);
var inst_31164 = (state_31210[(17)]);
var inst_31187 = cljs.core.empty_QMARK_.call(null,inst_31163);
var inst_31188 = inst_31164.call(null,inst_31170);
var inst_31189 = cljs.core.not.call(null,inst_31188);
var inst_31190 = (inst_31187) && (inst_31189);
var state_31210__$1 = state_31210;
var statearr_31248_31286 = state_31210__$1;
(statearr_31248_31286[(2)] = inst_31190);

(statearr_31248_31286[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (8))){
var inst_31154 = (state_31210[(7)]);
var state_31210__$1 = state_31210;
var statearr_31249_31287 = state_31210__$1;
(statearr_31249_31287[(2)] = inst_31154);

(statearr_31249_31287[(1)] = (9));


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
});})(c__23938__auto___31257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23876__auto__,c__23938__auto___31257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23877__auto__ = null;
var cljs$core$async$mix_$_state_machine__23877__auto____0 = (function (){
var statearr_31253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31253[(0)] = cljs$core$async$mix_$_state_machine__23877__auto__);

(statearr_31253[(1)] = (1));

return statearr_31253;
});
var cljs$core$async$mix_$_state_machine__23877__auto____1 = (function (state_31210){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_31210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e31254){if((e31254 instanceof Object)){
var ex__23880__auto__ = e31254;
var statearr_31255_31288 = state_31210;
(statearr_31255_31288[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31289 = state_31210;
state_31210 = G__31289;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23877__auto__ = function(state_31210){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23877__auto____1.call(this,state_31210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23877__auto____0;
cljs$core$async$mix_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23877__auto____1;
return cljs$core$async$mix_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___31257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23940__auto__ = (function (){var statearr_31256 = f__23939__auto__.call(null);
(statearr_31256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___31257);

return statearr_31256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___31257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj31291 = {};
return obj31291;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__20555__auto__ = p;
if(and__20555__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__20555__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21203__auto__ = (((p == null))?null:p);
return (function (){var or__20567__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__20555__auto__ = p;
if(and__20555__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__20555__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21203__auto__ = (((p == null))?null:p);
return (function (){var or__20567__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__31293 = arguments.length;
switch (G__31293) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__20555__auto__ = p;
if(and__20555__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__20555__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21203__auto__ = (((p == null))?null:p);
return (function (){var or__20567__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__20555__auto__ = p;
if(and__20555__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21203__auto__ = (((p == null))?null:p);
return (function (){var or__20567__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__31297 = arguments.length;
switch (G__31297) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20567__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20567__auto__,mults){
return (function (p1__31295_SHARP_){
if(cljs.core.truth_(p1__31295_SHARP_.call(null,topic))){
return p1__31295_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31295_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20567__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31298 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31298 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31299){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31299 = meta31299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31300,meta31299__$1){
var self__ = this;
var _31300__$1 = this;
return (new cljs.core.async.t31298(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31299__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31300){
var self__ = this;
var _31300__$1 = this;
return self__.meta31299;
});})(mults,ensure_mult))
;

cljs.core.async.t31298.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31298.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31298.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31298.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31298.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31298.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31298.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31299","meta31299",1213122133,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t31298.cljs$lang$type = true;

cljs.core.async.t31298.cljs$lang$ctorStr = "cljs.core.async/t31298";

cljs.core.async.t31298.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t31298");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31298 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t31298(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31299){
return (new cljs.core.async.t31298(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31299));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31298(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23938__auto___31421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___31421,mults,ensure_mult,p){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___31421,mults,ensure_mult,p){
return (function (state_31372){
var state_val_31373 = (state_31372[(1)]);
if((state_val_31373 === (7))){
var inst_31368 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31374_31422 = state_31372__$1;
(statearr_31374_31422[(2)] = inst_31368);

(statearr_31374_31422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (20))){
var state_31372__$1 = state_31372;
var statearr_31375_31423 = state_31372__$1;
(statearr_31375_31423[(2)] = null);

(statearr_31375_31423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (1))){
var state_31372__$1 = state_31372;
var statearr_31376_31424 = state_31372__$1;
(statearr_31376_31424[(2)] = null);

(statearr_31376_31424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (24))){
var inst_31351 = (state_31372[(7)]);
var inst_31360 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31351);
var state_31372__$1 = state_31372;
var statearr_31377_31425 = state_31372__$1;
(statearr_31377_31425[(2)] = inst_31360);

(statearr_31377_31425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (4))){
var inst_31303 = (state_31372[(8)]);
var inst_31303__$1 = (state_31372[(2)]);
var inst_31304 = (inst_31303__$1 == null);
var state_31372__$1 = (function (){var statearr_31378 = state_31372;
(statearr_31378[(8)] = inst_31303__$1);

return statearr_31378;
})();
if(cljs.core.truth_(inst_31304)){
var statearr_31379_31426 = state_31372__$1;
(statearr_31379_31426[(1)] = (5));

} else {
var statearr_31380_31427 = state_31372__$1;
(statearr_31380_31427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (15))){
var inst_31345 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31381_31428 = state_31372__$1;
(statearr_31381_31428[(2)] = inst_31345);

(statearr_31381_31428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (21))){
var inst_31365 = (state_31372[(2)]);
var state_31372__$1 = (function (){var statearr_31382 = state_31372;
(statearr_31382[(9)] = inst_31365);

return statearr_31382;
})();
var statearr_31383_31429 = state_31372__$1;
(statearr_31383_31429[(2)] = null);

(statearr_31383_31429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (13))){
var inst_31327 = (state_31372[(10)]);
var inst_31329 = cljs.core.chunked_seq_QMARK_.call(null,inst_31327);
var state_31372__$1 = state_31372;
if(inst_31329){
var statearr_31384_31430 = state_31372__$1;
(statearr_31384_31430[(1)] = (16));

} else {
var statearr_31385_31431 = state_31372__$1;
(statearr_31385_31431[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (22))){
var inst_31357 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
if(cljs.core.truth_(inst_31357)){
var statearr_31386_31432 = state_31372__$1;
(statearr_31386_31432[(1)] = (23));

} else {
var statearr_31387_31433 = state_31372__$1;
(statearr_31387_31433[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (6))){
var inst_31353 = (state_31372[(11)]);
var inst_31303 = (state_31372[(8)]);
var inst_31351 = (state_31372[(7)]);
var inst_31351__$1 = topic_fn.call(null,inst_31303);
var inst_31352 = cljs.core.deref.call(null,mults);
var inst_31353__$1 = cljs.core.get.call(null,inst_31352,inst_31351__$1);
var state_31372__$1 = (function (){var statearr_31388 = state_31372;
(statearr_31388[(11)] = inst_31353__$1);

(statearr_31388[(7)] = inst_31351__$1);

return statearr_31388;
})();
if(cljs.core.truth_(inst_31353__$1)){
var statearr_31389_31434 = state_31372__$1;
(statearr_31389_31434[(1)] = (19));

} else {
var statearr_31390_31435 = state_31372__$1;
(statearr_31390_31435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (25))){
var inst_31362 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31391_31436 = state_31372__$1;
(statearr_31391_31436[(2)] = inst_31362);

(statearr_31391_31436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (17))){
var inst_31327 = (state_31372[(10)]);
var inst_31336 = cljs.core.first.call(null,inst_31327);
var inst_31337 = cljs.core.async.muxch_STAR_.call(null,inst_31336);
var inst_31338 = cljs.core.async.close_BANG_.call(null,inst_31337);
var inst_31339 = cljs.core.next.call(null,inst_31327);
var inst_31313 = inst_31339;
var inst_31314 = null;
var inst_31315 = (0);
var inst_31316 = (0);
var state_31372__$1 = (function (){var statearr_31392 = state_31372;
(statearr_31392[(12)] = inst_31338);

(statearr_31392[(13)] = inst_31316);

(statearr_31392[(14)] = inst_31315);

(statearr_31392[(15)] = inst_31314);

(statearr_31392[(16)] = inst_31313);

return statearr_31392;
})();
var statearr_31393_31437 = state_31372__$1;
(statearr_31393_31437[(2)] = null);

(statearr_31393_31437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (3))){
var inst_31370 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31372__$1,inst_31370);
} else {
if((state_val_31373 === (12))){
var inst_31347 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31394_31438 = state_31372__$1;
(statearr_31394_31438[(2)] = inst_31347);

(statearr_31394_31438[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (2))){
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31372__$1,(4),ch);
} else {
if((state_val_31373 === (23))){
var state_31372__$1 = state_31372;
var statearr_31395_31439 = state_31372__$1;
(statearr_31395_31439[(2)] = null);

(statearr_31395_31439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (19))){
var inst_31353 = (state_31372[(11)]);
var inst_31303 = (state_31372[(8)]);
var inst_31355 = cljs.core.async.muxch_STAR_.call(null,inst_31353);
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31372__$1,(22),inst_31355,inst_31303);
} else {
if((state_val_31373 === (11))){
var inst_31327 = (state_31372[(10)]);
var inst_31313 = (state_31372[(16)]);
var inst_31327__$1 = cljs.core.seq.call(null,inst_31313);
var state_31372__$1 = (function (){var statearr_31396 = state_31372;
(statearr_31396[(10)] = inst_31327__$1);

return statearr_31396;
})();
if(inst_31327__$1){
var statearr_31397_31440 = state_31372__$1;
(statearr_31397_31440[(1)] = (13));

} else {
var statearr_31398_31441 = state_31372__$1;
(statearr_31398_31441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (9))){
var inst_31349 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31399_31442 = state_31372__$1;
(statearr_31399_31442[(2)] = inst_31349);

(statearr_31399_31442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (5))){
var inst_31310 = cljs.core.deref.call(null,mults);
var inst_31311 = cljs.core.vals.call(null,inst_31310);
var inst_31312 = cljs.core.seq.call(null,inst_31311);
var inst_31313 = inst_31312;
var inst_31314 = null;
var inst_31315 = (0);
var inst_31316 = (0);
var state_31372__$1 = (function (){var statearr_31400 = state_31372;
(statearr_31400[(13)] = inst_31316);

(statearr_31400[(14)] = inst_31315);

(statearr_31400[(15)] = inst_31314);

(statearr_31400[(16)] = inst_31313);

return statearr_31400;
})();
var statearr_31401_31443 = state_31372__$1;
(statearr_31401_31443[(2)] = null);

(statearr_31401_31443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (14))){
var state_31372__$1 = state_31372;
var statearr_31405_31444 = state_31372__$1;
(statearr_31405_31444[(2)] = null);

(statearr_31405_31444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (16))){
var inst_31327 = (state_31372[(10)]);
var inst_31331 = cljs.core.chunk_first.call(null,inst_31327);
var inst_31332 = cljs.core.chunk_rest.call(null,inst_31327);
var inst_31333 = cljs.core.count.call(null,inst_31331);
var inst_31313 = inst_31332;
var inst_31314 = inst_31331;
var inst_31315 = inst_31333;
var inst_31316 = (0);
var state_31372__$1 = (function (){var statearr_31406 = state_31372;
(statearr_31406[(13)] = inst_31316);

(statearr_31406[(14)] = inst_31315);

(statearr_31406[(15)] = inst_31314);

(statearr_31406[(16)] = inst_31313);

return statearr_31406;
})();
var statearr_31407_31445 = state_31372__$1;
(statearr_31407_31445[(2)] = null);

(statearr_31407_31445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (10))){
var inst_31316 = (state_31372[(13)]);
var inst_31315 = (state_31372[(14)]);
var inst_31314 = (state_31372[(15)]);
var inst_31313 = (state_31372[(16)]);
var inst_31321 = cljs.core._nth.call(null,inst_31314,inst_31316);
var inst_31322 = cljs.core.async.muxch_STAR_.call(null,inst_31321);
var inst_31323 = cljs.core.async.close_BANG_.call(null,inst_31322);
var inst_31324 = (inst_31316 + (1));
var tmp31402 = inst_31315;
var tmp31403 = inst_31314;
var tmp31404 = inst_31313;
var inst_31313__$1 = tmp31404;
var inst_31314__$1 = tmp31403;
var inst_31315__$1 = tmp31402;
var inst_31316__$1 = inst_31324;
var state_31372__$1 = (function (){var statearr_31408 = state_31372;
(statearr_31408[(17)] = inst_31323);

(statearr_31408[(13)] = inst_31316__$1);

(statearr_31408[(14)] = inst_31315__$1);

(statearr_31408[(15)] = inst_31314__$1);

(statearr_31408[(16)] = inst_31313__$1);

return statearr_31408;
})();
var statearr_31409_31446 = state_31372__$1;
(statearr_31409_31446[(2)] = null);

(statearr_31409_31446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (18))){
var inst_31342 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31410_31447 = state_31372__$1;
(statearr_31410_31447[(2)] = inst_31342);

(statearr_31410_31447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (8))){
var inst_31316 = (state_31372[(13)]);
var inst_31315 = (state_31372[(14)]);
var inst_31318 = (inst_31316 < inst_31315);
var inst_31319 = inst_31318;
var state_31372__$1 = state_31372;
if(cljs.core.truth_(inst_31319)){
var statearr_31411_31448 = state_31372__$1;
(statearr_31411_31448[(1)] = (10));

} else {
var statearr_31412_31449 = state_31372__$1;
(statearr_31412_31449[(1)] = (11));

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
});})(c__23938__auto___31421,mults,ensure_mult,p))
;
return ((function (switch__23876__auto__,c__23938__auto___31421,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_31416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31416[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_31416[(1)] = (1));

return statearr_31416;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_31372){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_31372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e31417){if((e31417 instanceof Object)){
var ex__23880__auto__ = e31417;
var statearr_31418_31450 = state_31372;
(statearr_31418_31450[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31451 = state_31372;
state_31372 = G__31451;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_31372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_31372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___31421,mults,ensure_mult,p))
})();
var state__23940__auto__ = (function (){var statearr_31419 = f__23939__auto__.call(null);
(statearr_31419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___31421);

return statearr_31419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___31421,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__31453 = arguments.length;
switch (G__31453) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__31456 = arguments.length;
switch (G__31456) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__31459 = arguments.length;
switch (G__31459) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23938__auto___31529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___31529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___31529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31498){
var state_val_31499 = (state_31498[(1)]);
if((state_val_31499 === (7))){
var state_31498__$1 = state_31498;
var statearr_31500_31530 = state_31498__$1;
(statearr_31500_31530[(2)] = null);

(statearr_31500_31530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (1))){
var state_31498__$1 = state_31498;
var statearr_31501_31531 = state_31498__$1;
(statearr_31501_31531[(2)] = null);

(statearr_31501_31531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (4))){
var inst_31462 = (state_31498[(7)]);
var inst_31464 = (inst_31462 < cnt);
var state_31498__$1 = state_31498;
if(cljs.core.truth_(inst_31464)){
var statearr_31502_31532 = state_31498__$1;
(statearr_31502_31532[(1)] = (6));

} else {
var statearr_31503_31533 = state_31498__$1;
(statearr_31503_31533[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (15))){
var inst_31494 = (state_31498[(2)]);
var state_31498__$1 = state_31498;
var statearr_31504_31534 = state_31498__$1;
(statearr_31504_31534[(2)] = inst_31494);

(statearr_31504_31534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (13))){
var inst_31487 = cljs.core.async.close_BANG_.call(null,out);
var state_31498__$1 = state_31498;
var statearr_31505_31535 = state_31498__$1;
(statearr_31505_31535[(2)] = inst_31487);

(statearr_31505_31535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (6))){
var state_31498__$1 = state_31498;
var statearr_31506_31536 = state_31498__$1;
(statearr_31506_31536[(2)] = null);

(statearr_31506_31536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (3))){
var inst_31496 = (state_31498[(2)]);
var state_31498__$1 = state_31498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31498__$1,inst_31496);
} else {
if((state_val_31499 === (12))){
var inst_31484 = (state_31498[(8)]);
var inst_31484__$1 = (state_31498[(2)]);
var inst_31485 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31484__$1);
var state_31498__$1 = (function (){var statearr_31507 = state_31498;
(statearr_31507[(8)] = inst_31484__$1);

return statearr_31507;
})();
if(cljs.core.truth_(inst_31485)){
var statearr_31508_31537 = state_31498__$1;
(statearr_31508_31537[(1)] = (13));

} else {
var statearr_31509_31538 = state_31498__$1;
(statearr_31509_31538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (2))){
var inst_31461 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31462 = (0);
var state_31498__$1 = (function (){var statearr_31510 = state_31498;
(statearr_31510[(9)] = inst_31461);

(statearr_31510[(7)] = inst_31462);

return statearr_31510;
})();
var statearr_31511_31539 = state_31498__$1;
(statearr_31511_31539[(2)] = null);

(statearr_31511_31539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (11))){
var inst_31462 = (state_31498[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31498,(10),Object,null,(9));
var inst_31471 = chs__$1.call(null,inst_31462);
var inst_31472 = done.call(null,inst_31462);
var inst_31473 = cljs.core.async.take_BANG_.call(null,inst_31471,inst_31472);
var state_31498__$1 = state_31498;
var statearr_31512_31540 = state_31498__$1;
(statearr_31512_31540[(2)] = inst_31473);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31498__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (9))){
var inst_31462 = (state_31498[(7)]);
var inst_31475 = (state_31498[(2)]);
var inst_31476 = (inst_31462 + (1));
var inst_31462__$1 = inst_31476;
var state_31498__$1 = (function (){var statearr_31513 = state_31498;
(statearr_31513[(10)] = inst_31475);

(statearr_31513[(7)] = inst_31462__$1);

return statearr_31513;
})();
var statearr_31514_31541 = state_31498__$1;
(statearr_31514_31541[(2)] = null);

(statearr_31514_31541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (5))){
var inst_31482 = (state_31498[(2)]);
var state_31498__$1 = (function (){var statearr_31515 = state_31498;
(statearr_31515[(11)] = inst_31482);

return statearr_31515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31498__$1,(12),dchan);
} else {
if((state_val_31499 === (14))){
var inst_31484 = (state_31498[(8)]);
var inst_31489 = cljs.core.apply.call(null,f,inst_31484);
var state_31498__$1 = state_31498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31498__$1,(16),out,inst_31489);
} else {
if((state_val_31499 === (16))){
var inst_31491 = (state_31498[(2)]);
var state_31498__$1 = (function (){var statearr_31516 = state_31498;
(statearr_31516[(12)] = inst_31491);

return statearr_31516;
})();
var statearr_31517_31542 = state_31498__$1;
(statearr_31517_31542[(2)] = null);

(statearr_31517_31542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (10))){
var inst_31466 = (state_31498[(2)]);
var inst_31467 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31498__$1 = (function (){var statearr_31518 = state_31498;
(statearr_31518[(13)] = inst_31466);

return statearr_31518;
})();
var statearr_31519_31543 = state_31498__$1;
(statearr_31519_31543[(2)] = inst_31467);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31498__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (8))){
var inst_31480 = (state_31498[(2)]);
var state_31498__$1 = state_31498;
var statearr_31520_31544 = state_31498__$1;
(statearr_31520_31544[(2)] = inst_31480);

(statearr_31520_31544[(1)] = (5));


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
});})(c__23938__auto___31529,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23876__auto__,c__23938__auto___31529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_31524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31524[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_31524[(1)] = (1));

return statearr_31524;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_31498){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_31498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e31525){if((e31525 instanceof Object)){
var ex__23880__auto__ = e31525;
var statearr_31526_31545 = state_31498;
(statearr_31526_31545[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31546 = state_31498;
state_31498 = G__31546;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_31498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_31498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___31529,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23940__auto__ = (function (){var statearr_31527 = f__23939__auto__.call(null);
(statearr_31527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___31529);

return statearr_31527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___31529,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__31549 = arguments.length;
switch (G__31549) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23938__auto___31604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___31604,out){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___31604,out){
return (function (state_31579){
var state_val_31580 = (state_31579[(1)]);
if((state_val_31580 === (7))){
var inst_31558 = (state_31579[(7)]);
var inst_31559 = (state_31579[(8)]);
var inst_31558__$1 = (state_31579[(2)]);
var inst_31559__$1 = cljs.core.nth.call(null,inst_31558__$1,(0),null);
var inst_31560 = cljs.core.nth.call(null,inst_31558__$1,(1),null);
var inst_31561 = (inst_31559__$1 == null);
var state_31579__$1 = (function (){var statearr_31581 = state_31579;
(statearr_31581[(7)] = inst_31558__$1);

(statearr_31581[(8)] = inst_31559__$1);

(statearr_31581[(9)] = inst_31560);

return statearr_31581;
})();
if(cljs.core.truth_(inst_31561)){
var statearr_31582_31605 = state_31579__$1;
(statearr_31582_31605[(1)] = (8));

} else {
var statearr_31583_31606 = state_31579__$1;
(statearr_31583_31606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (1))){
var inst_31550 = cljs.core.vec.call(null,chs);
var inst_31551 = inst_31550;
var state_31579__$1 = (function (){var statearr_31584 = state_31579;
(statearr_31584[(10)] = inst_31551);

return statearr_31584;
})();
var statearr_31585_31607 = state_31579__$1;
(statearr_31585_31607[(2)] = null);

(statearr_31585_31607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (4))){
var inst_31551 = (state_31579[(10)]);
var state_31579__$1 = state_31579;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31579__$1,(7),inst_31551);
} else {
if((state_val_31580 === (6))){
var inst_31575 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31586_31608 = state_31579__$1;
(statearr_31586_31608[(2)] = inst_31575);

(statearr_31586_31608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (3))){
var inst_31577 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31579__$1,inst_31577);
} else {
if((state_val_31580 === (2))){
var inst_31551 = (state_31579[(10)]);
var inst_31553 = cljs.core.count.call(null,inst_31551);
var inst_31554 = (inst_31553 > (0));
var state_31579__$1 = state_31579;
if(cljs.core.truth_(inst_31554)){
var statearr_31588_31609 = state_31579__$1;
(statearr_31588_31609[(1)] = (4));

} else {
var statearr_31589_31610 = state_31579__$1;
(statearr_31589_31610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (11))){
var inst_31551 = (state_31579[(10)]);
var inst_31568 = (state_31579[(2)]);
var tmp31587 = inst_31551;
var inst_31551__$1 = tmp31587;
var state_31579__$1 = (function (){var statearr_31590 = state_31579;
(statearr_31590[(10)] = inst_31551__$1);

(statearr_31590[(11)] = inst_31568);

return statearr_31590;
})();
var statearr_31591_31611 = state_31579__$1;
(statearr_31591_31611[(2)] = null);

(statearr_31591_31611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (9))){
var inst_31559 = (state_31579[(8)]);
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31579__$1,(11),out,inst_31559);
} else {
if((state_val_31580 === (5))){
var inst_31573 = cljs.core.async.close_BANG_.call(null,out);
var state_31579__$1 = state_31579;
var statearr_31592_31612 = state_31579__$1;
(statearr_31592_31612[(2)] = inst_31573);

(statearr_31592_31612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (10))){
var inst_31571 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31593_31613 = state_31579__$1;
(statearr_31593_31613[(2)] = inst_31571);

(statearr_31593_31613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (8))){
var inst_31551 = (state_31579[(10)]);
var inst_31558 = (state_31579[(7)]);
var inst_31559 = (state_31579[(8)]);
var inst_31560 = (state_31579[(9)]);
var inst_31563 = (function (){var cs = inst_31551;
var vec__31556 = inst_31558;
var v = inst_31559;
var c = inst_31560;
return ((function (cs,vec__31556,v,c,inst_31551,inst_31558,inst_31559,inst_31560,state_val_31580,c__23938__auto___31604,out){
return (function (p1__31547_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31547_SHARP_);
});
;})(cs,vec__31556,v,c,inst_31551,inst_31558,inst_31559,inst_31560,state_val_31580,c__23938__auto___31604,out))
})();
var inst_31564 = cljs.core.filterv.call(null,inst_31563,inst_31551);
var inst_31551__$1 = inst_31564;
var state_31579__$1 = (function (){var statearr_31594 = state_31579;
(statearr_31594[(10)] = inst_31551__$1);

return statearr_31594;
})();
var statearr_31595_31614 = state_31579__$1;
(statearr_31595_31614[(2)] = null);

(statearr_31595_31614[(1)] = (2));


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
});})(c__23938__auto___31604,out))
;
return ((function (switch__23876__auto__,c__23938__auto___31604,out){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_31599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31599[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_31599[(1)] = (1));

return statearr_31599;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_31579){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_31579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e31600){if((e31600 instanceof Object)){
var ex__23880__auto__ = e31600;
var statearr_31601_31615 = state_31579;
(statearr_31601_31615[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31616 = state_31579;
state_31579 = G__31616;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_31579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_31579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___31604,out))
})();
var state__23940__auto__ = (function (){var statearr_31602 = f__23939__auto__.call(null);
(statearr_31602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___31604);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___31604,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__31618 = arguments.length;
switch (G__31618) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23938__auto___31666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___31666,out){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___31666,out){
return (function (state_31642){
var state_val_31643 = (state_31642[(1)]);
if((state_val_31643 === (7))){
var inst_31624 = (state_31642[(7)]);
var inst_31624__$1 = (state_31642[(2)]);
var inst_31625 = (inst_31624__$1 == null);
var inst_31626 = cljs.core.not.call(null,inst_31625);
var state_31642__$1 = (function (){var statearr_31644 = state_31642;
(statearr_31644[(7)] = inst_31624__$1);

return statearr_31644;
})();
if(inst_31626){
var statearr_31645_31667 = state_31642__$1;
(statearr_31645_31667[(1)] = (8));

} else {
var statearr_31646_31668 = state_31642__$1;
(statearr_31646_31668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (1))){
var inst_31619 = (0);
var state_31642__$1 = (function (){var statearr_31647 = state_31642;
(statearr_31647[(8)] = inst_31619);

return statearr_31647;
})();
var statearr_31648_31669 = state_31642__$1;
(statearr_31648_31669[(2)] = null);

(statearr_31648_31669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (4))){
var state_31642__$1 = state_31642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31642__$1,(7),ch);
} else {
if((state_val_31643 === (6))){
var inst_31637 = (state_31642[(2)]);
var state_31642__$1 = state_31642;
var statearr_31649_31670 = state_31642__$1;
(statearr_31649_31670[(2)] = inst_31637);

(statearr_31649_31670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (3))){
var inst_31639 = (state_31642[(2)]);
var inst_31640 = cljs.core.async.close_BANG_.call(null,out);
var state_31642__$1 = (function (){var statearr_31650 = state_31642;
(statearr_31650[(9)] = inst_31639);

return statearr_31650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31642__$1,inst_31640);
} else {
if((state_val_31643 === (2))){
var inst_31619 = (state_31642[(8)]);
var inst_31621 = (inst_31619 < n);
var state_31642__$1 = state_31642;
if(cljs.core.truth_(inst_31621)){
var statearr_31651_31671 = state_31642__$1;
(statearr_31651_31671[(1)] = (4));

} else {
var statearr_31652_31672 = state_31642__$1;
(statearr_31652_31672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (11))){
var inst_31619 = (state_31642[(8)]);
var inst_31629 = (state_31642[(2)]);
var inst_31630 = (inst_31619 + (1));
var inst_31619__$1 = inst_31630;
var state_31642__$1 = (function (){var statearr_31653 = state_31642;
(statearr_31653[(8)] = inst_31619__$1);

(statearr_31653[(10)] = inst_31629);

return statearr_31653;
})();
var statearr_31654_31673 = state_31642__$1;
(statearr_31654_31673[(2)] = null);

(statearr_31654_31673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (9))){
var state_31642__$1 = state_31642;
var statearr_31655_31674 = state_31642__$1;
(statearr_31655_31674[(2)] = null);

(statearr_31655_31674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (5))){
var state_31642__$1 = state_31642;
var statearr_31656_31675 = state_31642__$1;
(statearr_31656_31675[(2)] = null);

(statearr_31656_31675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (10))){
var inst_31634 = (state_31642[(2)]);
var state_31642__$1 = state_31642;
var statearr_31657_31676 = state_31642__$1;
(statearr_31657_31676[(2)] = inst_31634);

(statearr_31657_31676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (8))){
var inst_31624 = (state_31642[(7)]);
var state_31642__$1 = state_31642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31642__$1,(11),out,inst_31624);
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
});})(c__23938__auto___31666,out))
;
return ((function (switch__23876__auto__,c__23938__auto___31666,out){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_31661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31661[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_31661[(1)] = (1));

return statearr_31661;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_31642){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_31642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e31662){if((e31662 instanceof Object)){
var ex__23880__auto__ = e31662;
var statearr_31663_31677 = state_31642;
(statearr_31663_31677[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31678 = state_31642;
state_31642 = G__31678;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_31642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_31642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___31666,out))
})();
var state__23940__auto__ = (function (){var statearr_31664 = f__23939__auto__.call(null);
(statearr_31664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___31666);

return statearr_31664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___31666,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t31686 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31686 = (function (map_LT_,f,ch,meta31687){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31687 = meta31687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31688,meta31687__$1){
var self__ = this;
var _31688__$1 = this;
return (new cljs.core.async.t31686(self__.map_LT_,self__.f,self__.ch,meta31687__$1));
});

cljs.core.async.t31686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31688){
var self__ = this;
var _31688__$1 = this;
return self__.meta31687;
});

cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31689 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31689 = (function (map_LT_,f,ch,meta31687,_,fn1,meta31690){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31687 = meta31687;
this._ = _;
this.fn1 = fn1;
this.meta31690 = meta31690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31691,meta31690__$1){
var self__ = this;
var _31691__$1 = this;
return (new cljs.core.async.t31689(self__.map_LT_,self__.f,self__.ch,self__.meta31687,self__._,self__.fn1,meta31690__$1));
});})(___$1))
;

cljs.core.async.t31689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31691){
var self__ = this;
var _31691__$1 = this;
return self__.meta31690;
});})(___$1))
;

cljs.core.async.t31689.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31679_SHARP_){
return f1.call(null,(((p1__31679_SHARP_ == null))?null:self__.f.call(null,p1__31679_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31689.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31687","meta31687",1697816268,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31690","meta31690",-336314633,null)], null);
});})(___$1))
;

cljs.core.async.t31689.cljs$lang$type = true;

cljs.core.async.t31689.cljs$lang$ctorStr = "cljs.core.async/t31689";

cljs.core.async.t31689.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t31689");
});})(___$1))
;

cljs.core.async.__GT_t31689 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t31689(map_LT___$1,f__$1,ch__$1,meta31687__$1,___$2,fn1__$1,meta31690){
return (new cljs.core.async.t31689(map_LT___$1,f__$1,ch__$1,meta31687__$1,___$2,fn1__$1,meta31690));
});})(___$1))
;

}

return (new cljs.core.async.t31689(self__.map_LT_,self__.f,self__.ch,self__.meta31687,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20555__auto__ = ret;
if(cljs.core.truth_(and__20555__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20555__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31687","meta31687",1697816268,null)], null);
});

cljs.core.async.t31686.cljs$lang$type = true;

cljs.core.async.t31686.cljs$lang$ctorStr = "cljs.core.async/t31686";

cljs.core.async.t31686.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t31686");
});

cljs.core.async.__GT_t31686 = (function cljs$core$async$map_LT__$___GT_t31686(map_LT___$1,f__$1,ch__$1,meta31687){
return (new cljs.core.async.t31686(map_LT___$1,f__$1,ch__$1,meta31687));
});

}

return (new cljs.core.async.t31686(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t31695 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31695 = (function (map_GT_,f,ch,meta31696){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31696 = meta31696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31697,meta31696__$1){
var self__ = this;
var _31697__$1 = this;
return (new cljs.core.async.t31695(self__.map_GT_,self__.f,self__.ch,meta31696__$1));
});

cljs.core.async.t31695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31697){
var self__ = this;
var _31697__$1 = this;
return self__.meta31696;
});

cljs.core.async.t31695.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31695.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31695.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31696","meta31696",1860833001,null)], null);
});

cljs.core.async.t31695.cljs$lang$type = true;

cljs.core.async.t31695.cljs$lang$ctorStr = "cljs.core.async/t31695";

cljs.core.async.t31695.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t31695");
});

cljs.core.async.__GT_t31695 = (function cljs$core$async$map_GT__$___GT_t31695(map_GT___$1,f__$1,ch__$1,meta31696){
return (new cljs.core.async.t31695(map_GT___$1,f__$1,ch__$1,meta31696));
});

}

return (new cljs.core.async.t31695(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t31701 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31701 = (function (filter_GT_,p,ch,meta31702){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31702 = meta31702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31703,meta31702__$1){
var self__ = this;
var _31703__$1 = this;
return (new cljs.core.async.t31701(self__.filter_GT_,self__.p,self__.ch,meta31702__$1));
});

cljs.core.async.t31701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31703){
var self__ = this;
var _31703__$1 = this;
return self__.meta31702;
});

cljs.core.async.t31701.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31701.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31701.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31701.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31701.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31701.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31701.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31702","meta31702",-2123662931,null)], null);
});

cljs.core.async.t31701.cljs$lang$type = true;

cljs.core.async.t31701.cljs$lang$ctorStr = "cljs.core.async/t31701";

cljs.core.async.t31701.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t31701");
});

cljs.core.async.__GT_t31701 = (function cljs$core$async$filter_GT__$___GT_t31701(filter_GT___$1,p__$1,ch__$1,meta31702){
return (new cljs.core.async.t31701(filter_GT___$1,p__$1,ch__$1,meta31702));
});

}

return (new cljs.core.async.t31701(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__31705 = arguments.length;
switch (G__31705) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23938__auto___31748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___31748,out){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___31748,out){
return (function (state_31726){
var state_val_31727 = (state_31726[(1)]);
if((state_val_31727 === (7))){
var inst_31722 = (state_31726[(2)]);
var state_31726__$1 = state_31726;
var statearr_31728_31749 = state_31726__$1;
(statearr_31728_31749[(2)] = inst_31722);

(statearr_31728_31749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (1))){
var state_31726__$1 = state_31726;
var statearr_31729_31750 = state_31726__$1;
(statearr_31729_31750[(2)] = null);

(statearr_31729_31750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (4))){
var inst_31708 = (state_31726[(7)]);
var inst_31708__$1 = (state_31726[(2)]);
var inst_31709 = (inst_31708__$1 == null);
var state_31726__$1 = (function (){var statearr_31730 = state_31726;
(statearr_31730[(7)] = inst_31708__$1);

return statearr_31730;
})();
if(cljs.core.truth_(inst_31709)){
var statearr_31731_31751 = state_31726__$1;
(statearr_31731_31751[(1)] = (5));

} else {
var statearr_31732_31752 = state_31726__$1;
(statearr_31732_31752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (6))){
var inst_31708 = (state_31726[(7)]);
var inst_31713 = p.call(null,inst_31708);
var state_31726__$1 = state_31726;
if(cljs.core.truth_(inst_31713)){
var statearr_31733_31753 = state_31726__$1;
(statearr_31733_31753[(1)] = (8));

} else {
var statearr_31734_31754 = state_31726__$1;
(statearr_31734_31754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (3))){
var inst_31724 = (state_31726[(2)]);
var state_31726__$1 = state_31726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31726__$1,inst_31724);
} else {
if((state_val_31727 === (2))){
var state_31726__$1 = state_31726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31726__$1,(4),ch);
} else {
if((state_val_31727 === (11))){
var inst_31716 = (state_31726[(2)]);
var state_31726__$1 = state_31726;
var statearr_31735_31755 = state_31726__$1;
(statearr_31735_31755[(2)] = inst_31716);

(statearr_31735_31755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (9))){
var state_31726__$1 = state_31726;
var statearr_31736_31756 = state_31726__$1;
(statearr_31736_31756[(2)] = null);

(statearr_31736_31756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (5))){
var inst_31711 = cljs.core.async.close_BANG_.call(null,out);
var state_31726__$1 = state_31726;
var statearr_31737_31757 = state_31726__$1;
(statearr_31737_31757[(2)] = inst_31711);

(statearr_31737_31757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (10))){
var inst_31719 = (state_31726[(2)]);
var state_31726__$1 = (function (){var statearr_31738 = state_31726;
(statearr_31738[(8)] = inst_31719);

return statearr_31738;
})();
var statearr_31739_31758 = state_31726__$1;
(statearr_31739_31758[(2)] = null);

(statearr_31739_31758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (8))){
var inst_31708 = (state_31726[(7)]);
var state_31726__$1 = state_31726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31726__$1,(11),out,inst_31708);
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
});})(c__23938__auto___31748,out))
;
return ((function (switch__23876__auto__,c__23938__auto___31748,out){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_31743 = [null,null,null,null,null,null,null,null,null];
(statearr_31743[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_31743[(1)] = (1));

return statearr_31743;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_31726){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_31726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e31744){if((e31744 instanceof Object)){
var ex__23880__auto__ = e31744;
var statearr_31745_31759 = state_31726;
(statearr_31745_31759[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31760 = state_31726;
state_31726 = G__31760;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_31726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_31726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___31748,out))
})();
var state__23940__auto__ = (function (){var statearr_31746 = f__23939__auto__.call(null);
(statearr_31746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___31748);

return statearr_31746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___31748,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__31762 = arguments.length;
switch (G__31762) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__){
return (function (state_31929){
var state_val_31930 = (state_31929[(1)]);
if((state_val_31930 === (7))){
var inst_31925 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31931_31972 = state_31929__$1;
(statearr_31931_31972[(2)] = inst_31925);

(statearr_31931_31972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (20))){
var inst_31895 = (state_31929[(7)]);
var inst_31906 = (state_31929[(2)]);
var inst_31907 = cljs.core.next.call(null,inst_31895);
var inst_31881 = inst_31907;
var inst_31882 = null;
var inst_31883 = (0);
var inst_31884 = (0);
var state_31929__$1 = (function (){var statearr_31932 = state_31929;
(statearr_31932[(8)] = inst_31883);

(statearr_31932[(9)] = inst_31881);

(statearr_31932[(10)] = inst_31884);

(statearr_31932[(11)] = inst_31906);

(statearr_31932[(12)] = inst_31882);

return statearr_31932;
})();
var statearr_31933_31973 = state_31929__$1;
(statearr_31933_31973[(2)] = null);

(statearr_31933_31973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (1))){
var state_31929__$1 = state_31929;
var statearr_31934_31974 = state_31929__$1;
(statearr_31934_31974[(2)] = null);

(statearr_31934_31974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (4))){
var inst_31870 = (state_31929[(13)]);
var inst_31870__$1 = (state_31929[(2)]);
var inst_31871 = (inst_31870__$1 == null);
var state_31929__$1 = (function (){var statearr_31935 = state_31929;
(statearr_31935[(13)] = inst_31870__$1);

return statearr_31935;
})();
if(cljs.core.truth_(inst_31871)){
var statearr_31936_31975 = state_31929__$1;
(statearr_31936_31975[(1)] = (5));

} else {
var statearr_31937_31976 = state_31929__$1;
(statearr_31937_31976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (15))){
var state_31929__$1 = state_31929;
var statearr_31941_31977 = state_31929__$1;
(statearr_31941_31977[(2)] = null);

(statearr_31941_31977[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (21))){
var state_31929__$1 = state_31929;
var statearr_31942_31978 = state_31929__$1;
(statearr_31942_31978[(2)] = null);

(statearr_31942_31978[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (13))){
var inst_31883 = (state_31929[(8)]);
var inst_31881 = (state_31929[(9)]);
var inst_31884 = (state_31929[(10)]);
var inst_31882 = (state_31929[(12)]);
var inst_31891 = (state_31929[(2)]);
var inst_31892 = (inst_31884 + (1));
var tmp31938 = inst_31883;
var tmp31939 = inst_31881;
var tmp31940 = inst_31882;
var inst_31881__$1 = tmp31939;
var inst_31882__$1 = tmp31940;
var inst_31883__$1 = tmp31938;
var inst_31884__$1 = inst_31892;
var state_31929__$1 = (function (){var statearr_31943 = state_31929;
(statearr_31943[(8)] = inst_31883__$1);

(statearr_31943[(9)] = inst_31881__$1);

(statearr_31943[(10)] = inst_31884__$1);

(statearr_31943[(12)] = inst_31882__$1);

(statearr_31943[(14)] = inst_31891);

return statearr_31943;
})();
var statearr_31944_31979 = state_31929__$1;
(statearr_31944_31979[(2)] = null);

(statearr_31944_31979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (22))){
var state_31929__$1 = state_31929;
var statearr_31945_31980 = state_31929__$1;
(statearr_31945_31980[(2)] = null);

(statearr_31945_31980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (6))){
var inst_31870 = (state_31929[(13)]);
var inst_31879 = f.call(null,inst_31870);
var inst_31880 = cljs.core.seq.call(null,inst_31879);
var inst_31881 = inst_31880;
var inst_31882 = null;
var inst_31883 = (0);
var inst_31884 = (0);
var state_31929__$1 = (function (){var statearr_31946 = state_31929;
(statearr_31946[(8)] = inst_31883);

(statearr_31946[(9)] = inst_31881);

(statearr_31946[(10)] = inst_31884);

(statearr_31946[(12)] = inst_31882);

return statearr_31946;
})();
var statearr_31947_31981 = state_31929__$1;
(statearr_31947_31981[(2)] = null);

(statearr_31947_31981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (17))){
var inst_31895 = (state_31929[(7)]);
var inst_31899 = cljs.core.chunk_first.call(null,inst_31895);
var inst_31900 = cljs.core.chunk_rest.call(null,inst_31895);
var inst_31901 = cljs.core.count.call(null,inst_31899);
var inst_31881 = inst_31900;
var inst_31882 = inst_31899;
var inst_31883 = inst_31901;
var inst_31884 = (0);
var state_31929__$1 = (function (){var statearr_31948 = state_31929;
(statearr_31948[(8)] = inst_31883);

(statearr_31948[(9)] = inst_31881);

(statearr_31948[(10)] = inst_31884);

(statearr_31948[(12)] = inst_31882);

return statearr_31948;
})();
var statearr_31949_31982 = state_31929__$1;
(statearr_31949_31982[(2)] = null);

(statearr_31949_31982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (3))){
var inst_31927 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31929__$1,inst_31927);
} else {
if((state_val_31930 === (12))){
var inst_31915 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31950_31983 = state_31929__$1;
(statearr_31950_31983[(2)] = inst_31915);

(statearr_31950_31983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (2))){
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31929__$1,(4),in$);
} else {
if((state_val_31930 === (23))){
var inst_31923 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31951_31984 = state_31929__$1;
(statearr_31951_31984[(2)] = inst_31923);

(statearr_31951_31984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (19))){
var inst_31910 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31952_31985 = state_31929__$1;
(statearr_31952_31985[(2)] = inst_31910);

(statearr_31952_31985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (11))){
var inst_31881 = (state_31929[(9)]);
var inst_31895 = (state_31929[(7)]);
var inst_31895__$1 = cljs.core.seq.call(null,inst_31881);
var state_31929__$1 = (function (){var statearr_31953 = state_31929;
(statearr_31953[(7)] = inst_31895__$1);

return statearr_31953;
})();
if(inst_31895__$1){
var statearr_31954_31986 = state_31929__$1;
(statearr_31954_31986[(1)] = (14));

} else {
var statearr_31955_31987 = state_31929__$1;
(statearr_31955_31987[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (9))){
var inst_31917 = (state_31929[(2)]);
var inst_31918 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31929__$1 = (function (){var statearr_31956 = state_31929;
(statearr_31956[(15)] = inst_31917);

return statearr_31956;
})();
if(cljs.core.truth_(inst_31918)){
var statearr_31957_31988 = state_31929__$1;
(statearr_31957_31988[(1)] = (21));

} else {
var statearr_31958_31989 = state_31929__$1;
(statearr_31958_31989[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (5))){
var inst_31873 = cljs.core.async.close_BANG_.call(null,out);
var state_31929__$1 = state_31929;
var statearr_31959_31990 = state_31929__$1;
(statearr_31959_31990[(2)] = inst_31873);

(statearr_31959_31990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (14))){
var inst_31895 = (state_31929[(7)]);
var inst_31897 = cljs.core.chunked_seq_QMARK_.call(null,inst_31895);
var state_31929__$1 = state_31929;
if(inst_31897){
var statearr_31960_31991 = state_31929__$1;
(statearr_31960_31991[(1)] = (17));

} else {
var statearr_31961_31992 = state_31929__$1;
(statearr_31961_31992[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (16))){
var inst_31913 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31962_31993 = state_31929__$1;
(statearr_31962_31993[(2)] = inst_31913);

(statearr_31962_31993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (10))){
var inst_31884 = (state_31929[(10)]);
var inst_31882 = (state_31929[(12)]);
var inst_31889 = cljs.core._nth.call(null,inst_31882,inst_31884);
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31929__$1,(13),out,inst_31889);
} else {
if((state_val_31930 === (18))){
var inst_31895 = (state_31929[(7)]);
var inst_31904 = cljs.core.first.call(null,inst_31895);
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31929__$1,(20),out,inst_31904);
} else {
if((state_val_31930 === (8))){
var inst_31883 = (state_31929[(8)]);
var inst_31884 = (state_31929[(10)]);
var inst_31886 = (inst_31884 < inst_31883);
var inst_31887 = inst_31886;
var state_31929__$1 = state_31929;
if(cljs.core.truth_(inst_31887)){
var statearr_31963_31994 = state_31929__$1;
(statearr_31963_31994[(1)] = (10));

} else {
var statearr_31964_31995 = state_31929__$1;
(statearr_31964_31995[(1)] = (11));

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
});})(c__23938__auto__))
;
return ((function (switch__23876__auto__,c__23938__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23877__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23877__auto____0 = (function (){
var statearr_31968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31968[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23877__auto__);

(statearr_31968[(1)] = (1));

return statearr_31968;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23877__auto____1 = (function (state_31929){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_31929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e31969){if((e31969 instanceof Object)){
var ex__23880__auto__ = e31969;
var statearr_31970_31996 = state_31929;
(statearr_31970_31996[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31997 = state_31929;
state_31929 = G__31997;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23877__auto__ = function(state_31929){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23877__auto____1.call(this,state_31929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23877__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23877__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__))
})();
var state__23940__auto__ = (function (){var statearr_31971 = f__23939__auto__.call(null);
(statearr_31971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_31971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__))
);

return c__23938__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__31999 = arguments.length;
switch (G__31999) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__32002 = arguments.length;
switch (G__32002) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__32005 = arguments.length;
switch (G__32005) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23938__auto___32055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___32055,out){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___32055,out){
return (function (state_32029){
var state_val_32030 = (state_32029[(1)]);
if((state_val_32030 === (7))){
var inst_32024 = (state_32029[(2)]);
var state_32029__$1 = state_32029;
var statearr_32031_32056 = state_32029__$1;
(statearr_32031_32056[(2)] = inst_32024);

(statearr_32031_32056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (1))){
var inst_32006 = null;
var state_32029__$1 = (function (){var statearr_32032 = state_32029;
(statearr_32032[(7)] = inst_32006);

return statearr_32032;
})();
var statearr_32033_32057 = state_32029__$1;
(statearr_32033_32057[(2)] = null);

(statearr_32033_32057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (4))){
var inst_32009 = (state_32029[(8)]);
var inst_32009__$1 = (state_32029[(2)]);
var inst_32010 = (inst_32009__$1 == null);
var inst_32011 = cljs.core.not.call(null,inst_32010);
var state_32029__$1 = (function (){var statearr_32034 = state_32029;
(statearr_32034[(8)] = inst_32009__$1);

return statearr_32034;
})();
if(inst_32011){
var statearr_32035_32058 = state_32029__$1;
(statearr_32035_32058[(1)] = (5));

} else {
var statearr_32036_32059 = state_32029__$1;
(statearr_32036_32059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (6))){
var state_32029__$1 = state_32029;
var statearr_32037_32060 = state_32029__$1;
(statearr_32037_32060[(2)] = null);

(statearr_32037_32060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (3))){
var inst_32026 = (state_32029[(2)]);
var inst_32027 = cljs.core.async.close_BANG_.call(null,out);
var state_32029__$1 = (function (){var statearr_32038 = state_32029;
(statearr_32038[(9)] = inst_32026);

return statearr_32038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32029__$1,inst_32027);
} else {
if((state_val_32030 === (2))){
var state_32029__$1 = state_32029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32029__$1,(4),ch);
} else {
if((state_val_32030 === (11))){
var inst_32009 = (state_32029[(8)]);
var inst_32018 = (state_32029[(2)]);
var inst_32006 = inst_32009;
var state_32029__$1 = (function (){var statearr_32039 = state_32029;
(statearr_32039[(10)] = inst_32018);

(statearr_32039[(7)] = inst_32006);

return statearr_32039;
})();
var statearr_32040_32061 = state_32029__$1;
(statearr_32040_32061[(2)] = null);

(statearr_32040_32061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (9))){
var inst_32009 = (state_32029[(8)]);
var state_32029__$1 = state_32029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32029__$1,(11),out,inst_32009);
} else {
if((state_val_32030 === (5))){
var inst_32009 = (state_32029[(8)]);
var inst_32006 = (state_32029[(7)]);
var inst_32013 = cljs.core._EQ_.call(null,inst_32009,inst_32006);
var state_32029__$1 = state_32029;
if(inst_32013){
var statearr_32042_32062 = state_32029__$1;
(statearr_32042_32062[(1)] = (8));

} else {
var statearr_32043_32063 = state_32029__$1;
(statearr_32043_32063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (10))){
var inst_32021 = (state_32029[(2)]);
var state_32029__$1 = state_32029;
var statearr_32044_32064 = state_32029__$1;
(statearr_32044_32064[(2)] = inst_32021);

(statearr_32044_32064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (8))){
var inst_32006 = (state_32029[(7)]);
var tmp32041 = inst_32006;
var inst_32006__$1 = tmp32041;
var state_32029__$1 = (function (){var statearr_32045 = state_32029;
(statearr_32045[(7)] = inst_32006__$1);

return statearr_32045;
})();
var statearr_32046_32065 = state_32029__$1;
(statearr_32046_32065[(2)] = null);

(statearr_32046_32065[(1)] = (2));


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
});})(c__23938__auto___32055,out))
;
return ((function (switch__23876__auto__,c__23938__auto___32055,out){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_32050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32050[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_32050[(1)] = (1));

return statearr_32050;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_32029){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_32029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e32051){if((e32051 instanceof Object)){
var ex__23880__auto__ = e32051;
var statearr_32052_32066 = state_32029;
(statearr_32052_32066[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32067 = state_32029;
state_32029 = G__32067;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_32029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_32029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___32055,out))
})();
var state__23940__auto__ = (function (){var statearr_32053 = f__23939__auto__.call(null);
(statearr_32053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___32055);

return statearr_32053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___32055,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__32069 = arguments.length;
switch (G__32069) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23938__auto___32138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___32138,out){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___32138,out){
return (function (state_32107){
var state_val_32108 = (state_32107[(1)]);
if((state_val_32108 === (7))){
var inst_32103 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
var statearr_32109_32139 = state_32107__$1;
(statearr_32109_32139[(2)] = inst_32103);

(statearr_32109_32139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (1))){
var inst_32070 = (new Array(n));
var inst_32071 = inst_32070;
var inst_32072 = (0);
var state_32107__$1 = (function (){var statearr_32110 = state_32107;
(statearr_32110[(7)] = inst_32072);

(statearr_32110[(8)] = inst_32071);

return statearr_32110;
})();
var statearr_32111_32140 = state_32107__$1;
(statearr_32111_32140[(2)] = null);

(statearr_32111_32140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (4))){
var inst_32075 = (state_32107[(9)]);
var inst_32075__$1 = (state_32107[(2)]);
var inst_32076 = (inst_32075__$1 == null);
var inst_32077 = cljs.core.not.call(null,inst_32076);
var state_32107__$1 = (function (){var statearr_32112 = state_32107;
(statearr_32112[(9)] = inst_32075__$1);

return statearr_32112;
})();
if(inst_32077){
var statearr_32113_32141 = state_32107__$1;
(statearr_32113_32141[(1)] = (5));

} else {
var statearr_32114_32142 = state_32107__$1;
(statearr_32114_32142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (15))){
var inst_32097 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
var statearr_32115_32143 = state_32107__$1;
(statearr_32115_32143[(2)] = inst_32097);

(statearr_32115_32143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (13))){
var state_32107__$1 = state_32107;
var statearr_32116_32144 = state_32107__$1;
(statearr_32116_32144[(2)] = null);

(statearr_32116_32144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (6))){
var inst_32072 = (state_32107[(7)]);
var inst_32093 = (inst_32072 > (0));
var state_32107__$1 = state_32107;
if(cljs.core.truth_(inst_32093)){
var statearr_32117_32145 = state_32107__$1;
(statearr_32117_32145[(1)] = (12));

} else {
var statearr_32118_32146 = state_32107__$1;
(statearr_32118_32146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (3))){
var inst_32105 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32107__$1,inst_32105);
} else {
if((state_val_32108 === (12))){
var inst_32071 = (state_32107[(8)]);
var inst_32095 = cljs.core.vec.call(null,inst_32071);
var state_32107__$1 = state_32107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32107__$1,(15),out,inst_32095);
} else {
if((state_val_32108 === (2))){
var state_32107__$1 = state_32107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32107__$1,(4),ch);
} else {
if((state_val_32108 === (11))){
var inst_32087 = (state_32107[(2)]);
var inst_32088 = (new Array(n));
var inst_32071 = inst_32088;
var inst_32072 = (0);
var state_32107__$1 = (function (){var statearr_32119 = state_32107;
(statearr_32119[(7)] = inst_32072);

(statearr_32119[(8)] = inst_32071);

(statearr_32119[(10)] = inst_32087);

return statearr_32119;
})();
var statearr_32120_32147 = state_32107__$1;
(statearr_32120_32147[(2)] = null);

(statearr_32120_32147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (9))){
var inst_32071 = (state_32107[(8)]);
var inst_32085 = cljs.core.vec.call(null,inst_32071);
var state_32107__$1 = state_32107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32107__$1,(11),out,inst_32085);
} else {
if((state_val_32108 === (5))){
var inst_32072 = (state_32107[(7)]);
var inst_32075 = (state_32107[(9)]);
var inst_32071 = (state_32107[(8)]);
var inst_32080 = (state_32107[(11)]);
var inst_32079 = (inst_32071[inst_32072] = inst_32075);
var inst_32080__$1 = (inst_32072 + (1));
var inst_32081 = (inst_32080__$1 < n);
var state_32107__$1 = (function (){var statearr_32121 = state_32107;
(statearr_32121[(12)] = inst_32079);

(statearr_32121[(11)] = inst_32080__$1);

return statearr_32121;
})();
if(cljs.core.truth_(inst_32081)){
var statearr_32122_32148 = state_32107__$1;
(statearr_32122_32148[(1)] = (8));

} else {
var statearr_32123_32149 = state_32107__$1;
(statearr_32123_32149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (14))){
var inst_32100 = (state_32107[(2)]);
var inst_32101 = cljs.core.async.close_BANG_.call(null,out);
var state_32107__$1 = (function (){var statearr_32125 = state_32107;
(statearr_32125[(13)] = inst_32100);

return statearr_32125;
})();
var statearr_32126_32150 = state_32107__$1;
(statearr_32126_32150[(2)] = inst_32101);

(statearr_32126_32150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (10))){
var inst_32091 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
var statearr_32127_32151 = state_32107__$1;
(statearr_32127_32151[(2)] = inst_32091);

(statearr_32127_32151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (8))){
var inst_32071 = (state_32107[(8)]);
var inst_32080 = (state_32107[(11)]);
var tmp32124 = inst_32071;
var inst_32071__$1 = tmp32124;
var inst_32072 = inst_32080;
var state_32107__$1 = (function (){var statearr_32128 = state_32107;
(statearr_32128[(7)] = inst_32072);

(statearr_32128[(8)] = inst_32071__$1);

return statearr_32128;
})();
var statearr_32129_32152 = state_32107__$1;
(statearr_32129_32152[(2)] = null);

(statearr_32129_32152[(1)] = (2));


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
});})(c__23938__auto___32138,out))
;
return ((function (switch__23876__auto__,c__23938__auto___32138,out){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_32133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32133[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_32133[(1)] = (1));

return statearr_32133;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_32107){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_32107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e32134){if((e32134 instanceof Object)){
var ex__23880__auto__ = e32134;
var statearr_32135_32153 = state_32107;
(statearr_32135_32153[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32154 = state_32107;
state_32107 = G__32154;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_32107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_32107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___32138,out))
})();
var state__23940__auto__ = (function (){var statearr_32136 = f__23939__auto__.call(null);
(statearr_32136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___32138);

return statearr_32136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___32138,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__32156 = arguments.length;
switch (G__32156) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23938__auto___32229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___32229,out){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___32229,out){
return (function (state_32198){
var state_val_32199 = (state_32198[(1)]);
if((state_val_32199 === (7))){
var inst_32194 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
var statearr_32200_32230 = state_32198__$1;
(statearr_32200_32230[(2)] = inst_32194);

(statearr_32200_32230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (1))){
var inst_32157 = [];
var inst_32158 = inst_32157;
var inst_32159 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32198__$1 = (function (){var statearr_32201 = state_32198;
(statearr_32201[(7)] = inst_32159);

(statearr_32201[(8)] = inst_32158);

return statearr_32201;
})();
var statearr_32202_32231 = state_32198__$1;
(statearr_32202_32231[(2)] = null);

(statearr_32202_32231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (4))){
var inst_32162 = (state_32198[(9)]);
var inst_32162__$1 = (state_32198[(2)]);
var inst_32163 = (inst_32162__$1 == null);
var inst_32164 = cljs.core.not.call(null,inst_32163);
var state_32198__$1 = (function (){var statearr_32203 = state_32198;
(statearr_32203[(9)] = inst_32162__$1);

return statearr_32203;
})();
if(inst_32164){
var statearr_32204_32232 = state_32198__$1;
(statearr_32204_32232[(1)] = (5));

} else {
var statearr_32205_32233 = state_32198__$1;
(statearr_32205_32233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (15))){
var inst_32188 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
var statearr_32206_32234 = state_32198__$1;
(statearr_32206_32234[(2)] = inst_32188);

(statearr_32206_32234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (13))){
var state_32198__$1 = state_32198;
var statearr_32207_32235 = state_32198__$1;
(statearr_32207_32235[(2)] = null);

(statearr_32207_32235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (6))){
var inst_32158 = (state_32198[(8)]);
var inst_32183 = inst_32158.length;
var inst_32184 = (inst_32183 > (0));
var state_32198__$1 = state_32198;
if(cljs.core.truth_(inst_32184)){
var statearr_32208_32236 = state_32198__$1;
(statearr_32208_32236[(1)] = (12));

} else {
var statearr_32209_32237 = state_32198__$1;
(statearr_32209_32237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (3))){
var inst_32196 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32198__$1,inst_32196);
} else {
if((state_val_32199 === (12))){
var inst_32158 = (state_32198[(8)]);
var inst_32186 = cljs.core.vec.call(null,inst_32158);
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32198__$1,(15),out,inst_32186);
} else {
if((state_val_32199 === (2))){
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32198__$1,(4),ch);
} else {
if((state_val_32199 === (11))){
var inst_32162 = (state_32198[(9)]);
var inst_32166 = (state_32198[(10)]);
var inst_32176 = (state_32198[(2)]);
var inst_32177 = [];
var inst_32178 = inst_32177.push(inst_32162);
var inst_32158 = inst_32177;
var inst_32159 = inst_32166;
var state_32198__$1 = (function (){var statearr_32210 = state_32198;
(statearr_32210[(11)] = inst_32176);

(statearr_32210[(12)] = inst_32178);

(statearr_32210[(7)] = inst_32159);

(statearr_32210[(8)] = inst_32158);

return statearr_32210;
})();
var statearr_32211_32238 = state_32198__$1;
(statearr_32211_32238[(2)] = null);

(statearr_32211_32238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (9))){
var inst_32158 = (state_32198[(8)]);
var inst_32174 = cljs.core.vec.call(null,inst_32158);
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32198__$1,(11),out,inst_32174);
} else {
if((state_val_32199 === (5))){
var inst_32162 = (state_32198[(9)]);
var inst_32159 = (state_32198[(7)]);
var inst_32166 = (state_32198[(10)]);
var inst_32166__$1 = f.call(null,inst_32162);
var inst_32167 = cljs.core._EQ_.call(null,inst_32166__$1,inst_32159);
var inst_32168 = cljs.core.keyword_identical_QMARK_.call(null,inst_32159,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32169 = (inst_32167) || (inst_32168);
var state_32198__$1 = (function (){var statearr_32212 = state_32198;
(statearr_32212[(10)] = inst_32166__$1);

return statearr_32212;
})();
if(cljs.core.truth_(inst_32169)){
var statearr_32213_32239 = state_32198__$1;
(statearr_32213_32239[(1)] = (8));

} else {
var statearr_32214_32240 = state_32198__$1;
(statearr_32214_32240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (14))){
var inst_32191 = (state_32198[(2)]);
var inst_32192 = cljs.core.async.close_BANG_.call(null,out);
var state_32198__$1 = (function (){var statearr_32216 = state_32198;
(statearr_32216[(13)] = inst_32191);

return statearr_32216;
})();
var statearr_32217_32241 = state_32198__$1;
(statearr_32217_32241[(2)] = inst_32192);

(statearr_32217_32241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (10))){
var inst_32181 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
var statearr_32218_32242 = state_32198__$1;
(statearr_32218_32242[(2)] = inst_32181);

(statearr_32218_32242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (8))){
var inst_32162 = (state_32198[(9)]);
var inst_32166 = (state_32198[(10)]);
var inst_32158 = (state_32198[(8)]);
var inst_32171 = inst_32158.push(inst_32162);
var tmp32215 = inst_32158;
var inst_32158__$1 = tmp32215;
var inst_32159 = inst_32166;
var state_32198__$1 = (function (){var statearr_32219 = state_32198;
(statearr_32219[(7)] = inst_32159);

(statearr_32219[(8)] = inst_32158__$1);

(statearr_32219[(14)] = inst_32171);

return statearr_32219;
})();
var statearr_32220_32243 = state_32198__$1;
(statearr_32220_32243[(2)] = null);

(statearr_32220_32243[(1)] = (2));


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
});})(c__23938__auto___32229,out))
;
return ((function (switch__23876__auto__,c__23938__auto___32229,out){
return (function() {
var cljs$core$async$state_machine__23877__auto__ = null;
var cljs$core$async$state_machine__23877__auto____0 = (function (){
var statearr_32224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32224[(0)] = cljs$core$async$state_machine__23877__auto__);

(statearr_32224[(1)] = (1));

return statearr_32224;
});
var cljs$core$async$state_machine__23877__auto____1 = (function (state_32198){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_32198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e32225){if((e32225 instanceof Object)){
var ex__23880__auto__ = e32225;
var statearr_32226_32244 = state_32198;
(statearr_32226_32244[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32245 = state_32198;
state_32198 = G__32245;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
cljs$core$async$state_machine__23877__auto__ = function(state_32198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23877__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23877__auto____1.call(this,state_32198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23877__auto____0;
cljs$core$async$state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23877__auto____1;
return cljs$core$async$state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___32229,out))
})();
var state__23940__auto__ = (function (){var statearr_32227 = f__23939__auto__.call(null);
(statearr_32227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___32229);

return statearr_32227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___32229,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28976_28988 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28977_28989 = null;
var count__28978_28990 = (0);
var i__28979_28991 = (0);
while(true){
if((i__28979_28991 < count__28978_28990)){
var f_28992 = cljs.core._nth.call(null,chunk__28977_28989,i__28979_28991);
cljs.core.println.call(null,"  ",f_28992);

var G__28993 = seq__28976_28988;
var G__28994 = chunk__28977_28989;
var G__28995 = count__28978_28990;
var G__28996 = (i__28979_28991 + (1));
seq__28976_28988 = G__28993;
chunk__28977_28989 = G__28994;
count__28978_28990 = G__28995;
i__28979_28991 = G__28996;
continue;
} else {
var temp__4425__auto___28997 = cljs.core.seq.call(null,seq__28976_28988);
if(temp__4425__auto___28997){
var seq__28976_28998__$1 = temp__4425__auto___28997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28976_28998__$1)){
var c__21352__auto___28999 = cljs.core.chunk_first.call(null,seq__28976_28998__$1);
var G__29000 = cljs.core.chunk_rest.call(null,seq__28976_28998__$1);
var G__29001 = c__21352__auto___28999;
var G__29002 = cljs.core.count.call(null,c__21352__auto___28999);
var G__29003 = (0);
seq__28976_28988 = G__29000;
chunk__28977_28989 = G__29001;
count__28978_28990 = G__29002;
i__28979_28991 = G__29003;
continue;
} else {
var f_29004 = cljs.core.first.call(null,seq__28976_28998__$1);
cljs.core.println.call(null,"  ",f_29004);

var G__29005 = cljs.core.next.call(null,seq__28976_28998__$1);
var G__29006 = null;
var G__29007 = (0);
var G__29008 = (0);
seq__28976_28988 = G__29005;
chunk__28977_28989 = G__29006;
count__28978_28990 = G__29007;
i__28979_28991 = G__29008;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29009 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20567__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29009);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29009)))?cljs.core.second.call(null,arglists_29009):arglists_29009));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28981 = null;
var count__28982 = (0);
var i__28983 = (0);
while(true){
if((i__28983 < count__28982)){
var vec__28984 = cljs.core._nth.call(null,chunk__28981,i__28983);
var name = cljs.core.nth.call(null,vec__28984,(0),null);
var map__28985 = cljs.core.nth.call(null,vec__28984,(1),null);
var map__28985__$1 = ((cljs.core.seq_QMARK_.call(null,map__28985))?cljs.core.apply.call(null,cljs.core.hash_map,map__28985):map__28985);
var doc = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29010 = seq__28980;
var G__29011 = chunk__28981;
var G__29012 = count__28982;
var G__29013 = (i__28983 + (1));
seq__28980 = G__29010;
chunk__28981 = G__29011;
count__28982 = G__29012;
i__28983 = G__29013;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28980);
if(temp__4425__auto__){
var seq__28980__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28980__$1)){
var c__21352__auto__ = cljs.core.chunk_first.call(null,seq__28980__$1);
var G__29014 = cljs.core.chunk_rest.call(null,seq__28980__$1);
var G__29015 = c__21352__auto__;
var G__29016 = cljs.core.count.call(null,c__21352__auto__);
var G__29017 = (0);
seq__28980 = G__29014;
chunk__28981 = G__29015;
count__28982 = G__29016;
i__28983 = G__29017;
continue;
} else {
var vec__28986 = cljs.core.first.call(null,seq__28980__$1);
var name = cljs.core.nth.call(null,vec__28986,(0),null);
var map__28987 = cljs.core.nth.call(null,vec__28986,(1),null);
var map__28987__$1 = ((cljs.core.seq_QMARK_.call(null,map__28987))?cljs.core.apply.call(null,cljs.core.hash_map,map__28987):map__28987);
var doc = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29018 = cljs.core.next.call(null,seq__28980__$1);
var G__29019 = null;
var G__29020 = (0);
var G__29021 = (0);
seq__28980 = G__29018;
chunk__28981 = G__29019;
count__28982 = G__29020;
i__28983 = G__29021;
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
}
});

//# sourceMappingURL=repl.js.map
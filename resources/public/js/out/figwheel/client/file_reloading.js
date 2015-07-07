// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29042_SHARP_,p2__29043_SHARP_){
var and__20555__auto__ = p1__29042_SHARP_;
if(cljs.core.truth_(and__20555__auto__)){
return p2__29043_SHARP_;
} else {
return and__20555__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20567__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20567__auto__){
return or__20567__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__20567__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__20567__auto__){
return or__20567__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__20567__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__21462__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21466__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21466__auto__,method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29044){
var map__29045 = p__29044;
var map__29045__$1 = ((cljs.core.seq_QMARK_.call(null,map__29045))?cljs.core.apply.call(null,cljs.core.hash_map,map__29045):map__29045);
var file = cljs.core.get.call(null,map__29045__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29046){
var map__29047 = p__29046;
var map__29047__$1 = ((cljs.core.seq_QMARK_.call(null,map__29047))?cljs.core.apply.call(null,cljs.core.hash_map,map__29047):map__29047);
var namespace = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__21462__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21466__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21466__auto__,method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29048){if((e29048 instanceof Error)){
var e = e29048;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29048;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29050 = arguments.length;
switch (G__29050) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29052,callback){
var map__29054 = p__29052;
var map__29054__$1 = ((cljs.core.seq_QMARK_.call(null,map__29054))?cljs.core.apply.call(null,cljs.core.hash_map,map__29054):map__29054);
var file_msg = map__29054__$1;
var request_url = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29054,map__29054__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29054,map__29054__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29055){
var map__29057 = p__29055;
var map__29057__$1 = ((cljs.core.seq_QMARK_.call(null,map__29057))?cljs.core.apply.call(null,cljs.core.hash_map,map__29057):map__29057);
var file_msg = map__29057__$1;
var namespace = cljs.core.get.call(null,map__29057__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__29057__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__20567__auto__ = meta_data;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__20555__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__20555__auto__){
var or__20567__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__20567__auto____$1)){
return or__20567__auto____$1;
} else {
var and__20555__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__20555__auto____$1){
var or__20567__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__20567__auto____$2){
return or__20567__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__20555__auto____$1;
}
}
}
} else {
return and__20555__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29058,callback){
var map__29060 = p__29058;
var map__29060__$1 = ((cljs.core.seq_QMARK_.call(null,map__29060))?cljs.core.apply.call(null,cljs.core.hash_map,map__29060):map__29060);
var file_msg = map__29060__$1;
var request_url = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23938__auto___29147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___29147,out){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___29147,out){
return (function (state_29129){
var state_val_29130 = (state_29129[(1)]);
if((state_val_29130 === (1))){
var inst_29107 = cljs.core.nth.call(null,files,(0),null);
var inst_29108 = cljs.core.nthnext.call(null,files,(1));
var inst_29109 = files;
var state_29129__$1 = (function (){var statearr_29131 = state_29129;
(statearr_29131[(7)] = inst_29109);

(statearr_29131[(8)] = inst_29107);

(statearr_29131[(9)] = inst_29108);

return statearr_29131;
})();
var statearr_29132_29148 = state_29129__$1;
(statearr_29132_29148[(2)] = null);

(statearr_29132_29148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (2))){
var inst_29109 = (state_29129[(7)]);
var inst_29112 = (state_29129[(10)]);
var inst_29112__$1 = cljs.core.nth.call(null,inst_29109,(0),null);
var inst_29113 = cljs.core.nthnext.call(null,inst_29109,(1));
var inst_29114 = (inst_29112__$1 == null);
var inst_29115 = cljs.core.not.call(null,inst_29114);
var state_29129__$1 = (function (){var statearr_29133 = state_29129;
(statearr_29133[(11)] = inst_29113);

(statearr_29133[(10)] = inst_29112__$1);

return statearr_29133;
})();
if(inst_29115){
var statearr_29134_29149 = state_29129__$1;
(statearr_29134_29149[(1)] = (4));

} else {
var statearr_29135_29150 = state_29129__$1;
(statearr_29135_29150[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (3))){
var inst_29127 = (state_29129[(2)]);
var state_29129__$1 = state_29129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29129__$1,inst_29127);
} else {
if((state_val_29130 === (4))){
var inst_29112 = (state_29129[(10)]);
var inst_29117 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29112);
var state_29129__$1 = state_29129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29129__$1,(7),inst_29117);
} else {
if((state_val_29130 === (5))){
var inst_29123 = cljs.core.async.close_BANG_.call(null,out);
var state_29129__$1 = state_29129;
var statearr_29136_29151 = state_29129__$1;
(statearr_29136_29151[(2)] = inst_29123);

(statearr_29136_29151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (6))){
var inst_29125 = (state_29129[(2)]);
var state_29129__$1 = state_29129;
var statearr_29137_29152 = state_29129__$1;
(statearr_29137_29152[(2)] = inst_29125);

(statearr_29137_29152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (7))){
var inst_29113 = (state_29129[(11)]);
var inst_29119 = (state_29129[(2)]);
var inst_29120 = cljs.core.async.put_BANG_.call(null,out,inst_29119);
var inst_29109 = inst_29113;
var state_29129__$1 = (function (){var statearr_29138 = state_29129;
(statearr_29138[(7)] = inst_29109);

(statearr_29138[(12)] = inst_29120);

return statearr_29138;
})();
var statearr_29139_29153 = state_29129__$1;
(statearr_29139_29153[(2)] = null);

(statearr_29139_29153[(1)] = (2));


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
});})(c__23938__auto___29147,out))
;
return ((function (switch__23876__auto__,c__23938__auto___29147,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto____0 = (function (){
var statearr_29143 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29143[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto__);

(statearr_29143[(1)] = (1));

return statearr_29143;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto____1 = (function (state_29129){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_29129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e29144){if((e29144 instanceof Object)){
var ex__23880__auto__ = e29144;
var statearr_29145_29154 = state_29129;
(statearr_29145_29154[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29155 = state_29129;
state_29129 = G__29155;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto__ = function(state_29129){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto____1.call(this,state_29129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___29147,out))
})();
var state__23940__auto__ = (function (){var statearr_29146 = f__23939__auto__.call(null);
(statearr_29146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___29147);

return statearr_29146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___29147,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29156,p__29157){
var map__29160 = p__29156;
var map__29160__$1 = ((cljs.core.seq_QMARK_.call(null,map__29160))?cljs.core.apply.call(null,cljs.core.hash_map,map__29160):map__29160);
var opts = map__29160__$1;
var url_rewriter = cljs.core.get.call(null,map__29160__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29161 = p__29157;
var map__29161__$1 = ((cljs.core.seq_QMARK_.call(null,map__29161))?cljs.core.apply.call(null,cljs.core.hash_map,map__29161):map__29161);
var file_msg = map__29161__$1;
var file = cljs.core.get.call(null,map__29161__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29162){
var map__29165 = p__29162;
var map__29165__$1 = ((cljs.core.seq_QMARK_.call(null,map__29165))?cljs.core.apply.call(null,cljs.core.hash_map,map__29165):map__29165);
var eval_body__$1 = cljs.core.get.call(null,map__29165__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20555__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20555__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20555__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29166){var e = e29166;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29171,p__29172){
var map__29374 = p__29171;
var map__29374__$1 = ((cljs.core.seq_QMARK_.call(null,map__29374))?cljs.core.apply.call(null,cljs.core.hash_map,map__29374):map__29374);
var opts = map__29374__$1;
var before_jsload = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29375 = p__29172;
var map__29375__$1 = ((cljs.core.seq_QMARK_.call(null,map__29375))?cljs.core.apply.call(null,cljs.core.hash_map,map__29375):map__29375);
var msg = map__29375__$1;
var files = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (state_29500){
var state_val_29501 = (state_29500[(1)]);
if((state_val_29501 === (7))){
var inst_29387 = (state_29500[(7)]);
var inst_29390 = (state_29500[(8)]);
var inst_29388 = (state_29500[(9)]);
var inst_29389 = (state_29500[(10)]);
var inst_29395 = cljs.core._nth.call(null,inst_29388,inst_29390);
var inst_29396 = figwheel.client.file_reloading.eval_body.call(null,inst_29395);
var inst_29397 = (inst_29390 + (1));
var tmp29502 = inst_29387;
var tmp29503 = inst_29388;
var tmp29504 = inst_29389;
var inst_29387__$1 = tmp29502;
var inst_29388__$1 = tmp29503;
var inst_29389__$1 = tmp29504;
var inst_29390__$1 = inst_29397;
var state_29500__$1 = (function (){var statearr_29505 = state_29500;
(statearr_29505[(7)] = inst_29387__$1);

(statearr_29505[(8)] = inst_29390__$1);

(statearr_29505[(11)] = inst_29396);

(statearr_29505[(9)] = inst_29388__$1);

(statearr_29505[(10)] = inst_29389__$1);

return statearr_29505;
})();
var statearr_29506_29575 = state_29500__$1;
(statearr_29506_29575[(2)] = null);

(statearr_29506_29575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (20))){
var inst_29436 = (state_29500[(12)]);
var inst_29433 = (state_29500[(13)]);
var inst_29432 = (state_29500[(14)]);
var inst_29439 = (state_29500[(15)]);
var inst_29437 = (state_29500[(16)]);
var inst_29442 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29444 = (function (){var all_files = inst_29432;
var files_SINGLEQUOTE_ = inst_29433;
var res_SINGLEQUOTE_ = inst_29436;
var res = inst_29437;
var files_not_loaded = inst_29439;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29436,inst_29433,inst_29432,inst_29439,inst_29437,inst_29442,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (p__29443){
var map__29507 = p__29443;
var map__29507__$1 = ((cljs.core.seq_QMARK_.call(null,map__29507))?cljs.core.apply.call(null,cljs.core.hash_map,map__29507):map__29507);
var namespace = cljs.core.get.call(null,map__29507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29507__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29436,inst_29433,inst_29432,inst_29439,inst_29437,inst_29442,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
})();
var inst_29445 = cljs.core.map.call(null,inst_29444,inst_29437);
var inst_29446 = cljs.core.pr_str.call(null,inst_29445);
var inst_29447 = figwheel.client.utils.log.call(null,inst_29446);
var inst_29448 = (function (){var all_files = inst_29432;
var files_SINGLEQUOTE_ = inst_29433;
var res_SINGLEQUOTE_ = inst_29436;
var res = inst_29437;
var files_not_loaded = inst_29439;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29436,inst_29433,inst_29432,inst_29439,inst_29437,inst_29442,inst_29444,inst_29445,inst_29446,inst_29447,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29436,inst_29433,inst_29432,inst_29439,inst_29437,inst_29442,inst_29444,inst_29445,inst_29446,inst_29447,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
})();
var inst_29449 = setTimeout(inst_29448,(10));
var state_29500__$1 = (function (){var statearr_29508 = state_29500;
(statearr_29508[(17)] = inst_29442);

(statearr_29508[(18)] = inst_29447);

return statearr_29508;
})();
var statearr_29509_29576 = state_29500__$1;
(statearr_29509_29576[(2)] = inst_29449);

(statearr_29509_29576[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (27))){
var inst_29459 = (state_29500[(19)]);
var state_29500__$1 = state_29500;
var statearr_29510_29577 = state_29500__$1;
(statearr_29510_29577[(2)] = inst_29459);

(statearr_29510_29577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (1))){
var inst_29379 = (state_29500[(20)]);
var inst_29376 = before_jsload.call(null,files);
var inst_29377 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29378 = (function (){return ((function (inst_29379,inst_29376,inst_29377,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (p1__29167_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29167_SHARP_);
});
;})(inst_29379,inst_29376,inst_29377,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
})();
var inst_29379__$1 = cljs.core.filter.call(null,inst_29378,files);
var inst_29380 = cljs.core.not_empty.call(null,inst_29379__$1);
var state_29500__$1 = (function (){var statearr_29511 = state_29500;
(statearr_29511[(21)] = inst_29377);

(statearr_29511[(20)] = inst_29379__$1);

(statearr_29511[(22)] = inst_29376);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29380)){
var statearr_29512_29578 = state_29500__$1;
(statearr_29512_29578[(1)] = (2));

} else {
var statearr_29513_29579 = state_29500__$1;
(statearr_29513_29579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (24))){
var state_29500__$1 = state_29500;
var statearr_29514_29580 = state_29500__$1;
(statearr_29514_29580[(2)] = null);

(statearr_29514_29580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (4))){
var inst_29424 = (state_29500[(2)]);
var inst_29425 = (function (){return ((function (inst_29424,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (p1__29168_SHARP_){
var and__20555__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29168_SHARP_);
if(cljs.core.truth_(and__20555__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29168_SHARP_));
} else {
return and__20555__auto__;
}
});
;})(inst_29424,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
})();
var inst_29426 = cljs.core.filter.call(null,inst_29425,files);
var state_29500__$1 = (function (){var statearr_29515 = state_29500;
(statearr_29515[(23)] = inst_29424);

(statearr_29515[(24)] = inst_29426);

return statearr_29515;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29516_29581 = state_29500__$1;
(statearr_29516_29581[(1)] = (16));

} else {
var statearr_29517_29582 = state_29500__$1;
(statearr_29517_29582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (15))){
var inst_29414 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29518_29583 = state_29500__$1;
(statearr_29518_29583[(2)] = inst_29414);

(statearr_29518_29583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (21))){
var state_29500__$1 = state_29500;
var statearr_29519_29584 = state_29500__$1;
(statearr_29519_29584[(2)] = null);

(statearr_29519_29584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (31))){
var inst_29467 = (state_29500[(25)]);
var inst_29477 = (state_29500[(2)]);
var inst_29478 = cljs.core.not_empty.call(null,inst_29467);
var state_29500__$1 = (function (){var statearr_29520 = state_29500;
(statearr_29520[(26)] = inst_29477);

return statearr_29520;
})();
if(cljs.core.truth_(inst_29478)){
var statearr_29521_29585 = state_29500__$1;
(statearr_29521_29585[(1)] = (32));

} else {
var statearr_29522_29586 = state_29500__$1;
(statearr_29522_29586[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (32))){
var inst_29467 = (state_29500[(25)]);
var inst_29480 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29467);
var inst_29481 = cljs.core.pr_str.call(null,inst_29480);
var inst_29482 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29481)].join('');
var inst_29483 = figwheel.client.utils.log.call(null,inst_29482);
var state_29500__$1 = state_29500;
var statearr_29523_29587 = state_29500__$1;
(statearr_29523_29587[(2)] = inst_29483);

(statearr_29523_29587[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (33))){
var state_29500__$1 = state_29500;
var statearr_29524_29588 = state_29500__$1;
(statearr_29524_29588[(2)] = null);

(statearr_29524_29588[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (13))){
var inst_29400 = (state_29500[(27)]);
var inst_29404 = cljs.core.chunk_first.call(null,inst_29400);
var inst_29405 = cljs.core.chunk_rest.call(null,inst_29400);
var inst_29406 = cljs.core.count.call(null,inst_29404);
var inst_29387 = inst_29405;
var inst_29388 = inst_29404;
var inst_29389 = inst_29406;
var inst_29390 = (0);
var state_29500__$1 = (function (){var statearr_29525 = state_29500;
(statearr_29525[(7)] = inst_29387);

(statearr_29525[(8)] = inst_29390);

(statearr_29525[(9)] = inst_29388);

(statearr_29525[(10)] = inst_29389);

return statearr_29525;
})();
var statearr_29526_29589 = state_29500__$1;
(statearr_29526_29589[(2)] = null);

(statearr_29526_29589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (22))){
var inst_29439 = (state_29500[(15)]);
var inst_29452 = (state_29500[(2)]);
var inst_29453 = cljs.core.not_empty.call(null,inst_29439);
var state_29500__$1 = (function (){var statearr_29527 = state_29500;
(statearr_29527[(28)] = inst_29452);

return statearr_29527;
})();
if(cljs.core.truth_(inst_29453)){
var statearr_29528_29590 = state_29500__$1;
(statearr_29528_29590[(1)] = (23));

} else {
var statearr_29529_29591 = state_29500__$1;
(statearr_29529_29591[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (36))){
var state_29500__$1 = state_29500;
var statearr_29530_29592 = state_29500__$1;
(statearr_29530_29592[(2)] = null);

(statearr_29530_29592[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (29))){
var inst_29466 = (state_29500[(29)]);
var inst_29471 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29466);
var inst_29472 = cljs.core.pr_str.call(null,inst_29471);
var inst_29473 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29472)].join('');
var inst_29474 = figwheel.client.utils.log.call(null,inst_29473);
var state_29500__$1 = state_29500;
var statearr_29531_29593 = state_29500__$1;
(statearr_29531_29593[(2)] = inst_29474);

(statearr_29531_29593[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (6))){
var inst_29421 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29532_29594 = state_29500__$1;
(statearr_29532_29594[(2)] = inst_29421);

(statearr_29532_29594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (28))){
var inst_29466 = (state_29500[(29)]);
var inst_29465 = (state_29500[(2)]);
var inst_29466__$1 = cljs.core.get.call(null,inst_29465,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29467 = cljs.core.get.call(null,inst_29465,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29468 = cljs.core.get.call(null,inst_29465,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29469 = cljs.core.not_empty.call(null,inst_29466__$1);
var state_29500__$1 = (function (){var statearr_29533 = state_29500;
(statearr_29533[(30)] = inst_29468);

(statearr_29533[(25)] = inst_29467);

(statearr_29533[(29)] = inst_29466__$1);

return statearr_29533;
})();
if(cljs.core.truth_(inst_29469)){
var statearr_29534_29595 = state_29500__$1;
(statearr_29534_29595[(1)] = (29));

} else {
var statearr_29535_29596 = state_29500__$1;
(statearr_29535_29596[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (25))){
var inst_29498 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29500__$1,inst_29498);
} else {
if((state_val_29501 === (34))){
var inst_29468 = (state_29500[(30)]);
var inst_29486 = (state_29500[(2)]);
var inst_29487 = cljs.core.not_empty.call(null,inst_29468);
var state_29500__$1 = (function (){var statearr_29536 = state_29500;
(statearr_29536[(31)] = inst_29486);

return statearr_29536;
})();
if(cljs.core.truth_(inst_29487)){
var statearr_29537_29597 = state_29500__$1;
(statearr_29537_29597[(1)] = (35));

} else {
var statearr_29538_29598 = state_29500__$1;
(statearr_29538_29598[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (17))){
var inst_29426 = (state_29500[(24)]);
var state_29500__$1 = state_29500;
var statearr_29539_29599 = state_29500__$1;
(statearr_29539_29599[(2)] = inst_29426);

(statearr_29539_29599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (3))){
var state_29500__$1 = state_29500;
var statearr_29540_29600 = state_29500__$1;
(statearr_29540_29600[(2)] = null);

(statearr_29540_29600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (12))){
var inst_29417 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29541_29601 = state_29500__$1;
(statearr_29541_29601[(2)] = inst_29417);

(statearr_29541_29601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (2))){
var inst_29379 = (state_29500[(20)]);
var inst_29386 = cljs.core.seq.call(null,inst_29379);
var inst_29387 = inst_29386;
var inst_29388 = null;
var inst_29389 = (0);
var inst_29390 = (0);
var state_29500__$1 = (function (){var statearr_29542 = state_29500;
(statearr_29542[(7)] = inst_29387);

(statearr_29542[(8)] = inst_29390);

(statearr_29542[(9)] = inst_29388);

(statearr_29542[(10)] = inst_29389);

return statearr_29542;
})();
var statearr_29543_29602 = state_29500__$1;
(statearr_29543_29602[(2)] = null);

(statearr_29543_29602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (23))){
var inst_29436 = (state_29500[(12)]);
var inst_29459 = (state_29500[(19)]);
var inst_29433 = (state_29500[(13)]);
var inst_29432 = (state_29500[(14)]);
var inst_29439 = (state_29500[(15)]);
var inst_29437 = (state_29500[(16)]);
var inst_29455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29458 = (function (){var all_files = inst_29432;
var files_SINGLEQUOTE_ = inst_29433;
var res_SINGLEQUOTE_ = inst_29436;
var res = inst_29437;
var files_not_loaded = inst_29439;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29436,inst_29459,inst_29433,inst_29432,inst_29439,inst_29437,inst_29455,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (p__29457){
var map__29544 = p__29457;
var map__29544__$1 = ((cljs.core.seq_QMARK_.call(null,map__29544))?cljs.core.apply.call(null,cljs.core.hash_map,map__29544):map__29544);
var meta_data = cljs.core.get.call(null,map__29544__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29436,inst_29459,inst_29433,inst_29432,inst_29439,inst_29437,inst_29455,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
})();
var inst_29459__$1 = cljs.core.group_by.call(null,inst_29458,inst_29439);
var inst_29460 = cljs.core.seq_QMARK_.call(null,inst_29459__$1);
var state_29500__$1 = (function (){var statearr_29545 = state_29500;
(statearr_29545[(19)] = inst_29459__$1);

(statearr_29545[(32)] = inst_29455);

return statearr_29545;
})();
if(inst_29460){
var statearr_29546_29603 = state_29500__$1;
(statearr_29546_29603[(1)] = (26));

} else {
var statearr_29547_29604 = state_29500__$1;
(statearr_29547_29604[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (35))){
var inst_29468 = (state_29500[(30)]);
var inst_29489 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29468);
var inst_29490 = cljs.core.pr_str.call(null,inst_29489);
var inst_29491 = [cljs.core.str("not required: "),cljs.core.str(inst_29490)].join('');
var inst_29492 = figwheel.client.utils.log.call(null,inst_29491);
var state_29500__$1 = state_29500;
var statearr_29548_29605 = state_29500__$1;
(statearr_29548_29605[(2)] = inst_29492);

(statearr_29548_29605[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (19))){
var inst_29436 = (state_29500[(12)]);
var inst_29433 = (state_29500[(13)]);
var inst_29432 = (state_29500[(14)]);
var inst_29437 = (state_29500[(16)]);
var inst_29436__$1 = (state_29500[(2)]);
var inst_29437__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29436__$1);
var inst_29438 = (function (){var all_files = inst_29432;
var files_SINGLEQUOTE_ = inst_29433;
var res_SINGLEQUOTE_ = inst_29436__$1;
var res = inst_29437__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29436,inst_29433,inst_29432,inst_29437,inst_29436__$1,inst_29437__$1,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (p1__29170_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29170_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29436,inst_29433,inst_29432,inst_29437,inst_29436__$1,inst_29437__$1,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
})();
var inst_29439 = cljs.core.filter.call(null,inst_29438,inst_29436__$1);
var inst_29440 = cljs.core.not_empty.call(null,inst_29437__$1);
var state_29500__$1 = (function (){var statearr_29549 = state_29500;
(statearr_29549[(12)] = inst_29436__$1);

(statearr_29549[(15)] = inst_29439);

(statearr_29549[(16)] = inst_29437__$1);

return statearr_29549;
})();
if(cljs.core.truth_(inst_29440)){
var statearr_29550_29606 = state_29500__$1;
(statearr_29550_29606[(1)] = (20));

} else {
var statearr_29551_29607 = state_29500__$1;
(statearr_29551_29607[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (11))){
var state_29500__$1 = state_29500;
var statearr_29552_29608 = state_29500__$1;
(statearr_29552_29608[(2)] = null);

(statearr_29552_29608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (9))){
var inst_29419 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29553_29609 = state_29500__$1;
(statearr_29553_29609[(2)] = inst_29419);

(statearr_29553_29609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (5))){
var inst_29390 = (state_29500[(8)]);
var inst_29389 = (state_29500[(10)]);
var inst_29392 = (inst_29390 < inst_29389);
var inst_29393 = inst_29392;
var state_29500__$1 = state_29500;
if(cljs.core.truth_(inst_29393)){
var statearr_29554_29610 = state_29500__$1;
(statearr_29554_29610[(1)] = (7));

} else {
var statearr_29555_29611 = state_29500__$1;
(statearr_29555_29611[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (14))){
var inst_29400 = (state_29500[(27)]);
var inst_29409 = cljs.core.first.call(null,inst_29400);
var inst_29410 = figwheel.client.file_reloading.eval_body.call(null,inst_29409);
var inst_29411 = cljs.core.next.call(null,inst_29400);
var inst_29387 = inst_29411;
var inst_29388 = null;
var inst_29389 = (0);
var inst_29390 = (0);
var state_29500__$1 = (function (){var statearr_29556 = state_29500;
(statearr_29556[(33)] = inst_29410);

(statearr_29556[(7)] = inst_29387);

(statearr_29556[(8)] = inst_29390);

(statearr_29556[(9)] = inst_29388);

(statearr_29556[(10)] = inst_29389);

return statearr_29556;
})();
var statearr_29557_29612 = state_29500__$1;
(statearr_29557_29612[(2)] = null);

(statearr_29557_29612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (26))){
var inst_29459 = (state_29500[(19)]);
var inst_29462 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29459);
var state_29500__$1 = state_29500;
var statearr_29558_29613 = state_29500__$1;
(statearr_29558_29613[(2)] = inst_29462);

(statearr_29558_29613[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (16))){
var inst_29426 = (state_29500[(24)]);
var inst_29428 = (function (){var all_files = inst_29426;
return ((function (all_files,inst_29426,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function (p1__29169_SHARP_){
return cljs.core.update_in.call(null,p1__29169_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29426,state_val_29501,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
})();
var inst_29429 = cljs.core.map.call(null,inst_29428,inst_29426);
var state_29500__$1 = state_29500;
var statearr_29559_29614 = state_29500__$1;
(statearr_29559_29614[(2)] = inst_29429);

(statearr_29559_29614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (30))){
var state_29500__$1 = state_29500;
var statearr_29560_29615 = state_29500__$1;
(statearr_29560_29615[(2)] = null);

(statearr_29560_29615[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (10))){
var inst_29400 = (state_29500[(27)]);
var inst_29402 = cljs.core.chunked_seq_QMARK_.call(null,inst_29400);
var state_29500__$1 = state_29500;
if(inst_29402){
var statearr_29561_29616 = state_29500__$1;
(statearr_29561_29616[(1)] = (13));

} else {
var statearr_29562_29617 = state_29500__$1;
(statearr_29562_29617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (18))){
var inst_29433 = (state_29500[(13)]);
var inst_29432 = (state_29500[(14)]);
var inst_29432__$1 = (state_29500[(2)]);
var inst_29433__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29432__$1);
var inst_29434 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29433__$1);
var state_29500__$1 = (function (){var statearr_29563 = state_29500;
(statearr_29563[(13)] = inst_29433__$1);

(statearr_29563[(14)] = inst_29432__$1);

return statearr_29563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29500__$1,(19),inst_29434);
} else {
if((state_val_29501 === (37))){
var inst_29495 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29564_29618 = state_29500__$1;
(statearr_29564_29618[(2)] = inst_29495);

(statearr_29564_29618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (8))){
var inst_29387 = (state_29500[(7)]);
var inst_29400 = (state_29500[(27)]);
var inst_29400__$1 = cljs.core.seq.call(null,inst_29387);
var state_29500__$1 = (function (){var statearr_29565 = state_29500;
(statearr_29565[(27)] = inst_29400__$1);

return statearr_29565;
})();
if(inst_29400__$1){
var statearr_29566_29619 = state_29500__$1;
(statearr_29566_29619[(1)] = (10));

} else {
var statearr_29567_29620 = state_29500__$1;
(statearr_29567_29620[(1)] = (11));

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
});})(c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
;
return ((function (switch__23876__auto__,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto____0 = (function (){
var statearr_29571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29571[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto__);

(statearr_29571[(1)] = (1));

return statearr_29571;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto____1 = (function (state_29500){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_29500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e29572){if((e29572 instanceof Object)){
var ex__23880__auto__ = e29572;
var statearr_29573_29621 = state_29500;
(statearr_29573_29621[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29622 = state_29500;
state_29500 = G__29622;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto__ = function(state_29500){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto____1.call(this,state_29500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
})();
var state__23940__auto__ = (function (){var statearr_29574 = f__23939__auto__.call(null);
(statearr_29574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_29574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29375,map__29375__$1,msg,files))
);

return c__23938__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29625,link){
var map__29627 = p__29625;
var map__29627__$1 = ((cljs.core.seq_QMARK_.call(null,map__29627))?cljs.core.apply.call(null,cljs.core.hash_map,map__29627):map__29627);
var file = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29627,map__29627__$1,file){
return (function (p1__29623_SHARP_,p2__29624_SHARP_){
if(cljs.core._EQ_.call(null,p1__29623_SHARP_,p2__29624_SHARP_)){
return p1__29623_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29627,map__29627__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29631){
var map__29632 = p__29631;
var map__29632__$1 = ((cljs.core.seq_QMARK_.call(null,map__29632))?cljs.core.apply.call(null,cljs.core.hash_map,map__29632):map__29632);
var match_length = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29628_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29628_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__29634 = arguments.length;
switch (G__29634) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29636){
var map__29638 = p__29636;
var map__29638__$1 = ((cljs.core.seq_QMARK_.call(null,map__29638))?cljs.core.apply.call(null,cljs.core.hash_map,map__29638):map__29638);
var f_data = map__29638__$1;
var file = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__20567__auto__ = request_url;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29639,files_msg){
var map__29661 = p__29639;
var map__29661__$1 = ((cljs.core.seq_QMARK_.call(null,map__29661))?cljs.core.apply.call(null,cljs.core.hash_map,map__29661):map__29661);
var opts = map__29661__$1;
var on_cssload = cljs.core.get.call(null,map__29661__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29662_29682 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29663_29683 = null;
var count__29664_29684 = (0);
var i__29665_29685 = (0);
while(true){
if((i__29665_29685 < count__29664_29684)){
var f_29686 = cljs.core._nth.call(null,chunk__29663_29683,i__29665_29685);
figwheel.client.file_reloading.reload_css_file.call(null,f_29686);

var G__29687 = seq__29662_29682;
var G__29688 = chunk__29663_29683;
var G__29689 = count__29664_29684;
var G__29690 = (i__29665_29685 + (1));
seq__29662_29682 = G__29687;
chunk__29663_29683 = G__29688;
count__29664_29684 = G__29689;
i__29665_29685 = G__29690;
continue;
} else {
var temp__4425__auto___29691 = cljs.core.seq.call(null,seq__29662_29682);
if(temp__4425__auto___29691){
var seq__29662_29692__$1 = temp__4425__auto___29691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29662_29692__$1)){
var c__21352__auto___29693 = cljs.core.chunk_first.call(null,seq__29662_29692__$1);
var G__29694 = cljs.core.chunk_rest.call(null,seq__29662_29692__$1);
var G__29695 = c__21352__auto___29693;
var G__29696 = cljs.core.count.call(null,c__21352__auto___29693);
var G__29697 = (0);
seq__29662_29682 = G__29694;
chunk__29663_29683 = G__29695;
count__29664_29684 = G__29696;
i__29665_29685 = G__29697;
continue;
} else {
var f_29698 = cljs.core.first.call(null,seq__29662_29692__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29698);

var G__29699 = cljs.core.next.call(null,seq__29662_29692__$1);
var G__29700 = null;
var G__29701 = (0);
var G__29702 = (0);
seq__29662_29682 = G__29699;
chunk__29663_29683 = G__29700;
count__29664_29684 = G__29701;
i__29665_29685 = G__29702;
continue;
}
} else {
}
}
break;
}

var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__,map__29661,map__29661__$1,opts,on_cssload){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__,map__29661,map__29661__$1,opts,on_cssload){
return (function (state_29672){
var state_val_29673 = (state_29672[(1)]);
if((state_val_29673 === (1))){
var inst_29666 = cljs.core.async.timeout.call(null,(100));
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29672__$1,(2),inst_29666);
} else {
if((state_val_29673 === (2))){
var inst_29668 = (state_29672[(2)]);
var inst_29669 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29670 = on_cssload.call(null,inst_29669);
var state_29672__$1 = (function (){var statearr_29674 = state_29672;
(statearr_29674[(7)] = inst_29668);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29672__$1,inst_29670);
} else {
return null;
}
}
});})(c__23938__auto__,map__29661,map__29661__$1,opts,on_cssload))
;
return ((function (switch__23876__auto__,c__23938__auto__,map__29661,map__29661__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto____0 = (function (){
var statearr_29678 = [null,null,null,null,null,null,null,null];
(statearr_29678[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto__);

(statearr_29678[(1)] = (1));

return statearr_29678;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto____1 = (function (state_29672){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_29672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e29679){if((e29679 instanceof Object)){
var ex__23880__auto__ = e29679;
var statearr_29680_29703 = state_29672;
(statearr_29680_29703[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29704 = state_29672;
state_29672 = G__29704;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto__ = function(state_29672){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto____1.call(this,state_29672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__,map__29661,map__29661__$1,opts,on_cssload))
})();
var state__23940__auto__ = (function (){var statearr_29681 = f__23939__auto__.call(null);
(statearr_29681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_29681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__,map__29661,map__29661__$1,opts,on_cssload))
);

return c__23938__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
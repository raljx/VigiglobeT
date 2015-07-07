// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27969__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27970__i = 0, G__27970__a = new Array(arguments.length -  0);
while (G__27970__i < G__27970__a.length) {G__27970__a[G__27970__i] = arguments[G__27970__i + 0]; ++G__27970__i;}
  args = new cljs.core.IndexedSeq(G__27970__a,0);
} 
return G__27969__delegate.call(this,args);};
G__27969.cljs$lang$maxFixedArity = 0;
G__27969.cljs$lang$applyTo = (function (arglist__27971){
var args = cljs.core.seq(arglist__27971);
return G__27969__delegate(args);
});
G__27969.cljs$core$IFn$_invoke$arity$variadic = G__27969__delegate;
return G__27969;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27972){
var map__27974 = p__27972;
var map__27974__$1 = ((cljs.core.seq_QMARK_.call(null,map__27974))?cljs.core.apply.call(null,cljs.core.hash_map,map__27974):map__27974);
var message = cljs.core.get.call(null,map__27974__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27974__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20567__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20555__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20555__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20555__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23938__auto___28103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___28103,ch){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___28103,ch){
return (function (state_28077){
var state_val_28078 = (state_28077[(1)]);
if((state_val_28078 === (7))){
var inst_28073 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28079_28104 = state_28077__$1;
(statearr_28079_28104[(2)] = inst_28073);

(statearr_28079_28104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (1))){
var state_28077__$1 = state_28077;
var statearr_28080_28105 = state_28077__$1;
(statearr_28080_28105[(2)] = null);

(statearr_28080_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (4))){
var inst_28041 = (state_28077[(7)]);
var inst_28041__$1 = (state_28077[(2)]);
var state_28077__$1 = (function (){var statearr_28081 = state_28077;
(statearr_28081[(7)] = inst_28041__$1);

return statearr_28081;
})();
if(cljs.core.truth_(inst_28041__$1)){
var statearr_28082_28106 = state_28077__$1;
(statearr_28082_28106[(1)] = (5));

} else {
var statearr_28083_28107 = state_28077__$1;
(statearr_28083_28107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (13))){
var state_28077__$1 = state_28077;
var statearr_28084_28108 = state_28077__$1;
(statearr_28084_28108[(2)] = null);

(statearr_28084_28108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (6))){
var state_28077__$1 = state_28077;
var statearr_28085_28109 = state_28077__$1;
(statearr_28085_28109[(2)] = null);

(statearr_28085_28109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (3))){
var inst_28075 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28077__$1,inst_28075);
} else {
if((state_val_28078 === (12))){
var inst_28048 = (state_28077[(8)]);
var inst_28061 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28048);
var inst_28062 = cljs.core.first.call(null,inst_28061);
var inst_28063 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28062);
var inst_28064 = console.warn("Figwheel: Not loading code with warnings - ",inst_28063);
var state_28077__$1 = state_28077;
var statearr_28086_28110 = state_28077__$1;
(statearr_28086_28110[(2)] = inst_28064);

(statearr_28086_28110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (2))){
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28077__$1,(4),ch);
} else {
if((state_val_28078 === (11))){
var inst_28057 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28087_28111 = state_28077__$1;
(statearr_28087_28111[(2)] = inst_28057);

(statearr_28087_28111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (9))){
var inst_28047 = (state_28077[(9)]);
var inst_28059 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28047,opts);
var state_28077__$1 = state_28077;
if(cljs.core.truth_(inst_28059)){
var statearr_28088_28112 = state_28077__$1;
(statearr_28088_28112[(1)] = (12));

} else {
var statearr_28089_28113 = state_28077__$1;
(statearr_28089_28113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (5))){
var inst_28041 = (state_28077[(7)]);
var inst_28047 = (state_28077[(9)]);
var inst_28043 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28044 = (new cljs.core.PersistentArrayMap(null,2,inst_28043,null));
var inst_28045 = (new cljs.core.PersistentHashSet(null,inst_28044,null));
var inst_28046 = figwheel.client.focus_msgs.call(null,inst_28045,inst_28041);
var inst_28047__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28046);
var inst_28048 = cljs.core.first.call(null,inst_28046);
var inst_28049 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28047__$1,opts);
var state_28077__$1 = (function (){var statearr_28090 = state_28077;
(statearr_28090[(9)] = inst_28047__$1);

(statearr_28090[(8)] = inst_28048);

return statearr_28090;
})();
if(cljs.core.truth_(inst_28049)){
var statearr_28091_28114 = state_28077__$1;
(statearr_28091_28114[(1)] = (8));

} else {
var statearr_28092_28115 = state_28077__$1;
(statearr_28092_28115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (14))){
var inst_28067 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28093_28116 = state_28077__$1;
(statearr_28093_28116[(2)] = inst_28067);

(statearr_28093_28116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (10))){
var inst_28069 = (state_28077[(2)]);
var state_28077__$1 = (function (){var statearr_28094 = state_28077;
(statearr_28094[(10)] = inst_28069);

return statearr_28094;
})();
var statearr_28095_28117 = state_28077__$1;
(statearr_28095_28117[(2)] = null);

(statearr_28095_28117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (8))){
var inst_28048 = (state_28077[(8)]);
var inst_28051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28052 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28048);
var inst_28053 = cljs.core.async.timeout.call(null,(1000));
var inst_28054 = [inst_28052,inst_28053];
var inst_28055 = (new cljs.core.PersistentVector(null,2,(5),inst_28051,inst_28054,null));
var state_28077__$1 = state_28077;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28077__$1,(11),inst_28055);
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
});})(c__23938__auto___28103,ch))
;
return ((function (switch__23876__auto__,c__23938__auto___28103,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23877__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23877__auto____0 = (function (){
var statearr_28099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28099[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23877__auto__);

(statearr_28099[(1)] = (1));

return statearr_28099;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23877__auto____1 = (function (state_28077){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_28077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e28100){if((e28100 instanceof Object)){
var ex__23880__auto__ = e28100;
var statearr_28101_28118 = state_28077;
(statearr_28101_28118[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28119 = state_28077;
state_28077 = G__28119;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23877__auto__ = function(state_28077){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23877__auto____1.call(this,state_28077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23877__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23877__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___28103,ch))
})();
var state__23940__auto__ = (function (){var statearr_28102 = f__23939__auto__.call(null);
(statearr_28102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___28103);

return statearr_28102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___28103,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28120_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28120_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28127 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28127){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28125 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28126 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28125,_STAR_print_newline_STAR_28126,base_path_28127){
return (function() { 
var G__28128__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28129__i = 0, G__28129__a = new Array(arguments.length -  0);
while (G__28129__i < G__28129__a.length) {G__28129__a[G__28129__i] = arguments[G__28129__i + 0]; ++G__28129__i;}
  args = new cljs.core.IndexedSeq(G__28129__a,0);
} 
return G__28128__delegate.call(this,args);};
G__28128.cljs$lang$maxFixedArity = 0;
G__28128.cljs$lang$applyTo = (function (arglist__28130){
var args = cljs.core.seq(arglist__28130);
return G__28128__delegate(args);
});
G__28128.cljs$core$IFn$_invoke$arity$variadic = G__28128__delegate;
return G__28128;
})()
;})(_STAR_print_fn_STAR_28125,_STAR_print_newline_STAR_28126,base_path_28127))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28126;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28125;
}}catch (e28124){if((e28124 instanceof Error)){
var e = e28124;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28127], null));
} else {
var e = e28124;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28127))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28131){
var map__28136 = p__28131;
var map__28136__$1 = ((cljs.core.seq_QMARK_.call(null,map__28136))?cljs.core.apply.call(null,cljs.core.hash_map,map__28136):map__28136);
var opts = map__28136__$1;
var build_id = cljs.core.get.call(null,map__28136__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28136,map__28136__$1,opts,build_id){
return (function (p__28137){
var vec__28138 = p__28137;
var map__28139 = cljs.core.nth.call(null,vec__28138,(0),null);
var map__28139__$1 = ((cljs.core.seq_QMARK_.call(null,map__28139))?cljs.core.apply.call(null,cljs.core.hash_map,map__28139):map__28139);
var msg = map__28139__$1;
var msg_name = cljs.core.get.call(null,map__28139__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28138,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28138,map__28139,map__28139__$1,msg,msg_name,_,map__28136,map__28136__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28138,map__28139,map__28139__$1,msg,msg_name,_,map__28136,map__28136__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28136,map__28136__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28143){
var vec__28144 = p__28143;
var map__28145 = cljs.core.nth.call(null,vec__28144,(0),null);
var map__28145__$1 = ((cljs.core.seq_QMARK_.call(null,map__28145))?cljs.core.apply.call(null,cljs.core.hash_map,map__28145):map__28145);
var msg = map__28145__$1;
var msg_name = cljs.core.get.call(null,map__28145__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28144,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28146){
var map__28154 = p__28146;
var map__28154__$1 = ((cljs.core.seq_QMARK_.call(null,map__28154))?cljs.core.apply.call(null,cljs.core.hash_map,map__28154):map__28154);
var on_compile_warning = cljs.core.get.call(null,map__28154__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28154__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28154,map__28154__$1,on_compile_warning,on_compile_fail){
return (function (p__28155){
var vec__28156 = p__28155;
var map__28157 = cljs.core.nth.call(null,vec__28156,(0),null);
var map__28157__$1 = ((cljs.core.seq_QMARK_.call(null,map__28157))?cljs.core.apply.call(null,cljs.core.hash_map,map__28157):map__28157);
var msg = map__28157__$1;
var msg_name = cljs.core.get.call(null,map__28157__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28156,(1));
var pred__28158 = cljs.core._EQ_;
var expr__28159 = msg_name;
if(cljs.core.truth_(pred__28158.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28159))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28158.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28159))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28154,map__28154__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__,msg_hist,msg_names,msg){
return (function (state_28360){
var state_val_28361 = (state_28360[(1)]);
if((state_val_28361 === (7))){
var inst_28294 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28362_28403 = state_28360__$1;
(statearr_28362_28403[(2)] = inst_28294);

(statearr_28362_28403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (20))){
var inst_28322 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28322)){
var statearr_28363_28404 = state_28360__$1;
(statearr_28363_28404[(1)] = (22));

} else {
var statearr_28364_28405 = state_28360__$1;
(statearr_28364_28405[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (27))){
var inst_28334 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28335 = figwheel.client.heads_up.display_warning.call(null,inst_28334);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(30),inst_28335);
} else {
if((state_val_28361 === (1))){
var inst_28282 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28282)){
var statearr_28365_28406 = state_28360__$1;
(statearr_28365_28406[(1)] = (2));

} else {
var statearr_28366_28407 = state_28360__$1;
(statearr_28366_28407[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (24))){
var inst_28350 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28367_28408 = state_28360__$1;
(statearr_28367_28408[(2)] = inst_28350);

(statearr_28367_28408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (4))){
var inst_28358 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28360__$1,inst_28358);
} else {
if((state_val_28361 === (15))){
var inst_28310 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28311 = figwheel.client.format_messages.call(null,inst_28310);
var inst_28312 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28313 = figwheel.client.heads_up.display_error.call(null,inst_28311,inst_28312);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(18),inst_28313);
} else {
if((state_val_28361 === (21))){
var inst_28352 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28368_28409 = state_28360__$1;
(statearr_28368_28409[(2)] = inst_28352);

(statearr_28368_28409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (31))){
var inst_28341 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(34),inst_28341);
} else {
if((state_val_28361 === (32))){
var state_28360__$1 = state_28360;
var statearr_28369_28410 = state_28360__$1;
(statearr_28369_28410[(2)] = null);

(statearr_28369_28410[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (33))){
var inst_28346 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28370_28411 = state_28360__$1;
(statearr_28370_28411[(2)] = inst_28346);

(statearr_28370_28411[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (13))){
var inst_28300 = (state_28360[(2)]);
var inst_28301 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28302 = figwheel.client.format_messages.call(null,inst_28301);
var inst_28303 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28304 = figwheel.client.heads_up.display_error.call(null,inst_28302,inst_28303);
var state_28360__$1 = (function (){var statearr_28371 = state_28360;
(statearr_28371[(7)] = inst_28300);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(14),inst_28304);
} else {
if((state_val_28361 === (22))){
var inst_28324 = figwheel.client.heads_up.clear.call(null);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(25),inst_28324);
} else {
if((state_val_28361 === (29))){
var inst_28348 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28372_28412 = state_28360__$1;
(statearr_28372_28412[(2)] = inst_28348);

(statearr_28372_28412[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (6))){
var inst_28290 = figwheel.client.heads_up.clear.call(null);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(9),inst_28290);
} else {
if((state_val_28361 === (28))){
var inst_28339 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28339)){
var statearr_28373_28413 = state_28360__$1;
(statearr_28373_28413[(1)] = (31));

} else {
var statearr_28374_28414 = state_28360__$1;
(statearr_28374_28414[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (25))){
var inst_28326 = (state_28360[(2)]);
var inst_28327 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28328 = figwheel.client.heads_up.display_warning.call(null,inst_28327);
var state_28360__$1 = (function (){var statearr_28375 = state_28360;
(statearr_28375[(8)] = inst_28326);

return statearr_28375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(26),inst_28328);
} else {
if((state_val_28361 === (34))){
var inst_28343 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28376_28415 = state_28360__$1;
(statearr_28376_28415[(2)] = inst_28343);

(statearr_28376_28415[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (17))){
var inst_28354 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28377_28416 = state_28360__$1;
(statearr_28377_28416[(2)] = inst_28354);

(statearr_28377_28416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (3))){
var inst_28296 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28296)){
var statearr_28378_28417 = state_28360__$1;
(statearr_28378_28417[(1)] = (10));

} else {
var statearr_28379_28418 = state_28360__$1;
(statearr_28379_28418[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (12))){
var inst_28356 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28380_28419 = state_28360__$1;
(statearr_28380_28419[(2)] = inst_28356);

(statearr_28380_28419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (2))){
var inst_28284 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28284)){
var statearr_28381_28420 = state_28360__$1;
(statearr_28381_28420[(1)] = (5));

} else {
var statearr_28382_28421 = state_28360__$1;
(statearr_28382_28421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (23))){
var inst_28332 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28332)){
var statearr_28383_28422 = state_28360__$1;
(statearr_28383_28422[(1)] = (27));

} else {
var statearr_28384_28423 = state_28360__$1;
(statearr_28384_28423[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (19))){
var inst_28319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28320 = figwheel.client.heads_up.append_message.call(null,inst_28319);
var state_28360__$1 = state_28360;
var statearr_28385_28424 = state_28360__$1;
(statearr_28385_28424[(2)] = inst_28320);

(statearr_28385_28424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (11))){
var inst_28308 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28308)){
var statearr_28386_28425 = state_28360__$1;
(statearr_28386_28425[(1)] = (15));

} else {
var statearr_28387_28426 = state_28360__$1;
(statearr_28387_28426[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (9))){
var inst_28292 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28388_28427 = state_28360__$1;
(statearr_28388_28427[(2)] = inst_28292);

(statearr_28388_28427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (5))){
var inst_28286 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(8),inst_28286);
} else {
if((state_val_28361 === (14))){
var inst_28306 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28389_28428 = state_28360__$1;
(statearr_28389_28428[(2)] = inst_28306);

(statearr_28389_28428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (26))){
var inst_28330 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28390_28429 = state_28360__$1;
(statearr_28390_28429[(2)] = inst_28330);

(statearr_28390_28429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (16))){
var inst_28317 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28317)){
var statearr_28391_28430 = state_28360__$1;
(statearr_28391_28430[(1)] = (19));

} else {
var statearr_28392_28431 = state_28360__$1;
(statearr_28392_28431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (30))){
var inst_28337 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28393_28432 = state_28360__$1;
(statearr_28393_28432[(2)] = inst_28337);

(statearr_28393_28432[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (10))){
var inst_28298 = figwheel.client.heads_up.clear.call(null);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(13),inst_28298);
} else {
if((state_val_28361 === (18))){
var inst_28315 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28394_28433 = state_28360__$1;
(statearr_28394_28433[(2)] = inst_28315);

(statearr_28394_28433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (8))){
var inst_28288 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28395_28434 = state_28360__$1;
(statearr_28395_28434[(2)] = inst_28288);

(statearr_28395_28434[(1)] = (7));


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
});})(c__23938__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23876__auto__,c__23938__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto____0 = (function (){
var statearr_28399 = [null,null,null,null,null,null,null,null,null];
(statearr_28399[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto__);

(statearr_28399[(1)] = (1));

return statearr_28399;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto____1 = (function (state_28360){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_28360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e28400){if((e28400 instanceof Object)){
var ex__23880__auto__ = e28400;
var statearr_28401_28435 = state_28360;
(statearr_28401_28435[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28436 = state_28360;
state_28360 = G__28436;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto__ = function(state_28360){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto____1.call(this,state_28360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__,msg_hist,msg_names,msg))
})();
var state__23940__auto__ = (function (){var statearr_28402 = f__23939__auto__.call(null);
(statearr_28402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_28402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__,msg_hist,msg_names,msg))
);

return c__23938__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23938__auto___28499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto___28499,ch){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto___28499,ch){
return (function (state_28482){
var state_val_28483 = (state_28482[(1)]);
if((state_val_28483 === (1))){
var state_28482__$1 = state_28482;
var statearr_28484_28500 = state_28482__$1;
(statearr_28484_28500[(2)] = null);

(statearr_28484_28500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (2))){
var state_28482__$1 = state_28482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28482__$1,(4),ch);
} else {
if((state_val_28483 === (3))){
var inst_28480 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28482__$1,inst_28480);
} else {
if((state_val_28483 === (4))){
var inst_28470 = (state_28482[(7)]);
var inst_28470__$1 = (state_28482[(2)]);
var state_28482__$1 = (function (){var statearr_28485 = state_28482;
(statearr_28485[(7)] = inst_28470__$1);

return statearr_28485;
})();
if(cljs.core.truth_(inst_28470__$1)){
var statearr_28486_28501 = state_28482__$1;
(statearr_28486_28501[(1)] = (5));

} else {
var statearr_28487_28502 = state_28482__$1;
(statearr_28487_28502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (5))){
var inst_28470 = (state_28482[(7)]);
var inst_28472 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28470);
var state_28482__$1 = state_28482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28482__$1,(8),inst_28472);
} else {
if((state_val_28483 === (6))){
var state_28482__$1 = state_28482;
var statearr_28488_28503 = state_28482__$1;
(statearr_28488_28503[(2)] = null);

(statearr_28488_28503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (7))){
var inst_28478 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
var statearr_28489_28504 = state_28482__$1;
(statearr_28489_28504[(2)] = inst_28478);

(statearr_28489_28504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (8))){
var inst_28474 = (state_28482[(2)]);
var state_28482__$1 = (function (){var statearr_28490 = state_28482;
(statearr_28490[(8)] = inst_28474);

return statearr_28490;
})();
var statearr_28491_28505 = state_28482__$1;
(statearr_28491_28505[(2)] = null);

(statearr_28491_28505[(1)] = (2));


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
});})(c__23938__auto___28499,ch))
;
return ((function (switch__23876__auto__,c__23938__auto___28499,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23877__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23877__auto____0 = (function (){
var statearr_28495 = [null,null,null,null,null,null,null,null,null];
(statearr_28495[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23877__auto__);

(statearr_28495[(1)] = (1));

return statearr_28495;
});
var figwheel$client$heads_up_plugin_$_state_machine__23877__auto____1 = (function (state_28482){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_28482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e28496){if((e28496 instanceof Object)){
var ex__23880__auto__ = e28496;
var statearr_28497_28506 = state_28482;
(statearr_28497_28506[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28507 = state_28482;
state_28482 = G__28507;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23877__auto__ = function(state_28482){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23877__auto____1.call(this,state_28482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23877__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23877__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto___28499,ch))
})();
var state__23940__auto__ = (function (){var statearr_28498 = f__23939__auto__.call(null);
(statearr_28498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto___28499);

return statearr_28498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto___28499,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__){
return (function (state_28528){
var state_val_28529 = (state_28528[(1)]);
if((state_val_28529 === (1))){
var inst_28523 = cljs.core.async.timeout.call(null,(3000));
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28528__$1,(2),inst_28523);
} else {
if((state_val_28529 === (2))){
var inst_28525 = (state_28528[(2)]);
var inst_28526 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28528__$1 = (function (){var statearr_28530 = state_28528;
(statearr_28530[(7)] = inst_28525);

return statearr_28530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28528__$1,inst_28526);
} else {
return null;
}
}
});})(c__23938__auto__))
;
return ((function (switch__23876__auto__,c__23938__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23877__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23877__auto____0 = (function (){
var statearr_28534 = [null,null,null,null,null,null,null,null];
(statearr_28534[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23877__auto__);

(statearr_28534[(1)] = (1));

return statearr_28534;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23877__auto____1 = (function (state_28528){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_28528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e28535){if((e28535 instanceof Object)){
var ex__23880__auto__ = e28535;
var statearr_28536_28538 = state_28528;
(statearr_28536_28538[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28539 = state_28528;
state_28528 = G__28539;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23877__auto__ = function(state_28528){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23877__auto____1.call(this,state_28528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23877__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23877__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__))
})();
var state__23940__auto__ = (function (){var statearr_28537 = f__23939__auto__.call(null);
(statearr_28537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_28537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__))
);

return c__23938__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28540){
var map__28546 = p__28540;
var map__28546__$1 = ((cljs.core.seq_QMARK_.call(null,map__28546))?cljs.core.apply.call(null,cljs.core.hash_map,map__28546):map__28546);
var ed = map__28546__$1;
var formatted_exception = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28547_28551 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28548_28552 = null;
var count__28549_28553 = (0);
var i__28550_28554 = (0);
while(true){
if((i__28550_28554 < count__28549_28553)){
var msg_28555 = cljs.core._nth.call(null,chunk__28548_28552,i__28550_28554);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28555);

var G__28556 = seq__28547_28551;
var G__28557 = chunk__28548_28552;
var G__28558 = count__28549_28553;
var G__28559 = (i__28550_28554 + (1));
seq__28547_28551 = G__28556;
chunk__28548_28552 = G__28557;
count__28549_28553 = G__28558;
i__28550_28554 = G__28559;
continue;
} else {
var temp__4425__auto___28560 = cljs.core.seq.call(null,seq__28547_28551);
if(temp__4425__auto___28560){
var seq__28547_28561__$1 = temp__4425__auto___28560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28547_28561__$1)){
var c__21352__auto___28562 = cljs.core.chunk_first.call(null,seq__28547_28561__$1);
var G__28563 = cljs.core.chunk_rest.call(null,seq__28547_28561__$1);
var G__28564 = c__21352__auto___28562;
var G__28565 = cljs.core.count.call(null,c__21352__auto___28562);
var G__28566 = (0);
seq__28547_28551 = G__28563;
chunk__28548_28552 = G__28564;
count__28549_28553 = G__28565;
i__28550_28554 = G__28566;
continue;
} else {
var msg_28567 = cljs.core.first.call(null,seq__28547_28561__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28567);

var G__28568 = cljs.core.next.call(null,seq__28547_28561__$1);
var G__28569 = null;
var G__28570 = (0);
var G__28571 = (0);
seq__28547_28551 = G__28568;
chunk__28548_28552 = G__28569;
count__28549_28553 = G__28570;
i__28550_28554 = G__28571;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28572){
var map__28574 = p__28572;
var map__28574__$1 = ((cljs.core.seq_QMARK_.call(null,map__28574))?cljs.core.apply.call(null,cljs.core.hash_map,map__28574):map__28574);
var w = map__28574__$1;
var message = cljs.core.get.call(null,map__28574__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20555__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20555__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20555__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28581 = cljs.core.seq.call(null,plugins);
var chunk__28582 = null;
var count__28583 = (0);
var i__28584 = (0);
while(true){
if((i__28584 < count__28583)){
var vec__28585 = cljs.core._nth.call(null,chunk__28582,i__28584);
var k = cljs.core.nth.call(null,vec__28585,(0),null);
var plugin = cljs.core.nth.call(null,vec__28585,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28587 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28581,chunk__28582,count__28583,i__28584,pl_28587,vec__28585,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28587.call(null,msg_hist);
});})(seq__28581,chunk__28582,count__28583,i__28584,pl_28587,vec__28585,k,plugin))
);
} else {
}

var G__28588 = seq__28581;
var G__28589 = chunk__28582;
var G__28590 = count__28583;
var G__28591 = (i__28584 + (1));
seq__28581 = G__28588;
chunk__28582 = G__28589;
count__28583 = G__28590;
i__28584 = G__28591;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28581);
if(temp__4425__auto__){
var seq__28581__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28581__$1)){
var c__21352__auto__ = cljs.core.chunk_first.call(null,seq__28581__$1);
var G__28592 = cljs.core.chunk_rest.call(null,seq__28581__$1);
var G__28593 = c__21352__auto__;
var G__28594 = cljs.core.count.call(null,c__21352__auto__);
var G__28595 = (0);
seq__28581 = G__28592;
chunk__28582 = G__28593;
count__28583 = G__28594;
i__28584 = G__28595;
continue;
} else {
var vec__28586 = cljs.core.first.call(null,seq__28581__$1);
var k = cljs.core.nth.call(null,vec__28586,(0),null);
var plugin = cljs.core.nth.call(null,vec__28586,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28596 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28581,chunk__28582,count__28583,i__28584,pl_28596,vec__28586,k,plugin,seq__28581__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28596.call(null,msg_hist);
});})(seq__28581,chunk__28582,count__28583,i__28584,pl_28596,vec__28586,k,plugin,seq__28581__$1,temp__4425__auto__))
);
} else {
}

var G__28597 = cljs.core.next.call(null,seq__28581__$1);
var G__28598 = null;
var G__28599 = (0);
var G__28600 = (0);
seq__28581 = G__28597;
chunk__28582 = G__28598;
count__28583 = G__28599;
i__28584 = G__28600;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__28602 = arguments.length;
switch (G__28602) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__21607__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21607__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28605){
var map__28606 = p__28605;
var map__28606__$1 = ((cljs.core.seq_QMARK_.call(null,map__28606))?cljs.core.apply.call(null,cljs.core.hash_map,map__28606):map__28606);
var opts = map__28606__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28604){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28604));
});

//# sourceMappingURL=client.js.map
// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__21607__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21607__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28733_28741 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28734_28742 = null;
var count__28735_28743 = (0);
var i__28736_28744 = (0);
while(true){
if((i__28736_28744 < count__28735_28743)){
var k_28745 = cljs.core._nth.call(null,chunk__28734_28742,i__28736_28744);
e.setAttribute(cljs.core.name.call(null,k_28745),cljs.core.get.call(null,attrs,k_28745));

var G__28746 = seq__28733_28741;
var G__28747 = chunk__28734_28742;
var G__28748 = count__28735_28743;
var G__28749 = (i__28736_28744 + (1));
seq__28733_28741 = G__28746;
chunk__28734_28742 = G__28747;
count__28735_28743 = G__28748;
i__28736_28744 = G__28749;
continue;
} else {
var temp__4425__auto___28750 = cljs.core.seq.call(null,seq__28733_28741);
if(temp__4425__auto___28750){
var seq__28733_28751__$1 = temp__4425__auto___28750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28733_28751__$1)){
var c__21352__auto___28752 = cljs.core.chunk_first.call(null,seq__28733_28751__$1);
var G__28753 = cljs.core.chunk_rest.call(null,seq__28733_28751__$1);
var G__28754 = c__21352__auto___28752;
var G__28755 = cljs.core.count.call(null,c__21352__auto___28752);
var G__28756 = (0);
seq__28733_28741 = G__28753;
chunk__28734_28742 = G__28754;
count__28735_28743 = G__28755;
i__28736_28744 = G__28756;
continue;
} else {
var k_28757 = cljs.core.first.call(null,seq__28733_28751__$1);
e.setAttribute(cljs.core.name.call(null,k_28757),cljs.core.get.call(null,attrs,k_28757));

var G__28758 = cljs.core.next.call(null,seq__28733_28751__$1);
var G__28759 = null;
var G__28760 = (0);
var G__28761 = (0);
seq__28733_28741 = G__28758;
chunk__28734_28742 = G__28759;
count__28735_28743 = G__28760;
i__28736_28744 = G__28761;
continue;
}
} else {
}
}
break;
}

var seq__28737_28762 = cljs.core.seq.call(null,children);
var chunk__28738_28763 = null;
var count__28739_28764 = (0);
var i__28740_28765 = (0);
while(true){
if((i__28740_28765 < count__28739_28764)){
var ch_28766 = cljs.core._nth.call(null,chunk__28738_28763,i__28740_28765);
e.appendChild(ch_28766);

var G__28767 = seq__28737_28762;
var G__28768 = chunk__28738_28763;
var G__28769 = count__28739_28764;
var G__28770 = (i__28740_28765 + (1));
seq__28737_28762 = G__28767;
chunk__28738_28763 = G__28768;
count__28739_28764 = G__28769;
i__28740_28765 = G__28770;
continue;
} else {
var temp__4425__auto___28771 = cljs.core.seq.call(null,seq__28737_28762);
if(temp__4425__auto___28771){
var seq__28737_28772__$1 = temp__4425__auto___28771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28737_28772__$1)){
var c__21352__auto___28773 = cljs.core.chunk_first.call(null,seq__28737_28772__$1);
var G__28774 = cljs.core.chunk_rest.call(null,seq__28737_28772__$1);
var G__28775 = c__21352__auto___28773;
var G__28776 = cljs.core.count.call(null,c__21352__auto___28773);
var G__28777 = (0);
seq__28737_28762 = G__28774;
chunk__28738_28763 = G__28775;
count__28739_28764 = G__28776;
i__28740_28765 = G__28777;
continue;
} else {
var ch_28778 = cljs.core.first.call(null,seq__28737_28772__$1);
e.appendChild(ch_28778);

var G__28779 = cljs.core.next.call(null,seq__28737_28772__$1);
var G__28780 = null;
var G__28781 = (0);
var G__28782 = (0);
seq__28737_28762 = G__28779;
chunk__28738_28763 = G__28780;
count__28739_28764 = G__28781;
i__28740_28765 = G__28782;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28730){
var G__28731 = cljs.core.first.call(null,seq28730);
var seq28730__$1 = cljs.core.next.call(null,seq28730);
var G__28732 = cljs.core.first.call(null,seq28730__$1);
var seq28730__$2 = cljs.core.next.call(null,seq28730__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28731,G__28732,seq28730__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__21462__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21466__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__,hierarchy__21466__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__,hierarchy__21466__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21466__auto__,method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28783 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28783.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28783.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28783.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28783);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28784,st_map){
var map__28788 = p__28784;
var map__28788__$1 = ((cljs.core.seq_QMARK_.call(null,map__28788))?cljs.core.apply.call(null,cljs.core.hash_map,map__28788):map__28788);
var container_el = cljs.core.get.call(null,map__28788__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28788,map__28788__$1,container_el){
return (function (p__28789){
var vec__28790 = p__28789;
var k = cljs.core.nth.call(null,vec__28790,(0),null);
var v = cljs.core.nth.call(null,vec__28790,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28788,map__28788__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28791,dom_str){
var map__28793 = p__28791;
var map__28793__$1 = ((cljs.core.seq_QMARK_.call(null,map__28793))?cljs.core.apply.call(null,cljs.core.hash_map,map__28793):map__28793);
var c = map__28793__$1;
var content_area_el = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28794){
var map__28796 = p__28794;
var map__28796__$1 = ((cljs.core.seq_QMARK_.call(null,map__28796))?cljs.core.apply.call(null,cljs.core.hash_map,map__28796):map__28796);
var content_area_el = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__){
return (function (state_28838){
var state_val_28839 = (state_28838[(1)]);
if((state_val_28839 === (1))){
var inst_28823 = (state_28838[(7)]);
var inst_28823__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28824 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28825 = ["10px","10px","100%","68px","1.0"];
var inst_28826 = cljs.core.PersistentHashMap.fromArrays(inst_28824,inst_28825);
var inst_28827 = cljs.core.merge.call(null,inst_28826,style);
var inst_28828 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28823__$1,inst_28827);
var inst_28829 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28823__$1,msg);
var inst_28830 = cljs.core.async.timeout.call(null,(300));
var state_28838__$1 = (function (){var statearr_28840 = state_28838;
(statearr_28840[(8)] = inst_28829);

(statearr_28840[(9)] = inst_28828);

(statearr_28840[(7)] = inst_28823__$1);

return statearr_28840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28838__$1,(2),inst_28830);
} else {
if((state_val_28839 === (2))){
var inst_28823 = (state_28838[(7)]);
var inst_28832 = (state_28838[(2)]);
var inst_28833 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28834 = ["auto"];
var inst_28835 = cljs.core.PersistentHashMap.fromArrays(inst_28833,inst_28834);
var inst_28836 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28823,inst_28835);
var state_28838__$1 = (function (){var statearr_28841 = state_28838;
(statearr_28841[(10)] = inst_28832);

return statearr_28841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28838__$1,inst_28836);
} else {
return null;
}
}
});})(c__23938__auto__))
;
return ((function (switch__23876__auto__,c__23938__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto____0 = (function (){
var statearr_28845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28845[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto__);

(statearr_28845[(1)] = (1));

return statearr_28845;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto____1 = (function (state_28838){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_28838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e28846){if((e28846 instanceof Object)){
var ex__23880__auto__ = e28846;
var statearr_28847_28849 = state_28838;
(statearr_28847_28849[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28850 = state_28838;
state_28838 = G__28850;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto__ = function(state_28838){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto____1.call(this,state_28838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__))
})();
var state__23940__auto__ = (function (){var statearr_28848 = f__23939__auto__.call(null);
(statearr_28848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_28848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__))
);

return c__23938__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28852 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28852,(0),null);
var ln = cljs.core.nth.call(null,vec__28852,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28855 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28855,(0),null);
var file_line = cljs.core.nth.call(null,vec__28855,(1),null);
var file_column = cljs.core.nth.call(null,vec__28855,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28855,file_name,file_line,file_column){
return (function (p1__28853_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28853_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28855,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__20567__auto__ = file_line;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
var and__20555__auto__ = cause;
if(cljs.core.truth_(and__20555__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__20555__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28857 = figwheel.client.heads_up.ensure_container.call(null);
var map__28857__$1 = ((cljs.core.seq_QMARK_.call(null,map__28857))?cljs.core.apply.call(null,cljs.core.hash_map,map__28857):map__28857);
var content_area_el = cljs.core.get.call(null,map__28857__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__){
return (function (state_28904){
var state_val_28905 = (state_28904[(1)]);
if((state_val_28905 === (1))){
var inst_28887 = (state_28904[(7)]);
var inst_28887__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28888 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28889 = ["0.0"];
var inst_28890 = cljs.core.PersistentHashMap.fromArrays(inst_28888,inst_28889);
var inst_28891 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28887__$1,inst_28890);
var inst_28892 = cljs.core.async.timeout.call(null,(300));
var state_28904__$1 = (function (){var statearr_28906 = state_28904;
(statearr_28906[(8)] = inst_28891);

(statearr_28906[(7)] = inst_28887__$1);

return statearr_28906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28904__$1,(2),inst_28892);
} else {
if((state_val_28905 === (2))){
var inst_28887 = (state_28904[(7)]);
var inst_28894 = (state_28904[(2)]);
var inst_28895 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28896 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28897 = cljs.core.PersistentHashMap.fromArrays(inst_28895,inst_28896);
var inst_28898 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28887,inst_28897);
var inst_28899 = cljs.core.async.timeout.call(null,(200));
var state_28904__$1 = (function (){var statearr_28907 = state_28904;
(statearr_28907[(9)] = inst_28894);

(statearr_28907[(10)] = inst_28898);

return statearr_28907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28904__$1,(3),inst_28899);
} else {
if((state_val_28905 === (3))){
var inst_28887 = (state_28904[(7)]);
var inst_28901 = (state_28904[(2)]);
var inst_28902 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28887,"");
var state_28904__$1 = (function (){var statearr_28908 = state_28904;
(statearr_28908[(11)] = inst_28901);

return statearr_28908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28904__$1,inst_28902);
} else {
return null;
}
}
}
});})(c__23938__auto__))
;
return ((function (switch__23876__auto__,c__23938__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23877__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23877__auto____0 = (function (){
var statearr_28912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28912[(0)] = figwheel$client$heads_up$clear_$_state_machine__23877__auto__);

(statearr_28912[(1)] = (1));

return statearr_28912;
});
var figwheel$client$heads_up$clear_$_state_machine__23877__auto____1 = (function (state_28904){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_28904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e28913){if((e28913 instanceof Object)){
var ex__23880__auto__ = e28913;
var statearr_28914_28916 = state_28904;
(statearr_28914_28916[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28917 = state_28904;
state_28904 = G__28917;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23877__auto__ = function(state_28904){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23877__auto____1.call(this,state_28904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23877__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23877__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__))
})();
var state__23940__auto__ = (function (){var statearr_28915 = f__23939__auto__.call(null);
(statearr_28915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_28915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__))
);

return c__23938__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23938__auto__){
return (function (){
var f__23939__auto__ = (function (){var switch__23876__auto__ = ((function (c__23938__auto__){
return (function (state_28949){
var state_val_28950 = (state_28949[(1)]);
if((state_val_28950 === (1))){
var inst_28939 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28949__$1 = state_28949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28949__$1,(2),inst_28939);
} else {
if((state_val_28950 === (2))){
var inst_28941 = (state_28949[(2)]);
var inst_28942 = cljs.core.async.timeout.call(null,(400));
var state_28949__$1 = (function (){var statearr_28951 = state_28949;
(statearr_28951[(7)] = inst_28941);

return statearr_28951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28949__$1,(3),inst_28942);
} else {
if((state_val_28950 === (3))){
var inst_28944 = (state_28949[(2)]);
var inst_28945 = figwheel.client.heads_up.clear.call(null);
var state_28949__$1 = (function (){var statearr_28952 = state_28949;
(statearr_28952[(8)] = inst_28944);

return statearr_28952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28949__$1,(4),inst_28945);
} else {
if((state_val_28950 === (4))){
var inst_28947 = (state_28949[(2)]);
var state_28949__$1 = state_28949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28949__$1,inst_28947);
} else {
return null;
}
}
}
}
});})(c__23938__auto__))
;
return ((function (switch__23876__auto__,c__23938__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto____0 = (function (){
var statearr_28956 = [null,null,null,null,null,null,null,null,null];
(statearr_28956[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto__);

(statearr_28956[(1)] = (1));

return statearr_28956;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto____1 = (function (state_28949){
while(true){
var ret_value__23878__auto__ = (function (){try{while(true){
var result__23879__auto__ = switch__23876__auto__.call(null,state_28949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23879__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23879__auto__;
}
break;
}
}catch (e28957){if((e28957 instanceof Object)){
var ex__23880__auto__ = e28957;
var statearr_28958_28960 = state_28949;
(statearr_28958_28960[(5)] = ex__23880__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23878__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28961 = state_28949;
state_28949 = G__28961;
continue;
} else {
return ret_value__23878__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto__ = function(state_28949){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto____1.call(this,state_28949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23877__auto__;
})()
;})(switch__23876__auto__,c__23938__auto__))
})();
var state__23940__auto__ = (function (){var statearr_28959 = f__23939__auto__.call(null);
(statearr_28959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23938__auto__);

return statearr_28959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23940__auto__);
});})(c__23938__auto__))
);

return c__23938__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map
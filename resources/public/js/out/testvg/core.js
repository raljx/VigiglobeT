// Compiled by ClojureScript 0.0-3308 {}
goog.provide('testvg.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
testvg.core.toggle_value = (function testvg$core$toggle_value(a,k,value1,value2){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,a).call(null,k),value1)){
return cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,k,value2);
} else {
return cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,k,value1);
}
});
testvg.core.timer_component = (function testvg$core$timer_component(typevar){
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"btn-value","btn-value",-2104713501),"Stop"], null));
var seconds_elapsed = reagent.core.atom.call(null,(0));
return ((function (seconds_elapsed,state){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,seconds_elapsed),"Stop")){
cljs.core.reset_BANG_.call(null,seconds_elapsed,(0));
} else {
}

if(typeof cljs.core.deref.call(null,seconds_elapsed) === 'number'){
setTimeout(((function (seconds_elapsed,state){
return (function (){
return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
});})(seconds_elapsed,state))
,(1000));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((typeof cljs.core.deref.call(null,seconds_elapsed) === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref.call(null,seconds_elapsed)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Stop timer, click Start to restart..."], null)
),((cljs.core._EQ_.call(null,typevar,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"btn-value","btn-value",-2104713501)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (seconds_elapsed,state){
return (function (){
testvg.core.toggle_value.call(null,state,new cljs.core.Keyword(null,"btn-value","btn-value",-2104713501),"Start","Stop");

return cljs.core.reset_BANG_.call(null,seconds_elapsed,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"btn-value","btn-value",-2104713501)));
});})(seconds_elapsed,state))
], null)], null):null)], null);
});
;})(seconds_elapsed,state))
});
if(typeof testvg.core.timers !== 'undefined'){
} else {
testvg.core.timers = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof testvg.core.counter !== 'undefined'){
} else {
testvg.core.counter = reagent.core.atom.call(null,(0));
}
testvg.core.add_timer = (function testvg$core$add_timer(){
var id = cljs.core.swap_BANG_.call(null,testvg.core.counter,cljs.core.inc);
return cljs.core.swap_BANG_.call(null,testvg.core.timers,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
testvg.core.delete$ = (function testvg$core$delete(id){
return cljs.core.swap_BANG_.call(null,testvg.core.timers,cljs.core.dissoc,id);
});
testvg.core.timer_stats = (function testvg$core$timer_stats(p__29279){
var map__29282 = p__29279;
var map__29282__$1 = ((cljs.core.seq_QMARK_.call(null,map__29282))?cljs.core.apply.call(null,cljs.core.hash_map,map__29282):map__29282);
var filt = cljs.core.get.call(null,map__29282__$1,new cljs.core.Keyword(null,"filt","filt",169229082));
var active = cljs.core.get.call(null,map__29282__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var done = cljs.core.get.call(null,map__29282__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var props_for = ((function (map__29282,map__29282__$1,filt,active,done){
return (function (name){
return null;
});})(map__29282,map__29282__$1,filt,active,done))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#timer-count","span#timer-count",1642166632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," active ",(function (){var G__29283 = active;
switch (G__29283) {
case (1):
return "timer";

break;
default:
return "timers";

}
})()," "], null)], null);
});
testvg.core.timer_item = (function testvg$core$timer_item(){
var editing = reagent.core.atom.call(null,false);
return ((function (editing){
return (function (p__29287){
var map__29288 = p__29287;
var map__29288__$1 = ((cljs.core.seq_QMARK_.call(null,map__29288))?cljs.core.apply.call(null,cljs.core.hash_map,map__29288):map__29288);
var id = cljs.core.get.call(null,map__29288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.call(null,map__29288__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.call(null,map__29288__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_component,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Supprimer ce timer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__29288,map__29288__$1,id,done,title,editing){
return (function (){
return testvg.core.delete$.call(null,id);
});})(map__29288,map__29288__$1,id,done,title,editing))
], null)], null)], null)], null);
});
;})(editing))
});
testvg.core.timer_app = (function testvg$core$timer_app(props){
var filt = reagent.core.atom.call(null,new cljs.core.Keyword(null,"all","all",892129742));
return ((function (filt){
return (function (){
var items = cljs.core.vals.call(null,cljs.core.deref.call(null,testvg.core.timers));
var done = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),items));
var active = (cljs.core.count.call(null,items) - done);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#todoapp","section#todoapp",41606040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#header","header#header",1650878621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Cliquez sur le bouton pour cr\u00E9er un nouveau timer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"Creer un timer",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),"new-time",new cljs.core.Keyword(null,"on-click","on-click",1632826543),testvg.core.add_timer], null)], null)], null),(((cljs.core.count.call(null,items) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#timer-list","ul#timer-list",1274768765),(function (){var iter__21379__auto__ = ((function (items,done,active,filt){
return (function testvg$core$timer_app_$_iter__29294(s__29295){
return (new cljs.core.LazySeq(null,((function (items,done,active,filt){
return (function (){
var s__29295__$1 = s__29295;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29295__$1);
if(temp__4425__auto__){
var s__29295__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29295__$2)){
var c__21377__auto__ = cljs.core.chunk_first.call(null,s__29295__$2);
var size__21378__auto__ = cljs.core.count.call(null,c__21377__auto__);
var b__29297 = cljs.core.chunk_buffer.call(null,size__21378__auto__);
if((function (){var i__29296 = (0);
while(true){
if((i__29296 < size__21378__auto__)){
var todo = cljs.core._nth.call(null,c__21377__auto__,i__29296);
cljs.core.chunk_append.call(null,b__29297,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__29299 = (i__29296 + (1));
i__29296 = G__29299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29297),testvg$core$timer_app_$_iter__29294.call(null,cljs.core.chunk_rest.call(null,s__29295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29297),null);
}
} else {
var todo = cljs.core.first.call(null,s__29295__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),testvg$core$timer_app_$_iter__29294.call(null,cljs.core.rest.call(null,s__29295__$2)));
}
} else {
return null;
}
break;
}
});})(items,done,active,filt))
,null,null));
});})(items,done,active,filt))
;
return iter__21379__auto__.call(null,cljs.core.filter.call(null,(function (){var G__29298 = (((cljs.core.deref.call(null,filt) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,filt).fqn:null);
switch (G__29298) {
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,filt))].join('')));

}
})(),items));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#footer","footer#footer",-1164052935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_stats,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"done","done",-889844188),done,new cljs.core.Keyword(null,"filt","filt",169229082),filt], null)], null)], null)], null):null)], null)], null);
});
;})(filt))
});
testvg.core.home_page = (function testvg$core$home_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to testvg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"go to about page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/test1"], null),"go to test1 page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/test2"], null),"go to test2 page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/test3"], null),"go to test3 page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/bonus"], null),"go to bonus page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/chart"], null),"go to chart page"], null)], null)], null);
});
testvg.core.about_page = (function testvg$core$about_page(){
return new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About testvg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tout d'abords, merci de m'avoir fait d\u00E9couvrir Clojure. Dans le cadre de mon activit\u00E9 freelance et des demandes de mes clients, je me tourne plus facilement vers des frameworks JS plus 'legers' comme LungoJS (lungo.tapquo.com)\n  que j'associe quelquefois \u00E0 PhoneGap pour une int\u00E9gration in-app"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"J'ai donc d\u00FB appr\u00E9hender ce nouveau langage via les tutos disponibles et le wiki. J'ai install\u00E9 lein sur Windows 8 mais je me suis vite retourn\u00E9 vers ma belle D\u00E9bian avec qui j'ai un rapport de simplicit\u00E9 exemplaire et j'ai donc pu commencer ce test"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"J'ai choisi de hacker la fonction timer-component en y incluant une variable 'typevar' utilis\u00E9e pour afficher/ cacher les boutons Start/Stop. Cela dans le seul but d'impl\u00E9menter une seule fois la fonction et l'appeler \u00E0 ma convenance sur les pages concern\u00E9es."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Clojure, comme tout langage, respecte cette logique de d\u00E9veloppement, cela reste donc assez facile de r\u00E9cuperer les bases par rapport \u00E0 un autre langage."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Test1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Rien de bien compliqu\u00E9, un appel \u00E0 une fonction d\u00E9finie en amount"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Test2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"La on plus, rien de bien compliqu\u00E9, je double l'appel \u00E0 la fonction timer-component sans variables puisqu'il n'est pas necessaire d'afficher les actions Start/Stop"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Test3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ici, j'ai donc d\u00FB creer la fonction 'toggle-value' pour changer l'attribut 'value' de l'input de type 'button'. J'ai cherch\u00E9 relativement longtemps pour trouver une directive qui permet de mettre en pause l'action lanc\u00E9e par \n   le setTimeout. J'ai choisi plut\u00F4t de tester la variable '@seconds-elapsed' en v\u00E9rifiant sa nature (char/number) via une condition r\u00E9cup\u00E9r\u00E9e gr\u00E2ce \u00E0 la valeur du bouton. Un swap! sur cette variable me permettant de r\u00E9initialiser \n   cette varibale."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Bonus"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sur cette page, je me suis inspir\u00E9 du script de la todolist et notamment la partie cr\u00E9ation de nouvelles taches (le doucle-click). J'ai \u00E9t\u00E9 surpris de la facilit\u00E9 d'impl\u00E9menter ce type d'action car j'\u00E9tais persuad\u00E9\n  qu'il y avait de nombreuses lignes de codes \u00E0 saisir. Encore une fois, la logique, et mon exp\u00E9rience (n'ayons pas peur de le dire ^^) m'ont permis d'arriver \u00E0 un r\u00E9sultat attendu."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Charts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"J'ai sur cette partie, travaill\u00E9 un bon moment. la notion de d\u00E9pendances dans les \n  scripts Clojure (via le fichier projet.clsj reste encore flou. J'ai bien saisi qu'il \u00E9tait \n  n\u00E9cessaire d'appeler des librairies sp\u00E9cifiques dans ce fichier \n  (j'ai test\u00E9 highcharts, Analemma et quelques autres, mais je me suis but\u00E9 (je pense \n  que la concentration y \u00E9t\u00E9 pour quelque chose). Je me suis d\u00E9termin\u00E9 \u00E0 utiliser directement les \n  d\u00E9p\u00F4ts git de hightcharts et Analemma o\u00F9 l\u00E0, en effet, je peux g\u00E9n\u00E9rer des graphs! Je pense \n  committer tout ca en externe si cela vous interesse. J'ai donc visit\u00E9 et test\u00E9 votre API vigiglobe, j'ai \u00E9t\u00E9 surpris car le Json ne contient que peu d'informations, peut-\u00EAtre ai-je oubli\u00E9 de\n   d\u00E9finir quelques variables, j'ai en tout et pour tout le nom de la s\u00E9rie et le comptage (je suppose) des articles ou auteurs qui en sont affili\u00E9s ainsi que, je pense, \n   le nombre d'articles ou commentaires (par auteurs ou par nombre de messages) de l'article."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Conclusion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Merci du temps que vous consacrerez \u00E0 l'\u00E9tude de ce test. Au del\u00E0 de mes comp\u00E9tences, je suis quelqu'un de tr\u00E8s ouvert, ayant de plus (au del\u00E0 de la partie d\u00E9veloppement) une bonne exp\u00E9rience B2B. J'aime les challenges \n  et 'baigne' depuis plus de 15 ans dans ce domaine. Esp\u00E9rant pouvoir vous en discuter de vive-voix avec vous,"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Excellente journ\u00E9e"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"St\u00E9phane RALJEVIC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tel.+33 7 89 01 68 12"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Email: raljx.concept@gmail.com"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"LinkedIn: https://fr.linkedin.com/in/sraljevic"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
testvg.core.test1_page = (function testvg$core$test1_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"test1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
testvg.core.test2_page = (function testvg$core$test2_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"test2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
testvg.core.test3_page = (function testvg$core$test3_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"test3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_component,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_component,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
testvg.core.bonus_page = (function testvg$core$bonus_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Bonus page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.timer_app], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
testvg.core.chart_page = (function testvg$core$chart_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Bonus page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Un d\u00E9pot git peut \u00EAtre g\u00E9n\u00E9r\u00E9 \u00E0 votre convenance si vous d\u00E9sirez voir en action l'API VigiGlobe (see. #about Page)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://www.raljxconcept.ovh/charts.html",new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),"0",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"scrolling","scrolling",349011090),"no"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
testvg.core.current_page = (function testvg$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__22914__auto___29303 = (function (params__22915__auto__){
if(cljs.core.map_QMARK_.call(null,params__22915__auto__)){
var map__29301 = params__22915__auto__;
var map__29301__$1 = ((cljs.core.seq_QMARK_.call(null,map__29301))?cljs.core.apply.call(null,cljs.core.hash_map,map__29301):map__29301);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.home_page;},new cljs.core.Symbol("testvg.core","home-page","testvg.core/home-page",-1487661229,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/testvg/core.cljs",16,1,124,124,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.home_page)?testvg.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22915__auto__)){
var vec__29302 = params__22915__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.home_page;},new cljs.core.Symbol("testvg.core","home-page","testvg.core/home-page",-1487661229,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/testvg/core.cljs",16,1,124,124,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.home_page)?testvg.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22914__auto___29303);

var action__22914__auto___29306 = (function (params__22915__auto__){
if(cljs.core.map_QMARK_.call(null,params__22915__auto__)){
var map__29304 = params__22915__auto__;
var map__29304__$1 = ((cljs.core.seq_QMARK_.call(null,map__29304))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304):map__29304);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.about_page;},new cljs.core.Symbol("testvg.core","about-page","testvg.core/about-page",-668873529,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/testvg/core.cljs",17,1,135,135,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.about_page)?testvg.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22915__auto__)){
var vec__29305 = params__22915__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.about_page;},new cljs.core.Symbol("testvg.core","about-page","testvg.core/about-page",-668873529,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/testvg/core.cljs",17,1,135,135,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.about_page)?testvg.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__22914__auto___29306);

var action__22914__auto___29309 = (function (params__22915__auto__){
if(cljs.core.map_QMARK_.call(null,params__22915__auto__)){
var map__29307 = params__22915__auto__;
var map__29307__$1 = ((cljs.core.seq_QMARK_.call(null,map__29307))?cljs.core.apply.call(null,cljs.core.hash_map,map__29307):map__29307);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.test1_page;},new cljs.core.Symbol("testvg.core","test1-page","testvg.core/test1-page",-1719384351,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"test1-page","test1-page",864197371,null),"src/cljs/testvg/core.cljs",17,1,174,174,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.test1_page)?testvg.core.test1_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22915__auto__)){
var vec__29308 = params__22915__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.test1_page;},new cljs.core.Symbol("testvg.core","test1-page","testvg.core/test1-page",-1719384351,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"test1-page","test1-page",864197371,null),"src/cljs/testvg/core.cljs",17,1,174,174,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.test1_page)?testvg.core.test1_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/test1",action__22914__auto___29309);

var action__22914__auto___29312 = (function (params__22915__auto__){
if(cljs.core.map_QMARK_.call(null,params__22915__auto__)){
var map__29310 = params__22915__auto__;
var map__29310__$1 = ((cljs.core.seq_QMARK_.call(null,map__29310))?cljs.core.apply.call(null,cljs.core.hash_map,map__29310):map__29310);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.test2_page;},new cljs.core.Symbol("testvg.core","test2-page","testvg.core/test2-page",-535259501,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"test2-page","test2-page",1511146361,null),"src/cljs/testvg/core.cljs",17,1,180,180,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.test2_page)?testvg.core.test2_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22915__auto__)){
var vec__29311 = params__22915__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.test2_page;},new cljs.core.Symbol("testvg.core","test2-page","testvg.core/test2-page",-535259501,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"test2-page","test2-page",1511146361,null),"src/cljs/testvg/core.cljs",17,1,180,180,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.test2_page)?testvg.core.test2_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/test2",action__22914__auto___29312);

var action__22914__auto___29315 = (function (params__22915__auto__){
if(cljs.core.map_QMARK_.call(null,params__22915__auto__)){
var map__29313 = params__22915__auto__;
var map__29313__$1 = ((cljs.core.seq_QMARK_.call(null,map__29313))?cljs.core.apply.call(null,cljs.core.hash_map,map__29313):map__29313);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.test3_page;},new cljs.core.Symbol("testvg.core","test3-page","testvg.core/test3-page",-1619411466,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"test3-page","test3-page",92266976,null),"src/cljs/testvg/core.cljs",17,1,187,187,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.test3_page)?testvg.core.test3_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22915__auto__)){
var vec__29314 = params__22915__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.test3_page;},new cljs.core.Symbol("testvg.core","test3-page","testvg.core/test3-page",-1619411466,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"test3-page","test3-page",92266976,null),"src/cljs/testvg/core.cljs",17,1,187,187,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.test3_page)?testvg.core.test3_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/test3",action__22914__auto___29315);

var action__22914__auto___29318 = (function (params__22915__auto__){
if(cljs.core.map_QMARK_.call(null,params__22915__auto__)){
var map__29316 = params__22915__auto__;
var map__29316__$1 = ((cljs.core.seq_QMARK_.call(null,map__29316))?cljs.core.apply.call(null,cljs.core.hash_map,map__29316):map__29316);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.bonus_page;},new cljs.core.Symbol("testvg.core","bonus-page","testvg.core/bonus-page",-539130242,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"bonus-page","bonus-page",1977334356,null),"src/cljs/testvg/core.cljs",17,1,194,194,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.bonus_page)?testvg.core.bonus_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22915__auto__)){
var vec__29317 = params__22915__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.bonus_page;},new cljs.core.Symbol("testvg.core","bonus-page","testvg.core/bonus-page",-539130242,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"bonus-page","bonus-page",1977334356,null),"src/cljs/testvg/core.cljs",17,1,194,194,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.bonus_page)?testvg.core.bonus_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/bonus",action__22914__auto___29318);

var action__22914__auto___29321 = (function (params__22915__auto__){
if(cljs.core.map_QMARK_.call(null,params__22915__auto__)){
var map__29319 = params__22915__auto__;
var map__29319__$1 = ((cljs.core.seq_QMARK_.call(null,map__29319))?cljs.core.apply.call(null,cljs.core.hash_map,map__29319):map__29319);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.chart_page;},new cljs.core.Symbol("testvg.core","chart-page","testvg.core/chart-page",-1935430722,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"chart-page","chart-page",1655036992,null),"src/cljs/testvg/core.cljs",17,1,200,200,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.chart_page)?testvg.core.chart_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22915__auto__)){
var vec__29320 = params__22915__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.chart_page;},new cljs.core.Symbol("testvg.core","chart-page","testvg.core/chart-page",-1935430722,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"chart-page","chart-page",1655036992,null),"src/cljs/testvg/core.cljs",17,1,200,200,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.chart_page)?testvg.core.chart_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/chart",action__22914__auto___29321);

testvg.core.hook_browser_navigation_BANG_ = (function testvg$core$hook_browser_navigation_BANG_(){
var G__29323 = (new goog.History());
goog.events.listen(G__29323,goog.history.EventType.NAVIGATE,((function (G__29323){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__29323))
);

G__29323.setEnabled(true);

return G__29323;
});
testvg.core.mount_root = (function testvg$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.current_page], null),document.getElementById("app"));
});
testvg.core.init_BANG_ = (function testvg$core$init_BANG_(){
testvg.core.hook_browser_navigation_BANG_.call(null);

return testvg.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
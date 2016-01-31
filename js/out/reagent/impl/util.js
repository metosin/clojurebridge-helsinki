// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = (function (){var G__10595 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10595) : cljs.core.atom.call(null,G__10595));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__10596 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10596) : cljs.core.deref.call(null,G__10596));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__10597 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10597) : f.call(null,G__10597));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__10600 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10600,(0),null);
var parts = cljs.core.nthnext(vec__10600,(1));
if(cljs.core.truth_((function (){var G__10601 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__10601) : reagent.impl.util.dont_camel_case.call(null,G__10601));
})())){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__10603__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__4214__auto___10604 = self__.p;
if(cljs.core.truth_(or__4214__auto___10604)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__10603 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__10605__i = 0, G__10605__a = new Array(arguments.length -  1);
while (G__10605__i < G__10605__a.length) {G__10605__a[G__10605__i] = arguments[G__10605__i + 1]; ++G__10605__i;}
  a = new cljs.core.IndexedSeq(G__10605__a,0);
} 
return G__10603__delegate.call(this,self__,a);};
G__10603.cljs$lang$maxFixedArity = 1;
G__10603.cljs$lang$applyTo = (function (arglist__10606){
var self__ = cljs.core.first(arglist__10606);
var a = cljs.core.rest(arglist__10606);
return G__10603__delegate(self__,a);
});
G__10603.cljs$core$IFn$_invoke$arity$variadic = G__10603__delegate;
return G__10603;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args10602){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10602)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10607__delegate = function (a){
var _ = this;
var or__4214__auto___10608 = self__.p;
if(cljs.core.truth_(or__4214__auto___10608)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__10607 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__10609__i = 0, G__10609__a = new Array(arguments.length -  0);
while (G__10609__i < G__10609__a.length) {G__10609__a[G__10609__i] = arguments[G__10609__i + 0]; ++G__10609__i;}
  a = new cljs.core.IndexedSeq(G__10609__a,0);
} 
return G__10607__delegate.call(this,a);};
G__10607.cljs$lang$maxFixedArity = 0;
G__10607.cljs$lang$applyTo = (function (arglist__10610){
var a = cljs.core.seq(arglist__10610);
return G__10607__delegate(a);
});
G__10607.cljs$core$IFn$_invoke$arity$variadic = G__10607__delegate;
return G__10607;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4793__auto__,writer__4794__auto__,opt__4795__auto__){
return cljs.core._write(writer__4794__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4404__auto__ = cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4404__auto__)){
var c1 = temp__4404__auto__;
var temp__4404__auto____$1 = cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4404__auto____$1)){
var c2 = temp__4404__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$class,class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4404__auto__ = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4404__auto__)){
var s1 = temp__4404__auto__;
var temp__4404__auto____$1 = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4404__auto____$1)){
var s2 = temp__4404__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = (function (){var G__10611 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10611) : cljs.core.atom.call(null,G__10611));
})();
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e10613){if((e10613 instanceof Object)){
var e = e10613;

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e10613;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_10618 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_10618){
return (function (){
var _STAR_always_update_STAR_10619 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10619;
}});})(_STAR_always_update_STAR_10618))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10618;
}}catch (e10617){if((e10617 instanceof Object)){
var e = e10617;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e10617;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__10625_10630 = cljs.core.seq(cljs.core.vals((function (){var G__10629 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10629) : cljs.core.deref.call(null,G__10629));
})()));
var chunk__10626_10631 = null;
var count__10627_10632 = (0);
var i__10628_10633 = (0);
while(true){
if((i__10628_10633 < count__10627_10632)){
var v_10634 = chunk__10626_10631.cljs$core$IIndexed$_nth$arity$2(null,i__10628_10633);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_10634);

var G__10635 = seq__10625_10630;
var G__10636 = chunk__10626_10631;
var G__10637 = count__10627_10632;
var G__10638 = (i__10628_10633 + (1));
seq__10625_10630 = G__10635;
chunk__10626_10631 = G__10636;
count__10627_10632 = G__10637;
i__10628_10633 = G__10638;
continue;
} else {
var temp__4404__auto___10639 = cljs.core.seq(seq__10625_10630);
if(temp__4404__auto___10639){
var seq__10625_10640__$1 = temp__4404__auto___10639;
if(cljs.core.chunked_seq_QMARK_(seq__10625_10640__$1)){
var c__4999__auto___10641 = cljs.core.chunk_first(seq__10625_10640__$1);
var G__10642 = cljs.core.chunk_rest(seq__10625_10640__$1);
var G__10643 = c__4999__auto___10641;
var G__10644 = cljs.core.count(c__4999__auto___10641);
var G__10645 = (0);
seq__10625_10630 = G__10642;
chunk__10626_10631 = G__10643;
count__10627_10632 = G__10644;
i__10628_10633 = G__10645;
continue;
} else {
var v_10646 = cljs.core.first(seq__10625_10640__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_10646);

var G__10647 = cljs.core.next(seq__10625_10640__$1);
var G__10648 = null;
var G__10649 = (0);
var G__10650 = (0);
seq__10625_10630 = G__10647;
chunk__10626_10631 = G__10648;
count__10627_10632 = G__10649;
i__10628_10633 = G__10650;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

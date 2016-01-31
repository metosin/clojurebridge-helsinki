// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 * from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (comp){
this.comp = comp;
})

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4793__auto__,writer__4794__auto__,opt__4795__auto__){
return cljs.core._write(writer__4794__auto__,"reagent.impl.template/NativeWrapper");
});

reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(comp){
return (new reagent.impl.template.NativeWrapper(comp));
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
var or__4214__auto__ = reagent.impl.template.named_QMARK_(x);
if(cljs.core.truth_(or__4214__auto__)){
return or__4214__auto__;
} else {
return typeof x === 'string';
}
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
var or__4214__auto__ = reagent.impl.template.hiccup_tag_QMARK_(x);
if(cljs.core.truth_(or__4214__auto__)){
return or__4214__auto__;
} else {
return (cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper));
}
});
reagent.impl.template.prop_name_cache = {"class": "className", "for": "htmlFor", "charset": "charSet"};
reagent.impl.template.obj_get = (function reagent$impl$template$obj_get(o,k){
if(cljs.core.truth_(o.hasOwnProperty(k))){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(cljs.core.truth_(reagent.impl.template.named_QMARK_(k))){
var temp__4406__auto__ = reagent.impl.template.obj_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__4406__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name(k)] = reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__4406__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if((typeof x === 'string') || (typeof x === 'number') || (cljs.core.fn_QMARK_(x))){
return x;
} else {
if(cljs.core.truth_(reagent.impl.template.named_QMARK_(x))){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (o,k,v){
var G__10334 = o;
(G__10334[reagent.impl.template.cached_prop_name(k)] = reagent$impl$template$convert_prop_value(v));

return G__10334;
}),{},x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__10335__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__10335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10336__i = 0, G__10336__a = new Array(arguments.length -  0);
while (G__10336__i < G__10336__a.length) {G__10336__a[G__10336__i] = arguments[G__10336__i + 0]; ++G__10336__i;}
  args = new cljs.core.IndexedSeq(G__10336__a,0);
} 
return G__10335__delegate.call(this,args);};
G__10335.cljs$lang$maxFixedArity = 0;
G__10335.cljs$lang$applyTo = (function (arglist__10337){
var args = cljs.core.seq(arglist__10337);
return G__10335__delegate(args);
});
G__10335.cljs$core$IFn$_invoke$arity$variadic = G__10335__delegate;
return G__10335;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id,class$){
var p = (((props == null))?{}:props);
if((cljs.core.some_QMARK_(id)) && (((p["id"]) == null))){
(p["id"] = id);
} else {
}

if(cljs.core.some_QMARK_(class$)){
var old_10338 = (p["className"]);
(p["className"] = ((cljs.core.some_QMARK_(old_10338))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old_10338)].join(''):class$));
} else {
}

return p;
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["className"]);
var no_id_class = ((id == null)) && ((class$ == null));
if((no_id_class) && (cljs.core.empty_QMARK_(props))){
return null;
} else {
var objprops = reagent.impl.template.convert_prop_value(props);
if(no_id_class){
return objprops;
} else {
return reagent.impl.template.set_id_class(objprops,id,class$);
}
}
});
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.input_set_value = (function reagent$impl$template$input_set_value(this$){
var temp__4408__auto__ = (this$["cljsInputValue"]);
if((temp__4408__auto__ == null)){
return null;
} else {
var value = temp__4408__auto__;
(this$["cljsInputDirty"] = false);

var node = (this$["getDOMNode"])();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(node["value"]))){
return (node["value"] = value);
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
var res = (function (){var G__10340 = e;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__10340) : on_change.call(null,G__10340));
})();
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_later(((function (res){
return (function (){
return reagent.impl.template.input_set_value(this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__4202__auto__ = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__4202__auto__)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__4202__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__10343 = jsprops;
(G__10343["defaultValue"] = value);

(G__10343["onChange"] = ((function (G__10343,v,value,on_change){
return (function (p1__10341_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change,p1__10341_SHARP_);
});})(G__10343,v,value,on_change))
);

return G__10343;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
return ((x === "input")) || ((x === "textarea"));
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$display_DASH_name,"ReagentInput",cljs.core.constant$keyword$component_DASH_did_DASH_update,reagent.impl.template.input_set_value,cljs.core.constant$keyword$component_DASH_will_DASH_unmount,reagent.impl.template.input_unmount,cljs.core.constant$keyword$reagent_DASH_render,(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup(this$,jsprops);

var G__10344 = argv;
var G__10345 = comp;
var G__10346 = jsprops;
var G__10347 = first_child;
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(G__10344,G__10345,G__10346,G__10347) : reagent.impl.template.make_element.call(null,G__10344,G__10345,G__10346,G__10347));
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(argv,comp,jsprops,first_child){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class(reagent.impl.template.input_spec);
} else {
}

var G__10352 = argv;
var G__10353 = comp;
var G__10354 = jsprops;
var G__10355 = first_child;
return (reagent.impl.template.reagent_input_class.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.reagent_input_class.cljs$core$IFn$_invoke$arity$4(G__10352,G__10353,G__10354,G__10355) : reagent.impl.template.reagent_input_class.call(null,G__10352,G__10353,G__10354,G__10355));
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__10357 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10357,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10357,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10357,(2),null);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null);

return {"name": tag, "id": id, "className": class_SINGLEQUOTE_};
});
reagent.impl.template.fn_to_class = (function reagent$impl$template$fn_to_class(f){


var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.constant$keyword$reagent_DASH_render,f);
var res = reagent.impl.component.create_class(withrender);
var wrapf = reagent.impl.util.cached_react_class(res);
reagent.impl.util.cache_react_class(f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function reagent$impl$template$as_class(tag){
var temp__4406__auto__ = reagent.impl.util.cached_react_class(tag);
if((temp__4406__auto__ == null)){
return reagent.impl.template.fn_to_class(tag);
} else {
var cached_class = temp__4406__auto__;
return cached_class;
}
});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constant$keyword$key);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__4406__auto__ = (function (){var G__10359 = cljs.core.meta(v);
var G__10359__$1 = (((G__10359 == null))?null:reagent.impl.template.get_key(G__10359));
return G__10359__$1;
})();
if((temp__4406__auto__ == null)){
return reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__4406__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.template.as_class(tag);
var jsprops = {"argv": v};
var G__10361_10362 = v;
var G__10361_10363__$1 = (((G__10361_10362 == null))?null:reagent.impl.template.key_from_vec(G__10361_10362));
var G__10361_10364__$2 = (((G__10361_10363__$1 == null))?null:(jsprops["key"] = G__10361_10363__$1));

return (React["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return (new reagent.impl.template.NativeWrapper({"name": c, "id": null, "class": null}));
});
reagent.impl.template.tag_name_cache = {};
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
if(cljs.core.truth_(reagent.impl.template.hiccup_tag_QMARK_(x))){
var temp__4406__auto__ = reagent.impl.template.obj_get(reagent.impl.template.tag_name_cache,cljs.core.name(x));
if((temp__4406__auto__ == null)){
return (reagent.impl.template.tag_name_cache[cljs.core.name(x)] = reagent.impl.template.parse_tag(x));
} else {
var s = temp__4406__auto__;
return s;
}
} else {
if((x instanceof reagent.impl.template.NativeWrapper)){
return x.comp;
} else {
return null;
}
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(tag,argv){
var temp__4404__auto__ = reagent.impl.template.cached_parse(tag);
if(cljs.core.truth_(temp__4404__auto__)){
var parsed = temp__4404__auto__;
var comp = (parsed["name"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_(props));
var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = ((hasprops)?(2):(1));
if(cljs.core.truth_(reagent.impl.template.input_component_QMARK_(comp))){
var G__10372 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input,argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__10372) : reagent.impl.template.as_element.call(null,G__10372));
} else {
var p = (function (){var temp__4406__auto__ = (function (){var G__10373 = cljs.core.meta(argv);
var G__10373__$1 = (((G__10373 == null))?null:reagent.impl.template.get_key(G__10373));
return G__10373__$1;
})();
if((temp__4406__auto__ == null)){
return jsprops;
} else {
var key = temp__4406__auto__;
var G__10374 = (((jsprops == null))?{}:jsprops);
(G__10374["key"] = key);

return G__10374;
}
})();
var G__10375 = argv;
var G__10376 = comp;
var G__10377 = p;
var G__10378 = first_child;
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(G__10375,G__10376,G__10377,G__10378) : reagent.impl.template.make_element.call(null,G__10375,G__10376,G__10377,G__10378));
}
} else {
return null;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));

var temp__4406__auto__ = reagent.impl.template.native_element(tag,v);
if((temp__4406__auto__ == null)){
return reagent.impl.template.reag_element(tag,v);
} else {
var ne = temp__4406__auto__;
return ne;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
var G__10382 = x;
return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$1(G__10382) : reagent.impl.template.expand_seq.call(null,G__10382));

} else {
return x;

}
}
}
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__5099__auto___10383 = a.length;
var i_10384 = (0);
while(true){
if((i_10384 < n__5099__auto___10383)){
(a[i_10384] = reagent.impl.template.as_element((a[i_10384])));

var G__10385 = (i_10384 + (1));
i_10384 = G__10385;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__5099__auto___10386 = a.length;
var i_10387 = (0);
while(true){
if((i_10387 < n__5099__auto___10386)){
var val_10388 = (a[i_10387]);
if((cljs.core.vector_QMARK_(val_10388)) && ((reagent.impl.template.key_from_vec(val_10388) == null))){
(o["no-key"] = true);
} else {
}

(a[i_10387] = reagent.impl.template.as_element(val_10388));

var G__10389 = (i_10387 + (1));
i_10387 = G__10389;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = {};
var res = (((reagent.ratom._STAR_ratom_context_STAR_ == null))?reagent.impl.template.expand_seq_dev(x,ctx):reagent.ratom.capture_derefed(((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
,ctx));
if(cljs.core.truth_(reagent.ratom.captured(ctx))){
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__10391 = (cljs.core.count(argv) - first_child);
switch (G__10391) {
case (0):
return (React["createElement"])(comp,jsprops);

break;
case (1):
return (React["createElement"])(comp,jsprops,reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child)));

break;
default:
return (React["createElement"]).apply(null,cljs.core.reduce_kv(((function (G__10391){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element(v));
} else {
}

return a;
});})(G__10391))
,[comp,jsprops],argv));

}
});

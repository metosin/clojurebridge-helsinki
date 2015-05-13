// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('ui.main');
goog.require('cljs.core');
goog.require('reagent.core');
ui.main.main_view = (function ui$main$main_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$loading_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$logo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"http://www.clojurebridge.org",cljs.core.constant$keyword$target,"new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$src,"img/clojurebridge-logo.png"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1$script,"ClojureBridge - Helsinki"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Tervetuloa ohjelmoimaan!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$section$intro,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"ClojureBridge on naisille  suunnattu ohjelmointiworkshop, jonka tarkoitus on innostaa naisia ohjelmoinnin kiehtovaan maailmaan. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"http://www.clojurebridge.org/about",cljs.core.constant$keyword$target,"new"], null),"ClojureBridge"], null)," on vapaaehtoisista koostuva verkosto, joka j\u00E4rjest\u00E4\u00E4 workshop-tyyppisi\u00E4 ohjelmointikursseja naisille. Esikuvana on toiminut RailsGirls-verkosto, jonka toimintamallia ClojureBridge seuraa."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Mukaan maksuttomaan tapahtumaan ovat tervetulleita kaikki naiseksi identifioituvat. My\u00F6s miehet ovat tervetulleita, mik\u00E4li tulevat tapahtumaan naisen avecina. "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"ClojureBridgess\u00E4 p\u00E4\u00E4set tutustumaan ohjelmoinnin konsepteihin k\u00E4ytt\u00E4en modernia ohjelmointikielt\u00E4, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"http://www.clojure.org",cljs.core.constant$keyword$target,"new"], null),"Clojurea."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Kurssi ei edellyt\u00E4 sinulta aiempaa ohjelmointikokemusta, my\u00F6s vasta-alkajat voivat siis osallistua."], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$section$practicalinfo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Aikataulu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"ClojureBridge koostuu seuraavista tapahtumista: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Installfest eli kehitysymp\u00E4rist\u00F6n asennusty\u00F6paja lauantaina 16.5.2015 klo 12-14."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,"Varsinainen workshop-p\u00E4iv\u00E4 17.5.2015 klo 10-17"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Tapahtuma on kaksip\u00E4iv\u00E4inen. Tarjoamme tapahtumaan osallistuville lounaan. P\u00E4\u00E4asiallinen kurssi on sunnuntaina 17.5.2015. Tapahtuman aloittava Installfest j\u00E4rjestet\u00E4\u00E4n 16.5.2015 klo 12 Lasipalatsin Kaupunkiverstaassa, ks. yhteystiedot. Installfestin tarkoitus on opastaa osallistujat ohjelmointiymp\u00E4rist\u00F6n k\u00E4ytt\u00F6\u00F6n ja tekem\u00E4\u00E4n koneisiinsa tarvittavat asennukset.  Varsinainen kurssi j\u00E4rjestet\u00E4\u00E4n sunnuntaina 17.5.2015 klo 10-17. Installfestiin on osallistuttava, mik\u00E4li aikoo osallistua kurssille, sill\u00E4 sunnuntain aikataulu on melko tiivis, eik\u00E4 t\u00E4ll\u00F6in valitettavasti ole aikaa pystytell\u00E4 kehitysymp\u00E4rist\u00F6j\u00E4. Tule siis lauantaina piipahtamaan, vaikka osaisitkin itse asentaa ymp\u00E4rist\u00F6n."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Ilmoittautuminen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Tapahtumaan mahtuu 30 ensiksi ilmoittautunutta. Ilmoittaudu tapahtumaan ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"https://www.eventbrite.com/e/clojurebridge-helsinki-tickets-16653259347",cljs.core.constant$keyword$target,"new"], null),"t\u00E4\u00E4lt\u00E4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Ohjeet ja yhteystiedot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Mukaasi tarvitset wifill\u00E4 varustetun kannettavan tietokoneen. Tulet asentamaan koneelle ohjelmia, joten sinulla olisi hyv\u00E4 olla p\u00E4\u00E4k\u00E4ytt\u00E4j\u00E4tunnus koneellesi. "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Peruutuksissa tai muissa kysymyksiss\u00E4 pyyd\u00E4mme ottamaan yhteytt\u00E4 ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$mailto,"clojurebridge.helsinki@gmail.com"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Kurssipaikkana toimii kaupunkiverstas Lasipalatsilla. Lis\u00E4tietoa l\u00F6yd\u00E4t kaupunkiverstaasta ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"http://www.kaupunkiverstas.fi/",cljs.core.constant$keyword$target,"new"], null),"t\u00E4\u00E4lt\u00E4."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$sponsor,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Tapahtuman mahdollistavat yhteisty\u00F6kumppanimme ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"http://www.metosin.fi/",cljs.core.constant$keyword$target,"new"], null),"Metosin"], null)," ja ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"http://www.solita.fi/",cljs.core.constant$keyword$target,"new"], null),"Solita"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"http://www.metosin.fi",cljs.core.constant$keyword$target,"new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img$sponsor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$src,"img/musta_vaaka.svg",cljs.core.constant$keyword$width,"300px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"http://www.solita.fi",cljs.core.constant$keyword$target,"new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img$sponsor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$src,"img/solita_logo.png",cljs.core.constant$keyword$width,"300px"], null)], null)], null)], null)], null)], null);
});
ui.main.mount_root_BANG_ = (function ui$main$mount_root_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.main.main_view], null),(function (){var G__10126 = "app";
return document.getElementById(G__10126);
})());
});
ui.main.mount_root_BANG_();

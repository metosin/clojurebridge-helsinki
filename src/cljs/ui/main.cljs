(ns ui.main
  (:require [reagent.core :as reagent :refer [atom]]))

(defn main-view []
  [:div.loading-page
   [:div.logo
    [:a {:href "http://www.clojurebridge.org" :target "new"}
     [:img {:src "img/clojurebridge-logo.png"}]]]
   [:div.wrapper [:h1.script "ClojureBridge - Helsinki"]
   [:h2 "Tervetuloa ohjelmoimaan!"]
   [:section.intro
   [:p "ClojureBridge on naisille  suunnattu ohjelmointiworkshop, jonka tarkoitus on innostaa naisia ohjelmoinnin kiehtovaan maailmaan. " [:a {:href "http://www.clojurebridge.org/about" :target "new"} "ClojureBridge"] " on vapaaehtoisista koostuva verkosto, joka järjestää workshop-tyyppisiä ohjelmointikursseja naisille. Esikuvana on toiminut RailsGirls-verkosto, jonka toimintamallia ClojureBridge seuraa."
    ]
    [:p "Mukaan maksuttomaan tapahtumaan ovat tervetulleita kaikki naiseksi identifioituvat. Myös miehet ovat tervetulleita, mikäli tulevat tapahtumaan naisen avecina. "]
    [:p "ClojureBridgessä pääset tutustumaan ohjelmoinnin konsepteihin käyttäen modernia ohjelmointikieltä, " [:a {:href "http://www.clojure.org" :target "new"} "Clojurea."] ]
    [:p "Kurssi ei edellytä sinulta aiempaa ohjelmointikokemusta, myös vasta-alkajat voivat siis osallistua."]
    ]
   [:section.practicalinfo
    [:h2 "Aikataulu"]
    [:p "ClojureBridge koostuu seuraavista tapahtumista: "]
    [:p
     [:ul
      [:li "Installfest eli kehitysympäristön asennustyöpaja lauantaina 16.5.2015 klo 12-14."]
      [:li "Varsinainen workshop-päivä 17.5.2015 klo 10-17"]]]
     
    [:p  "Tapahtuma on kaksipäiväinen. Tarjoamme tapahtumaan osallistuville lounaan. Pääasiallinen kurssi on sunnuntaina 17.5.2015. Tapahtuman aloittava Installfest järjestetään 16.5.2015 klo 12 Lasipalatsin Kaupunkiverstaassa, ks. yhteystiedot. Installfestin tarkoitus on opastaa osallistujat ohjelmointiympäristön käyttöön ja tekemään koneisiinsa tarvittavat asennukset.  Varsinainen kurssi järjestetään sunnuntaina 17.5.2015 klo 10-17. Installfestiin on osallistuttava, mikäli aikoo osallistua kurssille, sillä sunnuntain aikataulu on melko tiivis, eikä tällöin valitettavasti ole aikaa pystytellä kehitysympäristöjä. Tule siis lauantaina piipahtamaan, vaikka osaisitkin itse asentaa ympäristön."
     ]
    [:h2 "Ilmoittautuminen"]
    [:p "Tapahtumaan mahtuu 30 ensiksi ilmoittautunutta. Ilmoittaudu tapahtumaan " [:a {:href "https://www.eventbrite.com/e/clojurebridge-helsinki-tickets-16653259347" :target "new"} "täältä"]]
    [:h2 "Ohjeet ja yhteystiedot"]
    [:p "Mukaasi tarvitset wifillä varustetun kannettavan tietokoneen. Tulet asentamaan koneelle ohjelmia, joten sinulla olisi hyvä olla pääkäyttäjätunnus koneellesi. "]
    [:p "Peruutuksissa tai muissa kysymyksissä pyydämme ottamaan yhteyttä " [:mailto "clojurebridge.helsinki@gmail.com"]]
     [:p "Kurssipaikkana toimii kaupunkiverstas Lasipalatsilla. Lisätietoa löydät kaupunkiverstaasta " [:a {:href "http://www.kaupunkiverstas.fi/" :target "new"} "täältä."]] 
   ]
    
     [:div.sponsor
      [:h2 "Tapahtuman mahdollistaa yhteistyökumppanimme " [:a {:href "http://www.metosin.fi/" :target "new"} "Metosin"]]
    [:a {:href "http://www.metosin.fi" :target "new"}
     [:img.sponsor {:src "img/musta_vaaka.svg" :width "300px"}]]]
     ]])

(defn mount-root! []
  (reagent/render [main-view] (js/document.getElementById "app")))

(mount-root!)

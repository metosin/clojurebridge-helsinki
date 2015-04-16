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
   [:p "ClojureBridge on naisille  suunnattu ohjelmointiworkshop, jonka tarkoitus on innostaa naisia ohjelmointiin ja webbisovellusten kiehtovaan maailmaan. Mukaan maksuttomaan tapahtumaan ovat tervetulleita kaikki naiseksi identifioituvat. Myös miehet ovat tervetulleita, mikäli tulevat tapahtumaan naisen avecina. "]
    [:p "ClojureBridgessä pääset tutustumaan ohjelmoinnin konsepteihin käyttäen modernia ohjelmointikieltä, " [:a {:href "http://www.clojure.org" :target "new"} "Clojurea."] ]
    ]
   [:section.practicalinfo
    [:h2 "Aikataulu"]
    [:p "Tapahtuma koostuu seuraavista osista: "]
    [:p
     [:ul
      [:li "Installfest lauantaina 16.5.2015 klo 12-14."]
      [:li "Varsinainen workshop-päivä 17.5.2015 klo 10-17"]]]
     
    [:p  "Tapahtuma on kaksipäiväinen. Pääasiallinen kurssi on sunnuntaina 17.5.2015. Tapahtuman aloittava Installfest järjestetään 16.5.2015 klo 12 Lasipalatsin Kaupunkiverstaassa, ks. yhteystiedot. Installfestin tarkoitus on opastaa osallistujat ohjelmointiympäristön käyttöön ja tekemään koneisiinsa tarvittavat asennukset.  Varsinainen kurssi järjestetään sunnuntaina 17.5.2015 klo 10-17. Installfestiin on osallistuttava, mikäli aikoo osallistua kurssille, sillä sunnuntaina ei ole aikaa pystytellä kehitysympäristöjä. Tule siis piipahtamaan, vaikka osaisitkin itse asentaa ympäristön."
     ]
    [:h2 "Ilmoittautuminen"]
    [:p "Tapahtumaan mahtuu 30 ensiksi ilmoittautunutta. Ilmoittautumislinkki päivitetään tänne piakkoin."]
    [:h2 "Ohjeet ja yhteystiedot"]
    [:p "Mukaasi tarvitset wifillä varustetun kannettavan tietokoneen. Tulet asentamaan koneelle ohjelmia, joten sinulla olisi hyvä olla pääkäyttäjätunnus koneellesi. "]
    [:p "Peruutuksissa tai muissa kysymyksissä pyydämme ottamaan yhteyttä " [:mailto "annemari.seppola@gmail.com"] ]
    
   ]]])

(defn mount-root! []
  (reagent/render [main-view] (js/document.getElementById "app")))

(mount-root!)

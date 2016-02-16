(ns ui.main
  (:require [reagent.core :as reagent :refer [atom]]))

(defn main-view []
  [:div.loading-page
   [:div.scene
    [:div.logo
     [:a {:href "http://www.clojurebridge.org" :target "new"}
      [:img {:src "img/clojurebridge-logo.png"}]]]]
   [:div.wrapper [:h1.script "ClojureBridge - Helsinki"]
   [:h2 "Tervetuloa ohjelmoimaan!"]
   [:section.intro
   [:p "ClojureBridge on naisille  suunnattu ohjelmointiworkshop, jonka tarkoitus on innostaa naisia ohjelmoinnin kiehtovaan maailmaan. " [:a {:href "http://www.clojurebridge.org/about" :target "new"} "ClojureBridge"] " on vapaaehtoisista koostuva verkosto, joka järjestää workshop-tyyppisiä ohjelmointikursseja naisille. Esikuvana on toiminut RailsBridge-verkosto, jonka toimintamallia ClojureBridge seuraa."
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
      [:li "Installfest eli kehitysympäristön asennustyöpaja perjantaina 18.3.2016 klo 18-20."]
      [:li "Varsinainen workshop-päivä 19.3.2016 klo 10-17"]]]
     
    [:p  "Tapahtuma on kaksipäiväinen. Tarjoamme tapahtumaan osallistuville lounaan. Tapahtuman aloittava Installfest järjestetään 18.3.2016 klo 18 Goforen toimistolla, ks. yhteystiedot. Installfestin tarkoitus on opastaa osallistujat ohjelmointiympäristön käyttöön ja tekemään koneisiinsa tarvittavat asennukset.  Varsinainen kurssi järjestetään lauantaina 19.3.2016 klo 10-17. Installfestiin on osallistuttava, mikäli aikoo osallistua kurssille, sillä lauantain aikataulu on melko tiivis, eikä tällöin valitettavasti ole aikaa pystytellä kehitysympäristöjä. Tule siis perjantaina piipahtamaan, vaikka osaisitkin itse asentaa ympäristön."
     ]
    [:h2 "Ilmoittautuminen"]
    [:p "Tapahtumaan mahtuu 30 ensiksi ilmoittautunutta. Ilmoittaudu tapahtumaan " [:a {:href "https://www.eventbrite.com/e/clojurebridge-helsinki-a-programming-workshop-for-women-tickets-21109244318" :target "new"} "täältä"]]
    [:h2 "Ohjeet ja yhteystiedot"]
    [:p "Mukaasi tarvitset wifillä varustetun kannettavan tietokoneen. Tulet asentamaan koneelle ohjelmia, joten sinulla olisi hyvä olla pääkäyttäjätunnus koneellesi."]
    [:p "Peruutuksissa tai muissa kysymyksissä pyydämme ottamaan yhteyttä " [:mailto "clojurebridge.helsinki@gmail.com"]]
     [:p "Kurssipaikkana toimii Goforen toimisto Kampissa, osoiteessa Urho Kekkosen katu 7 B, 3.krs, Helsinki"] 
   ]
    
     [:div.sponsor
      [:h2 "Tapahtuman mahdollistavat yhteistyökumppanimme "
       [:a {:href "http://www.bitodi.com/" :target "new"} "Bitodi"] ", "
       [:a {:href "http://www.gofore.com/" :target "new"} "Gofore"] ", "
       [:a {:href "http://www.metosin.fi/" :target "new"} "Metosin"] " ja "
       [:a {:href "http://www.solita.fi/" :target "new"} "Solita"]]
      [:div.sponsor-logos
       [:a {:href "http://www.bitodi.com" :target "new"}
        [:img.sponsor {:src "img/bitodi_logo.png" :width "300px"}]]
       [:a {:href "http://www.gofore.com" :target "new"}
        [:img.sponsor {:src "img/gofore_logo.png" :width "300px"}]]
       [:a {:href "http://www.metosin.fi" :target "new"}
        [:img.sponsor {:src "img/musta_vaaka.svg" :width "300px"}]]
       [:a {:href "http://www.solita.fi" :target "new"}
        [:img.sponsor {:src "img/solita_logo.png" :width "300px"}]]]
      ]
    
    
     ]])

(defn mount-root! []
  (reagent/render [main-view] (js/document.getElementById "app")))

(mount-root!)

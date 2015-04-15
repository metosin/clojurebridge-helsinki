(ns ui.main
  (:require [reagent.core :as reagent :refer [atom]]))

(defn main-view []
  [:div.loading-page
   [:div.logo
    [:a {:href "http://www.clojurebridge.org" :target "new"}
     [:img {:src "img/clojurebridge-logo.png"}]]]
   [:h1 "ClojureBridge - Helsinki"]
   [:p "Tulossa....."]])

(defn mount-root! []
  (reagent/render [main-view] (js/document.getElementById "app")))

(mount-root!)

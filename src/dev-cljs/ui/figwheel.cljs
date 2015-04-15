(ns ^:figwheel-no-load ui.figwheel
  (:require [figwheel.client :as fw]
            [ui.main :as m]))

(fw/watch-and-reload
  :websocket-url "ws://localhost:3499/figwheel-ws"
  :jsload-callback m/mount-root!)

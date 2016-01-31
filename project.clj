(defproject foo "0.0.0-SNAPSHOT"

  :dependencies [[org.clojure/clojure "1.7.0-beta1"]
                 [org.clojure/tools.reader "0.9.1"]
                 [org.clojure/clojurescript "0.0-3196"]
                 [reagent "0.5.0"]]

  :source-paths    ["src/cljs"]
  :test-paths      ["test/cljs"]
  :resource-paths  ["resources"]

  :auto-clean false

  :less {:source-paths  ["src/less"]
         :target-path   "target/generated/static/css"
         :source-map    true}

  :figwheel {:http-server-root  "static"
             :server-port       3499
             :css-dirs          ["target/generated/static/css"]
             :repl              false
             :server-logfile    "target/figwheel-logfile.log"}

  :clean-targets [:target-path :compile-path "gh-pages/js"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs" "src/dev-cljs"]
                        :compiler  {:main            "ui.figwheel"
                                    :asset-path      "js/out"
                                    :output-to       "target/generated/static/js/app.js"
                                    :output-dir      "target/generated/static/js/out"
                                    :source-map      true
                                    :optimizations   :none
                                    :cache-analysis  true
                                    :pretty-print    true}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {:main           "ui.main"
                                   :output-to      "gh-pages/js/app.js"
                                   :output-dir     "gh-pages/js/out"
                                   :optimizations  :advanced
                                   :elide-asserts  true
                                   :pretty-print   false}}]}

  :profiles {:dev {:source-paths ["src/dev-cljs"]
                   :resource-paths ["target/generated"]
                   :dependencies [[figwheel "0.2.6"]
                                  [http-kit "2.1.19"]]
                   :plugins [[lein-pdo "0.1.1"]
                             [lein-cljsbuild "1.0.5"]
                             [lein-figwheel "0.2.6" :exclusions [org.clojure/clojure org.clojure/clojurescript org.clojure/tools.reader http-kit]]
                             [deraen/lein-less4j "0.2.1"]]}
             :prod {:less {:target-path "gh-pages/css"}}}

  :aliases {"develop" ["do" "clean" ["pdo" ["figwheel"] ["less4j" "auto"]]]
            "prod" ["with-profile" "prod" "do" "clean" ["less4j" "once"] ["cljsbuild" "once" "prod"]]})

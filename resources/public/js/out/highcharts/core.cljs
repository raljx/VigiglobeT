(ns testvg.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
    (:import goog.History))
    
    
(ns highcharts.core
(:require [reagent.core :as reagent]))


;; -------------------------
;; Functions

(defn toggle-value [a k value1 value2]
;; Permet de switcher entre Start et Stop
  (if (= (@a k) value1)
    (swap! a assoc k value2)
    (swap! a assoc k value1)
  ))

(defn timer-component [typevar]
;; Incrémente @seconds-elapsed de 1 toute les 1000ms
	(let [state (atom {:btn-value "Stop"})]
	(let [seconds-elapsed (atom 0)]
  
		(fn []
			;; redemarrage du comptage
			(if (= @seconds-elapsed "Stop")  (reset! seconds-elapsed 0))
			;; Si @seconds-elapsed est bien un nombre alors on incrémente
			(if (number? @seconds-elapsed)

				(js/setTimeout #(swap! seconds-elapsed inc) 1000))
				[:div 
				;; Si @seconds-elapsed n'est pas un nombre on affiche une div d'info
				(cond (number? @seconds-elapsed) [:div "Seconds Elapsed: " @seconds-elapsed]
				:else [:div "Stop timer, click Start to restart..."]) 
				
				;; Condition pour afficher le bouton Start/Stop
				(if (= typevar 1)  

				[:input {
					:type "button"
					:value (@state :btn-value)
					:on-click (
			
						fn [] 
							(toggle-value state :btn-value "Start" "Stop")		
							(reset! seconds-elapsed (@state :btn-value))						
					)
				}])
	]))))

;; Init variables
(defonce timers (atom (sorted-map)))
(defonce counter (atom 0))

(defn add-timer []
;; Ajoute un timer à la liste
  (let [id (swap! counter inc)]
    (swap! timers assoc id {:id id :done false})))
    
(defn delete [id] 
;; Supprime un timer de la liste
(swap! timers dissoc id))

(defn timer-stats [{:keys [filt active done]}]
;; Compte le nombre de timer(s) actif(s)
  (let [props-for (fn [name])]
    [:div
     [:span#timer-count
     [:strong active] " active " (case active 1 "timer" "timers") " "]
     ]))

(defn timer-item []
;; Génère le timer
  (let [editing (atom false)]
    (fn [{:keys [id done title]}]
      [:li 
       [:div.view
       [:div [timer-component 1] ]
        [:input {
        :type "button"
        :value "Supprimer ce timer"
        :on-click #(delete id)}]]
       ])))
       
 (defn timer-app [props]
  (let [filt (atom :all)]
    (fn []
      (let [items (vals @timers)
            done (->> items (filter :done) count)
            active (- (count items) done)]
        [:div
         [:section#todoapp
          [:header#header

           [:input {
								:value "Creer un timer"           					
           					:type "button"
           					:id "new-time"
                        :on-click add-timer}]]
          (when (-> items count pos?)
            [:div
             [:section#main
             

              [:ul#timer-list
               (for [todo (filter (case @filt
                                    :active (complement :done)
                                    :done :done
                                    :all identity) items)]
                 ^{:key (:id todo)} [timer-item todo])]]
             [:footer#footer
              [timer-stats {:active active :done done :filt filt}]]])]
         ]))))
     
;; -------------------------



;; Views

(defn home-page []
  [:div [:h2 "Welcome to testvg"]
   [:div [:a {:href "#/about"} "go to about page"]]
   [:div [:a {:href "#/test1"} "go to test1 page"]]
   [:div [:a {:href "#/test2"} "go to test2 page"]]
   [:div [:a {:href "#/test3"} "go to test3 page"]]
   [:div [:a {:href "#/bonus"} "go to bonus page"]]
   [:div [:a {:href "#/chart"} "go to chart page"]]
      ]
   )

(defn about-page []
  [:div [:h2 "About testvg"]
   [:div [:a {:href "#/"} "go to the home page"]]]
)
   
(defn test1-page []
  [:div [:h2 "test1"]
  [:div [timer-component]]
   [:div [:a {:href "#/"} "go to the home page"]]]
)
   
(defn test2-page []
  [:div [:h2 "test2"]
  [:div [timer-component]]
  [:div [timer-component]]
   [:div [:a {:href "#/"} "go to the home page"]]]
)

(defn test3-page []
[:div [:h2 "test3"]
  [:div [timer-component 1]]
  [:div [timer-component 1]]
  [:div [:a {:href "#/"} "go to the home page"]]]) 
  
   
(defn bonus-page []
  [:div [:h2 "Bonus page"]
  [:div [timer-app]]
  [:div [:a {:href "#/"} "go to the home page"]]]
)

(def chart-config
{:chart {:type "bar"}
:title {:text "Historic World Population by Region"}
:subtitle {:text "Source: Wikipedia.org"}
:xAxis {:categories ["Africa" "America" "Asia" "Europe" "Oceania"]
:title {:text nil}}
:yAxis {:min 0
:title {:text "Population (millions)"
:align "high"}
:labels {:overflow "justify"}}
:tooltip {:valueSuffix " millions"}
:plotOptions {:bar {:dataLabels {:enabled true}}}
:legend {:layout "vertical"
:align "right"
:verticalAlign "top"
:x -40
:y 100
:floating true
:borderWidth 1
:shadow true}
:credits {:enabled false}
:series [{:name "Year 1800"
:data [107 31 635 203 2]}
{:name "Year 1900"
:data [133 156 947 408 6]}
{:name "Year 2008"
:data [973 914 4054 732 34]}]
})
   
(defn chart-page []
   [:div [:h1 "Welcome to Reagent Cookbook!"]
[:div#example {:style {:min-width "310px" :max-width "800px"
:height "400px" :margin "0 auto"}}]
])


(defn home-did-mount []
(js/$ (fn []
(.highcharts (js/$ "#example")
(clj->js chart-config)))))
(defn home-component []
(reagent/create-class {:reagent-render chart-page
:component-did-mount home-did-mount}))


   
(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))
  
(secretary/defroute "/test1" []
  (session/put! :current-page #'test1-page))
  
(secretary/defroute "/test2" []
  (session/put! :current-page #'test2-page))
  
(secretary/defroute "/test3" []
  (session/put! :current-page #'test3-page))
  
(secretary/defroute "/bonus" []
  (session/put! :current-page #'bonus-page))
  
(secretary/defroute "/chart" []
  (session/put! :current-page #'chart-page))
;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))

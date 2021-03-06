(ns testvg.core
    (:require
    [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.dom]
              [goog.history.EventType :as EventType])
    (:import goog.History))
    
   

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
				[:p "Cliquez sur le bouton pour créer un nouveau timer"]
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
  [:p "Tout d'abords, merci de m'avoir fait découvrir Clojure. Dans le cadre de mon activité freelance et des demandes de mes clients, je me tourne plus facilement vers des frameworks JS plus 'legers' comme LungoJS (lungo.tapquo.com)
  que j'associe quelquefois à PhoneGap pour une intégration in-app"]
  [:p "J'ai donc dû appréhender ce nouveau langage via les tutos disponibles et le wiki. J'ai installé lein sur Windows 8 mais je me suis vite retourné vers ma belle Débian avec qui j'ai un rapport de simplicité exemplaire et j'ai donc pu commencer ce test"]
  [:p "J'ai choisi de hacker la fonction timer-component en y incluant une variable 'typevar' utilisée pour afficher/ cacher les boutons Start/Stop. Cela dans le seul but d'implémenter une seule fois la fonction et l'appeler à ma convenance sur les pages concernées."]
  [:p "Clojure, comme tout langage, respecte cette logique de développement, cela reste donc assez facile de récuperer les bases par rapport à un autre langage."]
  [:h3 "Test1"]
  [:p "Rien de bien compliqué, un appel à une fonction définie en amount"]
  [:h3 "Test2"]
  [:p "La on plus, rien de bien compliqué, je double l'appel à la fonction timer-component sans variables puisqu'il n'est pas necessaire d'afficher les actions Start/Stop"]
  [:h3 "Test3"]
  [:p "Ici, j'ai donc dû creer la fonction 'toggle-value' pour changer l'attribut 'value' de l'input de type 'button'. J'ai cherché relativement longtemps pour trouver une directive qui permet de mettre en pause l'action lancée par 
   le setTimeout. J'ai choisi plutôt de tester la variable '@seconds-elapsed' en vérifiant sa nature (char/number) via une condition récupérée grâce à la valeur du bouton. Un swap! sur cette variable me permettant de réinitialiser 
   cette varibale."]
  [:h3 "Bonus"]
  [:p "Sur cette page, je me suis inspiré du script de la todolist et notamment la partie création de nouvelles taches (le doucle-click). J'ai été surpris de la facilité d'implémenter ce type d'action car j'étais persuadé
  qu'il y avait de nombreuses lignes de codes à saisir. Encore une fois, la logique, et mon expérience (n'ayons pas peur de le dire ^^) m'ont permis d'arriver à un résultat attendu."]
  [:h3 "Charts"]
  [:p "J'ai sur cette partie, travaillé un bon moment. la notion de dépendances dans les 
  scripts Clojure (via le fichier projet.clsj reste encore flou. J'ai bien saisi qu'il était 
  nécessaire d'appeler des librairies spécifiques dans ce fichier 
  (j'ai testé highcharts, Analemma et quelques autres, mais je me suis buté (je pense 
  que la concentration y été pour quelque chose). Je me suis déterminé à utiliser directement les 
  dépôts git de hightcharts et Analemma où là, en effet, je peux générer des graphs! Je pense 
  committer tout ca en externe si cela vous interesse. J'ai donc visité et testé votre API vigiglobe, j'ai été surpris car le Json ne contient que peu d'informations, peut-être ai-je oublié de
   définir quelques variables, j'ai en tout et pour tout le nom de la série et le comptage (je suppose) des articles ou auteurs qui en sont affiliés ainsi que, je pense, 
   le nombre d'articles ou commentaires (par auteurs ou par nombre de messages) de l'article."]
  [:h3 "Conclusion"]
  [:p "Merci du temps que vous consacrerez à l'étude de ce test. Au delà de mes compétences, je suis quelqu'un de très ouvert, ayant de plus (au delà de la partie développement) une bonne expérience B2B. J'aime les challenges 
  et 'baigne' depuis plus de 15 ans dans ce domaine. Espérant pouvoir vous en discuter de vive-voix avec vous,"]
  	[:p "Excellente journée"]
  	[:p "Stéphane RALJEVIC"]
	[:p "Tel.+33 7 89 01 68 12"]
	[:p "Email: raljx.concept@gmail.com"]
	[:p "LinkedIn: https://fr.linkedin.com/in/sraljevic"]
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

(defn chart-page []
  [:div [:h2 "Bonus page"]
  [:p "Un dépot git peut être généré à votre convenance si vous désirez voir en action l'API VigiGlobe (see. #about Page)"]
  [:div [:iframe {
  :src "http://www.raljxconcept.ovh/charts.html"
  :frameBorder "0"
  :width "100%"
  :height "300px"
  :scrolling "no"
  
  
  }]]
  [:div [:a {:href "#/"} "go to the home page"]]]
)


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

(ns urlshortener.db
  (:require [clojure.java.jdbc :as j] 
            [honey.sql :as sql]
            [honey.sql.helpers :refer :all]
            [urlshortener.env :refer [env]])) 


(def mysql-db {:host (env :HOST)
               :dbtype "mysql"
               :dbname (env :DBNAME)
               :user (env :USER)
               :port "18897"
               :password (env :PASSWORD)})

mysql-db


(j/query mysql-db ["SELECT 3*5 AS result"])

(defn query [q]
  (j/query mysql-db q))
(comment
   (create a table)
(j/db-do-commands mysql-db
(j/create-table-ddl :fruit [
                            [:name "varchar(32)" :primary :key]
] ))
  
  (j/db-do-commands mysql-db
(j/create-table-ddl :redirects [
                            [:slug "varchar(32)" :primary :key "not null"] 
                               [:url "varchar(1000)" "not null"]
] ))
)

(defn insert! [q]
  (j/db-do-prepared mysql-db q))

(defn insert-redirect! [slug url]
  (insert! (-> (insert-into :redirects)
               (columns :slug :url)
               (values 
                [[slug url]])
               (sql/format {:pretty true})))
  )

(defn get-url [slug] 
  (-> (query (-> (select :*)
             (from :redirects)
             (where [:= :slug slug])
             (sql/format))) first :url)
  )

(:url {:url "our url"} )

(-> [{:url "our url"} {:a "you"} {:b "he"}]
    first :url)

(j/query mysql-db 
         (-> (select :*)
             (from :redirects) 
             (sql/format))) 



(comment 
  (query (-> (select :*)
        (from :redirects)
        (sql/format)))
  
  (insert! (-> (insert-into :redirects)
               (columns :slug :url)
               (values
                [["abc" "https://github.com/seancorfield/honeysql"]])
               (sql/format {:pretty true})))
  
  (insert-redirect! "xyz" "amazon.com")

  (get-url "abc")

  (insert-redirect! "amz" "https://www.amazon.com/")
  )






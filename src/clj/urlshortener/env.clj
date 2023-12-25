(ns urlshortener.env)

(def envvars 
  (if (.exist (clojure.java.io/file "env.edn"))
    (clojure.edn/read-string (slurp "env.edn"))
  {}))

envvars

(defn env [k]
  (or (k envvars) (System/getenv (name k))))

(comment
  (name :HOME)
  (env :HOME)
  (System/getenv "HOME")
  )


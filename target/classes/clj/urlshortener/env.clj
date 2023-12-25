(ns urlshortener.env)

(def envvars (clojure.edn/read-string (slurp "env.edn")))

envvars

(defn env [k]
  (or (k envvars) (System/getenv (name k))))

(comment
  (name :HOME)
  (env :HOME)
  (System/getenv "HOME")
  )


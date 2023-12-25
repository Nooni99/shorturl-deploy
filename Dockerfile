FROM clojure:tools-deps



COPY . /usr/src/app
WORKDIR /usr/src/app

CMD npx tailwind -i global.css -o resources/public/assets/css/output.css --minify  

CMD npm i

CMD npx shadow-cljs release app

CMD clj -T:build uber


CMD ["java", "-jar", "target/app-standalone.jar"]
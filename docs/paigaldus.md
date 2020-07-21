
1) Rakendus lokaalse (arendamise) keskonna jaoks


Eeldused:
1) installitud on postgresql
2) installitud on solr
3) installitud on git
3) installitud on npm, mille leiab https://www.npmjs.com/package/npm


postgresql
Loo andmebaas applications ning tabelid (tabelite script asub backend/database/scripts-postgresql.sql)


solr
käivita solr ja loo uus core: solr create_core -c Application


rakendus
Lae alla GitHubis olev rakenduse lähtekood: git clone https://github.com/tka1969/RMIT-Application.git


backend

backendi kasutamiseks terminalis mvn spring-boot:run 
backendi kasutamiseks tomcat-is paigalda application.war
backendi kasutamiseks eclipses: menüüst Run->Run As->Spring Boot App


frontend

Mine kataloogi frontend

installi vajalikud moodulid:
npm install

stardi angulari klient:
ng serve

Veebilehitsejas ava http://localhost:4200

Rakendus on valmis kasutamiseks.




2) Konteinerdatud rakendus


Eeldused:
1) installitud on docker


Konteinerite ehitamiseks vajalikud Dockerfile-d ja scriptid asuvad docker kataloogis.



Laeme alla https://hub.docker.com/-i paigaldatud valmisolevad konteinerid
docker pull tka1969/rmit-postgres-image:firsttry
docker pull tka1969/rmit-solr-image:firsttry
docker pull tka1969/rmit-tomcat-image:firsttry


käivitame konteinerid
docker run -d --name rmit_postgresql -p 5432:5432 tka1969/rmit-postgres-image:firsttry
docker run -d --name rmit_solr -p 8983:8983 tka1969/rmit-solr-image:firsttry
docker run -d --name rmit_tomcat -p 8080:8080 tka1969/rmit-tomcat-image:firsttry


paneme konteinerid omavahel suhtlema
docker network create myNetwork
docker network connect myNetwork rmit_tomcat
docker network connect myNetwork rmit_postgresql
docker network connect myNetwork rmit_solr


docker container ls
CONTAINER ID        IMAGE                                  COMMAND                  CREATED             STATUS              PORTS                    NAMES
c096b84dd7ea        tka1969/rmit-tomcat-image:firsttry     "catalina.sh run"        40 seconds ago      Up 39 seconds       0.0.0.0:8080->8080/tcp   rmit_tomcat
f3c55063ca6e        tka1969/rmit-solr-image:firsttry       "docker-entrypoint.s…"   48 seconds ago      Up 47 seconds       0.0.0.0:8983->8983/tcp   rmit_solr
8357ea722a71        tka1969/rmit-postgres-image:firsttry   "docker-entrypoint.s…"   58 seconds ago      Up 57 seconds       0.0.0.0:5432->5432/tcp   rmit_postgresql


Rakendus on valmis kasutamiseks.


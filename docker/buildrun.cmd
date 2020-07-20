rem docker system prune -f

rem postgresql/buildrun.cmd
rem solr/buildrun.cmd
rem tomcat/buildrun.cmd

rem paneme konteinerid omavahel suhtlema
docker network create myNetwork
docker network connect myNetwork rmit_tomcat
docker network connect myNetwork rmit_postgresql
docker network connect myNetwork rmit_solr


rem docker network inspect myNetwork
rem docker exec -ti rmit_tomcat ping pgdb
rem docker exec -ti rmit_tomcat ping rmit_solr


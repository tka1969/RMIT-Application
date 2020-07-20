
docker build -t rmit-solr-image .

docker run -d --name rmit_solr -p 8983:8983 rmit-solr-image
rem docker run --name my_solr -d -p 8983:8983 -t solr

docker exec -it --user=solr rmit_solr bin/solr create_core -c Application

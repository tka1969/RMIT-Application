
docker build -t rmit-postgres-image .

docker run -d --name rmit_postgresql -p 5432:5432 rmit-postgres-image

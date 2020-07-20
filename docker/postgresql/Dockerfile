FROM postgres 

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD admin 
ENV POSTGRES_DB applications 

COPY init.sql /docker-entrypoint-initdb.d/


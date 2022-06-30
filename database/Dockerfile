FROM postgres:13.7
ARG TRIGGER_ENDPOINT=default

ENV POSTGRES_USER username
ENV POSTGRES_PASSWORD p@ssw0rd
ENV POSTGRES_DB myapp

RUN apt-get update && apt-get install -y postgresql-plpython3-13 python3 python3-requests

COPY ./init-db.sql /docker-entrypoint-initdb.d/init-db.sql

RUN sed -i "s~{{TRIGGER_ENDPOINT}}~$TRIGGER_ENDPOINT~g" /docker-entrypoint-initdb.d/init-db.sql

EXPOSE 5432
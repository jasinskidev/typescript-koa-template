CREATE DATABASE test;

CREATE USER dev WITH encrypted password 'dev' SUPERUSER;

GRANT ALL ON DATABASE test TO dev;

\connect test
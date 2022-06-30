CREATE TABLE data (
    id SERIAL PRIMARY KEY,
    value TEXT
);

CREATE EXTENSION plpython3u;

CREATE FUNCTION insertTrigger() RETURNS trigger AS $$
import requests
requests.get("{{TRIGGER_ENDPOINT}}", json={"type": "INSERT", "id": TD["new"]["id"]})
$$ LANGUAGE plpython3u;

CREATE TRIGGER triggerOnInsert AFTER INSERT ON data FOR EACH ROW EXECUTE FUNCTION insertTrigger ();
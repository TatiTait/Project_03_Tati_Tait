DROP TABLE IF EXISTS schedules;

CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(100) NOT NULL,
    day SMALLINT NOT NULL,
    start_at TIME NOT NULL,
    end_at TIME not NULL
);
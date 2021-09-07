
CREATE TABLE schedules (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    day SMALLINT NOT NULL,
    start_at TIME NOT NULL,
    end_at TIME not NULL
);
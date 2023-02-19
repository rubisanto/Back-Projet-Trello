-- création de la table
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    category VARCHAR(11) NOT NULL
);

-- Pour tester 
INSERT INTO
    tasks (title, category)
VALUES
    ('test 1', 'In Progress');

INSERT INTO
    tasks (title, category)
VALUES
    ('test 2', 'To Do');

INSERT INTO
    tasks (title, category)
VALUES
    ('test 3', 'Done');

INSERT INTO
    tasks (title, category)
VALUES
    ('test 4', 'Blocked');
-- création de la table
CREATE TABLE IF NOT EXISTS tasks (
	id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	category VARCHAR(11) NOT NULL
);

-- Pour tester 
INSERT INTO tasks (title, category) VALUES ('test 1', 'IN_PROGRESS');
INSERT INTO tasks (title, category) VALUES ('test 2', 'TODO');
INSERT INTO tasks (title, category) VALUES ('test 3', 'DONE');
INSERT INTO tasks (title, category) VALUES ('test 4', 'BLOCKED');
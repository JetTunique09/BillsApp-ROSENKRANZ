INSERT INTO utilisateur (email, password)
VALUES ("john@doe", "root"), ("a@a.com", "root"), ("noemie.rosen1@icloud.com", "root");

INSERT INTO quizz (nom, niveau, createur_id)
VALUES ("pokemon", 1, 1),
        ("manga", 3,1),
        ("musique",2, 2);

INSERT INTO categorie (nom)
VALUES ("Culture G"), ("Math"), ("GEO");

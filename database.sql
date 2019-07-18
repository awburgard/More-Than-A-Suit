CREATE TABLE "admin" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (40),
    "last_name" VARCHAR (40),
    "email" VARCHAR (60),
    "password" VARCHAR (120)
);

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "category_name" VARCHAR (80)
);

CREATE TABLE "gentleman" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "zip" VARCHAR (6) NOT NULL,
    "phone" VARCHAR (20) NOT NULL,
    "email" VARCHAR (60),
    "height_feet" INT,
    "height_inches" INT,
    "weight" INT,
    "waist" INT,
    "need" VARCHAR (40),
    "appointment_type" VARCHAR (20),
    "appointment_date" DATE,
    "appointment_time" TIME
);

CREATE TABLE "resources" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (80),
    "description" VARCHAR (1000),
    "link" VARCHAR (1000)
);

CREATE TABLE "resources_categories" (
    "id" SERIAL PRIMARY KEY,
    "resources_id" INT REFERENCES "resources",   
    "categories_id" INT REFERENCES "categories"
);

INSERT INTO "categories" ("id", "category_name") 
VALUES ('1', 'job'), ('2', 'funeral'), ('3', 'court'),('4', 'other');

INSERT INTO "resources" ("id", "title" , "description" , "link")
VALUES ('1', 'StartLand', 'Job Boards', 'https://www.startlandnews.com/jobs/');

INSERT INTO "resources" ("id", "title", "description", "link")
VALUES ('2', 'KCJOBS.com', 'Job Boards', 'https://www.kcjobs.com/');

INSERT INTO "resources" ("id", "title", "description", "link")
VALUES ('3', 'Full Employment Council', 'Job Services', 'https://www.feckc.org/');

INSERT INTO "resources" ("id", "title", "description", "link")
VALUES ('4', 'Kansas City Job Seekers', 'Job Services', 'https://www.kansascityjobseekers.com/');

INSERT INTO "resources" ("id", "title", "description", "link")
VALUES ('5', 'Indeed Career Guide', 'Resume Resources', 'https://www.indeed.com/career-advice/resumes-cover-letters/10-resume-writing-tips');

INSERT INTO "resources" ("id", "title", "description", "link")
VALUES ('6', 'The Muse', 'Resume Resources', 'https://www.themuse.com/advice/43-resume-tips-that-will-help-you-get-hired');

INSERT INTO "resources_categories" ("id", "resources_id", "categories_id")
VALUES ('1', '1', '1'), ('2', '2', '1'), ('3', '3', '1'), ('4', '4', '1'), ('5', '5', '1'), ('6', '6', '1');

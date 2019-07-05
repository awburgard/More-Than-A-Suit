CREATE TABLE "admin" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (40),
    "last_name" VARCHAR (40),
    "email" VARCHAR (60),
    "password" VARCHAR (40)
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

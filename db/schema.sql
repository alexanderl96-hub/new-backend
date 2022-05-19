DROP DATABASE IF EXISTS baseball;
CREATE DATABASE baseball;

\c baseball;

CREATE TABLE teams(
    id SERIAL PRIMARY KEY,
    name text,
    imag text
);

-- DROP TABLE IF EXISTS group_dev CASCADE;

-- -- \c group_dev;
CREATE TABLE group_dev(
    id SERIAL PRIMARY KEY,
    team_id INTEGER,
    name text,
    nickname text,
    imag text,
    born text,
    city text,
    state text,
    country text,
    age INTEGER,
    height text,
    weight text,
    currentTeam text,
    salary text,
    number text,
    education text,
    spouse text,
    parents text,
    children text,
    siblings text,
    about text,
    position text,
    bats text,
    throws text,
    stats text
);

-- -- \c group_mets;
CREATE TABLE group_mets(
    id SERIAL PRIMARY KEY,
    name text,
    nickname text,
    imag text,
    born text,
    city text,
    state text,
    country text,
    age text,
    height text,
    weight text,
    currentTeam text,
    salary text,
    number text,
    education text,
    spouse text,
    parents text,
    children text,
    siblings text,
    about text,
    position text,
    bats text,
    throws text,
    stats text
);
-- -- \c group_boston_rs;
CREATE TABLE group_boston_rs(
    id SERIAL PRIMARY KEY,
    name text,
    nickname text,
    imag text,
    born text,
    city text,
    state text,
    country text,
    age text,
    height text,
    weight text,
    currentTeam text,
    salary text,
    number text,
    education text,
    spouse text,
    parents text,
    children text,
    siblings text,
    about text,
    position text,
    bats text,
    throws text,
    stats text
);
-- -- \c group_angels_d;
-- CREATE TABLE group_angels_d(
--     id SERIAL PRIMARY KEY,
--     name text,
--     nickname text,
--     imag text,
--     born text,
--     city text,
--     state text,
--     country text,
--     age text,
--     height text,
--     weight text,
--     currentTeam text,
--     salary text,
--     number text,
--     education text,
--     spouse text,
--     parents text,
--     children text,
--     siblings text,
--     about text,
--     position text,
--     bats text,
--     throws text,
--     stats text
-- );
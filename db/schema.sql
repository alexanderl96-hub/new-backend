DROP DATABASE IF EXISTS teams_BaseBall;
CREATE DATABASE teams_BaseBall;

-- \c teams_BaseBall;

CREATE TABLE teams(
    id SERIAL PRIMARY KEY,
    name text,
    imag text
);

-- DROP TABLE IF EXISTS group_dev CASCADE;

-- -- \c group_dev;
-- CREATE TABLE group_dev(
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

-- DROP DATABASE IF EXISTS teams_players-stats CASCADE;

-- CREATE TABLE players_stats (
--    stats text,
-- );

-- DROP DATABASE IF EXISTS teams_players-field CASCADE;

-- CREATE TABLE players_field (
--    field text,
-- );

-- DROP DATABASE IF EXISTS teams_field CASCADE;

-- CREATE TABLE field (
   
-- );
 
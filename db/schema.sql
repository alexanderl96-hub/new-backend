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
    imag2 text,
    born text,
    city text,
    state text,
    country text,
    age INTEGER,
    height text,
    weight text,
    current_team text,
    salary text,
    number INTEGER,
    education text,
    spouse text,
    parents text,
    children text,
    siblings text,
    about text,
    position text,
    bats text,
    throws text,
    stats INTEGER
);

-- \c players_stats;
 CREATE TABLE players_stats (
    id SERIAL PRIMARY KEY,
    players_id INTEGER,
    game text,
    game_date text,
    ab INTEGER,
    r INTEGER,
    h INTEGER,
    rb INTEGER,
    bb INTEGER,
    so INTEGER,
    hr INTEGER,
    sb INTEGER,
    average FLOAT(3)
);

-- \c careers_stats;
 CREATE TABLE careers_stats (
    id SERIAL PRIMARY KEY,
    players_id INTEGER,
    game_year INTEGER,
    team text,
    career_gp INTEGER,
    career_ab INTEGER,
    career_r INTEGER,
    career_h INTEGER,
    career_rbi INTEGER,
    career_bb INTEGER,
    career_so INTEGER,
    career_hr INTEGER,
    career_average FLOAT(3)
);
-- \c pitcher_stats;
 CREATE TABLE pitcher_stats (
    id SERIAL PRIMARY KEY,
    players_id INTEGER,
    game text,
    game_date text,
    ip INTEGER,
    h INTEGER,
    r INTEGER,
    er INTEGER,
    hr INTEGER,
    bb INTEGER,
    so INTEGER,
    sv INTEGER,
    era FLOAT(3)
);
-- \c careerpitcher_stats;
 CREATE TABLE careerpitcher_stats (
    id SERIAL PRIMARY KEY,
    pitcher_id INTEGER,
    game_year INTEGER,
    team text,
    career_gp INTEGER,
    career_cg INTEGER,
    career_er INTEGER,
    career_so INTEGER,
    career_w INTEGER,
    career_l INTEGER,
    career_sv INTEGER,
    career_whip FLOAT(3),
    career_era FLOAT(3)
);
-- -- \c season;
CREATE TABLE season(
    id SERIAL PRIMARY KEY,
    date INTEGER,
    team_name text,
    team_vs text,
    image_team text,
    image_vs text,
    points_team INTEGER,
    points_vs INTEGER
);
-- -- \c best_allTimes;
CREATE TABLE best_all_Times(
    id SERIAL PRIMARY KEY,
    name text,
    imag text,
    sumary text
);

CREATE TABLE records(
    id SERIAL PRIMARY KEY,
    name text,
    imag text,
    record text,
    modernDayRecord text,
    closestSince text,
    closestActivePlayer text,
    closestUnderthirty text,
    sumary text
);
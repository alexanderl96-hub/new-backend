INSERT INTO teams ( name, imag ) VALUES 
(null, null);


INSERT INTO group_dev ( name, team_id, nickname, imag, imag2, born, city, state, country, age, height, weight, current_team, salary, number, education, spouse, parents, children, siblings, position, bats, throws, stats, about ) VALUES 
(null, null, null, null, null, null, null, null, null, null , null, null, null, null, null, null, null, null, null, null, null, null, null, null,null);


INSERT INTO players_stats (players_id, game, game_date, ab, r, h, rb, bb, so, hr, sb, average ) VALUES 
(null, null, null, null, null, null, null, null, null, null, null, null);


INSERT INTO careers_stats (players_id, game_year, team, career_gp, career_ab, career_r, career_h, career_rbi, career_bb, career_so, career_hr, career_average) VALUES 
(null, null, null, null, null, null, null, null, null, null, null, null);


INSERT INTO pitcher_stats ( players_id, game, game_date, ip, h, r, er, hr, bb, so, sv, era ) VALUES 
(null, null, null, null, null, null, null, null, null, null, null, null);


INSERT INTO careerpitcher_stats ( pitcher_id, game_year, team, career_gp, career_cg, career_er, career_so, career_w, career_l, career_sv, career_whip, career_era ) VALUES 
(null, null, null, null, null, null, null, null, null, null, null, null);


INSERT INTO season ( date, team_name, team_vs, image_team, image_vs, points_team, points_vs ) VALUES 
(null, null, null, null, null, null,null);


INSERT INTO best_all_Times ( name, imag, sumary ) VALUES 
(null, null, null);


INSERT INTO records (name , imag, record, modernDayRecord, closestSince, closestActivePlayer, closestUnderthirty, sumary) VALUES 
('Single Season Batting Average', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/961/988/2666347_original.jpg?1306293199','Hugh Duffy, .400 in 1894', 'Nap Lajoie, .426 in 1901(still unbreakable)', 'Nomar Garciaparra and Todd Helton, .372 in 2000', null, null, 'It is well known that the last person to hit .400 in a season, Ted Williams, did it in 1941. No one has gotten within 50 points in the last 10 years, and there is no reason to believe this trend will change. With tougher pitching, scouting reports and more pitching changes, more and more is stopping a hitter from being as dominant as before.'),
('Single Season on Base Percentage', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/020/921991_original.jpg?1306280432', 'Ted Williams, .553 in 1941', null, 'Chipper Jones .470 in 2008', null, null, 'This record will not be broken for very similar reasons as batting average. Tougher pitching, scouting    reports and increased pitching changes have made it tougher for a hitter to be dominant.'),
('Single Season Slugging Percentage', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/227/B00506_original.jpg?1306280804', 'Babe Ruth, .847 in 1920', null, 'Todd Helton .698 in 2000', null, null, 'In 1920, Babe Ruth managed to hit for a .847 SLG while leading the league in almost every offensive category. No one has even broken .700 since 2000. Better pitching, increased pitching changes and the fact that there will never be another Babe, as well as better fielding, all contribute to making this record unbreakable.'),
('Single Season OPS', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/227/B00506_original.jpg?1306280804', 'Babe Ruth, 1.379 in 1920', null, 'Todd Helton, 1.162 in 2000', null, null, 'The same year Ruth broke the single season SLG record, he missed the OBP record by 21 points, giving him the OPS record. No one will match either the SLG or the OBP he posted that year, so they certainly won`t get both.'),
('Single Season Runs Scored', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/234/51333570_original.jpg?1306280964', 'Billy Hamilton, 198 in 1894', 'Babe Ruth, 177 in 1921(Cloud be broken , but very unlikely)', 'Jeff Bagwell, 152 in 2000', null, null, ' In 1894, Billy Hamilton managed to score an amazing 198 runs. That`s like scoring 11 runs over nine games. There is no way someone (along with people batting behind them) can stay that hot all year.'),
('Single Season Triples', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/246/89030199_original.jpg?1306284357', 'Chief Wilson, 36 in 1912', null, 'Curtis Granderson, 23 in 2007', null, null, 'In 1912, Chief Wilson legged out 36 triples. With triples in a steady decline throughout major league baseball (with a possible jump following the steroid era), triples are now a thing of the past.'),
('Single Season Times on Base', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/248/B00506_original.jpg?1306284290', 'Babe Ruth, 379 in 1923', null, 'Carlos Delgado, 334 in 2000', null, null, 'To do this, Babe had to get on base 54.5 percent of the time. He beat 200 hits and drew 170 walks. With the steroid era gone, no one will be feared enough to draw that many walks and still get over 200 hits.'),
('Single Season Hit by Pitch', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/252/57424697_original.jpg?1306284269', 'Hughie Jennings, 51 in 1896', 'Ron Hunt, 50 in 1971(still unbreakable)', 'Craig Wilson, 30 in 2004', null, null, 'Pitchers don`t hit as many batters anymore. They simply have more control nowadays, and umpires now eject pitchers if they hit a batter and it appears intentional.'),
('Single Season Sacrifice Hits', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/262/51026800_original.jpg?1306284655', 'Ray Chapman, 67 in 1917', null, 'Royce Clayton, 24 in 2004', null, null, 'With the introduction of the DH, along with sabermetricians like Bill James questioning the usefulness of the sacrifice bunt, many players don`t even attempt that many sacrifices in a year. No one under 30 has even beat that mark in their career.'),
('Single Season At Bats per Strikeout', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/267/240px-Willie_Keeler_-_NY_Giants_original.jpg?1306461499', 'Willie Keeler, 285.00 in 1899', 'Joe Sewell, 167.67 in 1932 (still unbreakable)', 'Juan Pierre 21.3 in 2001', null, null, 'Pitchers now throw harder with more break and aren`t expected to last as long. With more blow you away stuff coming their way, batters don`t have a chance.'),
('Single Season Inside the Park Home Runs', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/504/104432928_original.jpg?1306286922', 'Sam Crawford, 12 in 1901', null, null, null, null, 'Unfortunately, I was unable to find the closest someone has gotten since 2000, but I did find this little tidbit: Since 1950, only one person has topped 12 inside the park home runs in their career. With more cookie-cutter ballparks creating less crazy hops, the increased resiliency of the baseball, allowing them to travel for outside the park home runs more, and better fielding, inside the park home runs are now cause for a feast.'),
('All Time Batting Average', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/597/240px-Ty-Cobb-1913-NPC-detail-1_original.jpg?1306460822', 'Ty Cobb, .367', null, null, 'Ichiro, .330', 'Joe Mauer, .326', 'Since 2000, only two people have been able to beat Cobb`s mark in a single season. The game is more balanced these days, as more extensive scouting brings all the great talent to the US. Before, only a few great talents made it to the majors and were able to dominate their era.'),
('All Time On Base Percentage', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/600/921991_original.jpg?1306290616', 'Ted Williams, .482', null, null, 'Albert Pujols, .423', 'Joe Mauer, .406', 'There will never be a pure hitter like Teddy Ballgame. No one knew hitting like Ted Williams, and no one will be able to even come close to his mark. Had he not missed three prime seasons as well as most of two others to WWII and the Korean War, he may have even hit .490.'),
('All Time Slugging Percentage', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/602/B00506_original.jpg?1306290631', 'Babe Ruth, .690', null, null, 'Albert Pujols, .619', 'Miguel Cabrera, .551', 'Besides Pujols, no one is within 120 points of Ruth. Babe enjoyed a dominance that will never be replicated.'),
('All Time OPS', 'https://cdn.bleacherreport.net/images_root/slides/photos/000/962/604/B00506_original.jpg?1306290649', 'Babe Ruth, 1.164', null, null, 'Albert Pujols, 1.042', 'Miguel Cabrera, .941', 'Everyone within 300 points of Ruth are 27 or older and will almost certainly see their numbers start to slip within two or three years as they age.');
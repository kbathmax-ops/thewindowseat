-- The Window Seat — seed data (generated from data/countries.json)
truncate countries cascade;

insert into countries (id, name, continent, region) values ('japan', 'Japan', 'Asia', 'East Asia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('japan', 'Care is a daily discipline', 'Living in Japan taught the writer patience, punctuality, and the quiet power of doing ordinary things with total care. Nobody tips — excellence is simply what everyone expects of themselves, every day.', '7 Lessons Learned from Living in Japan', null, 'Act of Traveling', 'https://actoftraveling.com/7-lessons-learned-from-living-in-japan/', 'excellent service is simply always expected', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('japan', 0.7, 0.45, 0.45, 0.95, 0.4, 'patience');
insert into country_activities (country_id, position, activity) values ('japan', 1, 'Sit through a full tea ceremony in Kyoto without checking the time');
insert into country_activities (country_id, position, activity) values ('japan', 2, 'Ride the Shinkansen and watch a country run on the minute');
insert into country_activities (country_id, position, activity) values ('japan', 3, 'Walk a stretch of the Kumano Kodo pilgrimage trail in silence');

insert into countries (id, name, continent, region) values ('india', 'India', 'Asia', 'South Asia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('india', 'Embrace the unexpected', 'India humbled the writer with its contrasts — comfort withheld, plans overturned, generosity everywhere. The trip is beautiful precisely because hard moments are answered by good ones, and you leave feeling stronger than you arrived.', 'Embrace the Unexpected: What My Trip to India Taught Me About Life', null, 'Intrepid Travel', 'https://www.intrepidtravel.com/adventures/unexpected-india/', 'The hard moments are countered by good ones — and that''s what empowers you.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('india', 1, 0.75, 0.9, 0.15, 0.7, 'courage');
insert into country_activities (country_id, position, activity) values ('india', 1, 'Take an overnight sleeper train and surrender the schedule');
insert into country_activities (country_id, position, activity) values ('india', 2, 'Watch the evening aarti ceremony on the ghats of Varanasi');
insert into country_activities (country_id, position, activity) values ('india', 3, 'Eat where the queue is longest, not where the menu is translated');

insert into countries (id, name, continent, region) values ('vietnam', 'Vietnam', 'Asia', 'Southeast Asia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('vietnam', 'Chaos has its own order', 'As an expat in Saigon, the writer learned that the city''s overwhelming traffic and street life run on an invisible logic — thousands of people flowing as one. You stop fighting the current, step in, and trust it.', 'Living as an Expat in Vietnam: What I Learned During My Stay', 'Sherry Ott', 'Ottsworld', 'https://www.ottsworld.com/blogs/expat-vietnam-lessons-i-learned/', 'Cross the street like the locals do: steadily, calmly, trusting the flow.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('vietnam', 0.85, 0.6, 0.65, 0.1, 0.6, 'courage');
insert into country_activities (country_id, position, activity) values ('vietnam', 1, 'Cross a Saigon intersection at rush hour — steadily, without stopping');
insert into country_activities (country_id, position, activity) values ('vietnam', 2, 'Pull up a plastic stool for street-side phở at dawn');
insert into country_activities (country_id, position, activity) values ('vietnam', 3, 'Ride a motorbike loop through the Hà Giang mountains');

insert into countries (id, name, continent, region) values ('thailand', 'Thailand', 'Asia', 'Southeast Asia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('thailand', 'Happiness is a practice, not a circumstance', 'Teaching abroad in Thailand showed the writer that the ''Land of Smiles'' nickname is earned: people choose gratitude even in far-from-perfect situations. Discomfort shrinks when you stop treating it as an emergency.', '8 Major Life Lessons Learned in Thailand', null, 'Greenheart Travel', 'https://greenhearttravel.org/blog/teach-abroad-thailand/8-major-life-lessons-learned-in-thailand', 'choose to be grateful — and in turn happy — even in far from perfect situations', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('thailand', 0.7, 0.7, 0.55, 0.3, 0.5, 'belonging');
insert into country_activities (country_id, position, activity) values ('thailand', 1, 'Give morning alms to monks in Chiang Mai');
insert into country_activities (country_id, position, activity) values ('thailand', 2, 'Learn to cook a curry from the market up');
insert into country_activities (country_id, position, activity) values ('thailand', 3, 'Live a week without air conditioning in the slow south');

insert into countries (id, name, continent, region) values ('nepal', 'Nepal', 'Asia', 'South Asia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('nepal', 'Knowing when to stop matters as much as going', 'The Langtang trek taught its writer patience, pacing, and humility before the mountains. You start early, walk steadily, and accept that the summit is optional — coming home is not.', 'Hard Lessons from the Langtang Trek: What the Mountains Taught Me', null, 'Nepal Vision Treks', 'https://www.nepalvisiontreks.com/blog-detail/langtang-trek-lessons', 'knowing when to stop is as important as knowing when to go', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('nepal', 0.8, 0.3, 0.95, 0.5, 0.35, 'patience');
insert into country_activities (country_id, position, activity) values ('nepal', 1, 'Trek the Langtang Valley teahouse to teahouse');
insert into country_activities (country_id, position, activity) values ('nepal', 2, 'Drink dal bhat twice a day and feel your pace change');
insert into country_activities (country_id, position, activity) values ('nepal', 3, 'Watch sunrise hit the Himalayas from a cold stone ledge');

insert into countries (id, name, continent, region) values ('indonesia', 'Indonesia', 'Asia', 'Southeast Asia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('indonesia', 'Presence is the whole point', 'Days spent with Balinese locals left the writer with a philosophy, not photos: open your heart to real human connection, live inside the moment you''re in, and treat rest as something sacred rather than earned.', 'Photo Essay of My Trip to Bali, Indonesia', null, 'Myles To Travel', 'https://www.mylestotravel.com/photo-essay-trip-bali-indonesia/', 'The locals'' wisdom: open your heart, stay in the moment, care for yourself.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('indonesia', 0.6, 0.65, 0.35, 0.25, 0.3, 'self_knowledge');
insert into country_activities (country_id, position, activity) values ('indonesia', 1, 'Sit through a canang sari offering being made, petal by petal');
insert into country_activities (country_id, position, activity) values ('indonesia', 2, 'Walk the rice terraces of Sidemen at first light');
insert into country_activities (country_id, position, activity) values ('indonesia', 3, 'Observe a Balinese temple ceremony as a quiet guest');

insert into countries (id, name, continent, region) values ('mongolia', 'Mongolia', 'Asia', 'East Asia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('mongolia', 'Let go — everything moves on', 'Trekking the Gobi and Altai with nomadic families, the writer learned to release the need to know what comes next. Mongolia rewards the traveler who can trust the unknown and relish the moments in between.', 'My Mongolia Travel Story: An Adventure in Letting Go', 'Kim Merritt', 'WHOA Travel', 'https://www.whoatravel.com/blog-feed/kim-merritt-mongolia-travel-story-gobi-altai', 'The lessons you take away come from what you put in.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('mongolia', 0.95, 0.35, 0.85, 0.05, 0.55, 'self_knowledge');
insert into country_activities (country_id, position, activity) values ('mongolia', 1, 'Sleep in a family ger on the open steppe');
insert into country_activities (country_id, position, activity) values ('mongolia', 2, 'Ride horseback with nomadic herders moving camp');
insert into country_activities (country_id, position, activity) values ('mongolia', 3, 'Stand alone in the Gobi and hear true silence');

insert into countries (id, name, continent, region) values ('jordan', 'Jordan', 'Asia', 'Middle East');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('jordan', 'Hospitality is an ancient technology', 'A week in Jordan during uncertain times taught the writer that headlines flatten places and guidebooks barely scratch them. The desert''s old moral code — feed the traveler, pour the tea, ask nothing back — is still running.', 'What a Week in Jordan Taught Me About Travelling in Uncertain Times', null, 'Outlook Traveller', 'https://www.outlooktraveller.com/destinations/international/what-a-week-in-jordan-taught-me-about-travelling-in-uncertain-times', 'travel guides only scratch the surface', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('jordan', 0.75, 0.85, 0.5, 0.4, 0.5, 'belonging');
insert into country_activities (country_id, position, activity) values ('jordan', 1, 'Drink tea with Bedouin hosts in Wadi Rum');
insert into country_activities (country_id, position, activity) values ('jordan', 2, 'Walk through the Siq as Petra''s Treasury reveals itself');
insert into country_activities (country_id, position, activity) values ('jordan', 3, 'Duck into a Madaba bakery at sunset and stay too long');

insert into countries (id, name, continent, region) values ('morocco', 'Morocco', 'Africa', 'North Africa');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('morocco', 'Slow down and withhold judgment', 'Morocco kept correcting the writer''s snap judgments — about people, plans, and pace. The country runs slower and warmer than it first appears, and it rewards travelers who stop scoring it against home.', '10 Life Lessons I Learned in Morocco I Hope to Never Forget', null, 'My Wanderlusty Life', 'https://www.mywanderlustylife.com/what-i-learned-in-morocco/', 'I kept judging situations unfairly — Morocco kept proving me wrong.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('morocco', 0.9, 0.6, 0.7, 0.15, 0.5, 'patience');
insert into country_activities (country_id, position, activity) values ('morocco', 1, 'Get lost in the Fez medina without a map');
insert into country_activities (country_id, position, activity) values ('morocco', 2, 'Take mint tea with a carpet seller and let the pitch become conversation');
insert into country_activities (country_id, position, activity) values ('morocco', 3, 'Sleep under Saharan stars at a desert camp');

insert into countries (id, name, continent, region) values ('kenya', 'Kenya', 'Africa', 'East Africa');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('kenya', 'Emotion is a shared language', 'On a service trip in rural Kenya, the writer found that when spoken language and culture diverge completely, connection doesn''t stop — a hand, a smile, and steady eye contact carry the conversation.', 'What a Service Trip to Kenya Taught Me About Life', null, 'JourneyWoman', 'https://journeywoman.com/type-of-travel/multi-generational-travel/service-trip/', 'emotions are the vocabulary that connects you', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('kenya', 0.75, 0.9, 0.6, 0.3, 0.45, 'belonging');
insert into country_activities (country_id, position, activity) values ('kenya', 1, 'Spend a day in a village school where you share no language');
insert into country_activities (country_id, position, activity) values ('kenya', 2, 'Watch the Maasai Mara from an open vehicle at dawn');
insert into country_activities (country_id, position, activity) values ('kenya', 3, 'Learn ten words of Swahili and use all of them');

insert into countries (id, name, continent, region) values ('tanzania', 'Tanzania', 'Africa', 'East Africa');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('tanzania', 'Presence beats connectivity', 'A year of living in Tanzania stripped away the writer''s default of constant notifications. Off the grid, the joy of being fully where you are came back — along with the realization that people everywhere share more than they differ.', 'I Lived in Tanzania for a Year… Here''s What I Learned', null, 'The Pink Backpack', 'https://www.thepinkbackpack.com/lessons-learned-in-tanzania/', 'Disconnecting from technology brought back the joy of simply being present.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('tanzania', 0.8, 0.65, 0.7, 0.2, 0.4, 'self_knowledge');
insert into country_activities (country_id, position, activity) values ('tanzania', 1, 'Go phoneless for a week on Zanzibar''s east coast');
insert into country_activities (country_id, position, activity) values ('tanzania', 2, 'Learn Swahili greetings from your neighbors, badly, then better');
insert into country_activities (country_id, position, activity) values ('tanzania', 3, 'Camp in the Serengeti and let the animals set the schedule');

insert into countries (id, name, continent, region) values ('south-africa', 'South Africa', 'Africa', 'Southern Africa');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('south-africa', 'There are no problems, only solutions', 'Travelling South Africa, the writer kept meeting what locals call the ''South Africa effect'' — a relentlessly practical, improvisational way of thinking. Things break, plans wobble, and someone always finds a way.', 'Lessons I Learnt While Travelling South Africa', null, 'The Travelling Chilli', 'https://www.thetravellingchilli.com/lessons-learnt-travelling-south-africa/', 'no problems, only solutions', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('south-africa', 0.6, 0.6, 0.5, 0.35, 0.8, 'courage');
insert into country_activities (country_id, position, activity) values ('south-africa', 1, 'Drive the Garden Route with no fixed itinerary');
insert into country_activities (country_id, position, activity) values ('south-africa', 2, 'Order a braai plate and talk to whoever''s tending the fire');
insert into country_activities (country_id, position, activity) values ('south-africa', 3, 'Hike Table Mountain and descend by whatever means available');

insert into countries (id, name, continent, region) values ('egypt', 'Egypt', 'Africa', 'North Africa');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('egypt', 'The plan is the first casualty — go anyway', 'The writer''s Cairo trip was a chain of misadventures — surreal, loud, and nothing like the itinerary. It was also enlightening: the trips that go sideways are the ones that actually change you.', 'Misadventures in Egypt', 'Albion Gould', 'albiongould.com', 'https://albiongould.com/misadventures-in-egypt/', 'An honest account of a trip that refused to go as planned.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('egypt', 0.9, 0.55, 0.8, 0.2, 0.6, 'courage');
insert into country_activities (country_id, position, activity) values ('egypt', 1, 'Stand under the Great Pyramid and recalibrate your sense of time');
insert into country_activities (country_id, position, activity) values ('egypt', 2, 'Haggle in the Khan el-Khalili bazaar and lose gracefully');
insert into country_activities (country_id, position, activity) values ('egypt', 3, 'Sail the Nile on a felucca at dusk');

insert into countries (id, name, continent, region) values ('ghana', 'Ghana', 'Africa', 'West Africa');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('ghana', 'Belonging is something you give', 'Volunteering in Ghana, the writer learned selflessness from people who practice it as a default: help others feel they belong, share what you have, and friendship follows fast. Patience and kindness are the local operating system.', 'Lessons Learned in Ghana', null, 'Verge Magazine', 'https://www.vergemagazine.com/volunteer-abroad/blogs/982-lessons-learned-in-ghana.html', 'Helping someone feel they belong is the fastest way to make a friend.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('ghana', 0.75, 0.95, 0.6, 0.2, 0.35, 'belonging');
insert into country_activities (country_id, position, activity) values ('ghana', 1, 'Learn to bargain in Accra''s Makola Market with a smile');
insert into country_activities (country_id, position, activity) values ('ghana', 2, 'Walk the canopy bridges of Kakum National Park');
insert into country_activities (country_id, position, activity) values ('ghana', 3, 'Sit with the history held in Cape Coast Castle');

insert into countries (id, name, continent, region) values ('italy', 'Italy', 'Europe', 'Southern Europe');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('italy', 'Doing nothing is doing something', 'A trip to Italy taught the writer il dolce far niente — the sweetness of doing nothing. Long meals, evening walks, and unhurried company aren''t laziness; they''re a deliberate way of refusing to let efficiency eat your life.', 'I Discovered the Art of Slow Living on a Trip to Italy. Here''s How I''m Trying to Hold On to It at Home', null, 'VegOut Magazine', 'https://vegoutmag.com/travel/r-i-discovered-the-art-of-slow-living-on-a-trip-to-italy-heres-how-im-trying-to-hold-on-to-it-at-home/', 'Life is meant to be lived, not just efficiently processed.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('italy', 0.3, 0.6, 0.15, 0.4, 0.2, 'patience');
insert into country_activities (country_id, position, activity) values ('italy', 1, 'Take the passeggiata with the whole town at golden hour');
insert into country_activities (country_id, position, activity) values ('italy', 2, 'Let lunch run three hours in a Tuscan farmhouse');
insert into country_activities (country_id, position, activity) values ('italy', 3, 'Sit in a piazza with the elderly regulars and watch the world');

insert into countries (id, name, continent, region) values ('france', 'France', 'Europe', 'Western Europe');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('france', 'Small pleasures are the point', 'Years of living in France taught the writer ''les petits plaisirs'' — that a good baguette, a slow café, an unhurried errand are not breaks from real life but the substance of it. Nobody rushes; nothing important is lost.', 'What the French Taught Me About Enjoying Life', null, 'Oui In France', 'https://www.ouiinfrance.com/what-the-french-taught-me-about-enjoying-life/', 'little doses of pleasure that allow you to enjoy life to the fullest', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('france', 0.35, 0.5, 0.2, 0.5, 0.3, 'self_knowledge');
insert into country_activities (country_id, position, activity) values ('france', 1, 'Buy one perfect thing at a village market, daily');
insert into country_activities (country_id, position, activity) values ('france', 2, 'Take a two-hour café terrace seat and defend it');
insert into country_activities (country_id, position, activity) values ('france', 3, 'Walk a city until the walking becomes the destination');

insert into countries (id, name, continent, region) values ('spain', 'Spain', 'Europe', 'Southern Europe');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('spain', 'Freedom reveals who you are', 'Moving abroad to Spain, the writer discovered a version of herself that home had buried: whimsical, at ease, reconnected to old passions. A new environment doesn''t change you — it uncovers you, and treats joy as a birthright.', 'Moving Abroad to Spain Taught Me That When I''m Free, I Am Whimsical', null, 'Black Babes Abroad', 'https://blackbabesabroad.substack.com/p/moving-abroad-to-spain-taught-me', 'A new place can reconnect you with passions you thought you''d outgrown.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('spain', 0.45, 0.7, 0.3, 0.25, 0.4, 'self_knowledge');
insert into country_activities (country_id, position, activity) values ('spain', 1, 'Join the paseo and dinner that starts at ten');
insert into country_activities (country_id, position, activity) values ('spain', 2, 'Take a solo morning in the Alhambra''s quiet courtyards');
insert into country_activities (country_id, position, activity) values ('spain', 3, 'Say yes to the plan that forms at midnight');

insert into countries (id, name, continent, region) values ('portugal', 'Portugal', 'Europe', 'Southern Europe');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('portugal', 'Community is built, not found', 'Three years of living in Portugal taught the writer that a slower pace isn''t emptiness — it''s room. Room to build real community deliberately, to be a regular somewhere, and to let a place slowly claim you.', '10 Things I''ve Learned Living in Portugal for 3 Years', 'Stacy Ennis', 'stacyennis.com', 'https://stacyennis.com/10thingsportugal/', 'The slower pace makes room for the things that actually matter.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('portugal', 0.35, 0.75, 0.25, 0.4, 0.25, 'belonging');
insert into country_activities (country_id, position, activity) values ('portugal', 1, 'Become a regular at one Lisbon pastelaria');
insert into country_activities (country_id, position, activity) values ('portugal', 2, 'Listen to fado in a room small enough to hear breathing');
insert into country_activities (country_id, position, activity) values ('portugal', 3, 'Learn the unhurried rhythm of an Algarve fishing town');

insert into countries (id, name, continent, region) values ('greece', 'Greece', 'Europe', 'Southern Europe');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('greece', 'Hospitality first, hurry later', 'In Greece the writer met a culture that is structurally incapable of rushing a guest. Exposure to a way of life that puts hospitality and ease before schedules transformed her mindset about what a day is for.', 'Lessons Learned in Greece', null, 'Her Campus (West Chester)', 'https://www.hercampus.com/school/west-chester/lessons-learned-in-greece/', 'People are more relaxed — and hospitality comes before everything else.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('greece', 0.4, 0.75, 0.25, 0.2, 0.35, 'belonging');
insert into country_activities (country_id, position, activity) values ('greece', 1, 'Accept the taverna owner''s second helping — arguing is futile');
insert into country_activities (country_id, position, activity) values ('greece', 2, 'Swim before breakfast in the Aegean');
insert into country_activities (country_id, position, activity) values ('greece', 3, 'Let a ferry delay rewrite your island plans');

insert into countries (id, name, continent, region) values ('ireland', 'Ireland', 'Europe', 'Northern Europe');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('ireland', 'Embrace the rain', 'Travelling Ireland solo, the writer learned from locals who take the weather — and by extension, life — in stride. You don''t wait for conditions to improve; you put on a coat, head to the pub or the cliffs, and carry on.', 'Solo Travel Ireland: 9 Interesting Lessons Learned', null, 'Solo Traveler World', 'https://solotravelerworld.com/solo-travel-ireland/', 'Locals take the rain in stride — so should you.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('ireland', 0.3, 0.55, 0.35, 0.3, 0.5, 'patience');
insert into country_activities (country_id, position, activity) values ('ireland', 1, 'Walk the Cliffs of Moher in weather that won''t cooperate');
insert into country_activities (country_id, position, activity) values ('ireland', 2, 'Find the pub session and stay for the third set');
insert into country_activities (country_id, position, activity) values ('ireland', 3, 'Drive the Wild Atlantic Way with no bookings');

insert into countries (id, name, continent, region) values ('iceland', 'Iceland', 'Europe', 'Northern Europe');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('iceland', 'You don''t need to be fearless to go', 'Travelling Iceland alone, the writer learned that you don''t need to know everything, feel brave, or even be happy the whole time for a journey to be worth it. And always go a little farther than you planned.', 'Lessons Learned Traveling Iceland Solo', 'Julian Spina', 'The Outbound', 'https://www.theoutbound.com/julian-spina-534283/lessons-learned-traveling-iceland-solo', 'Always go a little farther than you think', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('iceland', 0.65, 0.15, 0.6, 0.45, 0.75, 'courage');
insert into country_activities (country_id, position, activity) values ('iceland', 1, 'Drive the Ring Road alone and pull over constantly');
insert into country_activities (country_id, position, activity) values ('iceland', 2, 'Walk to the waterfall behind the waterfall');
insert into country_activities (country_id, position, activity) values ('iceland', 3, 'Soak in a hot spring while the weather does its worst');

insert into countries (id, name, continent, region) values ('mexico', 'Mexico', 'North America', 'North America');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('mexico', 'Trust, joy and gratitude are daily practices', 'Living in Mexico through the pandemic, the writer learned lessons about trust, joy and gratitude from neighbors who practice all three daily. Time bends, plans flex, and the good life is shared rather than scheduled.', 'What Living in Mexico Taught Me About Trust, Joy and Gratitude During the Pandemic', null, 'JourneyWoman', 'https://journeywoman.com/destinations/north-america/mexico/five-lessons-learned-living-in-mexico-during-the-pandemic/', 'Mexico gave me courage to keep travelling.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('mexico', 0.5, 0.7, 0.4, 0.2, 0.35, 'patience');
insert into country_activities (country_id, position, activity) values ('mexico', 1, 'Shop a mercado for lunch and let the vendors decide it');
insert into country_activities (country_id, position, activity) values ('mexico', 2, 'Sit in a zócalo through an entire evening');
insert into country_activities (country_id, position, activity) values ('mexico', 3, 'Celebrate whatever the town is celebrating this week');

insert into countries (id, name, continent, region) values ('cuba', 'Cuba', 'North America', 'Caribbean');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('cuba', 'Make the most of what you have', 'Nine days in Cuba taught the writer resourcefulness as a national art form: classic cars kept alive by ingenuity, music made nightly from nothing, joy that doesn''t wait for abundance. Scarcity teaches what sufficiency means.', 'What Traveling to Cuba Taught Me About Life, and Making the Most of It', null, 'Intrepid Travel', 'https://www.intrepidtravel.com/adventures/travel-cuba-life-lessons/', 'Life here is about making the most of it.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('cuba', 0.7, 0.8, 0.55, 0.15, 0.45, 'patience');
insert into country_activities (country_id, position, activity) values ('cuba', 1, 'Stay in a casa particular and eat what the family eats');
insert into country_activities (country_id, position, activity) values ('cuba', 2, 'Walk Havana''s Malecón at sunset with everyone else');
insert into country_activities (country_id, position, activity) values ('cuba', 3, 'Find live music in Trinidad and don''t sit down');

insert into countries (id, name, continent, region) values ('peru', 'Peru', 'South America', 'Andes');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('peru', 'There is almost always a way through', 'Peru kept putting the writer in frustrating, occasionally scary situations — and kept proving that a way out exists if you stay calm and look for it. The mountains, and the people who live among them, teach quiet resilience.', 'Lessons from Peru', 'Jillian Parker', 'Medium', 'https://medium.com/@jillianparker1/lessons-from-peru-782616e037f4', '9.9 times out of 10, there is a way out', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('peru', 0.75, 0.5, 0.8, 0.35, 0.6, 'courage');
insert into country_activities (country_id, position, activity) values ('peru', 1, 'Hike the Salkantay route to Machu Picchu');
insert into country_activities (country_id, position, activity) values ('peru', 2, 'Acclimatize in Cusco with coca tea and patience');
insert into country_activities (country_id, position, activity) values ('peru', 3, 'Cross the Sacred Valley by colectivo and improvisation');

insert into countries (id, name, continent, region) values ('colombia', 'Colombia', 'South America', 'Andes / Caribbean');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('colombia', 'Warmth is a way of life', 'Six months of living in Colombia taught the writer two entangled lessons: buses, boats and plans run late, and the people are so warm, helpful and welcoming that the lateness stops mattering. Patience and friendliness are the same skill.', '6 Lessons Learned From Living in Colombia for Six Months', 'Madalyne Loree', 'Backroad Packers (Medium)', 'https://backroadpackers.medium.com/6-lessons-learned-from-living-in-colombia-for-six-months-88408060decd', 'Be okay with things not always being on time.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('colombia', 0.65, 0.85, 0.5, 0.1, 0.5, 'belonging');
insert into country_activities (country_id, position, activity) values ('colombia', 1, 'Dance badly and happily in a Medellín salsa bar');
insert into country_activities (country_id, position, activity) values ('colombia', 2, 'Ride a chiva bus into the coffee hills');
insert into country_activities (country_id, position, activity) values ('colombia', 3, 'Learn Spanish from fruit vendors, one exotic fruit at a time');

insert into countries (id, name, continent, region) values ('brazil', 'Brazil', 'South America', 'South America');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('brazil', 'Don''t sweat the small stuff', 'Living in Brazil taught the writer patience and lightness: people with less stay generous, strangers become friends over common ground, and Brazilians'' ease with themselves rubs off. Most of what stresses you is small stuff.', 'Don''t Sweat the Small Stuff: 7 Life Lessons I Learned Living in Brazil', null, 'Elite Daily', 'https://www.elitedaily.com/life/culture/lessons-learned-in-brazil/1043317', 'Brazilians taught me how to be more comfortable with myself.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('brazil', 0.6, 0.9, 0.45, 0.1, 0.5, 'self_knowledge');
insert into country_activities (country_id, position, activity) values ('brazil', 1, 'Spend a beach day the Brazilian way: all day, everyone invited');
insert into country_activities (country_id, position, activity) values ('brazil', 2, 'Follow live samba until late in Rio''s Lapa district');
insert into country_activities (country_id, position, activity) values ('brazil', 3, 'Share a churrasco with people you met an hour ago');

insert into countries (id, name, continent, region) values ('argentina', 'Argentina', 'South America', 'Southern Cone');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('argentina', 'Joy doesn''t wait for ease', 'Studying abroad in Buenos Aires, the writer was reminded daily of real hardship — and of the happiness people carry anyway. Generosity is reflexive: a seat offered, mate shared, an asado invitation extended to whoever''s around.', 'Studying Abroad in Buenos Aires, Argentina: Changes in Perspective', 'Prasanna Karur', 'Medium', 'https://medium.com/@pkarur/studying-abroad-in-buenos-aires-argentina-changes-in-perspective-be158116ba57', 'They struggle, but they are happy', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('argentina', 0.5, 0.8, 0.35, 0.05, 0.4, 'belonging');
insert into country_activities (country_id, position, activity) values ('argentina', 1, 'Accept the asado invitation from someone you just met');
insert into country_activities (country_id, position, activity) values ('argentina', 2, 'Drink mate the communal way — one gourd, everyone');
insert into country_activities (country_id, position, activity) values ('argentina', 3, 'Stay out past 2am because dinner started at 11');

insert into countries (id, name, continent, region) values ('new-zealand', 'New Zealand', 'Oceania', 'Australasia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('new-zealand', 'Nature resets your scale', 'Early hikes, mountain sunsets and meteor showers taught the writer what beauty without production values feels like. New Zealand''s landscapes shrink your problems and enlarge your appetite for being outside in the world.', 'A Trip to New Zealand Taught Me the True Beauty of Nature', null, 'Contiki six-two', 'https://www.contiki.com/six-two/article/new-zealand-natural-beauty/', 'Sunset from Mount Ruapehu, meteor showers overhead — nature at full volume.', false);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('new-zealand', 0.45, 0.3, 0.45, 0.4, 0.8, 'self_knowledge');
insert into country_activities (country_id, position, activity) values ('new-zealand', 1, 'Hike the Tongariro Alpine Crossing at first light');
insert into country_activities (country_id, position, activity) values ('new-zealand', 2, 'Swim at a black-sand beach after a long drive');
insert into country_activities (country_id, position, activity) values ('new-zealand', 3, 'Watch a meteor shower far from any town');

insert into countries (id, name, continent, region) values ('australia', 'Australia', 'Oceania', 'Australasia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('australia', 'Silence teaches you to trust yourself', 'Days alone in the Australian outback stripped the writer down to essentials. In that enormous silence he learned to trust his intuition — the quiet inner signal that cities, screens and schedules usually drown out.', '16 Massive Life Lessons I Learned in the Australian Outback', 'Bryan Reeves', 'bryanreeves.com', 'https://bryanreeves.com/16-massive-life-lessons-i-learned-in-the-australian-outback/', 'trusting my intuition', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('australia', 0.55, 0.2, 0.65, 0.3, 0.7, 'self_knowledge');
insert into country_activities (country_id, position, activity) values ('australia', 1, 'Camp a night in the outback under the full Milky Way');
insert into country_activities (country_id, position, activity) values ('australia', 2, 'Drive a stretch of road with no service and no plan');
insert into country_activities (country_id, position, activity) values ('australia', 3, 'Watch Uluṟu change color from sunrise to dark');

insert into countries (id, name, continent, region) values ('fiji', 'Fiji', 'Oceania', 'Pacific Islands');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('fiji', 'Build with people, not just for them', 'Working on a construction project in Vuadomo village, the writer learned to step outside her comfort zone and design with the community, not at it. Fiji''s lessons — community, resilience, optimism — outlasted the build.', 'What Fiji Taught Me About Sustainable Construction', 'Isabella Spicer', 'Institution of Civil Engineers', 'https://www.ice.org.uk/news-views-insights/inside-infrastructure/isabella-spicer-quest-travel-to-fiji-lessons', 'community, resilience, and optimism', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('fiji', 0.6, 0.9, 0.55, 0.3, 0.25, 'belonging');
insert into country_activities (country_id, position, activity) values ('fiji', 1, 'Join a kava ceremony and follow the village''s lead');
insert into country_activities (country_id, position, activity) values ('fiji', 2, 'Stay in a homestay, not a resort');
insert into country_activities (country_id, position, activity) values ('fiji', 3, 'Help with whatever the village is building that week');

insert into countries (id, name, continent, region) values ('vanuatu', 'Vanuatu', 'Oceania', 'Pacific Islands');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('vanuatu', 'Enough is abundant', 'Six weeks in a remote Vanuatu village showed the writer people with little money and no interest in more of it — content, proud, warm and unhurried. It permanently changed his perspective on life, work and community.', 'Life Lessons from a Remote Paradise: Six Weeks in Vanuatu Village', 'Stevo Perry', 'Medium', 'https://stevenperryau.medium.com/life-lessons-from-a-remote-paradise-six-weeks-in-vanuatu-village-41d717704593', 'more than content with what they had — and proud of it', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('vanuatu', 0.85, 0.7, 0.75, 0.1, 0.2, 'patience');
insert into country_activities (country_id, position, activity) values ('vanuatu', 1, 'Live a week on island time in a village guesthouse');
insert into country_activities (country_id, position, activity) values ('vanuatu', 2, 'Learn to fish the way your hosts'' grandparents did');
insert into country_activities (country_id, position, activity) values ('vanuatu', 3, 'Watch the Yasur volcano glow from the ash plain');

insert into countries (id, name, continent, region) values ('papua-new-guinea', 'Papua New Guinea', 'Oceania', 'Melanesia');
insert into lessons (country_id, lesson, summary, source_title, source_author, source_publication, source_url, pull_quote, pull_quote_verbatim) values ('papua-new-guinea', 'Comfort doesn''t create growth — courage does', 'Remote, raw and humbling, Papua New Guinea was the writer''s masterclass in courage. Doing hard things in a place with no cushions taught her that growth lives entirely on the far side of comfort.', 'Courage Over Comfort: What Papua New Guinea Taught Me About Doing Hard Things', 'Laura Beauparlant', 'laurabeauparlant.com', 'https://www.laurabeauparlant.com/blog/courage-over-comfort-what-papua-new-guinea-taught-me-about-doing-hard-things', 'a masterclass in courage', true);
insert into country_traits (country_id, novelty, sociality, discomfort, structure, pace, growth_theme) values ('papua-new-guinea', 1, 0.5, 1, 0.15, 0.45, 'courage');
insert into country_activities (country_id, position, activity) values ('papua-new-guinea', 1, 'Trek to a highlands village reachable only on foot');
insert into country_activities (country_id, position, activity) values ('papua-new-guinea', 2, 'Attend a sing-sing gathering of highland clans');
insert into country_activities (country_id, position, activity) values ('papua-new-guinea', 3, 'Travel by banana boat between coastal villages');


import {Question} from "../../app/models/question";
const questions = [{
    "question": "Which of these is true about the sleep of zebras?",
    "category": "brain-teasers",
    "answer": "They sleep standing up.",
    "choices": ["All of these", "They sleep standing up.", "They would fall asleep every 5 to 6 hours.", "They need more than 12 hours of sleep a day."]
}, {
    "question": "A farmer had 12 sheep and 3 cows. All of the animals except 9 sheep died. How many animals did he have left in his farm?",
    "category": "brain-teasers",
    "answer": "9 sheep",
    "choices": ["5 cows and 1 sheep", "9 sheep", "2 cows", "none"]
}, {
    "question": "I dont speak, I cannot hear, but I always tell the truth.",
    "category": "brain-teasers",
    "answer": "The Mirror",
    "choices": ["The watch", "Fish", "The Mirror", "Old granny"]
}, {
    "question": "Can a Roman Catholic man from California marry his widows sister who is from Texas?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["Yes", "No"]
}, {
    "question": "How does this proverb continue: The squeaking wheel gets ...",
    "category": "brain-teasers",
    "answer": "The grease",
    "choices": ["The rust", "Removed", "The broken", "The grease"]
}, {
    "question": "An old man was looking at a photograph of a young man. Somebody asked him who it was. The mans answer was the following: Brothers and sisters, I have none. But that mans father is my fathers son. Who was in the photograph?",
    "category": "brain-teasers",
    "answer": "His son",
    "choices": ["His cousin", "His grandfather", "His son", "His nephew"]
}, {
    "question": "A shepherd from a village tended the sheep of those of his fellow villagers who did not tend their own. However, he did not tend the sheep of those villagers who tended their own sheep. In that village, there was only one shepherd and he also had several sheep. Can all this be true?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["Yes", "No"]
}, {
    "question": "A famous story begins like that, It was a clear summer day and my family was preparing dinner for the New Years Eve. Can this story be true?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "In a basket there are five apples. We give the five apples to five kids so that each kid receives an apple. However, in the basket there is still one apple. Is this possible?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "Two days ago my son was three years old and next year he will be 6.  This could be a correct statement.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["False", "True"]
}, {
    "question": "The single difference between the two cities A and B was that the citizens of A always said the truth, while the citizens of B never did. Once, a man who had never been to either city arrived at one of them. Which question should the man have asked in order to identify the city he was in? Have in mind, that people from A often visited their friends in B and vice versa.",
    "category": "brain-teasers",
    "answer": "Are you a citizen of this city?",
    "choices": ["How old are you?", "Are you married?", "Is this city A ?", "Are you a citizen of this city?"]
}, {
    "question": "You have two right triangles. The sides of the first one are 3 m, 4 m and 5 m. The sides of the second are 3 m, 4 m and 7 m. The area of the second triangle is bigger.",
    "category": "brain-teasers",
    "answer": "False",
    "choices": ["True", "False"]
}, {
    "question": "What number comes next in the row - 31, 28, 31, 30, ?",
    "category": "brain-teasers",
    "answer": "31",
    "choices": ["32", "31", "30", "29"]
}, {
    "question": "If you were running a race and passed the person in second place, what place would you be in?",
    "category": "brain-teasers",
    "answer": "2nd",
    "choices": ["1st", "2nd", "3rd", "Out of the race"]
}, {
    "question": "What number comes next: 1, 11, 21, 1211, 111221, 312211, 13112221?",
    "category": "brain-teasers",
    "answer": "1113213211",
    "choices": ["131122211211", "11221311", "31221113112221", "1113213211"]
}, {
    "question": "What is the largest number you can write out with numbers 1, 2, and 3?",
    "category": "brain-teasers",
    "answer": "10,460,353,203",
    "choices": ["10,460,353,203", "6", "123", "321"]
}, {
    "question": "John went to a party one night.  The next day he was asked if he met a lot people at the gathering.  Figure it out for yourself, John said.  Of the girls I spoke to, all but two were blondes, all but two were brunettes, and all but two were redheads.  How many girls did he talk to?",
    "category": "brain-teasers",
    "answer": "3",
    "choices": ["3", "6", "4", "2"]
}, {
    "question": "A kid found two old coins. The first coin said it was minted in 43 BC, while the other said it was minted during the reign of Emperor Nicholas I. Which of the coins was fake?",
    "category": "brain-teasers",
    "answer": "Both",
    "choices": ["Neither one", "Both", "The one minted during the reign of Emperor Nicholas I", "The one minted in 43 BC"]
}, {
    "question": "A contestant on a TV show had to answer 26 questions. For each correct answer he received 8 points, while a wrong answer penalized him 5 points. How many answers did the man answer correctly, bearing in mind that he eventually had 0 points?",
    "category": "brain-teasers",
    "answer": "10",
    "choices": ["12", "8", "16", "10"]
}, {
    "question": "Lets suppose that I offer you a bet under the following conditions: I bet $1 and claim that if you give me $5 I will give you $99 in return. Will you gain something from this bet?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["Yes", "No"]
}, {
    "question": "You can put something between the digits 2 and 3 so that the resultant number is bigger than 2 and smaller than 3.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["True", "False"]
}, {
    "question": "A row consists of 10 letters. The first six are - Z, O, T, T, F, F.  Which is the tenth letter?",
    "category": "brain-teasers",
    "answer": "N",
    "choices": ["T", "E", "S", "N"]
}, {
    "question": "You have a square and a circle and the perimeter of the square is equal to the circumference of the circle. Which of the two figures covers a bigger area?",
    "category": "brain-teasers",
    "answer": "The circle",
    "choices": ["The square", "The circle", "No conclusion can be drawn from the given information.", "Both cover the same are."]
}, {
    "question": "Sometimes we see 10 but say 22, see 4 but say 16.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["False", "True"]
}, {
    "question": "Can you build a house so that all its walls face north?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "At the beginning of the day, I was behind a car at a stoplight, whose vanity plate read: 4SBWIU.  What is the driver of this car most likely a fan of?",
    "category": "brain-teasers",
    "answer": "Movies",
    "choices": ["NASCAR", "Fly Fishing", "Movies", "Sports"]
}, {
    "question": "My first stop was the supermarket.  When I had completed my shopping and was in the parking lot, I spied this snazzy auto with the following vanity plate: 10S42.  What sport is the driver of this vehicle most likely a fan of?",
    "category": "brain-teasers",
    "answer": "Tennis",
    "choices": ["Golf", "Badminton", "Bowling", "Tennis"]
}, {
    "question": "My next errand took me all the way across town.  I decided to take a shortcut which put me on a boulevard of small, eclectic businesses.  One of these businesses I passed on my way was a fortune tellers shop.  A Cadillac was parked out front, which, I assume, belonged to the owner of the shop. What would be the most appropriate vanity plate for this automobile?",
    "category": "brain-teasers",
    "answer": "N2IT",
    "choices": ["PASS  THE CASH", "N2IT", "N3IT", "N4IT"]
}, {
    "question": "On the on-ramp to the freeway, I was behind an auto with the following plate:  4IS.  What is the likely profession of the driver of this car?",
    "category": "brain-teasers",
    "answer": "Optometrist",
    "choices": ["Zoologist", "Optometrist", "Biologist", "Geologist"]
}, {
    "question": "Well, I got caught in noon rush hour.  As luck would have it, I saw yet another vanity plate.  This one told me that the driver at least checks in his / her rear view mirror.  What plate did I see?",
    "category": "brain-teasers",
    "answer": "OICU2",
    "choices": ["OIUC2", "OIC3", "RU2", "OICU2"]
}, {
    "question": "I went to my favorite restaurant to pick up some carry out for an early dinner.  I saw the owners car parked out front. The vanity plate asked a question.  What do you suppose the plate read?",
    "category": "brain-teasers",
    "answer": "E10YET",
    "choices": ["N0TABL42", "E10YET", "RESORV8NS", "8ISENUF"]
}, {
    "question": "I always go up and down the stairs without moving.",
    "category": "brain-teasers",
    "answer": "A rug",
    "choices": ["A scarf", "A curtain", "A towel", "A rug"]
}, {
    "question": "If the mother of a boy spanks him and then his father comes and does the same, who hurts the most?",
    "category": "brain-teasers",
    "answer": "The boy",
    "choices": ["The boys brother", "The mother", "The boy", "The father"]
}, {
    "question": "Which letter behaves as a selfish friend?",
    "category": "brain-teasers",
    "answer": "P",
    "choices": ["S", "A", "P", "D"]
}, {
    "question": "You always wear these flowers.",
    "category": "brain-teasers",
    "answer": "Tulips",
    "choices": ["Roses", "Daises", "Tulips", "Poppies"]
}, {
    "question": "12 candles were alight. The wind blew out 5 of them. How many candles were left?",
    "category": "brain-teasers",
    "answer": "12",
    "choices": ["0", "7", "12", "5"]
}, {
    "question": "A team of two horses ran for 3 miles. How many miles did each of the horses run?",
    "category": "brain-teasers",
    "answer": "3",
    "choices": ["1.5", "0", "3", "6"]
}, {
    "question": "Nine passengers carried with them enough food for five days. Several other passengers joined the first group and they all shared the same food, which was now enough for three days. How many passengers joined the first group?",
    "category": "brain-teasers",
    "answer": "6",
    "choices": ["7", "8", "6", "5"]
}, {
    "question": "How many times does the digit 3 occur in the numbers from 1 to 50?",
    "category": "brain-teasers",
    "answer": "15",
    "choices": ["15", "14", "10", "13"]
}, {
    "question": "A pole is 20 m high. An ant is climbing it as follows - every day she ascends 5 m and every night she descends 4 m. In how many days will the ant be on the top of the post?",
    "category": "brain-teasers",
    "answer": "16",
    "choices": ["16", "19", "15", "20"]
}, {
    "question": "A butcher had to stick a total number of 50 sheep in a week. Every day he sticked an equal number of sheep and managed to fulfill the task. How many sheep did he kill per day?",
    "category": "brain-teasers",
    "answer": "10",
    "choices": ["10", "4", "8", "7"]
}, {
    "question": "In a basket there are three sorts of apples. How many apples do you have to  take from the basket to make sure you have at least 2 apples of the same sort?",
    "category": "brain-teasers",
    "answer": "4",
    "choices": ["5", "4", "3", "2"]
}, {
    "question": "An old potter was selling pots. Once, a woman came and bought a pot for its sticker price.  She had to pay $1 plus half its price.  What was the price?",
    "category": "brain-teasers",
    "answer": "2",
    "choices": ["2", "4", "3", "1"]
}, {
    "question": "Four glasses and a jug weigh as mush  as 17 iron balls do. The jug weighs as much as a glass and 7 balls. How many balls does the jug weigh?",
    "category": "brain-teasers",
    "answer": "9",
    "choices": ["9", "8", "10", "5"]
}, {
    "question": "Three cats can eat 3 mice in 1.5 hours. How long will it take 10 cats to eat 20 mice?",
    "category": "brain-teasers",
    "answer": "3 hours",
    "choices": ["10 hours", "6 hours", "3 hours", "1.5 hour"]
}, {
    "question": "Is there a way you can divide 7 identical pieces of bread equally among 12 people?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["No", "Yes"]
}, {
    "question": "A lion can eat a sheep in 2 hours, a wolf - in 3 hours, and a dog - in 6 hours. How long will it take the three animals to eat a sheep if they eat together?",
    "category": "brain-teasers",
    "answer": "1 hour",
    "choices": ["2 hours", "8 hours", "1/2 hour", "1 hour"]
}, {
    "question": "Two men were walking towards a river. There was a boat on one of the riverbanks. However, this boat could carry only one man at a time.  Nevertheless, both men managed to cross the river with the boat.  This is possible.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["True", "False"]
}, {
    "question": "Some of my relatives are 600 times younger than me. Can this be true?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "A man is carrying three croquet balls across a bridge. The bridge has a sign that says bridge can only hold 200 pounds. The man weighs 195 pounds and the croquet balls weigh 2 pounds each. The man ends up crossing the bridge in one trip and no one else helps him. This is possible.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["False", "True"]
}, {
    "question": "Which letter comes next in this series:\nW-L-C-N-I-T-?",
    "category": "brain-teasers",
    "answer": "S",
    "choices": ["T", "W", "S", "Z"]
}, {
    "question": "A squirrel finds a hollow log with 9 ears of corn in it.  If he can carry out 3 ears every day, how many days will it take him to empty the log?",
    "category": "brain-teasers",
    "answer": "9",
    "choices": ["6", "3", "9", "None of these"]
}, {
    "question": "Suppose youre taking a multiple-choice quiz.  One question has three choices - A, B, C.  You do not know the answer and guess A. The instructor then announces that C is incorrect. Should you switch to B before turning in your paper?",
    "category": "brain-teasers",
    "answer": "Yes, this should help",
    "choices": ["No, it would be worse", "Yes, this should help", "It depends on when the announcement was made", "It doesnt matter"]
}, {
    "question": "A worm can gnaw through 1 mm of paper for a single day. On a bookshelf there are two volumes, each 4 cm thick. Each of the covers is 2 mm thick. How long will it take the warm to gnaw from the first page of the first volume to the last page of the second volume?",
    "category": "brain-teasers",
    "answer": "4 days",
    "choices": ["60 days", "80 days", "14 days", "4 days"]
}, {
    "question": "The train leaves in 2 minutes and the distance to the train station is 2 miles. If you drive the first mile at 30 miles/h, at what speed should you drive the second mile?",
    "category": "brain-teasers",
    "answer": "It does not matter.",
    "choices": ["It does not matter.", "90 miles/h", "120 miles/h", "60 miles/h"]
}, {
    "question": "A driver noticed that the dashboard showed he had driven a total number of 15951 miles. He thought that this was a strange number because no matter in what direction it was read (from left to right or from right to left) it was the same. However, in two hours, the dashboard showed a number that had that same characteristic. What was the speed of the car?",
    "category": "brain-teasers",
    "answer": "55",
    "choices": ["110", "55", "65", "450"]
}, {
    "question": "Three hunters, different in height, got stuck in a pit. They tried to get out of it and stepped one onto the other. However, the shortest, who was on top, could not reach the edge for just 5 cm. Can these three hunters ever get out of the pit without the help of anyone else or of any additional object?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "In the Middle Ages a thief went into a church and fell asleep on a pew. He dreamed about stealing the cross of the minister and being sentenced to execution for that. However, just as he was about to be executed, he was woken by a local lady. Immediately after that the thief died. Modern scientists say it was due to a heart attack. Is everything okay with the story?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["No", "Yes"]
}, {
    "question": "One of these pairs of numbers has this strange characteristic - when you subtract one of them from the other you get a number equal to what you will get if you divide one by the other. Can you spot it?",
    "category": "brain-teasers",
    "answer": "25/4 and 5/4",
    "choices": ["25/4 and 5/4", "24/6 and 24/8", "3 and 2/12", "30/6 and 36/6"]
}, {
    "question": "The local limo company have recently expanded their inventory and no longer have enough room for all of their limos. Fifteen of the limos have to be stored outside. If they decide to increase their garage space by 50%, this will give them enough room for all of their current limos, plus enough room to store another fifteen in the future. How many limos does the company currently own?",
    "category": "brain-teasers",
    "answer": "75",
    "choices": ["60", "80", "85", "75"]
}, {
    "question": "A horse is tied to a five meter rope in front of an old saloon. Six meters directly behind the horse is a bale of hay. Without breaking his rope, the horse is able to eat the hay whenever he chooses. Assuming the horse is perfectly normal, is this possible?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["No", "Yes"]
}, {
    "question": "A famous playboy explained to a beautiful woman his system for playing roulette: In each round, I always bet half of the money I have at the time on red. Yesterday, I counted and I had won as many rounds as I had lost. Over the course of the night, did the gambler win, lose or break even?",
    "category": "brain-teasers",
    "answer": "lose",
    "choices": ["lose", "break even", "win", "None of these"]
}, {
    "question": "A horse travels a certain distance each day. Strangely enough, two of its legs travel 30 miles each day and the other two legs travel nearly 31 miles. Can this be true?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "A total of 15 delegates from Africa, Asia, America, and Europe meet at an international conference.\nEach continent sends a different number of delegates, and each is represented by at least 1 delegate.\nAmerica and Asia send a total of 6 delegates.\nAsia and Europe send a total of 7 delegates.\nWhich continent has sent 4 delegates?",
    "category": "brain-teasers",
    "answer": "Asia",
    "choices": ["America", "Africa", "Asia", "Europe"]
}, {
    "question": "One kid has a toy car with a strange remote control- it has only one button on it. When the car is switched on, it starts moving forward and doesnt stop until its switched off. When the boy presses the button, the car makes a 60 degree turn clockwise. Considering that this is a very lazy boy, try calculating the smallest number of times he has to press the button so that the car travels back to him.",
    "category": "brain-teasers",
    "answer": "5",
    "choices": ["4", "5", "7", "3"]
}, {
    "question": "Here is something like a warm-up before you get to the next one. Three friends, Peter, Nick and Tom were competing in a race. After they finished, a person ,who was late for the race, asked them who was the winner. Tom said I didnt finish first and Peter didnt finish second. Then Nick said Tom didnt finish second either. Who was the winner?",
    "category": "brain-teasers",
    "answer": "Peter",
    "choices": ["Peter", "Nick", "Its impossible", "Tom"]
}, {
    "question": "One watermelon weighs 10kg (22 lbs)  plus the half of its own weight. How much does it weigh?",
    "category": "brain-teasers",
    "answer": "20kg (44 lbs)",
    "choices": ["10kg (22 lbs)", "25kg (55 lbs)", "5kg (11 lbs)", "20kg (44 lbs)"]
}, {
    "question": "Try thinking out a random 3-digit number and writing it twice on a piece of paper, forming a 6-digit number (for example the number is  123, than you will have to put down 123123 on the paper). Now divide this 6-digit number by 7. There will be no remainder, I guarantee. Now divide the result by 11. No remainder again, I guarantee. Now divide the new result by 13.  What happened?",
    "category": "brain-teasers",
    "answer": "The result is your original number",
    "choices": ["The result is your original number", "The result is zero", "There is remainder", "The result is twice your original number"]
}, {
    "question": "Two dice are randomly thrown. What is the possibility that the number, formed by the two digits that come form the dice, is a prime?",
    "category": "brain-teasers",
    "answer": "5:12",
    "choices": ["5:12", "5:18", "19:36", "35:36"]
}, {
    "question": "Yesterday I heard an interesting conversation in a shop:\n\nClient: How much is one?\nSalesman: Twenty cents.\nClient: What about ninety four?\nSalesman: Thirty cents.\nClient: OK, Ill buy twenty nine. How much is it?\nSalesman: Twenty cents.\n\nIs it possible that it was a real product they were talking about?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["No", "Yes"]
}, {
    "question": "4, 7, 12, 19, 28, 39, ??",
    "category": "brain-teasers",
    "answer": "52",
    "choices": ["11", "67", "78", "52"]
}, {
    "question": "A man buys a horse for $60. After a while he sells it for 70$. Some time passes and the man regrets his decision and goes to buy the horse again. But now he has to pay $80 for it and he does. After a while he regrets to have bought the horse back and sells it for $90. Now in total, how much loss/profit did the man make from the three transactions?",
    "category": "brain-teasers",
    "answer": "$10",
    "choices": ["$10", "- $20", "$20", "0"]
}, {
    "question": "Somewhere, there is a very interesting village. And whats so interesting about it? Well, in this village there is a barber, a very special barber. He cuts the hair of everybody in the village that doesnt cut his own hair.  Who then cuts the barbers hair?",
    "category": "brain-teasers",
    "answer": "Such village cannot exist, it is a paradox",
    "choices": ["The barber of another village", "Noone", "Himself", "Such village cannot exist, it is a paradox"]
}, {
    "question": "Two men were playing for title of  championship of the world for the checkers tournament. They each played five games and they each won three. There were no ties, is this possible?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["No", "Yes"]
}, {
    "question": "Take two apples from three apples and what do you have?",
    "category": "brain-teasers",
    "answer": "two apples",
    "choices": ["no apples", "two apples", "three apples", "one apple"]
}, {
    "question": "A famous, well respected archaeologist went on a dig in Jerusalem. He found a coin dated 56 B.C. He was so excited, he rushed to the museum so it could be put on display. But the museum wouldnt accept the coin because they said it could not possibly be authentic. They said that the coin had to be a fake.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["True", "False"]
}, {
    "question": "In what country can your spouse be jailed along with you if you are caught drinking and driving?",
    "category": "brain-teasers",
    "answer": "Malaysia",
    "choices": ["Pakistan", "Germany", "India", "Malaysia"]
}, {
    "question": "Approximately how much money does the taxpayer spend on a prisoner serving a life sentence in California?",
    "category": "brain-teasers",
    "answer": "1,550,000",
    "choices": ["750,000", "500,000", "100,000", "1,550,000"]
}, {
    "question": "What creature is responsible for the most human deaths?",
    "category": "brain-teasers",
    "answer": "The mosquito",
    "choices": ["The brown recluse spider", "The hippo", "The great white shark", "The mosquito"]
}, {
    "question": "What is the largest county in the US?",
    "category": "brain-teasers",
    "answer": "San Bernadino, CA",
    "choices": ["Bernalillo, NM", "Maricopa, AZ", "Dade, FL", "San Bernadino, CA"]
}, {
    "question": "Is it possible to test positive on a breathalyzer after drinking only a glass of milk?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "I have four legs in the morning, two legs in the afternoon and three legs in the evening. What am I?",
    "category": "brain-teasers",
    "answer": "A human",
    "choices": ["A tortoise", "A sloth", "A human", "A raven"]
}, {
    "question": "Why do Chinese people eat more rice than Japanese people?",
    "category": "brain-teasers",
    "answer": "Because Chinese people are more than Japanese people",
    "choices": ["Because Chinese rice ripens more quickly than Japanese rice", "Because Chinese people are more than Japanese people", "Because Japanese people export rice for other countries and the Chinese dont", "Because Chinese rice is more delicious than Japanese rice"]
}, {
    "question": "This is the smartest letter.",
    "category": "brain-teasers",
    "answer": "Y",
    "choices": ["A", "Y", "C", "W"]
}, {
    "question": "Which is the month that allows women to talk the least?",
    "category": "brain-teasers",
    "answer": "February",
    "choices": ["February", "December", "August", "March"]
}, {
    "question": "What is the number of men born last year in USA?",
    "category": "brain-teasers",
    "answer": "None",
    "choices": ["None", "2 013 841", "6 914 381", "1 502 106"]
}, {
    "question": "This is what you can see once in a minute, twice in a moment, but never in a thousand years.",
    "category": "brain-teasers",
    "answer": "The letter M",
    "choices": ["The sun", "An eclipse", "A Solstice", "The letter M"]
}, {
    "question": "With a red beard, gray mustache and black sideburns, the man had a distinct HIRSUTE quality. What does hirsute mean?",
    "category": "brain-teasers",
    "answer": "hairy, shaggy, covered in hair",
    "choices": ["hairy, shaggy, covered in hair", "mysterious, always in disguise", "eccentric", "multicolored"]
}, {
    "question": "Stacy was extremely annoyed by Jills PECCADILLO. Jill constantly ate food with her mouth open. What does the word peccadillo mean?",
    "category": "brain-teasers",
    "answer": "a petty fault",
    "choices": ["chewing loudly", "vegetarian", "disgusting manners", "a petty fault"]
}, {
    "question": "DERIDE means to laugh at someone with contempt.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["False", "True"]
}, {
    "question": "Jerry was worried he would mumble and slur his words, so he had to go slowly and try to ENUNCIATE each word. Words might get lost if you dont enunciate. What does enunciate mean?",
    "category": "brain-teasers",
    "answer": "pronounce articulately",
    "choices": ["shout and project", "mask drunkenness", "pronounce articulately", "mime and gesticulate"]
}, {
    "question": "Annas brother took his AVUNCULAR duties very seriously. He taught her children how to read, write and speak German. What does avuncular mean?",
    "category": "brain-teasers",
    "answer": "Adjective of an uncle",
    "choices": ["Adjective of a mentor", "Qualities of a Germanic monk", "Adjective of a father", "Adjective of an uncle"]
}, {
    "question": "When Jack and Jill went to see The Notebook, Jill was surprised at Jacks obvious display of his LACHRYMOSITY. What was Jack doing?",
    "category": "brain-teasers",
    "answer": "crying",
    "choices": ["talking loudly", "crying", "laughing", "sleeping"]
}, {
    "question": "A CHORTLE is an tool used to cut pastry dough.",
    "category": "brain-teasers",
    "answer": "False",
    "choices": ["False", "True"]
}, {
    "question": "The rancid meat attracted flies and maggots and wafting from it was a FETID odor. What is the meaning of fetid?",
    "category": "brain-teasers",
    "answer": "stinking",
    "choices": ["stinking", "chemical", "sweet", "food"]
}, {
    "question": "The king required FEALTY from all his vassals. What does the word fealty mean?",
    "category": "brain-teasers",
    "answer": "allegiance",
    "choices": ["allegiance", "food", "payment, rent", "livestock"]
}, {
    "question": "The siblings were complete opposites. Tom was pedantic and read all the time and Lucy was LUDIC. She was always getting mud on her clothes. What is the meaning of ludic?",
    "category": "brain-teasers",
    "answer": "playful",
    "choices": ["outdoor-loving", "playful", "clumsy", "illiterate"]
}, {
    "question": "The vegetable rhubarb is delicious but its leaves are poisonous. What did rhubarb originally mean?",
    "category": "brain-teasers",
    "answer": "root of the barbarian",
    "choices": ["edible poison", "beware", "root of the barbarian", "poisoned ruby"]
}, {
    "question": "What modern slang term once meant a carnival worker who performed disgusting tasks such as biting off the heads of live chickens?",
    "category": "brain-teasers",
    "answer": "Geek",
    "choices": ["Nerd", "Geek", "Dork", "Freak"]
}, {
    "question": "What is heavier a pound of bricks or a pound of feathers?",
    "category": "brain-teasers",
    "answer": "Their weight is equal",
    "choices": ["There is no way to tell", "The feathers", "Their weight is equal", "The bricks"]
}, {
    "question": "A farmer had 20 sheep. All but 8 died. How many are still alive?",
    "category": "brain-teasers",
    "answer": "8",
    "choices": ["0", "12", "15", "8"]
}, {
    "question": "In a house with a maid, a mail receiver, and a chef, the owner was murdered on a Sunday morning. The police questioned all the 3 people (the chef, the mail receiver, and the maid). The chef said; I was making her breakfast. The mail receiver said; I was getting the mail., and finally the maid said; I was cleaning her living room. The police arrested one of them right after the interview. Who got arrested?",
    "category": "brain-teasers",
    "answer": "The mail receiver",
    "choices": ["The maid", "The mail receiver", "The chef", "She committed suicide"]
}, {
    "question": "There is a branch with 10 birds on it. I shot 2 of them and then 1 more. How many birds are left on the branch?",
    "category": "brain-teasers",
    "answer": "0",
    "choices": ["0", "2", "8", "7"]
}, {
    "question": "If you have in your suitcase 6 white socks, 4 red socks, 8 green socks, and 2 brown socks, how many socks would you have to pull out (without looking at them) to be sure you have a matching pair?",
    "category": "brain-teasers",
    "answer": "5",
    "choices": ["6", "8", "4", "5"]
}, {
    "question": "Joe had 29 pairs of socks. How many socks did he have?",
    "category": "brain-teasers",
    "answer": "58",
    "choices": ["60", "58", "56", "29"]
}, {
    "question": "One camera could take 350 pictures and Bob bought 3 cameras of the same type. How many pictures could he take?",
    "category": "brain-teasers",
    "answer": "1050",
    "choices": ["700", "none", "1050", "350"]
}, {
    "question": "One iPod can hold 950 songs and 3 movies. How many iPods of this model would one person have to buy to have 27 movies and 8550 songs?",
    "category": "brain-teasers",
    "answer": "9",
    "choices": ["8", "10", "7", "9"]
}, {
    "question": "In an office building, there are 350 windows and half as many doors. How many doors are there in 3 office buildings?",
    "category": "brain-teasers",
    "answer": "525",
    "choices": ["525", "500", "550", "575"]
}, {
    "question": "A monster had double the amount of eyes he had ears, triple the amount of ears he had legs, and had six legs. How many eyes did he have?",
    "category": "brain-teasers",
    "answer": "36",
    "choices": ["34", "26", "36", "41"]
}, {
    "question": "If I had $654,987, how much change is that?",
    "category": "brain-teasers",
    "answer": "65,498,700 cents",
    "choices": ["66,345,200 cents", "65,783,500 cents", "65,498,700 cents", "65,577,200 cents"]
}, {
    "question": "In a rectangular room there are 10 chairs. It is possible to arrange the chairs in such a way so that an equal number of chairs is set against each wall of the room.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["False", "True"]
}, {
    "question": "Five years ago the sum of the age of a sister and a brother was 8. What will be the same sum in 5 years?",
    "category": "brain-teasers",
    "answer": "28",
    "choices": ["It will not change.", "18", "13", "28"]
}, {
    "question": "In a room, there can be two mothers and two daughters, three women in total.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["True", "False"]
}, {
    "question": "A woman once said about a man, I am not his wife but this mans mother is the mother-in-law of my mother. What were the man and the woman?",
    "category": "brain-teasers",
    "answer": "A daughter and a father",
    "choices": ["A daughter and a grandfather", "A brother and a sister", "A daughter and a father", "A mother and a son"]
}, {
    "question": "A cowboy was looking after 100 animals (oxen, cows and calves). For his job he was paid $100 (for every ox he received $10, for every cow $5 and for every calf $0.5). How many were the oxen, the cows and the calves?",
    "category": "brain-teasers",
    "answer": "1 ox, 9 cows, 90 calves",
    "choices": ["9 oxen, 1 cow, 10 calves", "10 oxen, 10 cows, 10 calves", "1 ox, 9 cows, 90 calves", "3 oxen, 50 cows, 47 calves"]
}, {
    "question": "A farmer had 9 cows. The first one produced 1 gallon of milk, the second one 2 gallons and so on. The ninth cow produced 9 gallons of milk. The farmer had three sons and he wanted to divide the cows in such a way that each of his sons received an equal number of cows and the cows of each produced an equal amount of milk. Is that possible?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "In a lake there were lilies. The strange thing about them was that they doubled their number once per day. If on the 15th day half of the lake was covered with lilies, on which day will the whole lake be covered with them?",
    "category": "brain-teasers",
    "answer": "16",
    "choices": ["22", "16", "7", "30"]
}, {
    "question": "A peasant buys a pregnant sheep, which gave birth to a lamb. At the age of 3, the lamb gives birth to another lamb. After that it starts bearing a lamb per year. How many sheep will the peasant have 9 years after the birth of the first lamb if all the lambs are female and none of them ever dies?",
    "category": "brain-teasers",
    "answer": "60",
    "choices": ["54", "78", "60", "97"]
}, {
    "question": "A farmer had a yard, whose shape was a square, and in the four corners of this square there were apple trees. Some years later the farmer decided to make his yard twice as big and preserve the square shape. However, after the enlargement the four apple trees were still by the fence.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["False", "True"]
}, {
    "question": "Marsha dug her FUNEREAL attire out of the closet. It consisted of a black dress and a black overcoat. What does funereal mean?",
    "category": "brain-teasers",
    "answer": "having to do with a funeral",
    "choices": ["monotoned", "frumpy", "oversized", "having to do with a funeral"]
}, {
    "question": "The newly blooming lavender was a HARBINGER of spring. It was beautiful and fragrant. What does harbinger mean?",
    "category": "brain-teasers",
    "answer": "a sign of things to come",
    "choices": ["an ode", "rebirth", "pleasant to the senses", "a sign of things to come"]
}, {
    "question": "Her passion for art bordered on pathological MONOMANIA. Shes a sculptor, studies medieval art in night classes, frequents galleries and is often caught doodling in a notebook. What does monomania mean?",
    "category": "brain-teasers",
    "answer": "excessive concentration one one subject",
    "choices": ["excessively busy", "excessive concentration one one subject", "extremely wealthy", "patronising culture"]
}, {
    "question": "It wasnt accidental it was pure KISMET that Joey fell in love with Laura. What does kismet mean?",
    "category": "brain-teasers",
    "answer": "fate, destiny",
    "choices": ["fate, destiny", "contrived, forced", "planned", "a happy accident"]
}, {
    "question": "Because Ben travels to many countries for business, he has written a POLYGLOT lexicon for himself. It contains quick references on phrases he might need in any given situation. What does polyglot mean?",
    "category": "brain-teasers",
    "answer": "containing many languages",
    "choices": ["containing many maps", "containing many words", "containing many languages", "pertaining to business ventures"]
}, {
    "question": "A QUAGMIRE is a difficult or precarious situation.",
    "category": "brain-teasers",
    "answer": "True",
    "choices": ["True", "False"]
}, {
    "question": "The fortune teller persuaded Anna that she needed a PHILTER to gain the attention of her beau. She only needed to apply the elixir and think of him. What does PHILTER mean?",
    "category": "brain-teasers",
    "answer": "love potion",
    "choices": ["love potion", "medicinal cream", "makeup", "alcoholic beverage"]
}, {
    "question": "Matt and Julie asked their son How was your day at school? and they always received the same BRUSQUE answer-fine. Brusque means habitual, constant, the same.",
    "category": "brain-teasers",
    "answer": "False",
    "choices": ["True", "False"]
}, {
    "question": "Jack grabbed Janets hand and they began to GAMBOL in the sunshine. They felt like children, not a care in the world. What does gambol mean?",
    "category": "brain-teasers",
    "answer": "to frolic and leap playfully",
    "choices": ["to wager money on an outcome", "to sing  a duet", "to have sex", "to frolic and leap playfully"]
}, {
    "question": "To ESCHEW something means to be attracted to it.",
    "category": "brain-teasers",
    "answer": "False",
    "choices": ["True", "False"]
}, {
    "question": "After a long walk, two sons and two fathers find three apples. Each of them has an apple and they all go their way. How is that possible?",
    "category": "brain-teasers",
    "answer": "they were a boy, his father and his grandfather",
    "choices": ["they were a boy, his father and his grandfather", "the sons were cousins", "one of them had a hidden apple", "the sons were twins"]
}, {
    "question": "The name of what is coded in the following: 86,smopuim?",
    "category": "brain-teasers",
    "answer": "the name of a software product",
    "choices": ["it does not mean anything", "the name of a software product", "a NASA aircraft", "a secret CIA project"]
}, {
    "question": "Five girls are sitting next to each other on a train.  Ann and Betty are as close to each other as Ann and Kate are.  Dana and Ann are sitting as close to each other as Dana and Kate are. Between which two of her friends is the fifth girl, Jane, sitting?",
    "category": "brain-teasers",
    "answer": "between Ann and Betty",
    "choices": ["between Dana and Betty", "between Ann and Betty", "between Betty and Kate", "between Kate and Dana"]
}, {
    "question": "What number multiplied by 10 equals the square of the same number, times 5?",
    "category": "brain-teasers",
    "answer": "2",
    "choices": ["4", "5", "2", "10"]
}, {
    "question": "Bob has a book of 100 pages and in 10 seconds he can count out 10 pages. What is the shortest time in which Bob can define where the 60th page is?",
    "category": "brain-teasers",
    "answer": "40 seconds",
    "choices": ["40 seconds", "59 seconds", "15 seconds", "60 seconds"]
}, {
    "question": "Two people get to a river and find a boat capable of accommodating only one person. Using this boat, both of them manage to cross the river. If they crossed without any of the them swiming the river which of the following is true?",
    "category": "brain-teasers",
    "answer": "They were on different banks of the river.",
    "choices": ["The river was wider than longer.", "This is impossible.", "They were on different banks of the river.", "There was a bridge on the river."]
}, {
    "question": "Which term refers to a king or prince in India?",
    "category": "brain-teasers",
    "answer": "raja",
    "choices": ["raja", "haraj", "majah", "namaste"]
}, {
    "question": "Complete the Latin term for an unacceptable person: persona non _____.",
    "category": "brain-teasers",
    "answer": "grata",
    "choices": ["dedicata", "accepta", "grata", "ingrata"]
}, {
    "question": "There are 15 birds sitting on the branches of a tree. A hunter goes by and shoots 3 of them. How many birds are left on the tree?",
    "category": "brain-teasers",
    "answer": "0",
    "choices": ["12", "10", "3", "0"]
}, {
    "question": "A man walked by an old fisherman and asked him how many fish he had caught. The fisherman replied: The half of the eight, the nine without its tail, and the six without its head. How many fish did the fisherman caught?",
    "category": "brain-teasers",
    "answer": "0",
    "choices": ["9", "19", "6", "0"]
}, {
    "question": "A tree is 20 meters tall. An ant is climbing it. Every day the ant climbs 5 meters, and each night it descends 4 meters. In how many days will the ant reach the top of the tree?",
    "category": "brain-teasers",
    "answer": "16",
    "choices": ["10", "13", "20", "16"]
}, {
    "question": "A bar of soap is placed on one of the sides of a pair of scales. On the other side there is 3/4 of a bar of the same soap and Ð° 3/4 kg metal weight. The scales are in balance. How much does a bar of soap weigh?",
    "category": "brain-teasers",
    "answer": "3 kg",
    "choices": ["2 kg", "1 kg", "4 kg", "3 kg"]
}, {
    "question": "There are three sorts of apples in a basket. How many apples have to be taken from the basket, without looking, to be sure that there are at least 2 apples of the same sort?",
    "category": "brain-teasers",
    "answer": "4",
    "choices": ["3", "4", "10", "8"]
}, {
    "question": "A boy and a pig weigh as much as 5 crates. The pig weighs as much as 4 cats. 2 cats and the pig weigh as much as 3 crates. How many cats weigh as much as the boy?",
    "category": "brain-teasers",
    "answer": "6 cats",
    "choices": ["5 cats", "6 cats", "8 cats", "9 cats"]
}, {
    "question": "A fish costs a dollar and half a fish. How much do 5 fish cost?",
    "category": "brain-teasers",
    "answer": "$10",
    "choices": ["$20", "$10", "$15", "$5"]
}, {
    "question": "There are three lemons. One of them is lighter than the other two, which have the same weight. Can we tell which of the lemons is the lighter one with just one measurement on the scales?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["No", "Yes"]
}, {
    "question": "A father has seven sons, and each son has one sister. How many children does the father have?",
    "category": "brain-teasers",
    "answer": "8",
    "choices": ["15", "9", "14", "8"]
}, {
    "question": "Several rabbits and hens are placed together in a cage. How many rabbits and hens are there, if the total number of their heads is 35, and the combined number of their legs is 94?",
    "category": "brain-teasers",
    "answer": "12 rabbits and 23 hens",
    "choices": ["10 rabbits and 24 hens", "13 rabbits and 20 hens", "12 rabbits and 23 hens", "20 rabbits and 13 hens"]
}, {
    "question": "Is there a kind of coat that can only be put on wet?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "10% of all the people living in a certain town in Georgia have unlisted phone numbers. If you selected 100 names at random from the towns phone book, on average, how many of these people would have unlisted phone numbers?",
    "category": "brain-teasers",
    "answer": "0%",
    "choices": ["0%", "15%", "35%", "10%"]
}, {
    "question": "A magician had a water glass filled to the top. Holding the glass above his head he let it drop to the floor without spilling a single drop of water. Is this possible?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["No", "Yes"]
}, {
    "question": "Can you take a picture of a person with a wooden leg?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["No", "Yes"]
}, {
    "question": "Is it  possible to name three consecutive days without using the words Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "You are on a ship and over the side hangs a rope ladder with one foot rungs. The tide rises a one foot per hour. At the end of five hours, how much of the ladder will remain above the water assuming that 12 rungs were above the water when the tide began to rise?",
    "category": "brain-teasers",
    "answer": "12 rungs",
    "choices": ["none", "7 rungs", "5 rungs", "12 rungs"]
}, {
    "question": "This is a gun dog breed which is subdivided into Springer, Cocker, Cavalier King Charles, etc.",
    "category": "brain-teasers",
    "answer": "Spaniel",
    "choices": ["Collie", "Spaniel", "Labrador", "Alsatian"]
}, {
    "question": "What family of animals has species called Oryx, Duiker, Dik-dik and Impala?",
    "category": "brain-teasers",
    "answer": "Antelope",
    "choices": ["Llamas", "Antelope", "Deer", "Buffalo"]
}, {
    "question": "What is the only venomous snake native to the British Isles?",
    "category": "brain-teasers",
    "answer": "Adder",
    "choices": ["Fox Snake", "Bog Viper", "Pembrokeshire Whip-snake", "Adder"]
}, {
    "question": "This animal, also known as Suricate, is a member of the mongoose family. It has a long, thin tail which is used for balance when standing on hind legs. It lives underground in colonies of up to 30 individuals that operate an early warning system where sentries stand guard beside the burrow entrances and warn of approaching danger from predators.",
    "category": "brain-teasers",
    "answer": "Meerkat",
    "choices": ["Meerkat", "Marmoset", "Aye-aye", "Jackrabbit"]
}, {
    "question": "This majestic bird can be golden, bald and tawny. One of the species is a symbol of the United States of America.",
    "category": "brain-teasers",
    "answer": "Eagle",
    "choices": ["Cuckoo", "Eagle", "Vulture", "Owl"]
}, {
    "question": "What is the name of the white crystalline sugar found in wood and straw?",
    "category": "brain-teasers",
    "answer": "Xylose",
    "choices": ["Xylene", "Xylem", "Xylose", "Xenon"]
}, {
    "question": "What is the name of the characters that have appeared in Brian Herberts Legends of Dune universe, Disneys Aladdin and the video game System Shock 2?",
    "category": "brain-teasers",
    "answer": "Xerxes",
    "choices": ["Xebec", "Xeric", "Xerxes", "Xhosa"]
}, {
    "question": "What X-word means a colourless, flammable liquid ingredient used to make synthetic resins, dyes and insecticides?",
    "category": "brain-teasers",
    "answer": "Xylene",
    "choices": ["Xylose", "Xylem", "Xylene", "Xenon"]
}, {
    "question": "Is xenophobia a fear of artificial lights?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["No", "Yes"]
}, {
    "question": "What plant tissue conducts water and mineral salts from its roots to other parts of the plant and also provides mechanical support?",
    "category": "brain-teasers",
    "answer": "Xylem",
    "choices": ["Xylose", "Xylene", "Xebec", "Xylem"]
}, {
    "question": "Which word refers to a colourless, odourless gaseous element that occurs in trace amounts in air?",
    "category": "brain-teasers",
    "answer": "Xenon",
    "choices": ["Xylose", "Xenon", "Xanthene", "Xylene"]
}, {
    "question": "Were X-rays at one time proposed to be called RÃ¶ntgen rays?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "When you add 55 and 45 the sum is 100. When you add 65 and 35 the sum is also 100. But which is greater: 55 multiplied by 45 or 65 multiplied by 35?",
    "category": "brain-teasers",
    "answer": "55 multiplied by 45",
    "choices": ["55 multiplied by 45", "They are equal.", "65 multiplied by 35", "None of these"]
}, {
    "question": "Two doctors and two mothers went to an ice cream shop. Each one of them ordered different flavors. The waiter then gave them one chocolate, one vanilla, and one strawberry and everybody on the table had an ice cream. Is this possible?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["No", "Yes"]
}, {
    "question": "Two children were on their way to school, when they began to question what day of the week it was. They were so confused in their reckoning that one of them gave the following riddle to help sort the matter out: When the day after tomorrow is yesterday, then today will be as far from Sunday as that day was which was today when the day before yesterday was tomorrow!\nOn which day of the week were the children heading to school?",
    "category": "brain-teasers",
    "answer": "Sunday",
    "choices": ["Saturday", "Sunday", "Friday", "Monday"]
}, {
    "question": "We know very little about the life of the mathematician Diophantus (called the father of algebra) except that he lived around the year 250 B.C. Due to one admirer of his, who described his life by the means of an algebraic riddle, we can at least determine his age at death:\nDiophantuss youth lasted 1/6 of his life. He had his first beard in the next 1/12 of his life. At the end of the following 1/7 of his life Diophantus got married. Five years from then his son was born. His son lived exactly 1/2 of Diophantuss life. Diophantus died 4 years after the death of his son.\nHow long did Diophantus live?",
    "category": "brain-teasers",
    "answer": "84 years",
    "choices": ["84 years", "96 years", "90 years", "72 years"]
}, {
    "question": "Three goddesses were sitting in an old Indian temple. Their names were Truth (who always tells the truth), Lie (who is always lying) and Wisdom (who sometimes lies). In order to figure out which goddess was which you posed the following questions to each:\nAsking the left one: Who is sitting next to you?\nTruth, she answered.\nAsking the middle one: Who are you?\nWisdom.\nAnd at last question for the right one: Who is your neighbor?\nLie, she replied.\n\nFrom left to right in what order are goddesses sitting?",
    "category": "brain-teasers",
    "answer": "1. Wisdom 2. Lie 3. Truth",
    "choices": ["1. Wisdom 2. Truth 3. Lie", "1. Lie 2.Truth 3. Wisdom", "1. Wisdom 2. Lie 3. Truth", "1. Truth 2. Lie 3. Wisdom"]
}, {
    "question": "There are two kinds of people who live on a mysterious island. They are the so-called Honestants, who always speak the truth, and the others are the Swindlecants, who always lie.\n\nA visitor to the island went to a local pub and had a few drinks. When he was ready to leave he asked the bartender how much he owed. The bartender told him the total for his bill. It was quite expensive, so he asked the bartender if he spoke the truth. But the visitor did not hear the whispered answer so he asked a man sitting next to him about it. And the man said: The bartender said yes, but he is a big liar.\n\nWas the bartender a Honestant?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["Yes", "No"]
}, {
    "question": "You are on your way to visit your Grandma, who lives at the end of the valley. Its her birthday, and you want to give her the cakes youve made.\n\nBetween your house and her house, you have to cross 7 bridges, and as it goes in the land of make believe, there is a troll under every bridge! Each troll, quite rightly, insists that you pay a troll toll. Before you can cross their bridge, you have to give them half of the cakes you are carrying, but as they are kind trolls, they each give you back a single cake.\n\nWhat is the minimum number of cakes you will have to leave home with to make sure that you arrive at Grandmas with exactly 2 cakes?",
    "category": "brain-teasers",
    "answer": "2",
    "choices": ["14", "5", "24", "2"]
}, {
    "question": "My grandson is about as many days as my son is weeks, and my grandson is as many months as I am in years. My grandson, my son and I together are 120  years. Can you tell me my age in years?",
    "category": "brain-teasers",
    "answer": "72",
    "choices": ["65", "78", "72", "84"]
}, {
    "question": "It was Emilys first day at school. The teacher suggested that it would be a good idea for each child to meet every other child in the class. The teacher said, When you meet, please shake hands and introduce yourself by name. If there were 10 children in the class, how many were the total handshakes?",
    "category": "brain-teasers",
    "answer": "45",
    "choices": ["50", "45", "100", "55"]
}, {
    "question": "A woman has 7 children, half of them are boys.\nCan this statement be true?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "Paul designs food displays for the local Supermarket. For one of his displays, he wants to set up soup cans in the form of a square pyramid. Hes decided to use 10 cans for each side of the square base of the pyramid. If each carton holds 25 soup cans, how many cartons will Paul need to open to build the pyramid?",
    "category": "brain-teasers",
    "answer": "16",
    "choices": ["10", "15", "20", "16"]
}, {
    "question": "A firefighter stood on the middle rung of a ladder, spraying water on a burning house. He then climbed up 6 rungs before the heat of the flames caused him to come down 10 rungs. After some minutes he was able to climb 18 rungs to the very top of the ladder. How many rungs did the ladder have?",
    "category": "brain-teasers",
    "answer": "29",
    "choices": ["28", "14", "30", "29"]
}, {
    "question": "A man burst into a police station soaking wet and started screaming My wife has been murdered, my wife has been murdered! A police officer asked what had happened and the man explained that when they were walking along the cliffs of the shore, he heard a big roll of thunder come out of nowhere. No further thunder washeard after the first one. He turned around startled to see what happened and then a huge bolt of lightning struck and he heard his wife scream. He turned around and saw his wife lying mangled on the sharp rocks at the bottom of the cliff, and he saw a man running away. Can the mans story be true?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["No", "Yes"]
}, {
    "question": "The stubs obtained by burning ten candles will yield one extra candle if you melt them all together. If you burned 100 candles, how many extra candles could you make?",
    "category": "brain-teasers",
    "answer": "11",
    "choices": ["11", "8", "9", "10"]
}, {
    "question": "How long did the Hundred years war last?",
    "category": "brain-teasers",
    "answer": "116 years",
    "choices": ["110 years", "98 years", "116 years", "100 years"]
}, {
    "question": "Cold is faster than hot.",
    "category": "brain-teasers",
    "answer": "False",
    "choices": ["False", "True"]
}, {
    "question": "Its quarter past three. Of how many degrees is the angle formed by the hands of the clock at this moment?",
    "category": "brain-teasers",
    "answer": "7.5",
    "choices": ["7.5", "180", "15", "0"]
}, {
    "question": "Charlie asked Margaret how old she was and she answered him: In two years I will be twice as old as I was five years ago. How old is she?",
    "category": "brain-teasers",
    "answer": "12",
    "choices": ["12", "6", "7", "24"]
}, {
    "question": "A mother has 6 daughters and each of them has a brother. How many children are there?",
    "category": "brain-teasers",
    "answer": "7",
    "choices": ["6", "7", "12", "10"]
}, {
    "question": "What is the next letter in the sequence O, T, T, F, F, S, S, E,   ?",
    "category": "brain-teasers",
    "answer": "N",
    "choices": ["N", "O", "T", "E"]
}, {
    "question": "You meet two men who are playing a game. One of them tells only lies on Monday, Tuesday and Wednesday, and during the rest of the week he speaks the truth. The other one lies only on Thursday Friday and Saturday and says the truth the rest of the time. Today they both say they were lying yesterday. Which day of the week is it?",
    "category": "brain-teasers",
    "answer": "Thursday",
    "choices": ["Monday", "Tuesday", "Sunday", "Thursday"]
}, {
    "question": "This dessert was created for and named after a famous ballet dancer in 1926.",
    "category": "brain-teasers",
    "answer": "Pavlova",
    "choices": ["Pavlova", "Sara Lee Gateaux", "Tiramisu", "Rocky Road"]
}, {
    "question": "What food can be Chinese, Jerusalem and Globe?",
    "category": "brain-teasers",
    "answer": "Artichoke",
    "choices": ["Curry", "Cracker", "Artichoke", "Pork"]
}, {
    "question": "This food is one of the most versatile and convenient. You can boil it, fry it, poach it, scramble it, use it in baking. What is it?",
    "category": "brain-teasers",
    "answer": "Egg",
    "choices": ["Sugar", "Fish", "Wheat", "Egg"]
}, {
    "question": "If there are three pineapples and you take two, how many will you have?",
    "category": "brain-teasers",
    "answer": "2",
    "choices": ["2", "1", "0", "3"]
}, {
    "question": "Imagine you were running a race and you passed the person in 2nd place. What place would you be in?",
    "category": "brain-teasers",
    "answer": "2nd",
    "choices": ["4th", "1st", "3rd", "2nd"]
}, {
    "question": "What letter should be added the group of letters P, N, N, E, S, O, R, H, E, T, and I to form a twelve-letter word that is related to blood?",
    "category": "brain-teasers",
    "answer": "Y",
    "choices": ["P", "S", "Y", "A"]
}, {
    "question": "A woman has 7 children, half of them are boys.\nCan this statement be true?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "Which letter comes next in this series:\nW-L-C-N-I-T-?",
    "category": "brain-teasers",
    "answer": "S",
    "choices": ["S", "W", "T", "Z"]
}, {
    "question": "A total of 15 delegates from Africa, Asia, America, and Europe meet at an international conference.\nEach continent sends a different number of delegates, and each is represented by at least 1 delegate.\nAmerica and Asia send a total of 6 delegates.\nAsia and Europe send a total of 7 delegates.\nWhich continent has sent 4 delegates?",
    "category": "brain-teasers",
    "answer": "Asia",
    "choices": ["Europe", "Asia", "America", "Africa"]
}, {
    "question": "Yesterday I heard an interesting conversation in a shop:\nClient: How much is one?\nSalesman: Twenty cents.\nClient: What about ninety four?\nSalesman: Thirty cents.\nClient: OK, Ill buy twenty nine. How much is it?\nSalesman: Twenty cents.\nIs it possible that it was a real product they were talking about?",
    "category": "brain-teasers",
    "answer": "Yes",
    "choices": ["Yes", "No"]
}, {
    "question": "What on earth could dance, and live and die?\nWithout legs, or lungs, or being alive?",
    "category": "brain-teasers",
    "answer": "Fire",
    "choices": ["Water", "Darkness", "Fire", "Wind"]
}, {
    "question": "Each morning I appear\nTo lie at your feet,\nAll day I follow you\nNo matter how fast you run,\nYet I nearly die\nIn the midday sun.\nWhat am I?",
    "category": "brain-teasers",
    "answer": "Your shadow",
    "choices": ["A doppelganger", "Someone Elses shadow", "An apparition", "Your shadow"]
}, {
    "question": "Im one of five, and Im not alive.\nThe one who sent me forth became king,\nthe one who got me died.\nWhat am I?",
    "category": "brain-teasers",
    "answer": "A stone",
    "choices": ["A rock", "A banana", "A boulder", "A stone"]
}, {
    "question": "I am related to the water but I am not wet.\nI am related to a shadow but I am multicolored.\nI create an illusion but show what is real. What am I?",
    "category": "brain-teasers",
    "answer": "a mirror",
    "choices": ["a bed", "gold", "a mirror", "shiny things"]
}, {
    "question": "I have eight to spare, in case I lose my one.\nIm not a number.\nWhat am I?",
    "category": "brain-teasers",
    "answer": "a cat",
    "choices": ["a dog", "nine", "a cat", "one"]
}, {
    "question": "Two children were on their way to school, when they began to question what day of the week it was. They were so confused in their reckoning that one of them gave the following riddle to help sort the matter out: When the day after tomorrow is yesterday, then today will be as far from Sunday as that day was which was today when the day before yesterday was tomorrow!\nOn which day of the week were the children heading to school?",
    "category": "brain-teasers",
    "answer": "Sunday",
    "choices": ["Monday", "Sunday", "Friday", "Saturday"]
}, {
    "question": "We know very little about the life of the mathematician Diophantus (called the father of algebra) except that he lived around the year 250 B.C. Due to one admirer of his, who described his life by the means of an algebraic riddle, we can at least determine his age at death:\nDiophantuss youth lasted 1/6 of his life. He had his first beard in the next 1/12 of his life. At the end of the following 1/7 of his life Diophantus got married. Five years from then his son was born. His son lived exactly 1/2 of Diophantuss life. Diophantus died 4 years after the death of his son.\nHow long did Diophantus live?",
    "category": "brain-teasers",
    "answer": "84 years",
    "choices": ["96 years", "84 years", "72 years", "90 years"]
}, {
    "question": "Three goddesses were sitting in an old Indian temple. Their names were Truth (who always tells the truth), Lie (who is always lying) and Wisdom (who sometimes lies). In order to figure out which goddess was which you posed the following questions to each:\nAsking the left one: Who is sitting next to you?\nTruth, she answered.\nAsking the middle one: Who are you?\nWisdom.\nAnd at last question for the right one: Who is your neighbor?\nLie, she replied.\nFrom left to right in what order are goddesses sitting?",
    "category": "brain-teasers",
    "answer": "1. Wisdom 2. Lie 3. Truth",
    "choices": ["1. Truth 2. Lie 3. Wisdom", "1. Wisdom 2. Truth 3. Lie", "1. Wisdom 2. Lie 3. Truth", "1. Lie 2.Truth 3. Wisdom"]
}, {
    "question": "There are two kinds of people who live on a mysterious island. They are the so-called Honestants, who always speak the truth, and the others are the Swindlecants, who always lie.\nA visitor to the island went to a local pub and had a few drinks. When he was ready to leave he asked the bartender how much he owed. The bartender told him the total for his bill. It was quite expensive, so he asked the bartender if he spoke the truth. But the visitor did not hear the whispered answer so he asked a man sitting next to him about it. And the man said: The bartender said yes, but he is a big liar.\nWas the bartender a Honestant?",
    "category": "brain-teasers",
    "answer": "No",
    "choices": ["Yes", "No"]
}, {
    "question": "You are on your way to visit your Grandma, who lives at the end of the valley. Its her birthday, and you want to give her the cakes youve made.\nBetween your house and her house, you have to cross 7 bridges, and as it goes in the land of make believe, there is a troll under every bridge! Each troll, quite rightly, insists that you pay a troll toll. Before you can cross their bridge, you have to give them half of the cakes you are carrying, but as they are kind trolls, they each give you back a single cake.\nWhat is the minimum number of cakes you will have to leave home with to make sure that you arrive at Grandmas with exactly 2 cakes?",
    "category": "brain-teasers",
    "answer": "2",
    "choices": ["14", "24", "2", "5"]
}];
export const Questions = questions.map(question => {
    return new Question(question.question, question.choices, question.answer, false);
});
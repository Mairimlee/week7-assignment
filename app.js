const displayResult = document.querySelector('.result'); 
const btnGetAPrediction = document.querySelector('button'); 

const options = [
  'You will fall in love this afternoon.',
  'You will win a lottery.',
  'You will lose your phone. Check your left pocket.',
  'You will fall asleep on a couch.',
  'You will be taking a ring to Mordor.',
  'You will get your letter from Hogwarts.',
  'Elon Musk will buy TikTok.',
  'Your crash will be mad at you, or give you a kiss. I am just a program, I have no idea of what will happen in the future.',
  'You will discover your room is actually a simulation run by cats.',
  'You will accidentally skip 48 hours into the future after opening TikTok.',
  'An AI chatbot will ask you for life advice later tonight.',
  'You will be chosen as Earth\'s ambassador to an alien race because of a meme you posted.',
  'You will find out you are a background character in someone else\'s dream.',
  'You will push a door that clearly says "PULL" while people are watching.',
  'You will wave back at someone who was actually waving to the person behind you.',
  'The exact song you need to hear will play on the radio next.',
  'You will remember a devastating argument comeback... exactly three days too late.',
  'Your next snack will taste significantly better than expected.',
  'A minor inconvenience is lurking in your near future. Watch your step.',
  'Someone is thinking about you right now, but they are muted on your Discord.',
  'The next shadow you see out of the corner of your eye is just checking up on you.',
  'An unexpected letter will arrive, but the ink will fade before you finish reading it.',
  'A pigeon will look you dead in the eyes and nod with deep respect.',
  'You will accidentally open your front camera and be deeply startled by your own face.',
  'Error 404: Fortune not found. Please try being luckier next time.'
];

console.log("%c🔮 Fortune Teller Engine Initialized!", "color: purple; font-size: 14px; font-weight: bold;");
console.log(`Total predictions loaded in database: ${options.length}`);

btnGetAPrediction.addEventListener('click', () => {
  console.clear();
  
  console.log("%c[SYSTEM]: Prediction requested by user click.", "color: gray; font-style: italic;");

  const rawRandom = Math.random();
  const randomIndex = Math.floor(rawRandom * options.length);
  
  console.log(`-> Raw Math.random() value: ${rawRandom}`);
  console.log(`-> Target array index selected: ${randomIndex}`);

  const prediction = options[randomIndex];
  displayResult.innerHTML = prediction;

  console.log(`%c[SUCCESS]: Displayed prediction: "${prediction}"`, "color: green; font-weight: bold;");
});
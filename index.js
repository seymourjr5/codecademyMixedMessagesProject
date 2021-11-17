const generateRandomNumber = number => Math.floor(Math.random() * number);
//console.log(generateRandomNumber(9));

const beautifulQuotes = {
    inspirational: ["When you have a dream, you've got to grab it and never let go", "There is nothing impossible to they who will try", "Keep your face always toward the sunshine, and shadows will fall behind you.", "Belief creates the actual fact.", "Believe you can and you’re halfway there."],
    poetry: ["To be or not to be: that is the question", "Tread softly because you tread on my dreams", "Two roads diverged in a wood, and I – I took the road less traveled by", "Water, water, everywhere, nor any drop to drink", "I wandered lonely as a cloud"],
    sad: ["One good thing about music, when it hits you, you feel no pain.", "We all create fictions to hide our pain", "Pain is temporary but the person who hurt you is permanently never going to change, move on.", "If you can sit with your pain, listen to your pain, and respect your pain—in time you will move through your pain.", "I only exist when people need something."],
    rapLines: ["Never forget where you from, someone will remind you", "Real Gs move in silence like lasagna", "Fuck tha police comin straight from the underground", "His palms are sweaty, knees weak, arms are heavy", "I ain't a killer, but don't push me"]
}

/*
this is to check how to iterate through an object
for (let type in beautifulQuotes){
    //iterates through each element of the object
    console.log(type,": ", beautifulQuotes[type]);
}
*/
let yourQuote = [];

console.log("This will tell your favourite types of quotes :) ENJOY!!!!!");


for (let key in beautifulQuotes){
    let yourNumber = generateRandomNumber(beautifulQuotes[key].length);
    switch (key){
        case 'inspirational':
            yourQuote.push(`Your favourite Inspirational quote is: ${beautifulQuotes[key][yourNumber]}\n`);
            break;
        case 'poetry':
            yourQuote.push(`Your favourite Potery quote is: ${beautifulQuotes[key][yourNumber]}\n`);
            break;
        case 'sad':
            yourQuote.push(`Your favourite Sad quote is: ${beautifulQuotes[key][yourNumber]}\n`);
            break;
        case 'rapLines':
            yourQuote.push(`Your favourite Rap quote is: ${beautifulQuotes[key][yourNumber]}\n`);
            break;
    }
}
console.log("\n");
console.log(yourQuote.join('\n'));




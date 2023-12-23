let RandomResultEl = document.getElementById('RandomResult');
let RandomEl = document.getElementById('Randomize');

let Quotes = [

'All our dreams can come true — if we have the courage to pursue them. - Walt Disney',
'Champions keep playing until they get it right. - Billie Jean King',
'A person who never made a mistake never tried anything new. - Albert Einstein',
'If you’re not positive energy, you’re negative energy. - Mark Cuban',
'Do one thing every day that scares you. -Eleanor Roosevelt',
'Well done is better than well said. -Benjamin Franklin',
'It is during our darkest moments that we must focus to see the light. -Aristotle',
'Go confidently in the direction of your dreams! Live the life you\'ve imagined. -Henry David Thoreau',
'"Don\'t worry when you are not recognized, but strive to be worthy of recognition." -Abraham Lincoln',
'"The secret of life is to fall seven times and to get up eight times." — Paulo Coelho',
'"Life is trying things to see if they work." -Ray Bradbury'


];



 RandomEl.addEventListener("click", function() {

   for(let i = 0; i < 1; i++){
       let RandomQuotesRandomizer = Math.floor(Math.random() * Quotes.length) + 1;
         RandomResultEl.innerHTML = Quotes[RandomQuotesRandomizer];
   }

});
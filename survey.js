const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Q1 Name
rl.question('What\'s your name? ', (name) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  //Q2 Favourite Activity 
  rl.question('What\'s an activity you like doing? ', (activity) => {
    // console.log(`Thank you for your valuable feedback: ${answer}`);

    //Q3 Favourite Thing to Listen While Doing Activity
    rl.question('What do you listen to while doing that activity? ', (song) => {
      // console.log(`Thank you for your valuable feedback: ${answer}`);

      //Q4 Favourite Meal
      rl.question('Which meal is your favourite? (eg. breakfast, brunch, lunch, dinner)', (meal) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`);

        //Q5 Favourite Thing to Eat For That Meal
        rl.question('What\'s your favourite thing to eat for that meal? ', (dish) => {
          // console.log(`Thank you for your valuable feedback: ${answer}`);

          //Q6 Favourite Sport
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            // console.log(`Thank you for your valuable feedback: ${answer}`);

            //Q7 Favourite Superpower (What You're Amazing At)
            rl.question('What\'s your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              // console.log(`Thank you for your valuable feedback: ${answer}`);
              console.log(`${name} likes doing ${activity} while listening to ${song}. Their favaurite meal is ${meal}, and their favourite dish for that meal is ${dish}. For exercising, ${name} loves playing ${sport}. Their superpower is ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });

});

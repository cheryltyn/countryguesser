# Introducing Fun With Flags!

Introducing Fun With Flags, a game to help improve your knowledge of flags! For Big Bang Theory fans, this game will not sound new to you. This was inspired by main character Sheldon Cooper’s love for flags! I always thought it was so cool that Sheldon was so knowledgeable with flags. As such, I decided to make a game about flags so I can improve my own knowledge of flags! 

## Instructions:

1. **Choose # of Questions:** The user first begins at a start screen, choosing between 10, 15 or 20 questions. 
2. **Guess the Random Flag:** The user can then guess the flag. If they’re unsure, the number of letters provided can be helpful. 
3. Hints Provided: As the user keeps guessing, the letters will populate. Providing some hints for the user to keep progressing. 
4. Feeling stuck? The user can always choose to skip. 
5. Get your final score: Once the game ends, the user can see their final score and choose to restart! 

## Technologies Used:

1. HTML, CSS were used for the design of the website 
2. Javascript was used to run the game mechanics

## Considerations:

1. **Preventing repeated flags:** Despite it only having 10-20 questions, I wanted to prevent the possibility of flags reappearing. As such, I had to remove a flag from the list whenever it’s already been randomly selected. 
2. **Allowing skips:** Not everyone know all the flag and I wanted to provide the option to skip a question. Yet the user had to be “penalised” for skipping, therefore I made the question number go up, while score remains the same. 
3. **Providing hints through letters count:** I added a hangman style feature which shows the number of letters, and also populates as the user guesses. This allows the guessing process to be a little more fun and progressive as the letters populate. 

## Next Steps

1. **Adding more dynamic hints:** Adding hints specific to the countries, allowing for a more fun guessing experience for the player. 
2. **************************************************More dynamic text match:************************************************** Currently, the match of country is done letter by letter. If possible, I would hope more dynamic answers can be accepted. For example, Korea can be accepted as an answer for South Korea. 

## Key Takeaways:

### **Challenges:**

1. **Design Improvements:** I had initially wanted to make the words appear on the underline, e.g e n g l a n d but wasn’t able to find the supporting design for submissions. 
2. **Privacy Considerations:** I had initially wanted to do passport covers but upon researching, found that using them in a game might result in legal/privacy considerations. 
3. **Replicating Errors:** Some errors were difficult to replicate, for example, the same letter appearing on the next question by accident. 

### **Key Learnings:**

1. Test multiple times! Errors we might not expect may show up in different scenarios. For example, certain guesses which completed the hangman didn’t necessarily move to the next question. 
2. While I was invested in making the code work, I would like to know how to further optimise my code. 
3. I would like to build the mindset to encompass more use cases as I do my pseudocode.

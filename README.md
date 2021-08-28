# The Big Animal Quiz

## Author 
Kate_Ellen

## Project Overview 

![Website Display](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/responsive-screenshot.png)


This site is designed for people who love animals and quizzes. Test your dog knowledge while looking at cute pups, or test your trivia knowledge too see how much you know about the animal kingdom, or for the real test see if you can tell the difference between an alligator or a crocodile!  

## UX

### Wireframes 

Below are the wireframes I created when first starting my project. I changed my plans a lot from the original wireframes, as I decided to go for a smoother design with more hidden items at the beginning.  
- [Opening page](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/main-page-wireframe.png)
- [Dog Quiz](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/dog-quiz-wireframe.png)
- [Ali-V-Croc](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/ali-v-croc-wireframe.png)
- [Trivia](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/trivia-wireframe.png)

## Design Choices 

#### Colours 
I chose the below colour palette as it had a nice flow. I got my inspiration from the colours in this design:![Dribbble](https://dribbble.com/shots/4918055/attachments/4918055-Quiztion-Trivia-Game?mode=media)
![Colour palette](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/colour-palette.png)
#### Images



## Features 

### Existing Features 

#### Name Collection
- Collecting the user's name gives them a sense of inclusion when it shows on the next scrren. If a user doesn't want to add their name, it will default to Player 1. 
![Name collection](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/name-collection.png)

#### Rules Modal
- The rules modal tells users about the quiz and lets them know that they could play a few rounds without getting the same questions. 
![How To](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/how-to-button.png)
![Modal](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/how-to-modal.png)

#### Colour changing background depending on answer
- In order to give the user a sense if an answer is right or wrong, the background of the questions container changes to green for correct and red for incorrect.
![Right Answer background](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/right-answer.png)
![Wrong Answer background](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/wrong-answer.png)

#### Score tracker
- Allows users to see how many questions they got correct vs incorrect during the quiz
![Score Tracker](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/score-tracker.png)

#### Restart Button
- Allows user to start another quiz session. This button only shows up when the user has submitted an answer to the 5th question.
![Restart Button](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/restart-button.png)

### Features left to impliment. 

- I would like to add a fun 404 page. Due to tinme restirctions I sadly could not create this. 

## Testing

### Lighthouse Audit 
![Lighthouse Audit](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/audit.png)


### Validator Testing 
#### W3C CSS Validation 
Passed through the CSS validator with no errors.
![CSS Validator](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/css-validation.png)

#### HTML Validator 
Passed through HTML Validator with no errors.
![HTML Validator](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/html-validation.png)

#### JSHint 
Passed through JSHint with no errors. 
![JS Validator](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/js-validation.png)

#### Cross Browser and Device Testing

- I tested my site on the below. 
1. Samsung S20 - 5.97 X 2.72 
2. MacBook Pro - 12.78 X 8.94 
3. dev tools emulator: pixel 2 - SM 411 x 731 mm

- It was also tested on safari, chrome and firefox. 

## Defects 

I tracked defects in github. You can find them [here](https://github.com/KateEllen/Animal-Quiz/issues?q=is%3Aissue+is%3Aclosed)

## Deployments 
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  ![Settings Tab](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/settings-screenshot.png)
  - Scroll down the page and find the Github pages section, and click on the link.
  ![Github Page Link](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/github-pages-screenshot.png)
  - From the source section drop-down menu, select the Master Branch
  ![Select Source](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/published-screenshot.png)
  - Select the save button. 
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://kateellen.github.io/Animal-Quiz/

### Credits 

#### Images
 All imagery used the in the quizzes are cross referenced in the question.js questionnaire JSON object:  https://github.com/KateEllen/Animal-Quiz/blob/149d98b9e72a474f72546ddc36c11e47c6737ace/assets/js/questions.js#L8 

 #### Trivia Questions
- Trivia questions were chosen from: https://icebreakerquestions.info/animal-trivia/

#### Code
- Modal code was adopted from:   https://www.w3schools.com/howto/howto_css_modals.asphttps://www.w3schools.com/howto/howto_css_modals.asp 
- Noscript code was adopted from: https://www.w3schools.com/tags/tag_noscript.asp
- Onload function was adopted from: https://www.w3schools.com/jsref/event_onload.asp
- Overall quiz concept was developed by these tutorials: https://www.youtube.com/watch?v=riDzcEQbX6k
- I had help from Niall Joe Maher with developing the restart button. 
 
## Acknowledgments
- As always I would like to acknowledge my mentor Malia. She has calmed me down, prevented mental breakdowns and steered me in the right direction.
# Testing

Most testing was carried out via Google Chrome browser and Chrome Dev Tools for responsivity and checking to see if the JavaScript code was working as expected, throughout the process of building the project. Microsoft Edge and Firefox was also used for testing overall performance and responsivity. I also tested the site on an iPhone 12 for responsivity, this included Google Chrome and Safari browsers.

I used the Lighthouse tool in Chrome Dev Tools, which gave me a fully updated report of the overall performance of the webpage:

Landing Page

![Lighthouse Index](/documentation/images/testing/lighthouse-index.png)

Game Page

![Lighthouse Game](/documentation/images/testing/lighthouse-game.png)


## Manual Testing

Manual testing was carried out once the main features of the game had been implemented onto the webpage. After deploying the page early on in the project, I was able to use my iPhone to do manual testing across Google Chrome for iOS and Safari, as well as constant testing on desktop via Chrome Dev Tools.

Upon the first test I noticed that the background image was not showing on either mobile browsers, however the image was showing on the desktop.
Also, on Google chrome the buttons (game.html) css styling was not being applied, but was on Safari.

After altering the CSS for the background image, the image rendered on the mobile browsers with no issue.
![Background image bug fix](/documentation/images/testing/bground-image-bugfix.png)

*CSS lines 4-10*

- Landing Page
    - The background image is visible and centered to create the desired "nature" look.
    - 'Play' button sits underneath the game title and takes user to the game page when clicked.

- Game Page
    - The first question (image and 4 options) is shown when the page loads.

- Question Images
    - The image changes when an option button is clicked, ready for the next question.

- Answer Buttons
    - With every new question, there is a new arrangement of options.
    - When a button is clicked correctly, the score increments by 1 and the next question loads, with a new image and new arrangement of answers.
    - When a button is clicked incorrectly, the score does not increment and the next question is loaded.

- Score Tracking
    - With each correct answer selected, the score tracker increments by 1.
    - With each incorrect answer, the score does not change.

- Results Page
    - When all 10 questions have been answered, a message appears showing how many questions were answered correctly.
    - The 'Play Again' button is clickable and directs back to the first question.

- 404 Page
    - I have tested the error page and it is working as expected when encountering a non-existent page. When I clicked the link to return, I was redirected back to the main page.


## Additional Testing
Initially used the [Coolors Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5) to test the text colour against the background colour (See **Colours** section).

I then used the [a11y Contrast Checker](https://color.a11y.com/Contrast/) to test all colours throughout the project.

As you can see there is a problem detected with the #DEDCB5 against the white on the 'Love Leaves' heading. I am happy to leave these colours as they are, as the shadow styling around the text makes it a lot more visible. I can confidently say that the heading is easily read-able.

![Contrast Checker](/documentation/images/testing/contrast-check.png)

## Validators

I used the [W3C Markup Validation](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and [JShint Validator](https://jshint.com/) to ensure that there were no syntax errors throughout the project.

### HTML

Landing Page
![Landing Page](/documentation/images/testing/html-valid.png)

Game Page
![Game Page](/documentation/images/testing/html-valid2.png)

After adding the new features of the game introduction and the 404 error page, I ran all validator tests again to ensure no errors were found. All CSS and JavaScript remained free of errors, however the HTML validator showed one error consisting of a stray end div tag. (See below)

I fixed this error by removing the end div tag and the validator reverted back to showing no errors.

![Error](/documentation/images/testing/html-valid3.png)

### CSS
![CSS Validator](/documentation/images/testing/css-valid.png)

### JavaScript

![JShint validator](/documentation/images/testing/js-valid1.png)
![JShint validator](/documentation/images/testing/js-valid2.png)

## User Story Testing
### First Time Visitor Goals
- "As a first time visitor, I want to know what the game is about when first landing on the page, for my child to use."
    - Upon landing on the webpage, the user is able to clearly see what the topic of the game is. The title 'Love Leaves' and the background image is bold and eye catching for the user to see right away.
    - There is a brief introduction to the game below the title, hinting at what the quiz is about with an enticing question, "Do you recognise the leaves?".
- "As a first time visitor, I want my child to be able to access the game quickly through the click of a single button."
    - The quiz is accessible via one click of a button (below the game introduction), so that it is easy and simple for children to use.

![Landing Page](/documentation/images/testing/userstory1.png)

- "As a first time visitor, I want to test my knowledge of various trees."
    - There are 10 questions, each showing a different image of a leaf belonging to a type of tree. The user has a choice of 4 answers for each question.

![Question](/documentation/images/testing/userstory2.png)

### Returning Visitor Goals
- "As a returning visitor, I want to attempt to beat my previous score."
    - The chance to restart the game is immediate after completing a current game, or the user can return to the game at a later date.

![Total score](/documentation/images/features/total-score.png)

- "As a returning visitor, I want my child to continue to improve their knowledge on different trees."
    - This game is accessible and available for anyone to use and any time.

### Frequent Visitor Goals
- "As a frequent visitor, I like to try to beat my previous scores."
    - The game is available to play an unlimited amount of times.
    - I would like to include a scoreboard in the future so that users can keep track of their scores.

- "As a frequent visitor, I use this website for educational purposes in my classroom setting to help the children retain their knowledge of trees in a fun way."
    - The entire game is child friendly and school friendly. It is kept simple so that children of younger ages can access and play the game with no or little issues.
    - Images are clear and text/buttons are extremely visible.

![Game](/documentation/images/testing/userstory3.png)

## Known Bugs and Fixes
- On the Landing Page I noticed the Play Button was slightly off center even though I had used Bootstrap grids for positioning and styled the button so that it was in the centre, using *text-align: center*.
    - This was resolved by searching for the bug using Chrome Dev Tools. It showed that there was *bs-gutter-x* being applied that was making the button off centre. I added a class to the buttom element so that I was able to target this issue with CSS styling and re-centre the button.

    ![gutter-fix](/documentation/images/testing/gutter-fix.png)

    *Lines 12-14.*

    - When using the W3C Markup Validator, I received an error stating that I should not have an anchor element within a button element.
        - This was resolved by using the *onclick* attribute on the button element, giving it the value of a link directly to *game.html*.

## Bugs yet to fix
There is a slight delay when waiting for the next image to load, especially if playing for the first time and the images aren't cached. Images for the next question will usually load a second or two after an answer button is clicked.

In my JavaScript code, I have set a timer of 500 milliseconds before the next question is loaded. The button text is loading with the set time, but the image is slightly delayed.

However when I am testing the project on my mobile phone, the delay isn't there and each image is rendering on its set time as expected. Perhaps this issue lies with my own desktop.
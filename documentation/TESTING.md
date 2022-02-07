# Testing

Most testing was carried out via Google Chrome browser and Chrome Dev Tools for responsivity and checking to see if the JavaScript code was working as expected, throughout the process of building the project. I also tested the site on an iPhone 12 for responsivity, this included Google Chrome and Safari browsers.


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

### CSS
![CSS Validator](/documentation/images/testing/css-valid.png)

### JavaScript

![JShint validator](/documentation/images/testing/js-valid1.png)
![JShint validator](/documentation/images/testing/js-valid2.png)

## User Story Testing

## Known Bugs and Fixes

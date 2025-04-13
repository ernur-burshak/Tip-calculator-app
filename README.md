# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

Desktop design completed:
![](./design/desktop-design-completed.jpg)

Desktop design empty:
![](./design/desktop-design-empty.jpg)

Mobile design:

![](./design/mobile-design.jpg)

Active states:
![](./design/active-states.jpg)

### Links

- Solution URL: [solution URL here](https://github.com/ernur-burshak/Tip-calculator-app)
- Live Site URL: [live site URL here](https://ernur-burshak.github.io/Tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS

### What I learned

In this project, I improved my mathematical operations skills in JS.

All events in the project:

```js
billInput.addEventListener("input", billInputFun);
tips.forEach((val) => {
  val.addEventListener("click", handleclick);
});
tipCustom.addEventListener("input", tipInputFun);
peopleInput.addEventListener("input", peopleInputFun);
resetButton.addEventListener("click", reset);
```

A function related to mathematics:

```js
function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    totalPerPerson.innerHTML = `$${total.toFixed(2)}`;
  }
}
```

And also made the function small for easy code reading.

### Continued development

In the future, I want to improve my JS skills and learn the new React framework.

### Useful resources

- [resource 1](https://www.youtube.com/watch?v=etYv-pPfol4) - This channel helped me to work with the project.
- [resource 2](https://chatgpt.com/) - Good AI for writing projects.

## Author

- Website - [Ernur](https://ernur-burshak.github.io/Time-tracking-dashboard/)
- Frontend Mentor - [@ernur-burshak](https://www.frontendmentor.io/profile/ernur-burshak)
- Linkedin - [Ernur Burshak](https://www.linkedin.com/in/ernur-burshak-7b6b0b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## Acknowledgments

I would like to express my gratitude to the author of the channel @Codeagam. Without him, I suffered greatly from the task, the code is almost similar, but I made minor changes. Thank you!

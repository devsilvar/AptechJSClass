// we can target Each thing son a Page with javascript
// byID
// byClass
// byElemenetName

// we can also create things in a page
const heading = document.createElement('h1', { class: 'first' });

heading.innerText = 'How are You Doing';
let header = document.querySelector('header');
header.appendChild(heading);

console.log(heading);

// we can also append things to a page

let list = document.querySelectorAll('li');

list.forEach((element) => {
  element.style.backgroundColor = 'red';
  element.addEventListener('click', function () {
    console.log(element.innerText);
    if (element.style.backgroundColor == 'red') {
      element.style.backgroundColor = 'white';
    } else {
      element.style.backgroundColor = 'red';
    }
  });
});

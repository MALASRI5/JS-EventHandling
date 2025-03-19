// Get the element by its ID
const myElement = document.getElementById('myElement');

// Add mouseover event listener
myElement.addEventListener('mouseover', function() {
    myElement.style.backgroundColor = 'lightgreen';
    myElement.innerText = 'Mouse is over me!';
});
!
// Add mouseout event listener to reset the style when the mouse leaves
myElement.addEventListener('mouseout', function() {
    myElement.style.backgroundColor = 'lightblue';
    myElement.innerText = 'Mouse over me and click!';
});

// Add click event listener
myElement.addEventListener('click', function() {
    myElement.style.backgroundColor = 'orange';
    myElement.innerText = 'Clicked!';
});
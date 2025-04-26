// Just a welcome message
console.log('Welcome to my Portfolio Website!');
// Scroll to Top Button
let scrollButton = document.createElement('button');
scrollButton.innerText = '↑ Top';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '20px';
scrollButton.style.right = '20px';
scrollButton.style.padding = '10px 15px';
scrollButton.style.fontSize = '16px';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '8px';
scrollButton.style.backgroundColor = '#2980b9';
scrollButton.style.color = 'white';
scrollButton.style.cursor = 'pointer';
scrollButton.style.display = 'none'; // hidden by default

document.body.appendChild(scrollButton);

// Show button after scrolling down
window.onscroll = function() {
  if (window.scrollY > 200) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
};

// Scroll to top when button clicked
scrollButton.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

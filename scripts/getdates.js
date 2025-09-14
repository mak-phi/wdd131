// Select the DOM element for output
const currentYear = document.getElementById("currentyear");

// Create the date object, extract the year value, and set the content to the DOM element
const today = new Date();

currentYear.textContent = today.getFullYear();

// Set the last modified data-time
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

// console.log("This script is running");
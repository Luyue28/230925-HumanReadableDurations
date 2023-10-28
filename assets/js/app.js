const userName = window.prompt('Gimme your name');
const totalTime = window.prompt('Give the duration in minutes you want to convert');
document.write(`Hello ${userName}, Your input was ${totalTime} minutes<br>`);
const minutes = totalTime % 60;
const hours = (totalTime - minutes) / 60;
document.write(`Output: ${hours} hours and ${minutes} minutes`);
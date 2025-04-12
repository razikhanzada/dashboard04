const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.className = savedTheme;
}

document.getElementById('themeA').onclick = () => setThemeAndButtonColors('theme-a', 'themeA');
document.getElementById('themeB').onclick = () => setThemeAndButtonColors('theme-b', 'themeB');
document.getElementById('themeC').onclick = () => setThemeAndButtonColors('theme-c', 'themeC');
document.getElementById('themeD').onclick = () => setThemeAndButtonColors('theme-d', 'themeD');

function setThemeAndButtonColors(theme, activeButtonId) {
  document.body.className = theme;
  
  const buttons = document.querySelectorAll(".theme-switcher button");
  
  buttons.forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });

  document.getElementById('themeA').style.backgroundColor = "#87ceeb"; // Blue
  document.getElementById('themeB').style.backgroundColor = "#32cd32"; // Green
  document.getElementById('themeC').style.backgroundColor = "#dda0dd"; // Lavender
  document.getElementById('themeD').style.backgroundColor = "#ff7f50"; // Orange

  buttons.forEach((button) => {
    button.style.color = "#fff"; // Set text color for all buttons
  });

  localStorage.setItem('theme', theme);
}

window.onload = function() {
  const savedImage = localStorage.getItem('profilePic');
  if (savedImage) {
    document.getElementById('profilePic').src = savedImage;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;

    document.getElementById('themeA').style.backgroundColor = "#87ceeb"; // Blue
    document.getElementById('themeB').style.backgroundColor = "#32cd32"; // Green
    document.getElementById('themeC').style.backgroundColor = "#dda0dd"; // Lavender
    document.getElementById('themeD').style.backgroundColor = "#ff7f50"; // Orange

    const buttons = document.querySelectorAll(".theme-switcher button");
    buttons.forEach((button) => {
      button.style.color = "#fff"; // Set text color for all buttons
    });
  }
};

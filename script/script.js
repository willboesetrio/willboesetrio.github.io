console.log('testing');
const htmlBtn = document.getElementById("html-btn");
htmlBtn.setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
const cssBtn = document.getElementById("css-btn");
cssBtn.setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
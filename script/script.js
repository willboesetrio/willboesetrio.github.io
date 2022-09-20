console.log('testing');
const htmlBtn = document.getElementById("htmlBtn");
htmlBtn.setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
const cssBtn = document.getElementById("cssBtn");
cssBtn.setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

// const htmlBtn = document.getElementById("html-btn");
// htmlBtn.setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
// const cssBtn = document.getElementById("css-btn");
// cssBtn.setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
document
      .getElementById("html-btn")
      .setAttribute(
        "href",
        "https://validator.w3.org/check?uri=" + location.href
      );
    document
      .getElementById("css-btn")
      .setAttribute(
        "href",
        "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
      );
console.log(location.href)
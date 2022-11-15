for (const form of document.getElementsByTagName('form')) {
    form.addEventListener('submit', function validate (event) {
        if (form.parentNode.querySelector('.errors').children.length > 0) {
            form.parentNode.querySelector('.errors').replaceChildren();
        }
        let errorMessages = [];
        for (const input of form.getElementsByTagName('input')) {
            if (!input.classList.contains('required') && input.value.trim().length === 0) {
                continue;
            }
            if (input.classList.contains('required') && input.value.trim().length === 0) {
                errorMessages.push("Required fields must have a value that is not empty or whitespace.");
                continue;
            }
            if (input.classList.contains('required_size') && input.value.trim().length < input.minLength) {
                errorMessages.push("Required_size field lengths must exactly match the minlength attribute of that field.");
                continue;
            }
            if (input.classList.contains('alphabetic') && !/^[a-z]+$/i.test(input.value)) {
                errorMessages.push("Alphabetic fields must be a series of alphabetic characters.");
            }
            if (input.classList.contains('numeric') && !/^[0-9]+$/.test(input.value)) {
                errorMessages.push("Numeric fields must be a series of numbers.");
            }
            if (input.classList.contains('username') && input.value.trim().length < 8) {
                errorMessages.push("Username fields must contain at least 8 characters.");
                continue;
            }
            if (input.classList.contains('username') && !/^[a-z0-9]+$/i.test(input.value)) {
                errorMessages.push("Username fields must contain only alphanumeric characters.");
            }
            if (input.classList.contains('password') && /^([^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(input.value)) {
                errorMessages.push("Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.");
            }
            if (input.classList.contains('phone') && !/\d{3}-\d{3}-\d{4}/.test(input.value.trim())) {
                errorMessages.push("Phone fields must match the format of XXX-XXX-XXXX.");
            }
            if (input.classList.contains('date') && !/\d{2}\/\d{2}\/\d{4}/.test(input.value.trim())) {
                errorMessages.push("Date fields must match the format of XX/XX/XXXX.");
            }
        }
        if (errorMessages.length > 0) {
            event.preventDefault();
            let uniqueErrors = [...new Set(errorMessages)]
            let errorList = document.createElement('ul');
            errorList.style = "color: red";
            for (const error of uniqueErrors) {
                const li = document.createElement('li');
                const text = document.createTextNode(error);
                li.appendChild(text);
                errorList.appendChild(li);
            }
            form.parentNode.querySelector('.errors').appendChild(errorList);
        }
    })
}
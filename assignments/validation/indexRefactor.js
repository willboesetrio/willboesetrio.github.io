/**
 * Validates input field with a class of required
 * @param {Object []} input 
 * @param {string []} errorMessages 
 * @returns a string that indicates to no longer search for errors on this input
 */
const checkRequired = (input, errorMessages) => {
    if (!input.classList.contains('required') && input.value.trim().length === 0) {
        return 'end_loop';
    }
    if (input.classList.contains('required') && input.value.trim().length === 0) {
        errorMessages.push("Required fields must have a value that is not empty or whitespace.");
        return 'end_loop';
    }
}

/**
 * Validates input field with a class of required_size
 * @param {Object []} input 
 * @param {string []} errorMessages 
 * @returns a string that indicates to no longer search for errors on this input
 */
const checkRequiredSize = (input, errorMessages) => {
    if (input.classList.contains('required_size') && input.value.trim().length < input.minLength) {
        errorMessages.push("Required_size field lengths must exactly match the minlength attribute of that field.");
        return 'end_loop';
    }
}

/**
 * Validates input field with a class of alphabetic
 * @param {Object []} input 
 * @param {string []} errorMessages 
 */
const checkAlphabetic = (input, errorMessages) => {
    if (input.classList.contains('alphabetic') && !/^[a-z]+$/i.test(input.value)) {
        errorMessages.push("Alphabetic fields must be a series of alphabetic characters.");
    }
}

/**
 * Validates input field with a class of numeric
 * @param {Object []} input 
 * @param {string []} errorMessages 
 */
const checkNumeric = (input, errorMessages) => {
    if (input.classList.contains('numeric') && !/^[0-9]+$/.test(input.value)) {
        errorMessages.push("Numeric fields must be a series of numbers.");
    }
}

/**
 * Validates input field with a class of username
 * @param {Object []} input 
 * @param {string []} errorMessages 
 */
const checkUsername = (input, errorMessages) => {
    if (input.classList.contains('username') && input.value.trim().length < 8) {
        errorMessages.push("Username fields must contain at least 8 characters.");
        return;
    }
    if (input.classList.contains('username') && !/^[a-z0-9]+$/i.test(input.value)) {
        errorMessages.push("Username fields must contain only alphanumeric characters.");
    }
}

/**
 * Validates input field with a class of password
 * @param {Object []} input 
 * @param {string []} errorMessages 
 */
const checkPassword = (input, errorMessages) => {
    if (input.classList.contains('password') && /^([^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(input.value)) {
        errorMessages.push("Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.");
    }
}

/**
 * Validates input field with a class of phone
 * @param {Object []} input 
 * @param {string []} errorMessages 
 */
const checkPhone = (input, errorMessages) => {
    if (input.classList.contains('phone') && !/\d{3}-\d{3}-\d{4}/.test(input.value.trim())) {
        errorMessages.push("Phone fields must match the format of XXX-XXX-XXXX.");
    }
}

/**
 * Validates input field with a class of date
 * @param {Object []} input 
 * @param {string []} errorMessages 
 */
const checkDate = (input, errorMessages) => {
    if (input.classList.contains('date') && !/\d{2}\/\d{2}\/\d{4}/.test(input.value.trim())) {
        errorMessages.push("Date fields must match the format of XX/XX/XXXX.");
    }
}

/**
 * Creates A list of errors from a given array
 * @param {string []} errorMessages 
 * @returns an unordered list of error messages
 */
const createErrorList = (errorMessages) => {
    let uniqueErrors = [...new Set(errorMessages)]
        let errorList = document.createElement('ul');
        errorList.style = "color: red";
        for (const error of uniqueErrors) {
            const li = document.createElement('li');
            const text = document.createTextNode(error);
            li.appendChild(text);
            errorList.appendChild(li);
        }
        return errorList;
}

/**
 * clear any previous error messages, check all inputs within form for errors and display them 
 * @param {Object []} event
 */
const validate = (event) => {
    if (event.target.parentNode.querySelector('.errors').children.length > 0) {
        event.target.parentNode.querySelector('.errors').replaceChildren();
    }
    let errorMessages = [];
    for (const input of event.target.getElementsByTagName('input')) {
        if (checkRequired(input, errorMessages) === 'end_loop') {
            continue
        }
        if (checkRequiredSize(input, errorMessages) === 'end_loop') {
            continue
        }
        checkAlphabetic(input, errorMessages);
        checkNumeric(input, errorMessages);
        checkUsername(input, errorMessages);
        checkPassword(input, errorMessages);
        checkPhone(input, errorMessages);
        checkDate(input, errorMessages);   
    }
    if (errorMessages.length > 0) {
        event.preventDefault();
        event.target.parentNode.querySelector('.errors').appendChild(createErrorList(errorMessages));
    }
}

for (const form of document.getElementsByTagName('form')) {
    form.addEventListener('submit', validate);
}
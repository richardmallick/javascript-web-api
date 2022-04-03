function validation() {
    const inputObj = document.getElementById('id1');

    if ( inputObj.validity.rangeOverflow ) {
        inputObj.setCustomValidity('Your value is over the range!')
    } else if ( inputObj.validity.rangeUnderflow ) {
        inputObj.setCustomValidity('Your value is under the range!')
    } else if ( inputObj.validity.valueMissing ) {
        inputObj.setCustomValidity('Input field is required!')
    }



    if ( !inputObj.checkValidity() ) {
        document.getElementById('demo').innerHTML = inputObj.validationMessage;
    }
}
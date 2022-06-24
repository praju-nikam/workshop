window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            (new Contact()).name = name.value;

            nameError.textContent = '';
        } catch (e) {
            nameError.textContent = e;
        }
    });

    const addressElement = document.querySelector('#address');
    const addressError = document.querySelector('#address-error');
    addressElement.addEventListener('input', function() {
        if (addressElement.value.length == 0) {
            addressError.textContent = '';
            return;
        }
        try {
            (new Contact()).addressElement = addressElement.value;
            addressError.textContent = '';
            return;
        } catch (e) {
            addressError.textContent = e;
        }
    });


    const phoneNumber = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phoneNumber.addEventListener('input', function() {
        if (phoneNumber.value.length == 0) {
            phoneError.textContent = '';
            return;
        }
        try {
            (new Contact()).phoneNumber = phoneNumber.value;
            phoneError.textContent = '';
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function() {

        if (zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            (new Contact()).zip = zip.value;
            zipError.textContent = "";
        } catch (e) {

            zipError.textContent = e;
        }
    });
});

const save = (event) => {

    try {
        setContactObject();
    } catch (e) {
        console.log(e);
        return;
    }
}
const setContactObject = () => {
    let contactObject = new Contact();
    contactObject.name = getInputValueById('#name')
    contactObject.address = getInputValueById('#address');
    contactObject.city = getInputValueById('#city');
    contactObject.state = getInputValueById('#state');
    contactObject.zip = getInputValueById('#zip');
    contactObject.phoneNumber = getInputValueById('#phone');
    contactObject.email = getInputValueById('#email');
    alert(JSON.stringify(contactObject))
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
class Contact {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Invalid Name';
        }
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegx = RegExp('[A-Z a-z 0-9 #@/,&] {3,}$');
        if (addressRegx.test(address)) {
            this._address = address;
        } else {
            throw 'Address is Incorrect';
        }
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegx = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
        if (zipRegx.test(zip)) {
            this._zip = zip;
        } else {
            throw 'Zip Invalid';
        }
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegx = RegExp('[7-9]{1}[0-9]{9}$');
        if (phoneNumberRegx.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw 'Phone number Invalid';
    }


    toString() {
        return "Id = " + this._id + ", FirstName = " + this._firstName + ", Address = " + this._address +
            ", City = " + this._city + ", State = " + this._state + ", Zip = " + this._zip + ", Phone = " + this._phone;
    }

}
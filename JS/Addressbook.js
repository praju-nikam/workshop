class Contact {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
            let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if (firstNameRegex.test(firstName)) {
                this._firstName = firstName;
            } else {
                throw 'First Name Invalid';
            }
        }
        // get lastName() {
        //     return this._lastName;
        // }
        // set lastName(lastName) {
        //     let lastNameRegex = regExp('^[A-Z]{1}[a-z]{2,}$');
        //     if (lastNameRegex.test(lastName)) {
        //         this._lastName = lastName;
        //     } else {
        //         throw 'Last Name Invalid';
        //     }
        // }
    get address() {
        return this._address;
    }
    set address(address) {
        let words = address.split(" ");
        if (words.length > 1) {
            let addressRegx = RegExp('[A-Z a-z,/0-9] {3,}$');
            for (const word of words) {
                if (!addressRegx.test(word))
                    throw 'Address Invalid ';
            }
            this._address = address;
        } else {
            throw 'Address Invalid';
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
        let zipRegx = RegExp('[0-9]{6}$');
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

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegx = RegExp(' ^ ([a-z A-Z 0-9 _\-\.] + ) @([a-z A-Z 0-9 _\-\.] + )\.([a-z A-Z] { 2, 3 }) $');
        if (emailRegx.test(email))
            this._email = email;
        else
            throw 'Email Invalid';
    }

    toString() {
        return "Id = " + this.id + ", FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address +
            ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone = " + this.phone + ", Email = " + this.email;
    }





}
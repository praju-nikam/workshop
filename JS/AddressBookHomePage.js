window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
});

const createInnerHtml = () => {
    if (contactList.length == 0) {
        return;
    }
    const headerHtml = `<tr>
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
        innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="../Assets/delete-black-18dp.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="../Assets/create-black-18dp.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
};

const remove = (data) => {
    let addressBookData = contactList.find(addressBookData => addressBookData._id == data.id);
    if (!addressBookData)
        return;
    const index = contactList.map(addressBookData => addressBookData._id).indexOf(addressBookData._id);
    contactList.splice(index, 1);
    localStorage.setItem('contactList', JSON.stringify(contactList));
    document.querySelector('.contact-count').textContent = contactList.length;
    createInnerHtml();
}

let contactList = [{
        _id: 1,
        _name: "Ruchita",
        _phoneNumber: "7896541023",
        _address: "MG Road",
        _city: "Mumbai",
        _state: "Maharashtra Pradesh",
        _zip: "482021",
    },
    {
        _id: 2,
        _name: "Yash",
        _phoneNumber: "8602203308",
        _address: "Sangli",
        _city: "Sangli",
        _state: "Maharashtra",
        _zip: "410214",
    },
    {
        _id: 3,
        _name: "Anvi",
        _phoneNumber: "9665362933",
        _address: "Charoli",
        _city: "Pune",
        _state: "Maharashtra",
        _zip: "412105",
    },
    {
        _id: 4,
        _name: "Varsha",
        _phoneNumber: "9421131705",
        _address: "PS Road",
        _city: "Lokur",
        _state: "Karnataka",
        _zip: "410214",
    },
];
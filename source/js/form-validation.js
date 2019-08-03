const validateForm = () => {
    const inName = document.getElementById("name");
    const name = inName.value;
    const nameRegExp = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;

    const inEmail = document.getElementById("email");
    const email = inEmail.value;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const inMessage = document.getElementById("message");
    const message = inMessage.value;


    if (nameRegExp.test(name) == false) {
        inName.focus();
        alert("Please, fill the name field correctly.");
        inName.style = "outline: 2px solid red;";
        return;
    } else if (emailRegExp.test(email) == false) {
        inEmail.focus();
        inName.style = "outline: 2px solid green;";
        alert("Please, fill the e-mail field correctly.");
        inEmail.style = "outline: 2px solid red;";
        return;
    } else if (message == "") {
        inMessage.focus();
        inEmail.style = "outline: 2px solid green;";
        inName.style = "outline: 2px solid green;";
        alert("Please, fill the message field correctly.");
        inMessage.style = "outline: 2px solid red;";
        return;
    } else {
        alert("Message sent. Thank you for contacting us.");
        inEmail.style = "outline: 2px solid var(--detail-color);";
        inName.style = "outline: 2px solid  var(--detail-color);";
        inMessage.style = "outline: 2px solid  var(--detail-color);";
        inEmail.value = "";
        inName.value = "";
        inMessage.value = "";
    }
};

const btSubmit = document.getElementById("submit");
btSubmit.addEventListener("click", validateForm);
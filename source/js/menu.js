// MOBILE MENU
let index = 0
const interval = 70
const header = document.getElementById("main-header")
const menu = document.getElementById('main-header__mobile-menu')
const links = document.querySelectorAll('.mobile-menu__link')

// OPEN MOBILE MENU EFFECT
const openMobileMenu = () => {
    menu.style.height = "335px"
    links.forEach((link, num) => setTimeout(() => link.style = "background-color: var(--detail-color); color: var(--detail-color); border-bottom: 1px solid var(--quaternary-color);", num * interval))
    links.forEach((link, num) => setTimeout(() => link.style = "background-color: var(--detail-color); color: var(--detail-color); border-bottom: 1px solid var(--detail-color);", (num + 1) * interval))
    links.forEach((link, num) => setTimeout(() => link.style = "background-color: var(--quaternary-color); color: var(--detail-color); border-bottom: 1px solid var(--secondary-color);", (num + 2) * interval))
}

// CLOSE MOBILE MENU EFFECT
const closeMobileMenu = () => {
    index = 0
    menu.style.height = "0"
    links.forEach((link) => link.style = "color: var(--quaternary-color); border-bottom: 0px solid var(--quaternary-color); background-color: var(--quaternary-color);")
}

// TOGGLE MOBILE MENU CLICKING ON BURGER BUTTON
const toggleMobileMenu = num => {
    index += num
    switch (index) {
        default: closeMobileMenu()
        break
        case 1:
                openMobileMenu()
            break
        case 2:
                closeMobileMenu()
            break
    }
}

// CLOSE MOBILE MENU SELECTING ITEM
const closeMobileMenuSelectingItem = () => links.forEach((link) => link.addEventListener("click", closeMobileMenu))
closeMobileMenuSelectingItem()

// TOGGLE HEADER ON SCROLL
let prevScrollPos = window.pageYOffset
const toggleHeaderOnScroll = window.onscroll = () => {
    let currentScrollPos = window.pageYOffset
    if (prevScrollPos > currentScrollPos || currentScrollPos < 300) header.style.top = "0"
    else header.style.top = "-80px"
    prevScrollPos = currentScrollPos
}

//FORM VALIDATION
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
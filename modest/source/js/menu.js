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
    links.forEach((link, num) => setTimeout(() => link.style = "background-color: var(--quaternary-color); color: var(--detail-color); border-bottom: 1px solid var(--senary-color);", (num + 2) * interval))
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
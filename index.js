const toggleSideBar = document.querySelector('.top_bar_toggle');
const main = document.querySelector('.main');
const navigation = document.querySelector('.navigation');
toggleSideBar.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
});

// ACCORDION

const accordionItemHeaders = document.querySelectorAll(".box__paciente__header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            accordionItemBody.parentElement.style.borderBottomRightRadius = 0;
            accordionItemBody.parentElement.style.marginBottom = "90px";
            accordionItemBody.parentElement.classList.add('active');
            setTimeout(function () {
                accordionItemBody.style.overflow = "visible"
            }, 100)
        }
        else {
            accordionItemBody.parentElement.style.borderBottomRightRadius = "30px";
            accordionItemBody.parentElement.style.marginBottom = "30px";
            accordionItemBody.style.overflow = "hidden"
            accordionItemBody.style.maxHeight = 0;
            accordionItemBody.parentElement.classList.remove('active');
            
        }
    });
});

// MOVER ADD PACIENTE

const open_with = document.querySelector('.open_with');
const open_with_left_side = document.querySelector('.open_with_left_side');

open_with.addEventListener('click', e => {
    console.log(e.target.parentElement)
    e.target.parentElement.style.left = "calc(100vw - 25%)";
    e.target.style.display = "none";
    open_with_left_side.style.display = "block";
});

open_with_left_side.addEventListener('click', e => {
    console.log(e.target.parentElement)
    e.target.parentElement.style.left = "35px";
    e.target.style.display = "none";
    open_with.style.display = "block";
});

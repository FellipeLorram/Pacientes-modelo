import NovoPaciente from "./NovoPaciente.js";

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
        const accordionFooter = accordionItemBody.querySelector('.box__paciente_body_footer');
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            accordionItemBody.parentElement.style.borderBottomRightRadius = 0;
            accordionItemBody.parentElement.style.marginBottom = "90px";
            accordionItemBody.parentElement.classList.add('active');
            if (window.screen.width <= 768) accordionFooter.style.width = window.getComputedStyle(accordionItemBody.parentElement).getPropertyValue('width')
            setTimeout(function () {
                accordionItemBody.style.overflow = "visible"
            }, 100);
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


// ADD NOVO PACIENTE
const addNewPacienteMobile = document.querySelector('.add_new_paciente_content_mobile');

document.querySelector('.add_new_paciente_content').addEventListener('click', e => {
    if (!e.target.classList.contains('open_with') && !e.target.classList.contains('open_with_left_side')) NovoPaciente.open();
});

addNewPacienteMobile.addEventListener('click', e => {
    if (!e.target.classList.contains('add_new_paciente_mobile_icon')) NovoPaciente.open();
});


addNewPacienteMobile.querySelector('.add_new_paciente_mobile_icon').addEventListener('click', e => {
   e.target.classList.toggle('icon_rotate');
    addNewPacienteMobile.classList.toggle('active');
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


/*                  Esconder NavBar                      */
let prevPageYOfsset = window.pageYOffset;
window.onscroll = () => {
    let currentPageYOfsset = window.pageYOffset;

    if (prevPageYOfsset > currentPageYOfsset) {
        document.querySelector(".main_top_bar").style.top = "0";
        document.querySelector(".navigation_mobile").style.bottom = "0";
        addNewPacienteMobile.classList.remove('desactive');
    }
    else {
        document.querySelector(".main_top_bar").style.top = "-100px";
        document.querySelector(".navigation_mobile").style.bottom = "-100px";
        addNewPacienteMobile.classList.add('desactive');
        addNewPacienteMobile.classList.remove('active');
        addNewPacienteMobile.querySelector('.add_new_paciente_mobile_icon').classList.add('icon_rotate');

    }
    prevPageYOfsset = currentPageYOfsset;

    if (document.querySelector(".main_top_bar").style.top == "-100px") {
        setTimeout(() => {
            document.querySelector(".main_top_bar").style.top = "0";
            document.querySelector(".navigation_mobile").style.bottom = "0";
            addNewPacienteMobile.classList.remove('desactive');
        }, 1563);
        addNewPacienteMobile.querySelector('.add_new_paciente_mobile_icon').classList.remove('icon_rotate');
    }
}

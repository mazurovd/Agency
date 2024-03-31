const menubar = document.querySelector('.header-top_menuBar');
const menu = document.querySelector('.header-menu');

var menuTrigger = false;


var menubarClick = function (event) { 
    if(menuTrigger == false){
        menu.classList.add('displayBlock');
        menu.classList.add('slide-in-top');
        menu.classList.remove('displayNone');
        menu.classList.remove('slide-out-top');
        menuTrigger = true;
    }
    else if(menuTrigger == true){
        menu.classList.add('slide-out-top');
        menu.classList.remove('displayBlock');
        menu.classList.remove('slide-in-top');
        menuTrigger = false;
        setTimeout(displayNone, 500);
    }
    
}

function displayNone(){
    menu.classList.add('displayNone');
}

menubar.addEventListener("click", menubarClick);

///////////////////////////////////////////////////////////////////
// Код для модального окна
const ContactCloseBtn = document.querySelector('.Contact_modal_close');
const ContactModal = document.querySelector('.ContactUs-Modal');
const Header_ContactBtn = document.querySelector('.header_content-btnCont');
const Header_ContactBtnSend = document.querySelector('.ContactUs-Modal_content-submit');
ModalWindow(Header_ContactBtn, ContactModal, ContactCloseBtn);

function ModalWindow(openModalBtn, modal, closeBtn) {
    openModalBtn.onclick = () => {
        modal.classList.add("modal_active");
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', hideModal);
        Header_ContactBtnSend.addEventListener('click', closeModal);

        function closeModal() {
            modal.classList.remove("modal_active");
            closeBtn.removeEventListener('click', closeModal);
            modal.removeEventListener('click', hideModal);
            Header_ContactBtnSend.removeEventListener('click', closeModal);
        }
        
        function hideModal(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
    };
}
// Код для модального окна END


























// const Modal = function(options) {
//     this.selectors = document.querySelectorAll(options.selectors);
//     this.body = document.querySelector('body');
//
//     this.init = () => {
//         this.openModal();
//         this.closeModal();
//     }
//
//     this.openModal = function () {
//         for (let $selector in this.selectors) {
//             if (this.selectors.hasOwnProperty($selector)) {
//                 this.selectors[$selector].addEventListener('click',  () => {
//                     this.body.classList.add('open__modal');
//                     let attr = this.selectors[$selector].getAttribute('data-modal');
//                     let modal = document.querySelector(attr);
//                     setTimeout(() => {
//                         modal.classList.add('open__modal__window');
//                     }, 350);
//                 });
//             }
//         }
//     }
//
//     this.closeModal = function () {
//         let $closeButtons = document.querySelectorAll('.close-modal');
//         for (let $closeButton in $closeButtons) {
//             if ($closeButtons.hasOwnProperty($closeButton)) {
//                 $closeButtons[$closeButton].addEventListener('click',  () => {
//                     let attr = $closeButtons[$closeButton].getAttribute('data-modal');
//                     let modal = document.querySelector(attr);
//                     modal.classList.remove('open__modal__window');
//                     setTimeout(() => {
//                         this.body.classList.remove('open__modal');
//                     }, 350);
//                 });
//             }
//         }
//     }
// }

const Modal = function(options) {
    this.selectors = document.querySelectorAll(options.selectors);
    this.body = document.querySelector('body');
    this.openModal();
    this.closeModal();
}

Modal.prototype.openModal = function () {
    for (let $selector in this.selectors) {
        if (this.selectors.hasOwnProperty($selector)) {
            this.selectors[$selector].addEventListener('click',  () => {
                this.body.classList.add('open__modal');
                let attr = this.selectors[$selector].getAttribute('data-modal');
                let modal = document.querySelector(attr);
                setTimeout(() => {
                    modal.classList.add('open__modal__window');
                }, 350);
            });
        }
    }
}

Modal.prototype.closeModal = function () {
    let $closeButtons = document.querySelectorAll('.close-modal');
    for (let $closeButton in $closeButtons) {
        if ($closeButtons.hasOwnProperty($closeButton)) {
            $closeButtons[$closeButton].addEventListener('click',  () => {
                let attr = $closeButtons[$closeButton].getAttribute('data-modal');
                let modal = document.querySelector(attr);
                modal.classList.remove('open__modal__window');
                setTimeout(() => {
                    this.body.classList.remove('open__modal');
                }, 350);
            });
        }
    }
}

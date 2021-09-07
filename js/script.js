const Modal = function(options) {
    this.selector = document.querySelector(options.selector);
    this.body = document.querySelector('body');

    this.init = () => {
        this.openModal();
        this.closeModal();
    }

    this.openModal = function () {
        this.selector.addEventListener('click',  () => {
            this.body.classList.add('open__modal');
            let attr = this.selector.getAttribute('data-modal');
            let modal = document.querySelector(attr);
            setTimeout(() => {
                modal.classList.add('open__modal__window');
            }, 350);
        });
    }

    this.closeModal = function () {
        let closeButton = document.querySelector('.close-modal');
        closeButton.addEventListener('click',  () => {
            let attr = this.selector.getAttribute('data-modal');
            let modal = document.querySelector(attr);
            modal.classList.remove('open__modal__window');
            setTimeout(() => {
                this.body.classList.remove('open__modal');
            }, 350);
        });
    }
}

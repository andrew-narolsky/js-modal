const Modal = function(options) {
    this.selectors = document.querySelectorAll(options.selectors);
    this.body = document.querySelector('body');
    this.openModal();
    this.closeModal();

    this.open = function (attr) {
        this.body.classList.add('open__modal');
        let $modal = document.querySelector(attr);
        setTimeout(function () {
            $modal.classList.add('open__modal__window');
        }, 350);
    }

    this.close = function (attr) {
        let $body = this.body;
        let $modal = document.querySelector(attr);
        $modal.classList.remove('open__modal__window');
        setTimeout(function () {
            $body.classList.remove('open__modal');
        }, 350);
    }
}

Modal.prototype.openModal = function () {
    for (let $selector in this.selectors) {
        if (this.selectors.hasOwnProperty($selector)) {
            let $element = this.selectors[$selector];
            let $body = this.body;
            $element.addEventListener('click',  function () {
                $body.classList.add('open__modal');
                let attr = $element.getAttribute('data-modal');
                let $modal = document.querySelector(attr);
                setTimeout(function () {
                    $modal.classList.add('open__modal__window');
                }, 350);
            });
        }
    }
}

Modal.prototype.closeModal = function () {
    let $closeButtons = document.querySelectorAll('.close-modal');
    for (let $closeButton in $closeButtons) {
        if ($closeButtons.hasOwnProperty($closeButton)) {
            let $body = this.body;
            $closeButtons[$closeButton].addEventListener('click',  function () {
                let attr = $closeButtons[$closeButton].getAttribute('data-modal');
                let $modal = document.querySelector(attr);
                $modal.classList.remove('open__modal__window');
                setTimeout(function() {
                    $body.classList.remove('open__modal');
                }, 350);
            });
        }
    }
}


export default class ErrorModal {
    constructor(modalSelecter, pointerModalSelecter) {
        this.modalSelecter = $(modalSelecter);
        this.pointerModalSelecter = $(pointerModalSelecter);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.pluginModal = this.pluginModal.bind(this);
    }

    

    handleOpenModal(event) {
        event.preventDefault();
        this.modalSelecter.modal({
            blockerClass: "jquery-modal el--zIndex",
            fadeDuration: 100,
            escapeClose: false,
            clickClose: false,
            showClose: false
        });
    }

    pluginModal() {
        this.pointerModalSelecter.click(this.handleOpenModal)
    }

    start() {
        console.log('------ Error start -------');

        this.pluginModal();
    }

}
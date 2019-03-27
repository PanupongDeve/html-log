import ErrorModel from './model';
import ErrorView from './view';
import ErrorModal from '../ErrorModal';

export default class ErrorListsController {
    constructor(errorSelecter, errorModalListsSelecter) {
       this.model = new ErrorModel()
       this.view = new ErrorView(errorSelecter, errorModalListsSelecter);
    }

    async createErrorMoldEventWithData(data) {
        data.forEach(d => {
            const errorModal = new ErrorModal(`#error-modal${d.id}`,`#pointer-modal${d.id}`);
            errorModal.start();
        });
    }   

    async fetchErrorLists() {
        await this.model.fetchData();
        const data = await this.model.getData();
        await this.view.renderData(data);
        await this.createErrorMoldEventWithData(data);
    }

    async start() {
        await this.fetchErrorLists();
    }
}
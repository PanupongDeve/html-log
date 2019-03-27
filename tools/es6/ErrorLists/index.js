import ErrorListsController from './controller';

export default class ErrorLists {
    constructor(errorSelecter, errorModalListsSelecter) {
        this.controller = new ErrorListsController(errorSelecter, errorModalListsSelecter);
    }

    async start() {
        console.log('------ ErrorLists App Start ---------');
        await this.controller.start();
    }
}
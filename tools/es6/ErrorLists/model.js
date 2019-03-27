import {
    errorsLogs
} from '../mock/errors-logs';


export default class ErrorModel {
    constructor() {
        this.errorsLogs = null;
    }

    async fetchData() {
        this.errorsLogs = errorsLogs;
    }

    async getData() {
        return await this.errorsLogs;
    }
}
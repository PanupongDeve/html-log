import { SERVER_HOST } from '../config';

import {
    AxiosServices
} from '../services';

import {
    errorsLogs
} from '../mock/errors-logs';

const axiosServices = new AxiosServices(SERVER_HOST);
export default class ErrorModel {
    constructor() {
        this.errorsLogs = null;
    }

    dataToObject (data) {
       return data.map(d => {
            return  {
                id: d.id,
                ip: d.ip,
                path: d.path,
                method: d.method,
                messages: d.messages,
                body: d.body,
                params: d.params,
                query: d.query
            }
        })
    }

    async fetchData() {
        const data = await axiosServices.getErrorLogs();
        // this.errorsLogs = errorsLogs;
        this.errorsLogs = this.dataToObject(data);
    }

    async getData() {
        return await this.errorsLogs;
    }
}
import {
    SERVER_CONNECTED
} from '../config';

export class AxiosServices {
    constructor(server_host) {
        this.server_host = server_host
    }
    async getErrorLogs() {
        if(SERVER_CONNECTED) {
            const res = await axios.get(`${this.server_host}/api/errors`);
            return res.data.result;
        } else {
            return [];
        }  
    }
}
import {
    isObjectEmpty,
    objectToArray
} from '../helper';

export default class ErrorView {
    constructor(errorSelecter, errorModalListsSelecter) {
        this.errorSelecter = $(errorSelecter);
        this.errorModalListsSelecter = $(errorModalListsSelecter);
    }

    renderObjectLists(objectData) {
        const data = objectToArray(objectData);
        
        const render_data = data.map(d => {
            return `<span class="html-text__word-break el--margin-content-left"><b>${d.key}:</b> ${d.value}</span>`
        })
        return render_data.join(" ");
    }

    renderErrorLog(header, dataObject) {
        if(isObjectEmpty(dataObject)) {
            return `<span class="html-text__word-break"><b>${header}:</b> - </span>`;
        } else {
            return `
            <span class="html-text__word-break"><b>${header}:</b></span>
            <div class="list-content__container">
                {
                ${this.renderObjectLists(dataObject)}
                }
            </div>
            `;
        }
    }

    renderMessages(messages) {
        messages = JSON.parse(messages);
        const render_messages = messages.map(m => {
            return `<span class="html-text__word-break el--margin-content-left"><b>message:</b> ${m}</span>`
        })

        return render_messages.join(" ")
    }

    async renderData(data) {
        this.errorSelecter.empty();
        this.errorModalListsSelecter.empty();
        data.forEach(d => {
            this.errorSelecter.append(`
                <!-- ------- 1 items ------------------------------>
                <div class="panel-block panel-block-log__column">
                <div class="panel-block-log__container">
                    <span class="panel-icon">
                    <i class="fas fa-address-card el--text_green" aria-hidden="true"></i>
                    </span>
                    <span class="html-text__word-break"><b>IP:</b>${d.ip}</span>
                </div>

                <div class="panel-block-log__container">
                    <span class="panel-icon">
                    <i class="fas fa-folder html-text__red" aria-hidden="true"></i>
                    </span>
                    <span class="html-text__word-break"><b>path:</b> ${d.path}</span>
                </div>

                <div class="panel-block-log__container">
                    <span class="panel-icon">
                        <i class="fas fa-circle html-text__red" aria-hidden="true"></i>
                    </span>
                    <span class="html-text__word-break"><b>method:</b>${d.method}</span>
                    </div>

                <div class="panel-block-log__container">
                <span class="panel-icon">
                    <i class="fas history html-text__red" aria-hidden="true"></i>
                </span>
                <span class="html-text__word-break">
                    <b>error-log:</b>
                    <a id=${`pointer-modal${d.id}`} class="tag is-danger hand-over">
                    <i class="fas fa-eye" aria-hidden="true"></i>
                    </a>
                </span>
                </div>

            </div>
            <!-- ------------------------------------------------ -->
            `)
            this.errorModalListsSelecter.append(`
                <!-- ------- 1 items ------------------------------>
                <div id=${`error-modal${d.id}`} class="modal">
                    <div class="panel-block panel-modal-block-log__column">
                        <div class="panel-modal-block-log__container el--flex-wrap">
                            <span class="panel-icon el--icon-top">
                                <i class="fas fa-envelope el--text_green" aria-hidden="true"></i>
                            </span>
                            <span class="html-text__word-break"><b>messages:</b></span>
                            <div class="list-content__container">
                                {
                                    ${this.renderMessages(d.messages)}
                                }
                            </div>
                        </div>
    
                        <div class="panel-modal-block-log__container el--flex-wrap">
                            <span class="panel-icon el--icon-top">
                                <i class="fas fa-male html-text__red" aria-hidden="true"></i>
                            </span>
                            ${this.renderErrorLog('body', d.body)}
                        </div>
    
                        <div class="panel-modal-block-log__container el--flex-wrap">
                            <span class="panel-icon el--icon-top">
                                <i class="fas fa-cog html-text__red" aria-hidden="true"></i>
                            </span>
                            ${this.renderErrorLog('params', d.params)}
                        </div>
    
                        <div class="panel-modal-block-log__container el--flex-wrap">
                            <span class="panel-icon el--icon-top">
                                <i class="fas fa-question html-text__red" aria-hidden="true"></i>
                            </span>
                            ${this.renderErrorLog('query', d.query)}
                        </div>
                    </div>
                    <a class="button is-danger el--full_width" href="#" rel="modal:close">Close</a>
                </div>
                <!-- ------------------------------------------------ -->
            `);
        });
        
        
    }
}
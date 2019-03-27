export default class ErrorView {
    constructor(errorSelecter, errorModalListsSelecter) {
        this.errorSelecter = $(errorSelecter);
        this.errorModalListsSelecter = $(errorModalListsSelecter);
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
			<div id=${`error-modal${d.id}`} class="modal el--modal_margin_top">
				<div class="panel-block panel-modal-block-log__column">
					<div class="panel-modal-block-log__container">
						<span class="panel-icon">
							<i class="fas fa-envelope el--text_green" aria-hidden="true"></i>
						</span>
                        <span class="html-text__word-break"><b>message:</b>
                        ${d.message}
						</span>
					</div>

					<div class="panel-modal-block-log__container">
						<span class="panel-icon">
							<i class="fas fa-male html-text__red" aria-hidden="true"></i>
						</span>
						<span class="html-text__word-break"><b>body:</b> Body</span>
					</div>

					<div class="panel-modal-block-log__container">
						<span class="panel-icon">
							<i class="fas fa-cog html-text__red" aria-hidden="true"></i>
						</span>
						<span class="html-text__word-break"><b>params:</b> Params</span>
					</div>

					<div class="panel-modal-block-log__container">
						<span class="panel-icon">
							<i class="fas fa-question html-text__red" aria-hidden="true"></i>
						</span>
						<span class="html-text__word-break"><b>query:</b> Query</span>
					</div>

				</div>
				<a class="button is-danger el--full_width" href="#" rel="modal:close">Close</a>
			</div>
			<!-- ------------------------------------------------ -->
            `);
        });
        
        
    }
}
export class AboutMeView {

    showName($, model) {
        $("#about-me").append(`
            <div class="about-me__box">
                <div class="about-me__content">${model.name}</div>
            </div>
        `);
    }

}
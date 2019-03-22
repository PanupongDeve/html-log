import { AboutMeView } from './about-me-view';
import { AboutMeModel } from './about-me.model';

const aboutMeview = new AboutMeView();
const aboutMeModel = new AboutMeModel();
 
export class AboutMeController {

    start($) {
        aboutMeview.showName($, aboutMeModel)
    }
}
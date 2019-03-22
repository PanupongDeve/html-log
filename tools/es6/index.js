import { Hello } from './hello';
import aboutMe from './about-me';

const hello = new Hello();

$(document).ready(() => {
    // Handler for .ready() called
   hello.start();
   aboutMe.start($);
});
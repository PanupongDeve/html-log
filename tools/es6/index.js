import "@babel/polyfill";
import AirDatePicker from './AirDatePicker';
import ErrorModal from './ErrorModal';
import ErrorLists from './ErrorLists';

$(document).ready(async () => {
    const airDatePicker = new AirDatePicker('#search-datepicker');
    const errorModal = new ErrorModal('#error-modal','#pointer-modal');
    const errorLists = new ErrorLists('#errorLists', '#error-modal-lists');
    // Handler for .ready() called
    console.log('------- jquery start app -----------');
    const data = $('#test').val();
    airDatePicker.start();
    errorModal.start();
    errorLists.start();
});
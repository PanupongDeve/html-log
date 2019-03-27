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
    airDatePicker.start();
    errorModal.start();
    errorLists.start();
    const res = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
    console.log('data', res.data);
});
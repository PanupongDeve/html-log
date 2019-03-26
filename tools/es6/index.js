import "@babel/polyfill";
import AirDatePicker from './AirDatePicker';
import ErrorModal from './ErrorModal';


$(document).ready(async () => {
    const airDatePicker = new AirDatePicker('#search-datepicker');
    const errorModal = new ErrorModal('#error-modal','#pointer-modal');
    // Handler for .ready() called
    console.log('------- jquery start app -----------');
    airDatePicker.start();
    errorModal.start();
    const res = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
    console.log('data', res.data);
});
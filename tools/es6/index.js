import "@babel/polyfill";
import AirDatePicker from './AirDatePicker';
$(document).ready(async () => {
    const airDatePicker = new AirDatePicker('#search-datepicker');
    // Handler for .ready() called
   console.log('------- jquery start app -----------');
   airDatePicker.start();
   const res = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
   console.log('data', res.data) ;
});
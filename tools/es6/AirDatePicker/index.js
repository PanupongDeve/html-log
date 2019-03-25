export default class AirDatePicker {
    constructor(datePickerSelecter) {
        this.datePickerSelecter = $(datePickerSelecter);
        this.handleSelected = this.handleSelected.bind(this);
        this.getCurrentDate = this.getCurrentDate.bind(this);
    }

    handleSelected(fd, d, picker) {
        console.log('d', d);
    }

    getCurrentDate() {
        const time = moment().format('D MMMM YYYY');  
        this.datePickerSelecter.val(time);
    }

    start() {
        console.log('------ AirDatePicker start ----- ');
        this.datePickerSelecter.datepicker({
            autoClose: true,
            onSelect: this.handleSelected
        });
        this.getCurrentDate();
    }
}
import moment from 'moment';
import noop from 'src/utils/noop';

export default {
    name: 'singleDate',
    date: moment(),
    onDateChange: noop
};

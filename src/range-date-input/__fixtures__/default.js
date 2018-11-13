import moment from 'moment';
import noop from 'src/utils/noop';

export default {
    startName: 'startDateInput',
    endName: 'endDateInput',
    startDate: moment(),
    endDate: moment().add(9, 'days'),
    minDate: moment().subtract(10, 'days'),
    maxDate: moment().add(15, 'days'),
    onDatesChange: noop,
    keyboardNavigationEnabled: true
};

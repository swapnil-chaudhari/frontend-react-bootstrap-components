import noop from 'src/utils/noop';

export default {
    name: 'my-day-input',
    onChange: noop,
    value: '2010-08-17',
    disabled: false,
    minDate: '1991-05-10',
    maxDate: '2011-08-20',
    shortMonth: true,
    formatMessage: m => m.defaultMessage,
    messages: {
        todayLabel: { defaultMessage: 'TODAY' }
    },
    dayPickerOptions: {
        locale: 'it'
    }
};

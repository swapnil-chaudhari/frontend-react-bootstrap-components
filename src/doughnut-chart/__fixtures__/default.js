const data = [
    { color: 'red', actuals: 10, projected: 20, channel: 'dough' },
    { color: 'blue', actuals: 20, projected: 30, channel: 'nut' }
];

export default {
    title: 'Doughnut Composition',
    data,
    valueKey: 'projected',
    labelKey: 'channel'
};

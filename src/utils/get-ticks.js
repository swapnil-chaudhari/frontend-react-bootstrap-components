import moment from 'moment-timezone';

export default (days) => {
    // tickInterval represents tick per each day interval
    const tickInterval = 1;
    const ticks = [];

    for (let i = 0; i < days; i += tickInterval) {
        const date = moment().startOf('day')
            .subtract(days, 'days')
            .add(i, 'days');

        ticks.push(date.valueOf());
    }

    return ticks;
};

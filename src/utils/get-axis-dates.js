import { FILTER_PERIODS } from 'src/constants';

const MONTH_TO_31_DIFF = 4;
/*
* linear equation
* y - y1 / y2 - y1 = x - x1 / x2 - x1
* */
const getLinearY = (x1, y1, x2, y2) =>
    (x) => Math.round(y1 + ((x - x1) * (y2 - y1) / (x2 - x1)));

const linearMonthMore = getLinearY(
    FILTER_PERIODS.MONTH,
    FILTER_PERIODS.WEEK + 1,
    FILTER_PERIODS.DAYS_90,
    (FILTER_PERIODS.WEEK + 1) * 3
);
const linearMonthLess = getLinearY(
    FILTER_PERIODS.WEEK + 1,
    1,
    FILTER_PERIODS.MONTH,
    FILTER_PERIODS.WEEK + 1,
);
const linear3MonthMore = getLinearY(
    FILTER_PERIODS.DAYS_90,
    (FILTER_PERIODS.WEEK + 1) * 3,
    FILTER_PERIODS.YEAR,
    FILTER_PERIODS.MONTH + MONTH_TO_31_DIFF
);

export default (days, ticks) => {
    const dates = [];
    let tickInterval = 1;
    if (days <= FILTER_PERIODS.MONTH)
        tickInterval = linearMonthLess(days);
    if (days > FILTER_PERIODS.MONTH && days < FILTER_PERIODS.DAYS_90)
        tickInterval = linearMonthMore(days);
    if (days >= FILTER_PERIODS.DAYS_90)
        tickInterval = linear3MonthMore(days);

    for (let i = 0; i < ticks.length; ++i)
        if (i % tickInterval === 0)
            dates.push(ticks[i]);

    return dates;
};

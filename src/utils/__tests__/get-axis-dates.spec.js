import { FILTER_PERIODS } from 'src/constants';
import getAxisDates from '../get-axis-dates';
import getTicks from '../get-ticks';

describe('getAxisDates', () => {
    describe('when getAxisDates is called', () => {
        test('returns correct array for week', () => {
            const days = 7;
            expect(getAxisDates(FILTER_PERIODS.WEEK, getTicks(days))).toHaveLength(7);
        });
        test('returns correct array for month', () => {
            const days = 27;
            expect(getAxisDates(FILTER_PERIODS.MONTH, getTicks(days))).toHaveLength(4);
        });
        test('returns correct array for 90 days', () => {
            const days = 90;
            expect(getAxisDates(FILTER_PERIODS.DAYS_90, getTicks(days))).toHaveLength(5);
        });
        test('returns correct array for year', () => {
            const days = 365;
            expect(getAxisDates(FILTER_PERIODS.YEAR, getTicks(days))).toHaveLength(12);
        });
    });
});

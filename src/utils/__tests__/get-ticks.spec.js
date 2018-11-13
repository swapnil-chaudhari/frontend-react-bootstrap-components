import moment from 'moment-timezone';
import getTicks from '../get-ticks';

describe('getTicks', () => {
    describe('when getTicks is called', () => {
        test('returns correct array for chosen time interval', () => {
            const days = 3;
            const ticks = getTicks(days);
            const origDate = moment().startOf('day')
                .subtract(days, 'days');

            expect(ticks).toEqual([
                origDate.valueOf(),
                moment(origDate).add(1, 'days').valueOf(),
                moment(origDate).add(2, 'days').valueOf()
            ]);
        });
    });
});

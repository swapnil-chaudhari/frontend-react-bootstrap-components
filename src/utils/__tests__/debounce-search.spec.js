import { useFakeTimers } from 'sinon';
import debounceRequest from '../debounce-search';

describe('Debounce search', () => {
    describe('when multiple calls occur in a short period of time', () => {
        test('truncates extra requests within specified time period and called twice', () => {
            const searchValue = 'value';
            const isSearchForTracks = true;
            const apiRequestFunc = jest.fn();
            const request = () => debounceRequest(searchValue, apiRequestFunc, isSearchForTracks);
            const clock = useFakeTimers();

            request();
            request();
            request();
            request();
            clock.tick(500);
            request();
            request();
            request();
            clock.tick(500);

            expect(apiRequestFunc).toHaveBeenCalledTimes(2);
        });
    });
});

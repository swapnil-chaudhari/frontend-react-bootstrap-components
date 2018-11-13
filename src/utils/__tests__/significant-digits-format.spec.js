import significantDigitsFormat from '../significant-digits-format';

describe('significantDigitsFormat helper', () => {
    describe('when it is called on set of different numbers', () => {
        test('renders 0 properly', () => {
            expect(significantDigitsFormat(0)).toEqual('0');
        });
        test('renders 1 if input equals to 1', () => {
            expect(significantDigitsFormat(1)).toEqual('1');
        });
        test('renders 2 digits number', () => {
            expect(significantDigitsFormat(99)).toEqual('99');
        });
        test('renders 3 digits number', () => {
            expect(significantDigitsFormat(101)).toEqual('101');
        });
        test(
            'renders last number among 3 digits numbers without any formatting',
            () => {
                expect(significantDigitsFormat(999)).toEqual('999');
            }
        );
        test('format 4 digit number without hundreds', () => {
            expect(significantDigitsFormat(1000)).toEqual('1.0k');
        });
        test('format 4 digit number without hundreds ignoring numbers < 100', () => {
            expect(significantDigitsFormat(1001)).toEqual('1.0k');
        });
        test('format 4 digit number with hundreds', () => {
            expect(significantDigitsFormat(1100)).toEqual('1.1k');
        });
        test('format 4 digit number with hundreds ignoring numbers < 100', () => {
            expect(significantDigitsFormat(1123)).toEqual('1.1k');
        });
        test('format 8 digit numbers', () => {
            expect(significantDigitsFormat(12000000)).toEqual('12.0M');
        });
        test('format 8 digit numbers ignoring everything < 100.0k', () => {
            expect(significantDigitsFormat(12123456)).toEqual('12.1M');
        });
        test('format 12 digit numbers', () => {
            expect(significantDigitsFormat(12000000000)).toEqual('12.0B');
        });
        test('format 12 digit numbers ignoring everything < 100.0M', () => {
            expect(significantDigitsFormat(12911111111)).toEqual('12.9B');
        });
    });
});

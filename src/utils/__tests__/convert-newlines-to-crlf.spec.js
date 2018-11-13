import convertNewlinesToCRLF from '../convert-newlines-to-crlf';


describe('convertNewlinesToCRLF', () => {
    const expectedString = 'hello\r\nfrom the other side';

    describe('when passed a string with `\\n` characters', () => {
        test('converts it to `\\r\\n`', () => {
            const testString = 'hello\nfrom the other side';
            const convertedString = convertNewlinesToCRLF(testString);

            expect(convertedString).toEqual(expectedString);
        });
    });

    describe('when passed a string with `\\r` characters', () => {
        test('converts it to `\\r\\n`', () => {
            const testString = 'hello\rfrom the other side';
            const convertedString = convertNewlinesToCRLF(testString);

            expect(convertedString).toEqual(expectedString);
        });
    });

    describe('when passed a string with `\\r\\n` characters', () => {
        test('converts it to `\\r\\n`', () => {
            const testString = 'hello\r\nfrom the other side';
            const convertedString = convertNewlinesToCRLF(testString);

            expect(convertedString).toEqual(expectedString);
        });
    });

    describe('when passed null', () => {
        test('returns null', () => {
            expect(convertNewlinesToCRLF(null)).toBeNull();
        });
    });
});

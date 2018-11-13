/**
 * convertNewlinesToCRLF will convert all newlines (`\r\n`, `\r`, `\n`)
 * to carriage return line feed CRLF `\r\n`
 * @param {?String} - Value with newlines to convert to CRLF.
 */
const convertNewlinesToCRLF = value => value && value.replace(/\r\n|\r|\n/g, '\r\n');

export default convertNewlinesToCRLF;

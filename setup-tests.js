import 'airbnb-js-shims';
import 'jest-enzyme';
import Promise from 'bluebird';
import * as uniqueIdUtil from 'src/utils/unique-id';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

jest.spyOn(uniqueIdUtil, 'uniqueId').mockReturnValue('737884497096766615');

// throw errors to fail the build
console.error = msg => { throw new Error(msg); }; // eslint-disable-line no-console

Promise.config({
    warnings: false // turn off warnings during test, since it throws when faking server
});

window.analytics = { page: () => true };

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import renderShallow from 'render-shallow';
import MaintenanceScreen from '../maintenance-screen';

describe('<MaintenanceScreen>', () => {
    describe('when rendered with default props', () => {
        let component;
        const props = {
            title: {
                text: 'We\'re down for maintenance. We\'ll be back up by',
                time: '2 AM ',
                timeZone: 'EST.'
            },
            subTitle: 'Sorry for any inconvenience.'
        };

        beforeAll(() => {
            component = renderShallow(<MaintenanceScreen { ...props } />).output;
        });

        test('contains logo', () => {
            expect(component).toMatchSnapshot();
        });

        test('contains Maintenance icon and text', () => {
            expect(component).toMatchSnapshot();
        });
    });
});

import Navbar from '../navbar';
import React from 'react';
import { shallow } from 'enzyme';
import { RightPaginationArrow, LeftPaginationArrow } from 'src/icons';

describe('<Navbar>', () => {
    describe('when rendered', () => {
        let component;

        beforeAll(() => {
            component = shallow(<Navbar showNextButton showPreviousButton />);
        });

        test('has Left and Right navigation arrows', () => {
            expect(component.find(RightPaginationArrow)).toHaveLength(1);
            expect(component.find(LeftPaginationArrow)).toHaveLength(1);
        });
    });
});

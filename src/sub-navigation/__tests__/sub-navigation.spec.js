import React from 'react';
import renderShallow from 'render-shallow';
import SubNavigation from '../sub-navigation';
import SubNavigationItem from '../sub-navigation-item';
import noop from 'src/utils/noop';

describe('<SubNavigation>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SubNavigation onSelect={ noop }>
                    <SubNavigationItem href="project/1" className="active">
                        Project #1
                    </SubNavigationItem>
                    <SubNavigationItem href="project/2">
                        Project #2
                    </SubNavigationItem>
                </SubNavigation>
            ).output;
        });

        test('should have proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});

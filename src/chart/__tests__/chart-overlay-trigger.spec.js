import React from 'react';
import renderShallow from 'render-shallow';
import noop from 'src/utils/noop';
import ChartOverlayTrigger from '../chart-overlay-trigger';

describe('<ChartOverlayTrigger>', () => {
    describe('when it renders', () => {
        const onMouseMove = noop;
        const onMouseLeave = noop;
        const onClick = noop;

        let component;

        beforeAll(() => {
            component = renderShallow(
                <ChartOverlayTrigger
                    className="extra"
                    x={ 0 }
                    y={ 0 }
                    width={ 100 }
                    height={ 200 }
                    onMouseMove={ onMouseMove }
                    onMouseLeave={ onMouseLeave }
                    onClick={ onClick }
                />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});

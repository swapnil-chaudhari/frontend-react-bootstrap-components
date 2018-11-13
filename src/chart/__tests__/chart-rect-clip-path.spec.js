import React from 'react';
import renderShallow from 'render-shallow';
import ChartRectClipPath from '../chart-rect-clip-path';

describe('<ChartRectClipPath>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <ChartRectClipPath
                    id="extra"
                    x={ 0 }
                    y={ 0 }
                    width={ 100 }
                    height={ 200 }
                />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});

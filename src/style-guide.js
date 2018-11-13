import React from 'react';
import { render } from 'react-dom';
import * as Components from 'src/index';
import * as Icons from 'src/icons';
import { getComponentFixture } from 'lib/util/fixtures';
import jsxToString from 'jsx-to-string';
import isEmpty from 'lodash.isempty';
import './style-guide.scss';

const StyleGuide = () => {
    const availableComponents = Object.keys(Components).map((key, i) => {
        const Component = Components[key];
        const fixture = getComponentFixture(key);
        const { default: fixtureProps } = fixture;
        const props = fixtureProps || fixture;
        if (!isEmpty(props))
            return (
                <div className="StyleGuide-component-entry" key={ i } >
                    <h3>{ key }</h3>
                    { jsxToString(<Component { ...props } />) }
                    <Component { ...props } />
                </div>
            );

        return null;
    });
    const availableIcons = Object.keys(Icons).map((key, i) => {
        const Icon = Icons[key];
        return (
            <div className="StyleGuide-component-entry" key={ i } >
                <h3>{ key }</h3>
                { jsxToString(<Icon />) }
                <Icon />
            </div>
        );
    });
    return (
        <div className="StyleGuide">
            <Components.SVGDefinitions />
            <h2>Components</h2>
            <hr />
            { availableComponents }
            <h2>Icons</h2>
            <hr />
            { availableIcons }
        </div>
    );
};

render(<StyleGuide />, document.getElementById('style-guide'));

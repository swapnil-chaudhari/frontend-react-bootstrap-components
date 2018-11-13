import React from 'react';
import ReactDOM, { render } from 'react-dom';
import PlaygroundCode from 'component-playground';
import * as Components from 'src/index';
import './playground.scss';

const initialText = require('raw-loader!./playground-fixture');

const Playground = () => (
    <div className="Playground">
        <PlaygroundCode
            codeText={ initialText }
            scope={ { React, ReactDOM, ...Components } }
            noRender={ false }
        />
        <Components.SVGDefinitions />
    </div>
);

render(<Playground />, document.getElementById('playground'));

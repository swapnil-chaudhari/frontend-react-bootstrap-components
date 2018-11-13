import React from 'react';
import ReactSelect from 'react-select';
import TetherComponent from 'react-tether';
import 'react-select/scss/default.scss';

class TetherSelect extends ReactSelect {
    constructor(props) {
        super(props);

        this.renderOuter = this._renderOuter;
    }

    _renderOuter(...params) {
        const menu = super.renderOuter.apply(this, params);
        const { tetherProps } = this.props;

        // Don't return an updated menu render if we don't have one
        if (!menu)
            return;

        // this.wrapper comes from the ref of the main Select component (super.render())
        const selectWidth = this.wrapper ? this.wrapper.offsetWidth : null;

        /* Apply position:static to our menu so that it's parent will get the correct dimensions
        and we can tether the parent */
        return (
            <TetherComponent
                renderElementTo="body"
                ref="tethered-component"
                attachment="top left"
                targetAttachment="top left"
                constraints={ [{
                    to: 'window',
                    attachment: 'together',
                    pin: ['top']
                }] }
                { ...tetherProps }
            >
                <div />
                { React.cloneElement(menu, { style: { position: 'static', width: selectWidth } }) }
            </TetherComponent>
        );
    }
}

TetherSelect.displayName = 'TetherSelect';

export default TetherSelect;

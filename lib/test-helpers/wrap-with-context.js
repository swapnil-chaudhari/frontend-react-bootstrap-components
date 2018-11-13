import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* Helper function to wrap component with a component that has context
*/
export default (context, contextTypes, children) => {
    class Wrapper extends Component {
        static propTypes = {
            context: PropTypes.object,
            children: PropTypes.object
        };

        constructor(props) {
            super(props);
            this.getChildContext = () => props.context;
        }

        render() {
            return <div>{ this.props.children }</div>;
        }
    }

    Wrapper.childContextTypes = contextTypes;

    return <Wrapper context={ context }>{ children }</Wrapper>;
};

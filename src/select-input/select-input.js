import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect, { Async } from 'react-select';
import TetherSelect from 'src/select-input/tether-select/tether-select';
import cx from 'classnames';
import noop from 'src/utils/noop';
import 'react-select/scss/default.scss';

const propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    inputProps: PropTypes.object,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.arrayOf(
        PropTypes.shape(
            {
                label: PropTypes.string.isRequired,
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
            }
        )
    ),
    menuRenderer: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    qaid: PropTypes.string,
    selectType: PropTypes.oneOf(['select', 'tether', 'async']),
    tetherProps: PropTypes.object,
    multi: PropTypes.bool,
    dropUpIfOutOfViewport: PropTypes.bool,
    ...ReactSelect.propTypes
};

const handleChange = onChange => selection =>
    onChange(selection && selection.value);

class SelectInput extends React.Component {
    handleOnOpen = () => {
        window.requestAnimationFrame(() => {
            if (!this.selectComponent)
                return;

            const viewportBottom = window.innerHeight || document.documentElement.clientHeight;
            const dropdown = this.selectComponent.wrapper.querySelector('.Select-menu-outer');
            this.flipDropdownIfOutOfViewport(dropdown, viewportBottom);
        });
    }

    flipDropdownIfOutOfViewport = (dropdown, viewportBottom) => {
        const boundingRect = dropdown.getBoundingClientRect();
        /* eslint-disable no-param-reassign */
        if (boundingRect.bottom > viewportBottom)
            dropdown.style.top = `${boundingRect.height * -1}px`;
        /* eslint-enable no-param-reassign */
    }

    render() {
        const {
            className,
            containerClassName,
            id,
            inputProps,
            placeholder,
            value,
            options,
            menuRenderer,
            onChange,
            disabled,
            required,
            qaid,
            multi,
            selectType,
            tetherProps,
            dropUpIfOutOfViewport,
            ...props
        } = this.props;

        let SelectComponent = TetherSelect;
        const isAsync = selectType === 'async';
        if (selectType === 'select')
            SelectComponent = ReactSelect;
        else if (isAsync)
            SelectComponent = Async;

        if (dropUpIfOutOfViewport)
            if (props.onOpen) {
                const oldOnOpen = props.onOpen;
                props.onOpen = () => { oldOnOpen(); this.handleOnOpen(); };
            } else
                props.onOpen = this.handleOnOpen;

        return (
            <div id={ qaid } className={ containerClassName }>
                <SelectComponent
                    className={ cx('SelectInput-select', className) }
                    inputProps={ { id, ...inputProps } }
                    placeholder={ placeholder }
                    value={ value }
                    options={ options }
                    menuRenderer={ menuRenderer }
                    onChange={ multi || isAsync ? onChange : handleChange(onChange) }
                    disabled={ disabled }
                    required={ required }
                    id={ id }
                    multi={ multi }
                    { ...props }
                    tetherProps={ tetherProps }
                    ref={ (input) => { this.selectComponent = input; } }
                />
            </div>
        );
    }
}

SelectInput.displayName = 'SelectInput';

SelectInput.propTypes = propTypes;

SelectInput.defaultProps = {
    onChange: noop,
    selectType: 'select',
    multi: false,
    dropUpIfOutOfViewport: false
};

export default SelectInput;

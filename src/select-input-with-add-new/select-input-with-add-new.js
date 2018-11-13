import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SelectInput, Button } from 'src/index';
import AddNewBox from './add-new-box';
import './select-input-with-add-new.scss';

export default class SelectInputWithAddNew extends Component {
    static propTypes = {
        addButtonText: PropTypes.string.isRequired,
        cancelButtonText: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired, // inputs for the add new box
        defaultExpanded: PropTypes.bool,     // expand the "add" form on first render, default false
        disabled: PropTypes.bool,
        inputProps: PropTypes.object,        // maps a new set of form values to { label, value }
        inputId: PropTypes.string,
        mapValuesToOption: PropTypes.func,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onSave: PropTypes.func,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
            })
        ),
        placeholder: PropTypes.string,
        saveButtonText: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        qaid: PropTypes.string
    };

    static defaultProps = {
        defaultExpanded: false,
        disabled: false,
        options: [],
        placeholder: ''
    };

    state = { expanded: this.props.defaultExpanded, newOption: null };

    handleAddNewClick = event => {
        event.preventDefault();
        this.setState({ expanded: !this.state.expanded });
    };

    handleAddCancel = () => {
        this.setState({ expanded: false });
    };

    /**
     * handleAddSave governs the onSave behavior passed to the add new box.
     * If onSave is provided, this will only call that.
     * Otherwise, it will use the onChange prop and perform the default option mapping
     * as defined in mapValuesToOption.
     */
    handleAddSave = formValues => {
        const { mapValuesToOption, onChange, onSave } = this.props;

        if (onSave) {
            onSave(formValues);
            this.setState({ expanded: false });
        } else {
            const newOption = mapValuesToOption(formValues);
            this.setState({
                expanded: false,
                newOption
            }, () => onChange(newOption.value));
        }

    };

    render() {
        const {
            addButtonText,
            cancelButtonText,
            children,
            disabled,
            inputProps,
            name,
            options,
            value,
            onChange,
            placeholder,
            saveButtonText,
            inputId,
            qaid
        } = this.props;
        const { expanded, newOption } = this.state;

        return (
            <div id={ qaid } >
                <span className="SelectInputWithAddNew-container">
                    <SelectInput
                        className="SelectInputWithAddNew-dropdown"
                        disabled={ disabled }
                        inputProps={ inputProps }
                        options={ newOption ? [newOption, ...options] : options }
                        placeholder={ placeholder }
                        onChange={ onChange }
                        value={ value }
                    />
                    <Button
                        className="SelectInputWithAddNew-add-button"
                        disabled={ disabled }
                        type="button"
                        onClick={ this.handleAddNewClick }
                        bsStyle="link"
                    > + { addButtonText }
                    </Button>
                    { expanded ?
                        <AddNewBox
                            name={ name }
                            saveButtonText={ saveButtonText }
                            cancelButtonText={ cancelButtonText }
                            fields={ children }
                            onCancel={ this.handleAddCancel }
                            onSave={ this.handleAddSave }
                            inputId={ inputId }
                        />
                        : null
                    }
                </span>
            </div>
        );
    }
}

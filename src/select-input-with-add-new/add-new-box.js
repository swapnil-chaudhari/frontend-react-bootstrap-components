import PropTypes from 'prop-types';
import React, { Children, cloneElement, Component } from 'react';
import SaveAddButton from './save-add-button';
import CancelAddButton from './cancel-add-button';
import reduce from 'lodash.reduce';
import isEmpty from 'lodash.isempty';

export const makeFormName = name => `add-new-${name}`;

const mapFormFieldsToValues = form =>
    reduce(form, (result, { name, value }) => ({
        ...result, [name]: value
    }), {});

const mapInputIdToValue = inputId => {
    const element = document.getElementById(inputId);

    return { [element.name]: element.value };
};

const createChildrenWithFormAttribute = (children, formName) =>
    Children.map(children, child =>
        cloneElement(child, {
            children: child.props.children ?
                createChildrenWithFormAttribute(child.props.children, formName) :
                child.props.children,
            form: formName
        })
    );

export default class AddNewBox extends Component {
    static propTypes = {
        saveButtonText: PropTypes.string.isRequired,
        cancelButtonText: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        fields: PropTypes.node.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
        inputId: PropTypes.string
    };

    state = { valid: false };

    formName = makeFormName(this.props.name); // eslint-disable-line react/sort-comp

    fields = createChildrenWithFormAttribute(this.props.fields, this.formName);

    componentWillMount() {
        this.createdForm = document.createElement('form');
        this.createdForm.id = this.formName;
        document.body.appendChild(this.createdForm);
    }

    componentWillUnmount() {
        const { createdForm } = this;
        document.body.removeChild(createdForm);
    }

    get form() {
        return document.forms[this.formName];
    }

    handleCancelClick = event => {
        const { onCancel } = this.props;
        event.preventDefault();
        onCancel();
    };

    handleSaveClick = event => {
        const { onSave } = this.props;
        const formFieldValues = mapFormFieldsToValues(this.form);
        const fieldValues = isEmpty(formFieldValues) ?
            mapInputIdToValue(this.props.inputId) :
            formFieldValues;

        event.preventDefault();
        onSave(fieldValues);
    };

    handleFormChange = () => {
        this.setState({ valid: this.form.checkValidity() });
    };

    render() {
        const { saveButtonText, cancelButtonText } = this.props;
        const { valid } = this.state;
        const { fields } = this;

        return (
            <article className="SelectInputWithAddNew-new-box" onChange={ this.handleFormChange } >
                { fields }
                <div className="SelectInputWithAddNew-button-wrapper">
                    <CancelAddButton
                        onClick={ this.handleCancelClick }
                        text={ cancelButtonText }
                    />
                    <SaveAddButton
                        disabled={ !valid }
                        text={ saveButtonText }
                        onClick={ this.handleSaveClick }
                    />
                </div>
            </article>
        );
    }
}

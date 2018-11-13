import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';
import cx from 'classnames';

const NewProduct = ({ className }) =>
    <Icon
        className={ cx('Icons-new-product', className) }
        id={ ICON_IDS.NEW_PRODUCT }
    />;

NewProduct.propTypes = {
    className: PropTypes.string,
};

export default NewProduct;

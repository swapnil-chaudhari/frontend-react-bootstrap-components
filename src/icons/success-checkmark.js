import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const SuccessCheckmark = () =>
    <Icon id={ ICON_IDS.SUCCESS_CHECKMARK } className="Icons-success-checkmark" />;

SuccessCheckmark.displayName = 'SuccessCheckmark';

export default SuccessCheckmark;

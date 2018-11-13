import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const IncompleteAlert = () =>
    <Icon id={ ICON_IDS.ATTENTION } className="Icons-incomplete-alert" />;

export default IncompleteAlert;

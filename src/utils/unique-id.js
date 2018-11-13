import lodashUniqueId from 'lodash.uniqueid';

export const uniqueId = () => lodashUniqueId(Math.random().toString().slice(2));

export default uniqueId;

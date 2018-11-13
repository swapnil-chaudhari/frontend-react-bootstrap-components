const SI_POSTFIXES = ['', 'k', 'M', 'B'];

export default (number) => {
    // what tier? (determines SI prefix)
    const tier = Math.log(Math.abs(number)) * Math.LOG10E / 3 | 0;

    // if zero, we don't need a prefix
    if (tier === 0)
        return `${number}`;

    // get postfix and determine scale
    const postfix = SI_POSTFIXES[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add postfix as suffix
    return `${scaled.toFixed(1)}${postfix}`;
};

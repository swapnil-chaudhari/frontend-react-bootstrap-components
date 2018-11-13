/*
 * Utility for enhanced requires
 */

export const requireFixture = path =>
    // not as efficient as running this on module load,
    // but it's currently only run once in component bootstrapping,
    // and this prevents the dev server tests from depending on webpack's require.context
    require.context('../..', true, /.*\/__fixtures__\/.*\.js/)(path);

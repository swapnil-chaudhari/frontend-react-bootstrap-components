import kebabCase from 'lodash.kebabcase';
import { requireFixture } from 'lib/util/require';

const fixturePathForComponent = (componentName, fixtureName) => {
    const fixture = fixtureName || 'default';
    return `./src/${kebabCase(componentName)}/__fixtures__/${kebabCase(fixture)}.js`;
};

export const getComponentFixture = (componentName, fixtureName) => {
    const path = fixturePathForComponent(componentName, fixtureName);
    let props = {};

    try {
        props = requireFixture(path);
    } catch (e) {
        if (fixtureName)
            throw new Error(`Could not fixture file at: ${path}`);
    }

    return props;
};

import { renderFile } from 'pug';
import { get } from 'superagent';
import path from 'path';

const getAssetTimestamp = (() => {
    let timestamp;

    return () => timestamp ?
        Promise.resolve(timestamp) :
        get('https://s3.amazonaws.com/prod-orcd-cdn/shared/manifest').buffer()
            .then(({ body }) => {
                timestamp = body.toString('utf8');
                return timestamp;
            });
})();

const deployTimestamp = process.env.DEPLOY_TIMESTAMP ? `${process.env.DEPLOY_TIMESTAMP}/` : '';

const sharedAssetURL = timestamp => `https://cdn.theorchard.io/shared/${timestamp}`;

const deployedURL = `${process.env.CDN_URL || ''}/frontend-react-components/${deployTimestamp}`;

const getPathToIndex = (pathToIndex) =>
    pathToIndex ?
    path.resolve(__dirname, pathToIndex)
    : path.resolve(__dirname, '../../src/index.html.pug');

export const renderIndexToString = (pathToIndex, templateLocals = {}) =>
    getAssetTimestamp().then(timestamp =>
        renderFile(getPathToIndex(pathToIndex), {
            __DEPLOYED_URL__: deployedURL,
            __SHARED_ASSET_URL__: sharedAssetURL(timestamp),
            __ASSET_UPLOAD_URL__: process.env.ASSET_UPLOAD_URL || '',
            ...templateLocals
        })
    );

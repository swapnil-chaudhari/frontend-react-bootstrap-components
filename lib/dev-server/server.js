/*
 * Customizable webpack server for local development
 *
**/

/* eslint-disable no-console */

import express from 'express';
import { devConfig as config } from '../../webpack.config';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import path from 'path';
import { renderIndexToString } from '../util/render-layout';

const app = express();

app.set('view engine', 'pug');

app.set('views', [
    path.resolve(__dirname, '../../src')
]);

const addWebpackMiddleware = () => {
    const compiler = webpack(config);

    app.use(devMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(hotMiddleware(compiler));
};

const start = () => {
    app.listen(3000, '0.0.0.0', err => {
        if (err)
            console.log(err);

        console.log('App started at localhost:3000');
    });
};

addWebpackMiddleware();
start();

const templatePath = process.env.TEMPLATE_PATH || null;

app.get('*', (_r, res) => renderIndexToString(templatePath).then(layout => res.send(layout)));

export default app;

const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const nextBuildId = require('next-build-id');
const optimizedImages = require('next-optimized-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less')

require('dotenv').config();

const nextConfigs = {
    generateBuildId: () => nextBuildId({dir: __dirname}),
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});
        config.plugins.push(new webpack.DefinePlugin(env));
        config.plugins.push(
            new WebpackBar({
                fancy: true,
                profile: true,
                basic: false
            })
        );
        config.plugins.push(
            new webpack.ContextReplacementPlugin(/moment[/\\]locale/, /en/)
        );
        // see https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
        const originalEntry = config.entry;
        config.entry = async () => {
            const entries = await originalEntry();
            if (
                entries['main.js'] &&
                !entries['main.js'].includes('./polyfills/polyfills.js')&&
                !entries['main.js'].includes('./polyfills/smoothscroll.min.js')
            ) {
                entries['main.js'].unshift('./polyfills/polyfills.js');
                entries['main.js'].unshift('./polyfills/smoothscroll.min.js');
            }
            return entries;
        };
        return config;
    },
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 5
    },
    compress: true,
    webpack5: false,
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

module.exports = withPlugins(
    [
        [//optimizedImages
            optimizedImages,
            {
                handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
                optimizeImages: true,
                mozjpeg: {
                    quality: 80,
                },
                optipng: {
                    optimizationLevel: 3,
                },
                webp: {
                    preset: 'default',
                    quality: 75,
                },
                svgo: {
                    plugins: [
                        { removeComments: false }
                    ]
                },
            }
        ],
        withCSS,
        withLess,//
        withSass
    ],//e
    nextConfigs
);


const fs = require('fs');
const path = require('path');

const PACKAGING_DIR = path.resolve(__dirname, "..", "deployment");
const IS_PROD_BUILD = process.env.NODE_ENV === 'production';

const POTENTIAL_ENTRY_FILES = [
    'index.tsx',
    'index.ts',
    'index.jsx',
    'index.js',
].map(name => path.resolve(__dirname, '..', 'src', name));

function getEntryFile() {
    const entry = POTENTIAL_ENTRY_FILES.find(fname => fs.existsSync(fname));
    if (!entry) {
        throw new Error(
            'Could not find entry file. A file must exist at one of the following locations: ' +
                POTENTIAL_ENTRY_FILES.join(', ')
        );
    }
    return entry;
}

module.exports = {
    isProdBuild: IS_PROD_BUILD,

    webpackMode: IS_PROD_BUILD ? 'production' : 'development',

    webpackDevTool: IS_PROD_BUILD
        ? 'source-map'
        : 'cheap-module-eval-source-map',

    entryFile: getEntryFile(),


    appJsFileName: '[name].min.js',

    appJsChunkFileName: '[name].chunk.min.js',

    appCssFileName: '[name].min.css',

    appCssChunkFileName: '[id].[hash].min.css',

    /** The local path where webpack outputs assets. */
    localPublishDir: path.resolve(__dirname, "..", PACKAGING_DIR),

    awsResources: {

    }

};

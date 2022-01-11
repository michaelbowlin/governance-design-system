module.exports = function (eleventyConfig) {
    const navigationPlugin = require('@11ty/eleventy-navigation');

    eleventyConfig.addPlugin(navigationPlugin);
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css");

    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    };
};

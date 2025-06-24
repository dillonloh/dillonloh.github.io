module.exports = function(eleventyConfig) {
    // Copy css and static folders to the output directory
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("_data");
    
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site",
      },
    };
  };
  
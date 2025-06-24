module.exports = function(eleventyConfig) {
    // Copy css and static folders to the output directory
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("static");
  
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site",
      },
    };
  };
  
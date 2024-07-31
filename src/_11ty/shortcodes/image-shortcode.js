const Image = require("@11ty/eleventy-img");

module.exports = async function (src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [null],
    formats: ["webp", "jpeg"],
    urlPath: "/assets/img/",
    outputDir: "./_site/assets/img/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
};

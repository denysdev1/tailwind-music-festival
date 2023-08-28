const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(({ addUtilities }) => {
  addUtilities({
    ".caption-bottom": {
      "caption-side": "bottom",
    },
  });
});

module.exports = tableCaption;

const path = require("path");

module.exports = {
  "*.{js,ts,tsx}": (absolutePaths) => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths
      .map((file) => path.relative(cwd, file))
      .filter((file) => !file.includes("storybook-static/"))
      .join(" ");
    return [
      `eslint ${relativePaths}`,
      `prettier --check ${relativePaths}`,
      `cspell ${relativePaths}`,
    ];
  },
};

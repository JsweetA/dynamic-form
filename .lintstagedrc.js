const { ESLint } = require("eslint");

const removeIgoredFiles = async (files) => {
  const eslint = new ESLint();
  const ignoredFiles = await Promise.all(
    files.map((file) => eslint.isPathIgored(file)),
  );
  const filteredFiles = files.filter((_, i) => !ignoredFiles[i]);
  return filteredFiles.join(" ");
};

module.export = {
  "*": async (files) => {
    const filesToLint = await removeIgoredFiles(files);

    return [`eslint ${filesToLint} --max-warnings=0`];
  },
};

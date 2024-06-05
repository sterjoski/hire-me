module.exports = {
    extends: ["@repo/eslint-config/react-internal.js"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
};

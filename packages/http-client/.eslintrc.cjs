module.exports = {
    extends: ['@repo/eslint-config/library.js'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
}

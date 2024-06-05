/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'prettier'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'no-unused-vars': 'warn',
    },
}

import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginNode from 'eslint-plugin-node';
import eslintPluginPromise from 'eslint-plugin-promise';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: eslintPluginImport,
      node: eslintPluginNode,
      promise: eslintPluginPromise,
    },
    rules: {
      eqeqeq: 'error',
      curly: 'error',
      'no-eval': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-console': 'off',
    },
  },
];

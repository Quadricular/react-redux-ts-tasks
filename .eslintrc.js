module.exports = {
  extends: ['plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      plugins: ['@typescript-eslint', 'react-hooks'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
      ],
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        'react/no-unused-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        'consistent-return': 'off'
      }
    },
    {
      files: ['**/*.ts'],
      plugins: ['@typescript-eslint', 'react-hooks'],
      parser: '@typescript-eslint/parser',

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ],
      rules: {
        'prettier/prettier': 0,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};

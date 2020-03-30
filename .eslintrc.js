module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    ignorePatterns: [
        'node_modules/*',
        'generated-sources/*',
        '**/vendor/*.js',
        'dist/*',
        '.nuxt/*',
        '.idea/*',
        'logs/*',
        'coverage/*',
        '**/*.config.js',
        'spec/**',
        '**/*.scss',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        'no-magic-numbers': 'error',
        'no-multi-spaces': 'error',
        'no-script-url': 'error',
        'prettier/prettier': ['error'],
        'eqeqeq': ['error', 'always'],
        'no-alert': 'error',
        'no-empty-function': 'error',
        'camelcase': ['error', { allow: ['de_DE', 'en_US'], ignoreImports: true }],
        'no-console': 'error',
        'no-debugger': 'error',
        'react/jsx-indent': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'import/extensions': 'off',
        'space-infix-ops': 'error'
    },
};

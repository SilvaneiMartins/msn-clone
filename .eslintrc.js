module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        '@react-native-community',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'prettier/prettier': 0,
                'react/prop-types': 0,
                'react/forbid-prop-types': 0,
                'react-native/no-inline-styles': 0,
                '@typescript-eslint/no-empty-interface': 'off',
                'no-empty-function': 'off',
                '@typescript-eslint/no-empty-function': 'error',
                'no-empty': false,
            },
        },
    ],
};

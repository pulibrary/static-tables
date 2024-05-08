import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import vueParser from 'vue-eslint-parser';

export default [
    eslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier,
    {
        files: ['*.js', '*.ts', '*.vue'],
        ignores: ['node_modules', 'dist', '.gitignore'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                sourceType: 'module'
            },
            globals: {
                ...globals.node
            }
        },
        rules: {
            'vue/require-default-prop': 'off'
        }
    }
];

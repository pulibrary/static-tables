import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import vueParser from 'vue-eslint-parser';

export default [
  eslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-empty': 'warn'
    }
  },
  ...pluginVueA11y.configs['flat/recommended'],
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    ignores: ['node_modules', 'dist', '.gitignore', 'site/assets']
  },
  {
    files: ['*.js', '*.ts', '*.vue'],
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

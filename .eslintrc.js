module.exports = {
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react'],
  rules: {
    'no-lone-blocks': 0,
    'linebreak-style': 0,
    'arrow-body-style': 0,
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    'no-class-assign': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': [1, {
      forbid: ['any']
    }],
    'react/jsx-filename-extension': 0,
    // 无状态的组件目前不检测
    'react/prefer-stateless-function': 0,
    // 组件的属性类型也不检测
    'react/prop-types': [
      0,
      {
        ignore: ['children', 'form']
      }
    ],
    'react/no-multi-comp': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 1,
    'consistent-return': 1,
    // 对象包裹不检测
    'object-curly-spacing': 0,
    // 文件最后留一个空行
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 0,  //styles 定义
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'jsx-a11y/img-has-alt': 0,
    // 'semi': ['error', 'never'],
    'no-unreachable': 2,
    'no-unexpected-multiline': 2,
    'no-constant-condition': 0  // sagas watch
  }
};

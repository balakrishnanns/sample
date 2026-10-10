
export default {
  plugins: [
    {
      rules: {
        'custom-header-format': ({ header }) =>
          /^(feat|fix|styl|refactor|test|perf)-\d+ : [a-z0-9][a-z0-9 -]*$/.test(
            header,
          )
            ? [true]
            : [
                false,
                'Format: <type>-<number> : <lowercase description>',
              ],
      },
    },
  ],
  rules: {
    'custom-header-format': [2, 'always'],
    'header-max-length': [0],
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
  },
}
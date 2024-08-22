const TEST_ENV = process.env.NODE_ENV === 'test';

const presetEnvOptions = TEST_ENV ? {} : {
  useBuiltIns: false
};

module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ],
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    ['@babel/preset-env', presetEnvOptions]
  ]
}

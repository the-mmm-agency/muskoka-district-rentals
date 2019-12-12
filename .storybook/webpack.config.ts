import { flow } from 'fp-ts/lib/function'
import { Lens } from 'monocle-ts'
import path from 'path'
import { Configuration } from 'webpack'

interface Args {
  config: Configuration;
}

const config = Lens.fromProp<Args>()('config');

module.exports = flow(
  config.set({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.graphql'],
      mainFields: ['browser', 'module', 'main'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [['react-app', { flow: false, typescript: true }]],
                plugins: [
                  require.resolve('@babel/plugin-proposal-class-properties'),
                  require.resolve('babel-plugin-remove-graphql-queries'),
                ],
              },
            },
            {
              loader: require.resolve('react-docgen-typescript-loader'),
            },
          ],
        },
      ],
    },
  }),
  ({ config }) => config
);

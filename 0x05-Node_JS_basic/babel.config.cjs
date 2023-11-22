// module.exports = {
//   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
// };

module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
    // [
    //   'env',
    //   {
    //     'exclude': [
    //       "transform-regenerator"
    //     ]
    //   }
    // ]
  ];

  return {presets};
}

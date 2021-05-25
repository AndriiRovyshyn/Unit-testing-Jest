module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};


module.exports = api => {
    const isTest = api.env('test');
    // Используйте isTest, чтобы описать плагины и пресеты, которые будут использоваться только с Jest.
  
    return {
      // ...
    };
};

module.exports = {
    transform: {},
};
const { build } = require('esbuild');

build({
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    entryPoints: ['src/index.js'],
    outfile: 'build/index.js',
    target: 'node16',
})
    .catch(() => process.exit(1))
    .then(() => {
        console.log('build done');
        process.exit(0);
    });

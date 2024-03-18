import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../public_html'
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 5175,
        hot: true,
    },
}
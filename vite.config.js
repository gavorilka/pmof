import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../public_html',
        rollupOptions: {
            input: {
                main: resolve(__dirname,'src', 'index.html'),
                pro_goals: resolve(__dirname,'src', 'pro_goals.html'),
                pro_content: resolve(__dirname,'src', 'pro_content.html'),
                pro_lesson: resolve(__dirname,'src', 'pro_lesson.html'),
                pro_partner:resolve(__dirname,'src', 'pro_partner.html'),
                pro_truth:resolve(__dirname,'src', 'pro_truth.html'),
                program:resolve(__dirname,'src', 'program.html'),
            }
        }
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
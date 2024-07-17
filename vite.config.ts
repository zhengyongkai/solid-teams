import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetUno(), presetDaisy()]
    }),
    solid(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      // 这里就是需要配置resolve里的别名
      '@': path.join(__dirname, './src') // path记得引入
    }
  }
})

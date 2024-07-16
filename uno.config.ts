// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}'
      ]
      // exclude files
      // exclude: []
    }
  },
  shortcuts: [
    // ...
  ],
  theme: {},

  presets: [
    presetIcons({
      /* options */
    }),
    presetRemToPx({
      baseFontSize: 4
    }),
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()]
})

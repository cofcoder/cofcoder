
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/profile.png' }
    ]
  },
  /*
  ** Custom dev server to be used for localhost ONLY!!
  ** Remove before build and production
  */
  server: {
    port: '3000',
    host: '0.0.0.0'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/node_modules/uikit/dist/css/uikit.min.css',
    '@/assets/css/custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/uikit',
      ssr: false
    }
  ],
  /*
  ** Loaders
  */
  loaders: {
    vue: {
      transformAssetUrls: {
        img: 'data-src',
        div: 'data-src'
      }
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

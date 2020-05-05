// Setup of UIKit with Nuxt
import Vue from 'vue'

import UIKit from 'uikit/dist/js/uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIKit.use(Icons)
UIKit.container = '#__nuxt'

Vue.prototype.$uikit = UIKit
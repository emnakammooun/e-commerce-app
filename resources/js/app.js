// require('./bootstrap');
import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: '#27367f',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
  })
createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
      createApp({ render: () => h(App, props) })
      .component('inertia-link', Link)
      .use(plugin)
      .mount(el)
  },
})

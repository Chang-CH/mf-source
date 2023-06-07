import { createApp, defineComponent, h } from 'vue'
import VueButton from './VueButton'



export const mount = (el) => {
    const app = createApp(VueButton)
    app.mount(el)
}


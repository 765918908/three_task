import Vue from 'vue'
import BackTop from './BackTop.vue'
const v = new Vue({
  render (createElement) {
    return createElement(BackTop)
  }
})

v.$mount() //渲染

document.body.appendChild(v.$el) //挂载

const backTop = v.$children[0]


export default backTop;
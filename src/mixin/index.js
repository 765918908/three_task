export default {
  data () {
    return {
      isShow: false
    };
  },
  methods: {
    show () {
      this.$backTop.gogogo()
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log('scrollTop..', scrollTop)
      if (scrollTop > 600) {
        // this.isShow = true
        this.$backTop.show()
      } else {
        // this.isShow = false
        this.$backTop.hidden()

      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
};
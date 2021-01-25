export default {
  data () {
    return {
      isShow: false,
      opacity: 0

    };
  },
  methods: {

    handleScroll () {

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log('scrollTop..', scrollTop)
      this.opacity = scrollTop / (scrollTop + 100)
      console.log('this.opacity ', this.opacity)

      if (scrollTop > 600) {
        this.$backTop.show()
      } else {
        this.$backTop.hidden()
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
};
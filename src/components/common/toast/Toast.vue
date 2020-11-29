<template>
  <transition name="toast">
    <div class="toast" v-show="isShow">
      {{message}}
    </div>
  </transition>
</template>

<script>
export default {
  name: "",
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: '',
      isShow: false,
      flag: true
    }
  },
  methods: {
    show(message = '默认消息', delay = 1500) {
      // 函数节流: 点击后,只能在1.2秒钟再次点击
      if (this.flag) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.message = ''
          this.isShow = false
        }, delay);
        this.flag = false
      }
      clearTimeout(timer)
      let timer = setTimeout(() => {
        this.flag = true
      }, 1200);

    }
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 15px;
  z-index: 99;
  transform: translate(-50%, -50%);
  background: linear-gradient(to top, #091E3A, #2F80ED, #2D9EE0);
  border-radius: 10%;
  box-sizing: border-box;
  color: #fff;
}
.toast-enter-active {
  animation: fade 0.5s;
}
.toast-leave-active {
  animation: fade 0.2s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    /* transform: translateY(-20px); */
    margin-top: -10px;
  }
  100% {
    opacity: 1;
    /* transform: translateY(0); */
    margin-top: 0;
  }
}
</style>
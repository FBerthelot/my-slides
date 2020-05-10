<template>
  <div class="logo">
    <div class="logo__flip-container">
      <transition name="apear">
        <img
          v-show="currentAvatar === 0"
          :src="avatars[0]"
          alt="my avatar"
          class="logo__face-a"
        />
      </transition>
      <transition name="apear">
        <img
          v-show="currentAvatar !== 0"
          :src="avatars[1]"
          alt="my avatar"
          class="logo__face-b"
        />
      </transition>

      <img src="/assets/joker.jpg" alt="joker" class="logo__face-c" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    face: {
      type: Number,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      avatars: ['/assets/moi.jpg', '/assets/alive.gif'],
      currentAvatar: this.face || 0,
    }
  },
  mounted() {
    if (this.face !== null) {
      return
    }
    this.interval = setInterval(() => {
      this.currentAvatar = (this.currentAvatar + 1) % 2
    }, 30000)
  },
  destroyed() {
    if (this.face !== null) {
      return
    }
    clearInterval(this.interval)
  },
}
</script>

<style scoped>
.logo {
  height: 8rem;
  width: 8rem;
  perspective: 50rem;
}

.logo__flip-container {
  transition: all 0.6s ease;
  transform-style: preserve-3d;

  position: relative;
}

.logo:hover .logo__flip-container {
  transform: rotateY(180deg);
}

.logo__face-a,
.logo__face-b,
.logo__face-c {
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;

  height: 8rem;
  width: 8rem;
  border-radius: 50%;
}

.apear-leave-active,
.apear-enter-active {
  transition: all 0.5s ease;
}

.apear-enter,
.apear-leave-to {
  opacity: 0;
}

.logo__face-a,
.logo__face-b {
  transform: rotateY(0deg);
}

.logo__face-c {
  transform: rotateY(180deg);
}
</style>

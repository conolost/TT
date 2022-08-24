<template>
  <div class="main__wheel">
    <div class="main__dot"></div>
    <div class="main__wheel_inner">
      <span
        v-for="(item, key) in rotatedWheel"
        :key="item"
        :style="{ transform: key }"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotatedWheel: {},
    };
  },
  created() {
    this.getAngle();
  },
  methods: {
    getAngle() {
      this.rotatedWheelChars = [];
      const chars = "show reel show reel show reel";
      for (let i = 0; i < chars.length; i++) {
        let angle = (i - 17) * 10;
        let style = `rotate(${angle}deg)`;
        this.rotatedWheel[style] = chars[i];
      }
    },
  },
};
</script>

<style></style>

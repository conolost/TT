<template>
  <div class="wrapper">
    <div class="main">
      <div class="main__circle-bg"></div>
      <parallaxTextVue />
      <runningLineVue />
      <textWheelVue />
    </div>
  </div>
</template>

<script>
import parallaxTextVue from "@/components/parallaxText.vue";
import runningLineVue from "@/components/runningLine.vue";
import textWheelVue from "@/components/textWheel.vue";
export default {
  components: {
    parallaxTextVue,
    runningLineVue,
    textWheelVue,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

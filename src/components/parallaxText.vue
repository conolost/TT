<template>
  <h1 class="main__text">FULL-CYCLE EVENT AGENCY</h1>
</template>

<script>
export default {
  data() {
    return {
      el: ".main",
      posX: 0,
      posY: 0,
      coordXpercent: 0,
      coordYpercent: 0,
    };
  },
  created() {
    // this.setMouseParallaxStyle();
    window.addEventListener("load", this.onWindowLoad);
    // setInterval(function () {
    //   window.requestAnimationFrame(this.setMouseParallaxStyle());
    // }, 5000);
  },
  methods: {
    onWindowLoad() {
      setInterval(() => {
        this.setMouseParallaxStyle();
      }, 5000);
    },
    getCoord(e) {
      const parallaxWidth = this.$el.offsetWidth;
      const parallaxHeight = this.$el.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;
      this.coordXpercent = (coordX / parallaxWidth) * 100;
      this.coordYpercent = (coordY / parallaxHeight) * 100;
    },
    setMouseParallaxStyle() {
      const coeficient = 10;
      const speed = 0.1;
      const distX = this.coordXpercent - this.posX;
      const distY = this.coordYpercent - this.posY;

      this.posX += distX * speed;
      this.posY += distY * speed;
      console.log("hihihi");

      return `translate(${this.posX / coeficient}%, ${
        this.posY / coeficient
      }%)`;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <LangSelect />
      <div class="header__logo logo">
        <div :class="{ logo__name_loaded: isLoaded }" class="logo__name">
          <span class="logo__letter">M</span><span class="logo__letter">O</span
          ><span class="logo__letter">Z</span><span class="logo__letter">G</span
          ><span class="logo__letter">I</span>
        </div>
        <div class="logo_sub-name">EVENT</div>
      </div>
    </div>

    <div class="main">
      <nav class="main__menu">
        <ul class="main__list">
          <li>
            <router-link to="#/wherePage" class="where">where?</router-link>
          </li>
          <li>
            <router-link to="#/whatPage" class="what">what?</router-link>
          </li>
          <li><router-link to="#/whoPage" class="who">who?</router-link></li>
        </ul>
      </nav>
      <div class="main__circle-bg"></div>
      <h1 class="main__text">FULL-CYCLE EVENT AGENCY</h1>
      <div class="main__running-line main__running-line_top">
        <span
          >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
          AGENCY
        </span>
      </div>
      <div class="main__running-line main__running-line_bottom">
        <span
          >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
          AGENCY</span
        >
      </div>

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
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import LangSelect from "../components/langSelect.vue";

export default defineComponent({
  components: {
    LangSelect,
  },
  setup() {
    return {
      isLoaded: false,
      rotatedWheel: {},
      // el: ".main",
      // posX: 0,
      // posY: 0,
      // coordXpercent: 0,
      // coordYpercent: 0,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
    this.getAngle();
    // this.setMouseParallaxStyle();
  },
  methods: {
    getAngle() {
      this.rotatedWheelChars = [];
      const chars = "showreel showreel showreel";
      for (let i = 0; i < chars.length; i++) {
        let angle = (i - 17) * 13;
        let style = `rotate(${angle}deg)`;
        this.rotatedWheel[style] = chars[i];
      }
    },
    // getCoord(e) {
    //   const parallaxWidth = this.$el.offsetWidth;
    //   const parallaxHeight = this.$el.offsetHeight;

    //   const coordX = e.pageX - parallaxWidth / 2;
    //   const coordY = e.pageY - parallaxHeight / 2;
    //   this.coordXpercent = (coordX / parallaxWidth) * 100;
    //   this.coordYpercent = (coordY / parallaxHeight) * 100;
    // }
    // setMouseParallaxStyle() {
    //   const coeficient = 10;
    //   const speed = 0.1;
    //   const distX = this.coordXpercent - this.posX;
    //   const distY = this.coordYpercent - this.posY;

    //   this.posX += distX * speed;
    //   this.posY += distY * speed;
    //   window.requestAnimationFrame(this.setMouseParallaxStyle());
    // },
  },
});
</script>

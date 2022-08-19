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
          <li><a href="#" class="where">where?</a></li>
          <li><a href="#" class="what">what?</a></li>
          <li><a href="#" class="who">who?</a></li>
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
          <span>s</span>
          <span>h</span>
          <span>o</span>
          <span>w</span>
          <span>r</span>
          <span>e</span>
          <span>e</span>
          <span>l</span>
          <span> </span>
          <span>s</span>
          <span>h</span>
          <span>o</span>
          <span>w</span>
          <span>r</span>
          <span>e</span>
          <span>e</span>
          <span>l</span>
          <span> </span>
          <span>s</span>
          <span>h</span>
          <span>o</span>
          <span>w</span>
          <span>r</span>
          <span>e</span>
          <span>e</span>
          <span>l</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangSelect from "./components/langSelect.vue";

export default {
  name: "App",
  components: {
    LangSelect,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 0);
  },
};
</script>

<style lang="scss">
$main-color: #ffc107;
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: $main-color;
//   margin-top: 60px;
// }
</style>

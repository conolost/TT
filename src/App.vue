<template>
  <div class="wrapper">
    <div class="header">
      <LangSelect />
      <div class="header__logo logo">
        <router-link to="/">
          <div :class="{ logo__name_loaded: isLoaded }" class="logo__name">
            <span class="logo__letter">M</span
            ><span class="logo__letter">O</span
            ><span class="logo__letter">Z</span
            ><span class="logo__letter">G</span
            ><span class="logo__letter">I</span>
          </div>
        </router-link>
        <div class="logo_sub-name">EVENT</div>
      </div>
    </div>
    <div class="main">
      <nav class="main__menu">
        <ul class="main__list">
          <li>
            <router-link to="/where" class="where">where?</router-link>
          </li>
          <li>
            <router-link to="/what" class="what">what?</router-link>
          </li>
          <li>
            <router-link to="/who" class="who">who?</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <router-view></router-view>
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
    }, 100);
  },
};
</script>

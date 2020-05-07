<template>
  <nav class="uk-navbar uk-navbar-container uk-margin uk-navbar--custom">
    <div class="uk-navbar-left">
      <nuxt-link to="/" class="uk-navbar-item uk-logo">
        <Logo />
      </nuxt-link>
    </div>
    <div class="uk-navbar-right">
      <a class="uk-navbar-toggle" href="#">
        <span uk-navbar-toggle-icon></span>
      </a>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  components: {
    Logo
  }
};
</script>
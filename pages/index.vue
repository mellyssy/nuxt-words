<template>
<div>
  <v-container fluid class="hero-bg" tag="header">
    <div class="overlay d-flex align-center">
      <Hero />
    </div>
  </v-container>
    <Carousel />
    <WordSearch />
    <Footer />
</div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Carousel from '@/components/Carousel.vue';
import WordSearch from '@/components/WordSearch.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Hero,
    Carousel,
    WordSearch,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
  @import '~vuetify/src/styles/styles.sass';

  .hero-bg {
    background-image: url('~assets/img/hero-bg.jpg');
    background-size: cover;
    height: 70vh;
    padding: 0;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      height: 100vh;
    }
  }

  .overlay {
    background-color: rgba(33, 33, 33, 0.5);
    height: 100%;
    width: 100%;
  }
</style>
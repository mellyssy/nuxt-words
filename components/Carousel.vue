<template>
  <v-container class="mt-10">
    <h2 class="pl-5 text-h3">We know learning is difficult.</h2>
    <p class="text-subtitle-1 pl-5">That's why we offer a dictionary in your pocket.</p>
    <v-carousel :height="$vuetify.breakpoint.xs ? 300 : 500">
      <v-carousel-item
        v-for="n in [1, 2, 3]"
        :key="n"
        :src="require(`~/assets/img/carousel-${n}.jpg`)"
      >
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
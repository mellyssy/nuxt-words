<template>
  <v-container fluid class="pt-10 px-0">
      <v-card
        flat
        tile
        width="100%"
        color="black"
        class="text-center"
        >
          <v-card-text class="text-body-1 py-10">
            <NuxtLink to="/contact">
              Ideas? Suggestions? Shoot us a message.
            </NuxtLink>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-text class="text-overline">
            {{ new Date().getFullYear() }} — <strong>nuxt-words</strong>
          </v-card-text>
      </v-card>
  </v-container>
</template>
<template>
  <v-container class="mt-10">
    <v-row>
      <v-col>
        <p class="pl-5 text-h4 mb-0">Type the word to get its definition:</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" >
        <v-text-field
          v-model.trim="word"
          solo
          label="e.g. example"
          clearable
          @keyup.enter="triggerSearch"
        />
      </v-col>
      <v-col md="1">
        <v-btn plain height="48" @click="triggerSearch">
          Search
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="wasSearchSuccessful && !isLoading">
      <v-col
        v-for="(result, idx) in getResults"
        :key="idx"
        class="d-flex"
        xs="12"
        sm="6"
        md="4"
      >
      <v-card width="100%"
      >
        <v-card-text>
          <p class="text-caption">{{ result.phonetic }}</p>
          <p class="text-h4 text--primary mb-1">{{ result.word }}</p>
          <p class="mb-1 text-overline">{{ result.partOfSpeech }}</p>
          <p class="text-body-1">{{ result.definition }}</p>
          <p class="text-body-2">{{ result.origin }}</p>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
    <v-row v-else-if="!wasSearchSuccessful && !isLoading && query">
      <p class="text-body-1">
        We were unable to find any definitions for word "{{ query }}". If you know about it, 
        <NuxtLink to="/contact">send us a message</NuxtLink> 
        🖤
      </p>
    </v-row>
    <v-row v-else-if="isLoading">
      <v-skeleton-loader
        elevation="2"
        type="article, actions"
        min-width="300px"
      ></v-skeleton-loader>
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import utils from '~/utils';

  const debouncedSearch = utils.debounce(function() {
    this.fetchMeanings(this.word);
  }, 300);

  export default {
    name: 'WordSearch',
    data() {
      return {
        word: '',
        query: '',
      };
    },
    async fetch() {
      await this.fetchMeanings('example');
    },
    computed: {
      ...mapGetters(['getResults', 'wasSearchSuccessful', 'isLoading']),
    },
    methods: {
      ...mapActions(['fetchMeanings']),
      triggerSearch() {
        this.query = this.word;
        debouncedSearch.call(this);
      },
    }
  }
</script>
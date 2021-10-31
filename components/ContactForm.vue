<template>
  <v-container fluid class="mt-10">
    <v-card
      class="mx-auto"
      style="max-width: 500px;"
    >
      <v-toolbar
        color="grey darken-3"
        cards
        dark
        flat
      >
        <NuxtLink to='/'>
          <v-btn icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn> 
        </NuxtLink> 
        <v-card-title class="text-h6 font-weight-regular">
          Send us a message
        </v-card-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form
        ref="form"
        v-model="form"
        class="pa-4 pt-6"
      >
        <v-text-field
          v-model="name"
          :rules="[rules.required]"
          filled
          label="Name"
          style="min-height: 96px"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="surname"
          :rules="[rules.required]"
          filled
          label="Surname"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[rules.email, rules.required]"
          filled
          label="Email address"
          type="email"
        ></v-text-field>
        <v-textarea
          v-model="message"
          :rules="[rules.required, rules.length(5)]"
          auto-grow
          filled
          counter
          label="Write here"
          rows="1"
        ></v-textarea>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
         <v-btn
          text
          @click="$refs.form.reset()"
        >
          Clear
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          class="white--text"
          color="grey darken-3"
          depressed
          @click="onSubmitClick"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    message: '',
    name: '',
    surname: '',
    email: '',
    form: false,
    rules: {
      email: v => !!/.+@.+\..+/.test(v || '') || 'Please enter a valid email',
      required: v => !!v || 'This field is required',
      length: len => v => (v && v.length >= len) || `At least ${len} characters required`,
    },
  }),
  methods: {
    onSubmitClick(e) {
      e.preventDefault();
      this.$refs.form.reset();
    }
  }
}
</script>
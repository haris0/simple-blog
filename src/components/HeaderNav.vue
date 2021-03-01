<template>
  <div>
    <v-app-bar
      color="blue darken-3"
      dense
      dark
    >
      <v-container>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-container>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>
<script>
  export default {
    name: 'HeaderNav',
    props: ['title']
  }    
</script>
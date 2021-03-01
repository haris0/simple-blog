<template>
  <v-app>
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

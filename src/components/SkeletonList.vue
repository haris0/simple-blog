<template>
  <div>
    <v-skeleton-loader v-for="number in numbers" :key="number"
      class="mx-auto skeleton"
      type="image"
    ></v-skeleton-loader>
  </div>
</template>
<script>
  export default {
    name: 'SkeletonList',
    data:()=>({
      numbers:[1, 2, 3, 4, 5],
    }),
  }    
</script>
<style scoped>
  .skeleton{
    margin: 10px !important;
    height: 200px;
  }
</style>
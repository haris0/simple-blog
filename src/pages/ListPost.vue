<template>
  <v-container>
    List {{page}}
  </v-container>
</template>

<script>
  let self;
  export default {
    name: 'List',
    created(){
      self = this;  
    },
    components: {
    },
    mounted(){
      self.page = self.$route.params.page;
      console.log(self.page)
    },
    data:()=>({
      page:0,
    }),
    computed: {
     
    },
    methods:{
    }
  }
</script>
<style scoped>
</style>
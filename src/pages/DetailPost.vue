<template>
  <v-container>
    Detail {{id}}
  </v-container>
</template>

<script>
  let self;
  export default {
    name: 'Detail',
    created(){
      self = this;  
    },
    components: {
    },
    mounted(){
      self.id = self.$route.params.id;
      console.log(self.id)
    },
    data:()=>({
      id:0,
    }),
    computed: {
     
    },
    methods:{
    }
  }
</script>

<style scoped>
</style>
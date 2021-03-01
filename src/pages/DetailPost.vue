<template>
  <v-container>
    Detail
  </v-container>
</template>

<script>
  let self;
  export default {
    name: 'Detail',
    props: ["articel"],
    created(){
      self = this;  
    },
    components: {
    },
    mounted(){
      console.log(self.articel)
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
<template>
  <HeaderNav title="Indonesian News" />
</template>

<script>
  let self;
  import HeaderNav from '@/components/HeaderNav.vue'
  import {getHeadlines} from '@/services'
  export default {
    name: 'Home',
    created(){
      self = this;  
    },
    components: {
      HeaderNav
    },
    mounted(){
      self.fetchHeadlines()
    },
    data:()=>({
      headlines : []
    }),
    computed: {
    },
    methods:{
      fetchHeadlines : async() => {
        const response = await getHeadlines(10, 1);
        console.log(response)
      }
    }
  }
</script>
<style scoped>
</style>
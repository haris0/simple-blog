<template>
  <div>
    <HeaderNav title="Indonesian News" />
    <v-container>
      <ArticelCard :articels="headlines"></ArticelCard>
    </v-container>
  </div>
</template>

<script>
  let self;
  import HeaderNav from '@/components/HeaderNav.vue'
  import ArticelCard from '@/components/ArticelCard.vue'
  import {getHeadlines} from '@/services'

  export default {
    name: 'Home',
    created(){
      self = this;  
    },
    components: {
      HeaderNav,
      ArticelCard
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
        self.headlines = response.data.articles
        console.log(response)
      },
    }
  }
</script>
<style scoped>
</style>
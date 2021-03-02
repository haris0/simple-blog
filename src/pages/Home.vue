<template>
  <div>
    <HeaderNav title="Indonesian News" />
    <div class="banner"></div>
    <v-container>
      <SkeletonList v-if="headlines.length < 1"/>
      <ArticelCard v-else :articels="headlines"></ArticelCard>
    </v-container>
    <div class="load-more">
      <v-btn
        rounded
        color="primary"
        dark
        @click="goToList"
      >
        Load More News
      </v-btn>
    </div>
  </div>
</template>

<script>
  let self;
  import HeaderNav from '@/components/HeaderNav.vue'
  import SkeletonList from '@/components/SkeletonList.vue'
  import ArticelCard from '@/components/ArticelCard.vue'
  import {getHeadlines} from '@/services'
  import router from '@/router'

  export default {
    name: 'Home',
    created(){
      self = this;  
    },
    components: {
      HeaderNav,
      ArticelCard,
      SkeletonList
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
      goToList:()=>{
        router.push({name: 'List', params: {page:1}})
      }
    }
  }
</script>
<style scoped>
  .banner{
    margin-top: 48px;
    height: 15em;
    background-image: url("../assets/banner.jpg");
    background-position: center;
    background-size: cover;
  }
  .load-more{
    text-align: center;
    padding-top: 5px;
    padding-bottom: 30px;
  }
</style>
<template>
  <div>
    <HeaderNav title="News List" />
    <v-container class="list">
      <SkeletonList v-if="headlines.length < 1"/>
      <ArticelCard v-else :articels="headlines"></ArticelCard>
    </v-container>
    <div class="prev-next">
      <v-btn v-if="page > 1"
        rounded
        color="primary"
        dark
        class="button-page"
        @click="goToPrev"
      >
        Prev
      </v-btn>
      <v-btn v-if="page <= pageCount -1"
        rounded
        color="primary"
        dark
        class="button-page"
        @click="goToNext"
      >
        Next
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

  export default {
    name: 'List',
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
      page:1,
      headlines:[],
      totalPage:0
    }),
    computed: {
      pageCount(){
        let l = self.totalPage
        let s = 15
        return Math.ceil(l/s);
      }
    },
    methods:{
      fetchHeadlines : async() => {
        self.scrollTop()
        self.headlines = []
        const response = await getHeadlines(15, self.page);
        self.headlines = response.data.articles
        self.totalPage = response.data.totalResults
        console.log(response)
      },
      scrollTop : () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      goToNext:()=>{
        self.page += 1
        self.fetchHeadlines()
      },
      goToPrev:()=>{
        self.page -= 1
        self.fetchHeadlines()
      }
    },
  }
</script>
<style scoped>
  .list{
    margin-top: 48px;
  }
  .prev-next{
    text-align: center;
    padding-top: 5px;
    padding-bottom: 30px;
  }
  .button-page{
    margin: 0 20px;
  }
</style>
<template>
  <div>
    <HeaderNav title="News List" />
    <v-container class="list">
      <SkeletonList v-if="headlines.length < 1"/>
      <ArticelCard v-else :articels="headlines"></ArticelCard>
    </v-container>
    <div class="prev-next">
      <v-btn
        rounded
        color="primary"
        dark
        class="button-page"
      >
        Prev
      </v-btn>
      <v-btn
        rounded
        color="primary"
        dark
        class="button-page"
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
      self.page = self.$route.params.page;
      console.log(self.page)
      self.fetchHeadlines()
    },
    data:()=>({
      page:0,
      headlines:[]
    }),
    computed: {
     
    },
    methods:{
      fetchHeadlines : async() => {
        const response = await getHeadlines(15, 1);
        self.headlines = response.data.articles
        console.log(response)
      },
    }
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
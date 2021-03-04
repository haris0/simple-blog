<template>
  <div>
    <HeaderNav title="Detail News" />
    <v-container class="container">
      <span class="title"><b>{{articel.title}}</b></span>
      <br>
      <span class="author">{{articel.author}} | {{formatedDate(articel.publishedAt)}}</span>
      <br><br>
      <img :src="articel.urlToImage" :alt="articel.title" class="imageUrl">
      <br><br>
      <p class="content" v-html="articel.content"></p>
      <p class="content" v-html="lorem"></p>
      <p>Source: 
        <a :href="articel.url" target="_blank">Link</a>
      </p>
    </v-container>
  </div>
</template>

<script>
  let self;
  import HeaderNav from '@/components/HeaderNav.vue'
  import { lorem } from '@/assets/lorenIpsum.js'
  export default {
    name: 'Detail',
    props: ["articel"],
    created(){
      self = this;  
    },
    components: {
      HeaderNav,
    },
    mounted(){
      console.log(self.articel)
    },
    data:()=>({
      id:0,
      lorem:lorem
    }),
    computed: {
     
    },
    methods:{
      formatedDate : (dateStr)=>{
        let dateFull = new Date(dateStr)
        let months = ["Januari ", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        let year = dateFull.getFullYear()
        let date = dateFull.getDate()
        let monthsIdx = dateFull.getMonth()
        return date+" "+months[monthsIdx]+" "+year
      }
    }
  }
</script>

<style scoped>
  .container{
    margin-top: 60px;
      padding-left: 28px;
      padding-right: 28px;
  }

  @media screen and (min-width: 768px) {
    .container{
      padding-left: 150px;
      padding-right: 150px;
    }
  }

  @media screen and (min-width: 992px) {
    .container{
      padding-left: 300px;
      padding-right: 300px;
    }
  }

  .title{
    font-size: larger;
  }
  .author{
    font-size: small;
  }
  .content{
    text-align: justify;
  }
  .imageUrl{
    width: 100%;
    margin: 20px 0;
  }
</style>
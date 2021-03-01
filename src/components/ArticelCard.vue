<template>
  <div>
    <v-card class="card" v-for="news in articels" :key="news.publishedAt">
      <v-card-title class="card-title">{{news.title}}</v-card-title>
      <v-card-subtitle>{{news.author}} | {{formatedDate(news.publishedAt)}}</v-card-subtitle>
      <v-card-text>{{news.description}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-3"
          text
          @click="goToDetail(news)"
        >
          Read More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
  import router from '@/router'
  export default {
    name: 'ArticelCard',
    props: ['articels'],
    methods:{
      formatedDate : (dateStr)=>{
        let dateFull = new Date(dateStr)
        let months = ["Januari ", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        let year = dateFull.getFullYear()
        let date = dateFull.getDate()
        let monthsIdx = dateFull.getMonth()

        return date+" "+months[monthsIdx]+" "+year
      },
      goToDetail : (news) =>{
        router.push({name: 'Detail', params: {articel:news}})
      }
    }
  }    
</script>
<style scoped>
  .card{
    margin: 10px;
  }
  .card-title{
    word-break: inherit;
    letter-spacing: initial;
  }

  @media screen and (min-width: 768px) {
    .card{
      margin: 20px;
    }
  }
</style>
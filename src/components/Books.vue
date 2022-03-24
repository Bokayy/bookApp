<template>
<main>
<div id="api">
      <div class ="item" >
     <p>
         <img/>
     </p>
     <div class="title">
        <h1>
            Ime knjige:
        </h1>
        <p>
            Podnaslov: 
        </p>
        <p class="ISBN">
            ISBN:
        </p>
        <p>
            Cijena:
        </p>
    </div>
    <div class="extra hidden"> </div>
    </div>
</div>
</main>
</template>

<script>
import axios from 'axios';
import {getBooks} from '../fetch.js'
export default {
    props: ['searchQuery','pageNo',],
    mixins:[getBooks()],
    data(){
    return {
        maxPages:Number(),
        responseData:'',
        }
    },
    methods:{
        writeResponseToData(data){ //writing directly to data from out searchQuery method doesn't work for some reason
            this.api_info = data;
        },
    },
    watch:{
        searchQuery(){
            console.log("Search Query watcher activated");
            axios
            .get(`https://api.itbook.store/1.0/search/${this.searchQuery}/${this.pageNo}`)
            .then(response => (this.responseData = response.data))
            .then(response => (console.log(response)))
        },
        pageNo(){
            console.log("Page Number watcher activated");
            axios
            .get(`https://api.itbook.store/1.0/search/${this.searchQuery}/${this.pageNo}`)
            .then(response => (this.responseData = response.data))
            .then(response => (console.log(response)))
        },
        //Update data tied to our response (the maximum number of pages in this case)
        /* responseData(){
            console.log("Response watcher activated");
            this.maxPages = this.responseData.total;
        }  */
    }
    }
</script>

<style>
</style>
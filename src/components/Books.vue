<template>
<main>
    <div id="api">
        <Item v-for="book in responseData.books" :key="book.isbn13"
        :Image="book.image"
        :Name="book.title"
        :Subtitle="book.subtitle"
        :ISBN="book.isbn13"
        :Price="book.price"
        >
        </Item>
    </div>
</main>
</template>

<script>
import axios from 'axios';
import {getBooks} from '../fetch.js';
import Item from './Item.vue';

export default {
    components:{
        'Item':Item,
    },
    props: ['searchQuery','pageNo',],
    mixins:[getBooks()],
    data(){
    return {
        maxPages:Number(),
        responseData:'',
        maxPagesPlaceholder: this.maxPages
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
            .then(response => (this.responseData = response.data,
            this.maxPages = response.data.total))
        },
        pageNo(){
            console.log("Page Number watcher activated");
            axios
            .get(`https://api.itbook.store/1.0/search/${this.searchQuery}/${this.pageNo}`)
            .then(response => (this.responseData = response.data, this.maxPages = response.data.total))
        },
        maxPages(){
            this.maxPagesPlaceholder = Math.ceil(this.maxPages/10);
            this.$emit('newPageInfo',this.maxPagesPlaceholder);
        }
        //Update data tied to our response (the maximum number of pages in this case)
        /* responseData(){
            console.log("Response watcher activated");
            this.maxPages = this.responseData.total; //doesn't work
        }  */
    }
    }
</script>

<style>
</style>
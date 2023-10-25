<template>
  <div id="app">
    <custom-header
     v-on:search="catchSearch"
     :showPagination="showPagination"
     v-on:pageplus="pageUpdate"
     v-on:pageminus="pageUpdate"
     :pageNo="pageNo"
     :maxPages="maxPages"
      >
    </custom-header>
    <div class="divider">
        &nbsp;
    </div>
      <books 
      :searchQuery="searchQuery"
      :pageNo="pageNo"
      v-on:newPageInfo="maxPagesUpdate"
      >
      </books>
      <div class="divider">
        &nbsp;
      </div>
      <custom-footer
      :showPagination="showPagination"
      v-on:pageplus="pageUpdate"
      v-on:pageminus="pageUpdate"
      :pageNo="pageNo"
      :maxPages="maxPages"
      >
    </custom-footer>
  </div>
</template>

<script>
import CustomHeader from './components/CustomHeader.vue';
import CustomFooter from './components/CustomFooter.vue';
import Book from './components/Books.vue';
//import testMixin from './testmixin.js';

export default {
  name: 'App',
  //mixins:[testMixin],
  components: {
    'custom-header' : CustomHeader,
    'custom-footer' : CustomFooter,
    'books' : Book,
  },
  
  data() {
    return {
      showPagination: true,
      isValueNegative: '',
      searchQuery: '',
      response: '',
      pageNo: 1,
      maxPages:Number(),
    }
  },
  computed: {
  },
  methods:
   {
    test123() {
      console.log(this);
    },
    catchSearch(searchTerm){
      this.pageNo=1;
      this.searchQuery = searchTerm;
      //console.log(searchTerm);
    },
    pageUpdate(value){
      if(value){
        this.pageNo++;
        console.log("page plus");
      }
      else{
        this.pageNo--;
        console.log("page minus");
      }
    },
    maxPagesUpdate(maxPages){
      this.maxPages=maxPages;
    }
  },
  created() {
    //console.log("created")
    //console.log(this);
    //this.testMixin();
  },
  mounted() {
    console.log("App mounted");
  }
}
</script>

<style>
/* @import './style/style.css'; */
</style>

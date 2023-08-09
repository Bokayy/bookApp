<template>
    <header>
        <h1>IT Books Search</h1>
        <div class="break">&nbsp;</div>

        <div v-show="showPagination" class="pageIndicator">
            <i @click="pageminus" class="fa-solid fa-angle-left" id="btnLeft"></i>
            <p class="pageNo">{{pageNo}}/{{maxPages}}</p>
            <i @click="pageplus" class="fa-solid fa-angle-right" id="btnRight"></i>
        </div>

            <div class="search">
                <div class="wrap">
               <input @keyup="keymonitor" v-model="searchQuery" class="searchTerm" placeholder="Anything IT related?" id="test">
               <button @click="emitSearchTerm" type="submit" class="searchButton">
                 <i class="fa fa-search"></i>
              </button>
            </div>
        </div>
    </header>

    
</template>

<script>
export default {
    name:"CHeader",
    data(){ 
        return { 
            searchQuery: '' //this is dynamically updated using v-model
        }
    },
    props: ['showPagination','pageNo','maxPages'],

    methods: {
        emitSearchTerm() {
            this.$emit('search',this.searchQuery)
        },
        keymonitor(event){
            if(event.key=="Enter"){
                this.emitSearchTerm();
            }
        },
        pageplus(){
            if(this.pageNo!==this.maxPages){
            this.$emit('pageplus',true);
            }
        },
        pageminus(){
            if (this.pageNo>1){
            this.$emit('pageminus',false);
            }
        }
    },
}
</script>
<template>
    <header>
        <div class="break">&nbsp;</div>
        <svg height="100" width="100">
            <circle cx="50" cy="50" r="8" stroke="white" stroke-width="3" fill="black"/>
        </svg>
        <svg height="100" width="100">
            <circle cx="50" cy="50" r="8" stroke="yellow" stroke-width="3" fill="black"/>
        </svg>
        <!-- <div v-show="showPagination" class="pageIndicator">
            <i @click="pageminus" class="fa-solid fa-angle-left" id="btnLeft"></i>
            <p class="pageNo">Page:{{pageNo}}/{{maxPages}}</p>
            <i @click="pageplus" class="fa-solid fa-angle-right" id="btnRight"></i>
        </div> -->
    </header>

    
</template>

<script>
export default {
    name:"CFooter",
    props: ['showPagination','pageNo','maxPages'],
    methods: {
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
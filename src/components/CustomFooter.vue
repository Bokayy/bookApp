<template>
    <header>
        <div class="break">&nbsp;</div>
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
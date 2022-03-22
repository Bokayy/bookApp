<template>
    <header>
        <h1>Vježba 1 - API</h1>
        <div class="break">&nbsp;</div>

        <div v-show="bool" class="pageIndicator">
            <i class="fa-solid fa-angle-left" id="btnLeft"></i>
            <p class="pageNo">Page:1</p>
            <i class="fa-solid fa-angle-right" id="btnRight"></i>
        </div>

            <div class="search">
                <div class="wrap">
               <input type="text" class="searchTerm" placeholder="What are you looking for?" id="test">
               <button @click="emitEvent" type="submit" class="searchButton">
                 <i class="fa fa-search"></i>
              </button>
            </div>
        </div>
    </header>

    
</template>

<script>
export default {
    props: ['bool'],
    methods: {
        emitEvent() {
            console.log("emitEvent");
            this.$emit('eventtest')
        }
    }
}
</script>
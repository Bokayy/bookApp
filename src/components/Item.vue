<template>
  <div class ="item">
                <div>
                    <img :src="Image"
                    @mouseover="hover=true"
                    @mouseleave="hover=false"
                    @click="renderExtra"
                    alt = "Book Cover"
                    />
                </div>
            <div class="title">
                <h1>
                    {{Name}}
                </h1>
                <br>
                <p>
                    Podnaslov: 
                    <br>
                    {{Subtitle}} 
                </p>
                <br>
                <p class="ISBN">
                    ISBN:
                    <br>
                     {{ISBN}}
                </p>
                <br>
                <p>
                    Cijena:
                    <br>
                    {{Price}}
                </p>
            </div>
            <div v-show="hover || active" class="extra">
                <p>
                Author: <br>
                {{author}}
                </p>
                <p>
                Publisher: <br>
                {{publisher}}
                </p>
                <p id="description">
                Description: <br>
                {{description}}
                </p>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['Image','Name','Subtitle','ISBN','Price'],
    data(){
        return {
            hover: false,
            active: false,
            author: '',
            publisher: '',
            description:'',
        }
    },
    methods:{
        renderExtra(){
            axios
            .get(`https://api.itbook.store/1.0/books/${this.ISBN}`)
            .then (response => (
            console.log('renderExtra:',response),
            this.author = response.data.authors,
            this.publisher = response.data.publisher,
            this.description = response.data.desc
            ));
            this.active = !this.active;
        }
    }
}
</script>

<style>
</style>
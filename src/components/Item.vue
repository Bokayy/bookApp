<template>
  <div class ="item">
            <p>
                <img :src="Image"
                @mouseover="hover=true"
                @mouseleave="hover=false"
                @click="renderExtra"
                />
            </p>
            <div class="title">
                <h1>
                    Ime knjige:{{Name}}
                </h1>
                <p>
                    Podnaslov:{{Subtitle}} 
                </p>
                <p class="ISBN">
                    ISBN:{{ISBN}}
                </p>
                <p>
                    Cijena:{{Price}}
                </p>
            </div>
            <div v-show="hover" class="extra">
                <p>
                author: {{author}}
                </p>
                <p>
                publisher:{{publisher}}
                </p>
                <p id="description">
                description: {{description}}
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
            console.log(response),
            this.author = response.data.authors,
            this.publisher = response.data.publisher,
            this.description = response.data.desc
            ));
        }
    }
}
</script>

<style>
</style>
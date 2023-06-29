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
                    <u>Subtitle:</u>
                    <br>
                    {{Subtitle}} 
                </p>
                <br>
                <p class="ISBN">
                    <u>ISBN:</u>
                    <br>
                     {{ISBN}}
                </p>
                <br>
                <p>
                    <u>Price:</u>
                    <br>
                    {{Price}}
                </p>
            </div>
            <div v-show="hover || active" class="extra">
                <p>
                <u>Author:</u> 
                <br>
                {{author}}
                </p>
                <p>
                <u>Publisher:</u>
                <br>
                {{publisher}}
                </p>
                <p id="description">
                <u>Description:</u>
                <br>
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
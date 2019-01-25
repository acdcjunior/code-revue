<template>
    <div>
        <v-card flat>Outros comentarios {{ locations.length }}</v-card>
        <hr>
        <div>
            <article v-for="(location, idx) in locations" :key="idx">
                <img :src="location.image" width="200px">
                <h1>{{ location.name }}</h1>
                <h6>{{ location.createdAt }}</h6>
                <button @click="deleteLocation(location.id)">
                    Delete
                </button>
            </article>
        </div>
        <hr>
        <input v-model="name" placeholder="Location Name">
        <input v-model="image" placeholder="Location Image URL">
        <button @click="addLocation(name, image)">Add New Location</button>
    </div>
</template>

<script>
    import { db } from '../main-vuefire';

    export default {
        name: "OutrosComentariosView",
        data () {
            return {
                locations: [],
                name: '',      // <-- here
                image: ''      // <-- here
            }
        },
        firestore () {
            return {
                locations: db.collection('locations').orderBy('createdAt')
            }
        },
        methods: {
            addLocation (name, image) {      // <-- and here
                const createdAt = new Date();
                db.collection('locations').add({ name, image, createdAt })
                this.name = '';
                this.image = '';
            },
            deleteLocation (id) {
                db.collection('locations').doc(id).delete()
            }
        }
    }
</script>

<style scoped>

</style>
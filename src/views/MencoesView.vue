<template>
    <v-card>
        <v-container
                fluid
                grid-list-md
        >

            <ComentarioGrande v-for="comment of comments" :comentario="comment" :key="comment.id"></ComentarioGrande>

        </v-container>
    </v-card>
</template>

<script>
    import ComentarioGrande from "../components/ComentarioGrande";
    import {mapActions, mapGetters} from "vuex";
    import {COMMENTS, FETCH_MENTIONS, GET_MENTIONS} from "../store/modules/comments";
    import {GET_USER_LOGGED_IN, USERS} from "../store/modules/users";

    export default {
        name: "MencoesView",
        components: {ComentarioGrande},

        data: () => ({
        }),

        computed: {
            ...mapGetters(COMMENTS, {comments: GET_MENTIONS}),
            ...mapGetters(USERS, {userLoggedIn: GET_USER_LOGGED_IN}),
        },

        mounted() {
            this.fetchMentions(this.userLoggedIn);
        },

        methods: {
            ...mapActions(COMMENTS, {fetchMentions: FETCH_MENTIONS})
        }
    }
</script>

<style scoped>

</style>
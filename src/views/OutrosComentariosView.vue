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
    import ComentarioGrande from "../components/CommentCardLarge";
    import {mapActions, mapGetters} from "vuex";
    import {COMMENTS, FETCH_COMMENTS, GET_COMMENTS} from "../store/modules/comments";
    import {GET_USER_LOGGED_IN, USERS} from "../store/modules/users";

    export default {
        name: "OutrosComentariosView",
        components: {ComentarioGrande},

        data: () => ({
        }),

        computed: {
            ...mapGetters(COMMENTS, {comments: GET_COMMENTS}),
            ...mapGetters(USERS, {userLoggedIn: GET_USER_LOGGED_IN}),
        },

        mounted() {
            this.fetchComments();
        },

        methods: {
            ...mapActions(COMMENTS, {fetchComments: FETCH_COMMENTS})
        }
    }
</script>

<style scoped>

</style>

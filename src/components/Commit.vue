<template>
    <div>
        <CommitResumo :commit="getCommit(sha)"></CommitResumo>
        <div v-for="(diff, idx) of getCommit(sha).diffs" :key="idx">
            <FileDiff :diff="diff" :comments="getCommentsForCommitDiff(diff)"></FileDiff>
        </div>
        <v-divider></v-divider>
        <v-card>
            <v-container
                    fluid
                    grid-list-md
            >

                <ComentarioGrande v-for="comment of commentsForCommit" :comentario="comment" :key="comment.id"></ComentarioGrande>

                <br>

                <form>
                    <v-textarea
                            outline box
                            name="input-7-4"
                            label="Comentário para este commit"
                            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    ></v-textarea>
                    <v-btn>Enviar</v-btn>
                </form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    import CommitResumo from "../components/CommitResumo";
    import ComentarioGrande from "./CommentCardLarge";
    import "diff2html/dist/diff2html.min.css";
    import FileDiff from "./FileDiff";
    import {mapActions, mapGetters} from "vuex";
    import {COMMITS, FETCH_COMMITS, GET_COMMIT, GET_COMMITS} from "../store/modules/commits";
    import {GET_USERS, USERS} from "../store/modules/users";
    import {DIFFS, GET_DIFFS} from "../store/modules/diffs";
    import {COMMENTS, FETCH_COMMENTS_FOR_COMMIT, GET_COMMENTS_FOR_COMMIT, GET_COMMENTS_FOR_COMMIT_DIFF,} from "../store/modules/comments";

    export default {
        components: {FileDiff, CommitResumo, ComentarioGrande},
        props: ['sha', 'commit'],
        data() {
            return {
                tleft: "",
                tright: "",
            };
        },
        computed: {
            ...mapGetters(COMMITS, {commits: GET_COMMITS, getCommit: GET_COMMIT}),
            ...mapGetters(COMMENTS, {commentsForCommit: GET_COMMENTS_FOR_COMMIT, getCommentsForCommitDiff: GET_COMMENTS_FOR_COMMIT_DIFF}),
            ...mapGetters(DIFFS, {diffs: GET_DIFFS}),
            ...mapGetters(USERS, {users: GET_USERS}),
        },
        created() {
        },

        mounted() {
            this.fetchCommits();
            this.fetchCommentsForCommit(this.sha);
        },

        methods: {
            ...mapActions(COMMITS, {fetchCommits: FETCH_COMMITS}),
            ...mapActions(COMMENTS, {fetchCommentsForCommit: FETCH_COMMENTS_FOR_COMMIT}),
        }
    };
</script>
<template>
    <div>
        <CommitResumo :commit="getCommit(sha)"></CommitResumo>
        <div v-for="(diff, idx) of getCommit(sha).diffs" :key="idx">
            <FileDiff :diff="diff" :commentsleft="comments.commentsleft" :commentsright="comments.commentsright"></FileDiff>
        </div>
    </div>
</template>

<script>
    import CommitResumo from "../components/CommitResumo";
    import "diff2html/dist/diff2html.min.css";
    import FileDiff from "./FileDiff";
    import {mapActions, mapGetters} from "vuex";
    import {COMMITS, FETCH_COMMITS, GET_COMMIT, GET_COMMITS} from "../store/modules/commits";
    import {GET_USERS, USERS} from "../store/modules/users";
    import {DIFFS, GET_DIFFS} from "../store/modules/diffs";
    import {COMMENTS, GET_COMMENTS_OLD} from "../store/modules/comments";

    export default {
        components: {FileDiff, CommitResumo},
        props: ['sha', 'commit'],
        data() {
            return {
                tleft: "",
                tright: "",
            };
        },
        computed: {
            ...mapGetters(COMMITS, {commits: GET_COMMITS, getCommit: GET_COMMIT}),
            ...mapGetters(COMMENTS, {comments: GET_COMMENTS_OLD}),
            ...mapGetters(DIFFS, {diffs: GET_DIFFS}),
            ...mapGetters(USERS, {users: GET_USERS}),
        },
        created() {
        },

        mounted() {
            this.fetchCommits();
        },

        methods: {
            ...mapActions(COMMITS, {fetchCommits: FETCH_COMMITS})
        }
    };
</script>
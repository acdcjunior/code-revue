<template>
    <FileDiff :tableleft="tleft" :tableright="tright" :commentsleft="comments.commentsleft"
                      :commentsright="comments.commentsright"></FileDiff>
</template>

<script>
    import "diff2html/dist/diff2html.min.css";
    import FileDiff from "./FileDiff";
    import {generateHtmlDiff} from "../differ";
    import {mapGetters} from "vuex";
    import {COMMITS, GET_COMMITS} from "../store/modules/commits";
    import {GET_USERS, USERS} from "../store/modules/users";
    import {DIFFS, GET_DIFFS} from "../store/modules/diffs";
    import {COMMENTS, GET_COMMENTS} from "../store/modules/comments";

    export default {
        components: {FileDiff},
        data() {
            return {
                tleft: "",
                tright: "",
            };
        },
        computed: {
            ...mapGetters(COMMITS, {commits: GET_COMMITS}),
            ...mapGetters(COMMENTS, {comments: GET_COMMENTS}),
            ...mapGetters(DIFFS, {diffs: GET_DIFFS}),
            ...mapGetters(USERS, {users: GET_USERS}),
        },
        created() {
            const result = generateHtmlDiff(this.diffs[0].diff);
            this.tleft = result.left;
            this.tright = result.right;
        }
    };
</script>
<template>
    <div>
        Commit {{ $route.params.sha }}
        <hr>
        <Commit :sha="$route.params.sha"></Commit>
    </div>
</template>

<script>
    import Commit from "../components/Commit";
    import {mapActions, mapGetters} from "vuex";
    import {COMMITS, FETCH_COMMITS, GET_COMMITS} from "../store/modules/commits";
    export default {
        name: "SingleCommitView",
        components: {Commit},

        computed: {
            ...mapGetters(COMMITS, {commits: GET_COMMITS})
        },

        mounted() {
            this.fetchCommits();
        },

        methods: {
            ...mapActions(COMMITS, {fetchCommits: FETCH_COMMITS})
        }
    }
</script>

<style scoped>

</style>
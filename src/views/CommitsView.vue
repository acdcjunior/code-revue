<template>
    <div>
        Commits {{ commits.length }}
        <div>
            <article v-for="(commit, idx) in commits" :key="idx">
                <h1>{{ commit.id }}</h1>
                <h6>{{ commit.message }}</h6>
            </article>
        </div>
        <hr>
        <Commit></Commit>
    </div>
</template>

<script>
    import Commit from "../components/Commit";
    import {mapActions, mapGetters} from "vuex";
    import {COMMITS, FETCH_COMMITS, GET_COMMITS} from "../store/modules/commits";
    export default {
        name: "CommitsView",
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
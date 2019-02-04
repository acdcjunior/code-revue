<template>
    <v-card>
        <v-container
                fluid
                grid-list-md
        >
            <h1>Commits</h1>
            <h4>Total: {{ commits.length }}</h4>
            <div v-for="(commit, idx) in commits" :key="idx">
                <CommitResumo :commit="commit"></CommitResumo>
            </div>
        </v-container>
    </v-card>
</template>

<script>
    import CommitResumo from "../components/CommitResumo";
    import {mapActions, mapGetters} from "vuex";
    import {COMMITS, FETCH_COMMITS, GET_COMMITS} from "../store/modules/commits";
    export default {
        name: "CommitsView",
        components: {CommitResumo},

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
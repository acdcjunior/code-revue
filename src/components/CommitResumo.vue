<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card>
                <v-flex xs12>
                    <v-card color="blue-grey darken-1" dark>
                        <v-card-text>
                            <v-avatar slot="activator" size="36px">
                                <img src="https://avatars2.githubusercontent.com/u/19707180?s=96&v=4" alt="Avatar">
                            </v-avatar>
                            &nbsp;
                            <strong v-html="commit.author_email"></strong>
                            &nbsp;
                            <strong v-html="commit.author_name"></strong>
                            &nbsp;
                            <v-chip :color="`gray lighten-4`" class="ml-0" label small>{{ commit.id && commit.id.substring(0, 8) }}</v-chip>
                            &nbsp;
                            <v-chip :color="`blue lighten-1`" class="ml-0" label small>{{ commit.authored_date }}</v-chip>
                            &nbsp;
                            <v-chip :color="`green lighten-1`" class="ml-0" label small>{{ commit.branches }}</v-chip>
                            &nbsp;
                            <v-chip :color="`green lighten-1`" class="ml-0" label small>{{ commit.project_id }}</v-chip>
                            &nbsp;
                            <v-chip :color="`green lighten-1`" class="ml-0" label small>{{ commit.parent_ids.map(p => p.substring(0, 8)) }}</v-chip>
                            &nbsp;
                            <v-chip :color="`green lighten-1`" class="ml-0" label small>Diffs: {{ commit.diffs.length }}</v-chip>
                            &nbsp;
                            <v-chip :color="`red lighten-1`" class="ml-0" label small>additions: {{ commit.stats.additions }}</v-chip>
                            &nbsp;
                            <v-chip :color="`red lighten-1`" class="ml-0" label small>deletions: {{ commit.stats.deletions }}</v-chip>
                            &nbsp;
                            <v-chip :color="`red lighten-1`" class="ml-0" label small>total: {{ commit.stats.total }}</v-chip>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-card-text>
                    <router-link :to="{name: 'singlecommit', params: {sha: commit.id} }">
                        <h2>{{ commit.title }}</h2>
                    </router-link>
                    {{ commit.message }}
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "CommitResumo",
        props: ['commit']
    }
</script>

<style scoped>

</style>
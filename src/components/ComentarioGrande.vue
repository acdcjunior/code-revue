<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card>
                <v-flex xs12>
                    <v-card color="indigo" dark>
                        <v-card-text>
                            <v-avatar slot="activator" size="36px">
                                <img :src="comentario.avatar" alt="Avatar">
                            </v-avatar>
                            &nbsp;
                            <strong v-html="'@' + comentario.name"></strong>
                            &nbsp;
                            <v-chip :color="`gray lighten-4`" class="ml-0" label small>{{ comentario.date }}</v-chip>
                            &nbsp;
                            <v-chip :color="`blue lighten-1`" class="ml-0" label small>{{ comentario.project }}</v-chip>
                            &nbsp;
                            <v-chip :color="`green lighten-1`" class="ml-0" label small>{{ comentario.branch }}</v-chip>
                            &nbsp;
                            <v-chip :color="`green lighten-1`" class="ml-0" label small>{{ comentario.sha && comentario.sha.substring(0, 8) }}</v-chip>
                            &nbsp;
                            <span class="grey--text">{{ comentario.id }}</span>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-card-text>
                    {{ comentario.texto }}
                </v-card-text>
                <v-divider light></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>thumb_up</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>reply</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>share</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "ComentarioGrande",
        props: ['comentario']
    }
</script>

<style scoped>

</style>
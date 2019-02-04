<template>
    <v-card v-if="comments">
        <v-list two-line>
            <template v-for="(comment, index) in comments">
                <v-list-tile :key="comment.title" avatar>
                    <v-list-tile-avatar>
                        <img :src="comment.avatar" alt="Avatar">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title v-html="comment.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="comment.texto"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider v-if="index !== comments.length - 1" :inset="true" :key="index"></v-divider>
            </template>
        </v-list>
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
</template>

<script>
    export default {
        name: "FileDiffComments",
        props: ['comments']
    }
</script>

<style scoped>

</style>
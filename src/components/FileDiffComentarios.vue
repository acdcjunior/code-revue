<template>
    <v-card v-if="items">
        <v-list two-line>
            <template v-for="(item, index) in items">
                <v-divider v-if="item.divider" :inset="item.inset" :key="index"></v-divider>

                <v-list-tile v-else :key="item.title" avatar>
                    <v-list-tile-avatar>
                        <img :src="item.avatar" alt="Avatar">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
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
        name: "FileDiffComentarios",
        props: ['items']
    }
</script>

<style scoped>

</style>
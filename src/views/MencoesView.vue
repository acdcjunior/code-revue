<template>
    <v-card>
        <v-container
                fluid
                grid-list-md
        >
            <v-layout row wrap>

                <v-flex
                        v-for="card in cards"
                        v-bind="{ [`xs${card.flex}`]: true }"
                        :key="card.title"
                >
                    <v-card>
                        <v-list-tile class="grow">
                            <v-list-tile-avatar color="grey darken-3">
                                <v-img
                                        class="elevation-6"
                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-img>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Evan You</v-list-tile-title>
                            </v-list-tile-content>

                            <v-layout>
                                <v-layout>x</v-layout>
                                <v-layout align-center justify-end>
                                    <v-icon class="mr-1">mdi-heart</v-icon>
                                    <span class="subheading mr-2">256</span>
                                    <span class="mr-1">·</span>
                                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                                    <span class="subheading">45</span>
                                </v-layout>
                            </v-layout>
                        </v-list-tile>

                        <v-divider light></v-divider>

                        <v-layout>
                            <v-flex xs4 offset-xs1>
                                <v-avatar>
                                    <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                    >
                                </v-avatar>
                            </v-flex>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="headline">Supermodel</div>
                                        <div>Foster the People</div>
                                        <div>(2014)</div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                        <v-divider light></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>favorite</v-icon>
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
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "MencoesView",
        data: () => ({
            cards: [
                { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            ]
        })
    }
</script>

<style scoped>

</style>
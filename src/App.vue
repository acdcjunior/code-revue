<template>
    <v-app>
        <v-layout justify-center>
            <v-flex xs12>
                <v-toolbar
                        color="blue"
                        tabs
                        dense
                >


                    <v-tabs
                            color="blue"
                            slider-color="yellow"
                            grow
                            v-model="selectedtab"
                    >
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab href="#tab-1">
                            <v-icon medium>outlined_flag</v-icon> &nbsp;
                            <v-badge color="red">Menções<span slot="badge">2</span></v-badge>
                        </v-tab>


                        <v-tab href="#tab-2">
                            <v-icon medium>assignment_turned_in</v-icon> &nbsp;
                            <v-badge color="red">Commits a Revisar<span slot="badge">4</span></v-badge>
                        </v-tab>


                        <v-tab href="#tab-3">
                            <v-icon medium>group</v-icon> &nbsp;
                            <v-badge color="blue darken-1">Outros Comentários<span slot="badge">7</span></v-badge>
                        </v-tab>


                        <v-tab href="#tab-4">
                            <v-icon medium>timeline</v-icon> &nbsp;
                            Commits
                        </v-tab>
                    </v-tabs>

                    <v-icon>remove</v-icon>

                    <v-toolbar-title class="headline text-uppercase" style="width: 180px">
                        <span>CODE</span>
                        <span class="font-weight-light">REVUE</span>
                    </v-toolbar-title>
                    <v-btn icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-content>
                    <v-tabs-items v-model="selectedtab">
                        <v-tab-item value="tab-1">
                            <MencoesView></MencoesView>
                        </v-tab-item>
                        <v-tab-item value="tab-2">
                            <CommitsARevisarView></CommitsARevisarView>
                        </v-tab-item>
                        <v-tab-item value="tab-3">
                            <OutrosComentariosView></OutrosComentariosView>
                        </v-tab-item>
                        <v-tab-item value="tab-4">
                            <CommitsView></CommitsView>
                        </v-tab-item>
                    </v-tabs-items>
                </v-content>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    import MencoesView from "./views/MencoesView";
    import CommitsARevisarView from "./views/CommitsARevisarView";
    import OutrosComentariosView from "./views/OutrosComentariosView";
    import CommitsView from "./views/CommitsView";

    export default {
        components: {CommitsARevisarView, OutrosComentariosView, CommitsView, MencoesView},
        data: () => ({
            selectedtab: 'tab-2'
        })
    };
</script>
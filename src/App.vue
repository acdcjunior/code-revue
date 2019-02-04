<template>
    <v-app>
        <v-layout justify-center>
            <v-flex xs12>
                <v-toolbar color="blue" tabs dense>
                    <v-tabs color="blue" slider-color="yellow" grow>
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-menu
                                bottom
                                class="v-tabs__div"
                                left
                        >
                            <a slot="activator" class="v-tabs__item">
                                <v-icon>menu</v-icon>
                                <span class="headline text-uppercase" style="font-size: xx-small">
                                    (<span>CODE</span>
                                    <span class="font-weight-light">REVUE</span>)
                                </span>
                            </a>

                            <v-list class="grey lighten-3">
                                <v-list-tile> a </v-list-tile>
                                <v-list-tile> bb </v-list-tile>
                            </v-list>
                        </v-menu>

                        <v-tab to="/">
                            <v-icon medium>outlined_flag</v-icon> &nbsp;
                            <v-badge color="red">Menções<span slot="badge">2</span></v-badge>
                        </v-tab>

                        <v-tab to="/commitsarevisar">
                            <v-icon medium>assignment_turned_in</v-icon> &nbsp;
                            <v-badge color="red">Commits a Revisar<span slot="badge">4</span></v-badge>
                        </v-tab>

                        <v-tab to="/outroscomentarios">
                            <v-icon medium>group</v-icon> &nbsp;
                            <v-badge color="blue darken-1">Outros Comentários<span slot="badge">7</span></v-badge>
                        </v-tab>

                        <v-tab to="/commits">
                            <v-icon medium>timeline</v-icon> &nbsp;
                            Commits
                        </v-tab>
                    </v-tabs>


                </v-toolbar>

                <v-content>
                    <router-view/>
                    <v-footer class="pa-3">
                      <v-spacer></v-spacer>
                      <div>Logged in as @{{ userLoggedIn }}.</div>
                    </v-footer>
                </v-content>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>

  import {mapGetters} from "vuex";
  import {GET_USER_LOGGED_IN, USERS} from "./store/modules/users";

  export default {
        computed: {
            ...mapGetters(USERS, {userLoggedIn: GET_USER_LOGGED_IN}),
        },
    };
</script>
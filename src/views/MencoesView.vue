<template>
    <v-card>
        <v-container
                fluid
                grid-list-md
        >
            <ComentarioGrande :comentario="messages[0]"></ComentarioGrande>

            <ComentarioGrande :comentario="messages[1]"></ComentarioGrande>

        </v-container>
    </v-card>
</template>

<script>
    import ComentarioGrande from "../components/ComentarioGrande";

    export default {
        name: "MencoesView",
        components: {ComentarioGrande},
        data: () => ({
            cards: [
                { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            ],
            messages: [{
                avatar: 'https://avatars1.githubusercontent.com/u/5091082?s=88&v=4',
                name: '@antonio',
                date: 'Há 3 horas',
                project: 'sagas2',
                branch: 'master',
                sha: '7dff54dd',
                texto: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            },{
                avatar: 'https://avatars2.githubusercontent.com/u/12797901?s=88&v=4',
                name: '@afonso',
                date: 'Há 4 horas',
                project: 'sagas2',
                branch: 'master',
                sha: '0gvfa4yh',
                texto: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
            }],
        })
    }
</script>

<style scoped>

</style>
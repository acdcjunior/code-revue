<template>
    <div>
        Commits
        <hr>
        <Commit></Commit>
    </div>
</template>

<script>
    import Commit from "../components/Commit";
    export default {
        name: "CommitsView",
        components: {Commit}
    }
</script>

<style scoped>

</style>
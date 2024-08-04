<script>
import MainMenu from "./components/MainMenu.vue";
import NewMeeting from "./components/NewMeeting.vue";
export default {
    components: { MainMenu, NewMeeting },
}
</script>

<template>
    <MainMenu></MainMenu>
    <div class="justify-center flex bg-gray-200 items-center h-screen">
        <NewMeeting></NewMeeting>
    </div>
</template>

<style>
</style>

<template>
    <div class="container">
        <info-card></info-card>
        <toast-info v-if="haveNew"></toast-info>
        <my-album></my-album>
    </div>
</template>
<script>
import infoCard from '@/components/info-card'
import toastInfo from '@/components/toast-info'
import myAlbum from '@/components/my-album'
export default {
    data() {
        return {
            haveNew: true   
        }
    },
    components: {
        infoCard,
        toastInfo,
        myAlbum
    }
}
</script>
<style>

</style>

<style lang="scss" scoped>

</style>

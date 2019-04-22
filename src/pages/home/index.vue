<template>
    <div class="container">
        <info-card></info-card>
        <myApplication v-if="isManager"></myApplication>
        <toast-info v-if="isVisitor && haveNew"></toast-info>
        <my-album v-if="isVisitor"></my-album>
        <!-- <visitor-home v-else></visitor-home> -->
    </div>
</template>
<script>
import infoCard from '@/components/info-card'
import toastInfo from '@/components/toast-info'
import myAlbum from '@/components/my-album'
import visitorHome from '@/components/visitor-home'
import myApplication from '@/components/my-application'
export default {
    data() {
        return {
            haveNew: true,
            isVisitor: true,
            isManager: true,
        }
    },
    components: {
        infoCard,
        toastInfo,
        myAlbum,
        visitorHome,
        myApplication
    }
}
</script>
<style>

</style>

<style lang="scss" scoped>
.container{
    background: url('http://132.232.37.121/mpvue/static/background.png');
    background-size: 100vw 100vh;
    height: 100vh;

}
</style>

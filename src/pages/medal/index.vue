<template>
    <div class="container">
        <medal-list></medal-list>
        <medal-list></medal-list>
    </div>
</template>
<script>
import medalList from '@/components/medal-list'
export default {
    data() {
        return {

        }
    },
    components: {
        medalList
    }
}
</script>
<style lang="scss" scoped>
.container{
    margin-top: -30rpx;
}
</style>

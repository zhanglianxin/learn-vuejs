<template>
    <!-- <p>Counter is: {{ counter }}</p> -->
    <p>Counter is: {{ doubleCounter }}</p>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            /*counter() {
                return this.$store.getters.doubleCounter;
            },*/
            ...mapGetters([
                'doubleCounter',
            ]),
        },
    };
</script>

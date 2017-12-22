<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" v-bind:key="index" v-on:click.native="deleteQuote(index)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        components: {
            'app-quote': Quote,
        },

        props: [
            'quotes',
        ],

        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            },
        },
    };
</script>

<style>
</style>

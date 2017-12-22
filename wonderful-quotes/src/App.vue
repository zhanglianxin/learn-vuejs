<template>
    <div class="container">
        <app-header v-bind:quoteCount="quotes.length" v-bind:maxQuotes="maxQuotes"></app-header>
        <app-newquote v-on:quoteAdded="newQuote"></app-newquote>
        <app-quotegrid v-bind:quotes="quotes" v-on:quoteDeleted="deleteQuote"></app-quotegrid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        components: {
            'app-quotegrid': QuoteGrid,
            'app-newquote': NewQuote,
            'app-header': Header,
        },

        data() {
            return {
                quotes: [
                    'Life is short, away from noisy!',
                ],
                maxQuotes: 10,
            };
        },

        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete Quote first!');
                }
                this.quotes.push(quote);
            },

            deleteQuote(index) {
                this.quotes.splice(index, 1);
            },
        },
    };
</script>

<style>
</style>

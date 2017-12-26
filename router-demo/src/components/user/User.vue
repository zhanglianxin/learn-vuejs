<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button v-on:click="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
    export default {
        props: [
            'id',
        ],

        methods: {
            navigateToHome() {
                this.$router.push('/');
            },
        },
    };
</script>

<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button v-on:click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../main.js';

    export default {
        data() {
            return {
                userAge: 27,
            };
        },

        methods: {
            editAge() {
                this.userAge = 30;
                eventBus.$emit('ageWasEdited', this.userAge);
            },
        },
    };
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

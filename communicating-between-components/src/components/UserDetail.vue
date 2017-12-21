<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button v-on:click="resetName">Reset Name</button>
        <button v-on:click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import {eventBus} from '../main.js';

    export default {
        props: {
            myName: String,
            resetFn: Function,
        },

        data() {
            return {
                userAge: 27,
            };
        },

        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },

            resetName() {
                /*
                 * Avoid mutating a prop directly since the value will be overwritten
                 * whenever the parent component re-renders. Instead, use a data or
                 * computed property based on the prop's value.
                 */
                // this.myName = 'Max'; // X
                // this.$emit('nameWasReset', this.myName);
                let myName = 'Max';
                this.$emit('nameWasReset', myName);
            },
        },

        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        },
    };
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

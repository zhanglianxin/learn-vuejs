<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'am an awesome User!</p>
        <button v-on:click="changeName">Change My Name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-bind:myName="name"
                    v-on:nameWasReset="name = $event" v-bind:resetFn="resetName">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: 'Max',
            };
        },

        methods: {
            changeName() {
                this.name = 'Anna';
            },

            resetName() {
                this.name = 'Max';
            },
        },

        components: {
            'app-user-detail': UserDetail,
            'app-user-edit': UserEdit,
        },
    };
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>

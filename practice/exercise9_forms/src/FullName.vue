<template>
    <div>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-bind:value="firstName"
                v-on:change="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-bind:value="lastName"
                v-on:change="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'value',
        ],

        methods: {
            nameChanged(isFirst, event) {
                let name = '';

                if (isFirst) {
                    name = event.target.value + ' ' + this.lastName;
                } else {
                    name = this.firstName + ' ' + event.target.value;
                }

                // this.value = name;
                // this.$emit('input', this.value);
                this.$emit('input', name);
            },
        },

        computed: {
            firstName() {
                return this.value.split(' ')[0] || '';
            },

            lastName() {
                // Avoid undefined
                return this.value.split(' ')[1] || '';
            },
        },
    };
</script>

<style>
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" v-on:click="submit">Submit</button>
                <hr>
                <input class="form-control" type="text" v-model="node"></input>
                <br><br>
                <button class="btn btn-primary" v-on:click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(user, index) in users" v-bind:key="index">
                        {{ user.username }} - {{ user.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: '',
                },

                users: [],

                resource: {},

                node: 'data',
            };
        },

        methods: {
            // Send a POST request
            submit() {
                // this.$http.post('data.json', this.user).then((response) => {
                //     console.log(response);
                // }, (error) => {
                //     console.log(error);
                // });

                // this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            },

            // Send a GET request
            fetchData() {
                // this.$http.get('data.json').then((response) => {
                //     return response.json();
                // }).then((data) => {
                //     console.log('Result data:', data);

                //     const resultArray = [];
                //     for (let key in data) {
                //         resultArray.push(data[key]);
                //     }
                //     this.users = resultArray;
                // });

                this.resource.getData({node: this.node}).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log('Result data:', data);

                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                });
            },
        },

        created() {
            const customActions = {
                saveAlt: {
                    method: 'POST',
                    url: 'alternative.json',
                },
                getData: {
                    method: 'GET',
                },
            };
            // https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
            this.resource = this.$resource('{node}.json', {}, customActions);
        },
    };
</script>

<style>
</style>

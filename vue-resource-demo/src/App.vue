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
            };
        },

        methods: {
            // Send a POST request
            submit() {
                let url = 'https://vuejs-http-c5c84.firebaseio.com/data.json';

                this.$http.post(url, this.user).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
            },

            // Send a GET request
            fetchData() {
                let url = 'https://vuejs-http-c5c84.firebaseio.com/data.json';

                this.$http.get(url).then((response) => {
                    return response.json();
                }).then((data) => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                });
            },
        },
    };
</script>

<style>
</style>

<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!-- Using query parameters -->
        <router-link tag="button" class="btn btn-primary"
            v-bind:to="link">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id,
                    },
                    query: {
                        locale: 'en',
                        q: 100,
                    },
                    // Passing the hash fragment
                    hash: '#data',
                },
            };
        },

        // In-component guards
        beforeRouteEnter(to, from, next) {
            if (true) {
                next();
            } else {
                next(false);
            }
        },
    };
</script>

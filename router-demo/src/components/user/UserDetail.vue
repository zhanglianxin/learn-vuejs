<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!-- Using query parameters -->
        <router-link tag="button" class="btn btn-primary"
            v-bind:to="{
                name: 'userEdit',
                params: { id: $route.params.id },
                query: { locale: 'en', q: 100 }, }">Edit User</router-link>
    </div>
</template>

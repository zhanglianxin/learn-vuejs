<template>
    <div>
        <slot>{{ loaded }}</slot>
    </div>
</template>

<script>
    export default {
        props: [
            'loaded',
        ],
    };
</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>

<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <!-- fallback content -->
            <!-- Fallback content is compiled in the child scope and will only
                be displayed if the hosting element is empty and has no content
                to be inserted. -->
            <span><slot name="subtitle">The Subtitle</slot></span>
        </div>
        <hr>
        <div>
            <slot name="content"></slot>
        </div>
        <div>
            <!-- unnamed slot == default slot -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    };
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    /* The styling is set up on the child component */
    h2 {
        color: red;
    }

    .title {
        font-style: italic;
    }

    .title > span {
        color: #ccc;
    }
</style>

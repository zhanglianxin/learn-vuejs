<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button v-on:click="selectedComponent = 'app-quote'">Quote</button>
                <button v-on:click="selectedComponent = 'app-author'">Author</button>
                <button v-on:click="selectedComponent = 'app-new'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <!-- <app-quote> -->
                    <!-- 父组件模板的内容在父组件作用域内编译，
                        子组件模板的内容在子组件作用域内编译。 -->
                    <!-- <h2 slot="title">{{ quoteTitle }}</h2> -->
                    <!-- will be treat as the default content of slots,
                        unnamed slots will use it -->
                    <!-- <p>Without a <code>slot</code> attribute</p> -->
                    <!-- <p slot="content">A Wonderful Quote!</p> -->
                <!-- </app-quote> -->
                <keep-alive>
                    <component v-bind:is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote1.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'app-quote',
            };
        },

        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New,
        },
    };
</script>

<style>
</style>

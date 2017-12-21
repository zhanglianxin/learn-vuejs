<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <!-- 父组件模板的内容在父组件作用域内编译，
                        子组件模板的内容在子组件作用域内编译。 -->
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <!-- will be treat as the default content of slots,
                        unnamed slots will use it -->
                    <p>Without a <code>slot</code> attribute</p>
                    <p slot="content">A Wonderful Quote!</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

    export default {
        data() {
            return {
                quoteTitle: 'The Quote',
            };
        },

        components: {
            'app-quote': Quote,
        },
    };
</script>

<style>
</style>

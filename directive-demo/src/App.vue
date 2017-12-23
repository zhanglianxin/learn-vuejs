<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!-- global -->
                <p v-highlight="'hotpink'">This is a demo of custom directives.</p>
                <p v-highlight:background="'hotpink'">This is a demo of custom directives.</p>
                <p v-highlight:background.delayed="'hotpink'">This is a demo of custom directives.</p>
                <!-- local -->
                <p v-local-highlight="'hotpink'">This is another demo of custom directives.</p>
                <p v-local-highlight:background="'hotpink'">This is another demo of custom directives.</p>
                <p v-local-highlight:background.delayed="'hotpink'">This is another demo of custom directives.</p>
                <p v-local-highlight:background.delayed.blink="'hotpink'">This is another demo of custom directives.</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">This is another demo of custom directives.</p>
                <p v-local-highlight:background.blink="'hotpink'">This is another demo of custom directives.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // Register local custom directives
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    let delay = 0;

                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }

                    if (binding.modifiers['blink']) {
                        if (typeof binding.value === 'string') {
                            let mainColor = binding.value,
                                secondColor = 'blue',
                                currentColor = mainColor;

                            setTimeout(() => {
                                setInterval(() => {
                                    currentColor === secondColor ?
                                        currentColor = mainColor :
                                        currentColor = secondColor;

                                    if (binding.arg === 'background') {
                                        el.style.backgroundColor = currentColor;
                                    } else {
                                        el.style.color = currentColor;
                                    }
                                }, 1000);
                            }, delay);
                        } else if (typeof binding.value === 'object') {
                            let mainColor = binding.value.mainColor,
                                secondColor = binding.value.secondColor,
                                currentColor = mainColor;

                            setTimeout(() => {
                                setInterval(() => {
                                    currentColor === secondColor ?
                                        currentColor = mainColor :
                                        currentColor = secondColor;

                                    if (binding.arg === 'background') {
                                        el.style.backgroundColor = currentColor;
                                    } else {
                                        el.style.color = currentColor;
                                    }
                                }, binding.value.delay);
                            }, delay);
                        }
                    } else {
                        if (typeof binding.value === 'string') {
                            setTimeout(() => {
                            if (binding.arg === 'background') {
                                el.style.backgroundColor = binding.value;
                            } else {
                                el.style.color = binding.value;
                            }
                        }, delay);
                        } else if (typeof binding.value === 'object') {
                            setTimeout(() => {
                                if (binding.arg === 'background') {
                                    el.style.backgroundColor = binding.value.mainColor;
                                } else {
                                    el.style.color = binding.value.mainColor;
                                }
                            }, delay);
                        }
                    }
                },
            },
        },
    };
</script>

<style>
</style>

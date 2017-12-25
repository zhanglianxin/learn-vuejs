import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

// Configuring vue-resource globally
Vue.http.options.root = 'https://vuejs-http-c5c84.firebaseio.com/';

// Intercepting requests
Vue.http.interceptors.push((request, next) => {
    console.log(request);

    // Modify request method
    if (request.method == 'POST') {
        request.method = 'PUT';
    }

    // Intercepting responses
    next((response) => {
        console.log('Raw response.body:', response.body);

        // Modify response
        response.json = () => {

            return {
                messages: response.body,
            };
        };
    });
});

new Vue({
  el: '#app',
  render: h => h(App)
});

export const lengthAware = {
    computed: {
        lengthAware() {
            return this.secondText + ' (' + this.secondText.length + ')';
        },
    },

    created() {
        console.log('Created');
    },
};

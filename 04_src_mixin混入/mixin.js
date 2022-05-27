//分别暴露

export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    mounted() {
        console.log('你好呀');
        // console.log(this.x, this.y);
    },
};
export const mixin2 = {
    data() {
        return {
            x: 100, y: 200
        }
    },

};
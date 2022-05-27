/*
const obj = {
    install() {
        console.log('install')
    }
}
export default obj;*/

export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 3);
        });
        //全局自定义指令
        Vue.directive('f-bind', {
            bind(element, binding) {
                element.value = binding.value;
            },
            inserted(element, binding) {
                element.focus();
            },
            update(element, binding) {
                element.value = binding.value;
            }
        });
        //自定义指令
        Vue.directive('big', function (element, binding) {
            element.value = binding.value*10;
        });
        //定义混合
        Vue.mixin({
            data() {
                return {
                    x: 1, y: 2
                }
            }
        });
        //给Vue原型上添加方法 (vm和vc就能用了)
        Vue.prototype.hello = () => {
            alert('hello');
            //我是原型链上的hello方法
        }
    }
};

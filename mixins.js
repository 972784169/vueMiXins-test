/* vue中minxis小演练 */
//mixins的特点
//1 方法和参数在各组件中不共享
//2 值为对象的选项，如methods,components等，选项会被合并，键冲突的组件会覆盖混入对象的
//3.值为函数的选项，如created,mounted等，就会被合并调用，混合对象里的钩子函数在组件里的钩子函数之前调用
export const myMiXins={
    data(){
      return{
        num:1
      }
    },
    beforeCreate(){},
    created(){
      console.log('hello from mixins')
    },
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
      hello(){
        consoel.log("hello from mixins");
      },
      funcOne(){
          console.log("funcOne from mixins");
      },
      funcTwo(){
        console.log("funcTwo from mixins");
      }
    }

}
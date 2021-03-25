<template>
    <div class="test2">
        test2里的num:{{this.num}}            <!-- 显示 test2里的num:1-->
    </div>
</template>


<script>
/* test2中不进行操作; */
import {myMiXins} from './mixins'
export default {
    mixins:[myMiXins],
    created(){
        console.log("hello from self")                    //控制台输出------------->hello from mixins
                                                          //                       hello from self           
    }
}

</script>

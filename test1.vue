<template>
  <div class="test1">
    test1里的num:{{this.num}}
    <!-- 显示 test1里的num:2-->
  </div>
</template>

<script>
/* test1中将num++; */
import { myMiXins } from "./mixins";
export default {
  mixins: [myMiXins],
  created() {
    this.num++;
    this.funcOne();                    //----------->funcOne from test1
    this.hello();                      //----------->hello from mixins
    this.funcTwo();                    //----------->funcTwo from test1
  },
  methods: {
    funcOne() {
      console.log("funcOne from test1");
    },
    funcTwo() {
      console.log("funcTwo from test1");
    }
  }
};
</script>
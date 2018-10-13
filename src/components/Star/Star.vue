<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" :class="classType" v-for="(classType,index) in starType" :key="index"></span>

  </div>
</template>

<script>
  const onClass = 'on';
  const halfClass = 'half';
  const offClass = 'off';

  export default {

    props:{
      score:Number,
      size:Number
    },
    data(){
      return{

      }
    },
    computed:{

      //算出星星类型
        starType(){
          const arr = [];
          const {score} = this;

          //全星的个数 向arr中添加n个onClass
          const allNum = Math.floor(score);
          for (let i = 0; i < allNum; i++) {
            arr.push(onClass)
          }
          //一个或无半星
          const halfNum = score-allNum
          if(score*10-allNum*10 >= 5){
            arr.push(halfClass)
          }

          //灰星
        //  const offNum = 5-allNum-halfNum
          while (arr.length<5){
            arr.push(offClass)
          }
        return arr
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>


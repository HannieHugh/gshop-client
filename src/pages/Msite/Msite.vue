<template>
  <!--首页外卖-->
  <div class="on">
    <section class="msite">
      <!--首页头部-->
      <TopHeader :title="address.name">
         <span class="header_search" slot="search">
            <i class="iconfont icon-sousuo"></i>
          </span>
        <span class="header_login" slot="login">
            <span class="header_login_text">登录|注册</span>
          </span>
      </TopHeader>

      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys,index) in categorysArray" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                <div class="food_container">
                  <img :src="baseImgUrl+category.image_url">
                </div>
                <span>甜品饮品</span>
              </a>

            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>

      <shop-list></shop-list>
    </section>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import TopHeader from '../../components/TopHeader/TopHeader.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        baseImgUrl:'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')
    },
    components:{
      TopHeader,
      ShopList
    },
    computed:{
      ...mapState(['address','categorys']),
      //利用categorys（一维数组）生成categorysArray二维数组，小数组中元素个数组多为八个
      categorysArray(){
        const arr = [];
        let smallArr = [];

        //遍历categorys，将元素存入小数组中
        this.categorys.forEach(c=>{
          //将小数组存入大数组中
          if(smallArr.length===0){
            arr.push(smallArr);
          }
          smallArr.push(c);

          if(smallArr.length === 8){
            smallArr=[]
          }
        });


        return arr;
      }
    },
    watch:{
      // 注意: 状态数据变化后, 更新对应的界面是异步进行的  注意状态数据变化后，更新对应的界面是异步进行的
      categorys(value){  //categorys 数据状态变化了之后立即执行
        //必须在状态数据更新之后执行
        this.$nextTick(()=>{
          //回调函数在界面更新之后立即执行
          new Swiper('.swiper-container',{
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

          })
        })

      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header //头部公共css
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .iconfont
        font-size 22px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 30%
      color #fff
      font-size 22px
      text-align center
  .msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>


<template>
  <div class="slider">
      <!-- Swiper 注意不要更改里面的结构和类名 -->
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                  <img src="../../../assets/imgs/3.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <img src="../../../assets/imgs/4.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <img src="../../../assets/imgs/5.jpg" alt="">
              </div>

          </div>

           <div class="swiper-button-prev"></div>
               <div class="swiper-button-next"></div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
      </div>
  </div>
</template>

<script>
 export default {
     data(){
       return {
       }
     },
     mounted() {
       new Swiper ('.swiper-container', {
         loop: true,
         // 如果需要分页器
         pagination: '.swiper-pagination',
         // 如果需要前进后退按钮
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
         // 如果需要滚动条
         // scrollbar: '.swiper-scrollbar',
         //如果需要自动切换海报
         // autoplay: {
         //   delay: 1000,//时间 毫秒
         //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
         // },
       })
     }
   }
</script>

<style>
  .swiper-container {
      width: 100%;
      height: 100%;
  }

  .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #ffe1cf;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
  }

  .swiper-pagination-bullet {
      background: #f6ffd3!important;
  }

</style>

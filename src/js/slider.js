// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
// import Swiper modules
import { Pagination } from 'swiper/modules'

const indicatorDots = document.querySelectorAll('.slider-indicator__dot')

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  direction: 'horizontal',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  }
})

// Initialize Swiper for brands
const brandsSwiper = new Swiper('.brand-block__swiper', {
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// Initialize Swiper for device types
const deviceTypesSwiper = new Swiper('.device-types__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// Initialize Swiper for prices
const pricesSwiper = new Swiper('.prices__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

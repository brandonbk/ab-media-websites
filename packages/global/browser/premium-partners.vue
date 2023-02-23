<template>
  <div
    class="ad-container ad-container--with-label ad-container--with-label-partners"
    role="region"
    aria-label="Premium Partners"
  >
    <div class="partners-label">
      Premium Partners
    </div>
    <div class="partners">
      <div style="min-height: 30px;">
        <vue-slick-carousel v-bind="SlickCarouselSettings">
          <a
            v-for="(partner) in partnersToDisplay"
            :key="partner.name"
            :href="partner.linkUrl"
            :title="partner.shortName"
            target="_blank"
            rel="nofollow sponsored"
          >
            <img
              class="premium-partners__logo lazyload"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              srcset=""
              :data-src="getImgSrc(partner.primaryImage.src)"
              :data-srcset="[getImgSrcSet(partner.primaryImage.src)]"
              :alt="partner.shortName"
            >
          </a>
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: { VueSlickCarousel },

  props: {
    partners: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    partnersToDisplay: [],
    SlickCarouselSettings: {
      autoplay: true,
      dots: false,
      arrows: false,
      focusOnSelect: false,
      infinite: true,
      variableWidth: true,
      autoplaySpeed: 6000,
      speed: 2500,
      slidesToShow: 9,
      slidesToScroll: 9,
      touchThreshold: 5,
      cssEase: 'ease',
      useTransform: false,
    },
  }),

  created() {
    const { partners } = this;
    if (partners.length < 10) {
      this.SlickCarouselSettings.slidesToShow = partners.length;
      this.SlickCarouselSettings.slidesToScroll = partners.length;
      this.SlickCarouselSettings.autoplay = false;
      this.partnersToDisplay = partners;
    } else {
      this.partnersToDisplay = partners;
    }
  },

  methods: {
    getImgSrc(imagePath) {
      return `${imagePath}?auto=format,compress&q=70&bg=fff&fill=solid&fit=fillmax&h=30`;
    },
    getImgSrcSet(imagePath) {
      return `${imagePath}?auto=format,compress&q=70&bg=fff&fill=solid&fit=fillmax&h=30&dpr=2 2x`;
    },
    shuffleArray(a) {
      const shuffled = [...a];
      for (let i = shuffled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },
  },
};
</script>

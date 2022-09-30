<template>
  <div class="billboard-cookie" style="display: none;" />
</template>
<script>
import cookies from 'js-cookie';

export default {
  props: {
    cookieName: {
      type: String,
      required: true,
    },
    cookieValue: {
      type: String,
      default: '0',
    },
    expires: {
      type: Number,
      default: 1,
    },
  },
  created() {
    cookies.set(this.cookieName, this.cookieValue, { expires: this.expires });
  },
};
</script>

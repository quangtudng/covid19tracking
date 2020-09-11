<template>
  <b-container fluid class="p-2 footer overflow-hidden">
    <b-row class="text-center">
      <b-col>
        <p class="my-1 text-white">
          {{ $t('footer.copyright') }}
        </p>
      </b-col>
      <b-col class="text-right">
        <a href="https://www.youtube.com/user/PewDiePie" target="_blank">
          <img src="~/assets/img/brand-logo/youtube.svg" class="brand-logo" />
        </a>
        <a href="https://twitter.com/pewdiepie?lang=en" target="_blank">
          <img src="~/assets/img/brand-logo/twitter.svg" class="brand-logo" />
        </a>
        <a href="https://www.instagram.com/pewdiepie/?hl=en" target="_blank">
          <img src="~/assets/img/brand-logo/instagram.svg" class="brand-logo" />
        </a>
        <a href="https://www.facebook.com/PewDiePie/" target="_blank">
          <img src="~/assets/img/brand-logo/facebook.svg" class="brand-logo" />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      brandList: ['Nokia', 'Apple', 'BPhone', 'Microsoft'],
      selectedLang: null,
      lang: [
        { value: 'en', text: 'English' },
        { value: 'vi', text: 'Tiếng Việt' }
      ]
    }
  },
  watch: {
    selectedLang() {
      this.$i18n.locale = this.selectedLang
      localStorage.setItem('locale', this.selectedLang)
    }
  },
  mounted() {
    // Language
    if (localStorage.getItem('locale') !== null) {
      this.selectedLang = localStorage.getItem('locale')
    } else {
      this.selectedLang = 'en'
      localStorage.setItem('locale', 'en')
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: $black;
}
.brand-logo {
  max-width: 30px;
  margin-right: 0.3rem;
}
a:hover {
  color: $gray-500;
}
</style>

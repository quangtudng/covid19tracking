<template>
  <b-container fluid>
    <b-row class="p-5">
      <b-col cols="12" class="mb-5">
        <div class="m-auto text-center w-40">
          <h2 class="content-title">
            {{ $t('homepage.ad-1') }}
          </h2>
          <p class="content-description">
            {{ $t('homepage.ad-2') }}
          </p>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="m-auto text-center w-80">
          <b-img fluid src="~/assets/img/homepage/background-1.jpeg"></b-img>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<style lang="scss" scoped>
.content-title {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.content-description {
  font-size: 1rem;
  letter-spacing: 1px;
}
</style>

<template>
  <b-container fluid>
    <b-row class="p-5 bg-gray-200">
      <b-col cols="12" lg="6">
        <div class="m-auto w-70 text-center text-lg-left">
          <h2 class="content-title">
            {{ $t('homepage.ad-3') }}
          </h2>
          <p class="content-description">
            {{ $t('homepage.ad-4') }}
          </p>
          <ul class="content-description">
            <li>{{ $t('homepage.ad-5.list-1') }}</li>
            <li>{{ $t('homepage.ad-5.list-2') }}</li>
            <li>{{ $t('homepage.ad-5.list-3') }}</li>
            <li>{{ $t('homepage.ad-5.list-4') }}</li>
            <li>{{ $t('homepage.ad-5.list-5') }}</li>
          </ul>
        </div>
      </b-col>
      <b-col cols="12" lg="6">
        <b-container fluid>
          <b-row class="mt-2">
            <b-col cols="6">
              <div class="card-container">
                <p class="card-number">
                  {{ data.TotalConfirmed | numeral }}
                </p>
                <p class="card-text">
                  Ca nhiễm
                  <fa :icon="['fas', 'ambulance']" class="text-danger" />
                </p>
              </div>
            </b-col>
            <b-col cols="6">
              <div class="card-container">
                <p class="card-number">
                  {{ data.NewConfirmed | numeral }}
                  <fa
                    v-if="data.NewConfirmed > 0"
                    :icon="['fas', 'long-arrow-alt-up']"
                    class="text-danger"
                  />
                  <fa
                    v-else
                    :icon="['fas', 'long-arrow-alt-down']"
                    class="text-success"
                  />
                </p>
                <p class="card-text">
                  Ca nhiễm mới
                  <fa :icon="['fas', 'ambulance']" class="text-danger" />
                </p>
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col cols="6">
              <div class="card-container">
                <p class="card-number">
                  {{ data.TotalRecovered | numeral }}
                </p>
                <p class="card-text">
                  Ca khỏi bệnh
                  <fa :icon="['fas', 'laugh-beam']" class="text-success" />
                </p>
              </div>
            </b-col>
            <b-col cols="6">
              <div class="card-container">
                <p class="card-number">
                  {{ data.NewRecovered | numeral }}
                  <fa
                    v-if="data.NewConfirmed > 0"
                    :icon="['fas', 'long-arrow-alt-up']"
                    class="text-danger"
                  />
                  <fa
                    v-else
                    :icon="['fas', 'long-arrow-alt-down']"
                    class="text-success"
                  />
                </p>
                <p class="card-text">
                  Ca khỏi bệnh mới
                  <fa :icon="['fas', 'laugh-beam']" class="text-success" />
                </p>
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col cols="6">
              <div class="card-container">
                <p class="card-number">
                  {{ data.TotalDeaths | numeral }}
                </p>
                <p class="card-text">
                  Ca tử vong
                  <fa :icon="['fas', 'skull']" class="text-secondary" />
                </p>
              </div>
            </b-col>
            <b-col cols="6">
              <div class="card-container">
                <p class="card-number">
                  {{ data.NewDeaths | numeral }}
                  <fa
                    v-if="data.NewConfirmed > 0"
                    :icon="['fas', 'long-arrow-alt-up']"
                    class="text-danger"
                  />
                  <fa
                    v-else
                    :icon="['fas', 'long-arrow-alt-down']"
                    class="text-success"
                  />
                </p>
                <p class="card-text">
                  Ca tử vong mới
                  <fa :icon="['fas', 'skull']" class="text-secondary" />
                </p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          NewConfirmed: 0,
          TotalConfirmed: 0,
          NewDeaths: 0,
          TotalDeaths: 0,
          NewRecovered: 0,
          TotalRecovered: 0
        }
      }
    }
  }
}
</script>
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
ul {
  list-style: none;
}

ul li:before {
  color: $blue;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  content: '✓';
}
.card-container {
  border: 1px solid $black;
  padding: 0.8rem;
  text-align: right;
}
.card-number {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.card-text {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
</style>

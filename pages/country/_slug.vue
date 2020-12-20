<template>
  <b-container style="min-height: calc(100vh - 56px - 47px);" class="mt-5">
    <b-row>
      <b-col cols="8">
        <LineChart :chart-data="chartData" :options="lineChart.options" />
      </b-col>
      <b-col cols="4">
        <b-card tag="article" class="mb-2">
          <b-card-title>
            Tổng quan
          </b-card-title>
          <DoughnutChart
            style="max-height: 300px;"
            :chart-data="doughnutChartData"
            :options="deathChart.pieOptions"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col cols="4">
        <b-card
          overlay
          img-src="https://media.gettyimages.com/photos/portrait-of-man-wearing-protective-workwear-against-black-background-picture-id1217604207?s=612x612"
          img-alt="Card Image"
          title="Số ca nhiễm"
          text-variant="white"
          tag="article"
          style="max-width: 20rem; height: 120px; overflow: hidden;"
          class="mb-2"
        >
          <b-card-text>
            {{
              data.confirmed.length > 0
                ? data.confirmed[data.confirmed.length - 1]
                : 0 | numeral
            }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card
          overlay
          img-src="https://thumbs.dreamstime.com/b/daughter-holding-hand-mother-elderly-alzheimer-parkinson-patient-dark-background-172987653.jpg"
          img-alt="Card Image"
          title="Số ca khỏi bệnh"
          text-variant="white"
          tag="article"
          style="max-width: 20rem; height: 120px; overflow: hidden;"
          class="mb-2"
        >
          <b-card-text>
            {{
              data.recovered.length > 0
                ? data.recovered[data.recovered.length - 1]
                : 0 | numeral
            }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card
          overlay
          img-src="https://image.shutterstock.com/image-illustration/hospital-dark-corridor-wheelchair-against-260nw-208288498.jpg"
          img-alt="Card Image"
          title="Số ca tử vong"
          text-variant="white"
          tag="article"
          style="max-width: 20rem; height: 120px; overflow: hidden;"
          class="mb-2"
        >
          <b-card-text>
            {{
              data.death.length > 0
                ? data.death[data.death.length - 1]
                : 0 | numeral
            }}
          </b-card-text>
          <b-card-text> </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="12">
        <b-table
          id="user-table"
          responsive
          bordered
          show-empty
          hover
          per-page="10"
          :items="dataTable"
          :fields="fields"
        >
          <template v-slot:cell(Country)="dat">
            <img
              :src="`https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${dat.item.CountryCode.toLowerCase()}.svg`"
              :alt="dat.value"
              width="20px"
            />
            <span class="h-100 m-0 w-100" style="cursor: pointer;">
              {{ dat.value }}
            </span>
          </template>
          <template v-slot:cell(Confirmed)="dat">
            <span class="h-100 m-0 w-100 text-primary">
              {{ dat.value | numeral }}
            </span>
          </template>
          <template v-slot:cell(Deaths)="dat">
            <span class="h-100 m-0 w-100 text-danger">
              {{ dat.value | numeral }}
            </span>
          </template>
          <template v-slot:cell(Recovered)="dat">
            <span class="h-100 m-0 w-100 text-success">
              {{ dat.value | numeral }}
            </span>
          </template>
          <template v-slot:cell(Date)="dat">
            <span class="h-100 m-0 w-100 text-secondary">
              {{ $moment(dat.value).format('L, LTS') }}
            </span>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LineChart from '../../components/common/Plugins/LineChart'
import DoughnutChart from '../../components/common/Plugins/DoughnutChart'
export default {
  components: {
    LineChart,
    DoughnutChart
  },
  async fetch() {
    this.loading = true
    const payload = await this.$axios.get(
      `https://api.covid19api.com/dayone/country/${this.$route.params.slug}`
    )
    this.dataTable = payload.data.slice().reverse()
    for (let i = payload.data.length - 1; i > 0; i -= 30) {
      this.lineChart.labels.unshift(
        this.$moment(payload.data[i].Date).format('L')
      )
      this.data.confirmed.unshift(payload.data[i].Confirmed)
      this.data.death.unshift(payload.data[i].Deaths)
      this.data.recovered.unshift(payload.data[i].Recovered)
    }
    this.loaded = false
    this.fillData()
    this.loaded = true
  },
  data() {
    return {
      dataTable: [],
      data: {
        confirmed: [],
        death: [],
        recovered: []
      },
      lineChart: {
        labels: [],
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  reverse: false,
                  beginAtZero: true
                }
              }
            ]
          },
          responsive: true
        }
      },
      deathChart: {
        pieData: {
          death: [],
          recovered: []
        },
        pieOptions: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      },
      fields: [
        { key: 'Country', sortable: true },
        { key: 'Confirmed', sortable: true },
        { key: 'Deaths', sortable: true },
        { key: 'Recovered', sortable: true },
        { key: 'Date', sortable: true }
      ],
      loaded: false,
      chartData: null,
      doughnutChartData: null
    }
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: this.lineChart.labels,
        datasets: [
          {
            borderColor: 'blue',
            backgroundColor: 'blue',
            fill: false,
            data: this.data.confirmed,
            label: 'Confirmed Cases'
          },
          {
            borderColor: 'red',
            backgroundColor: 'red',
            fill: false,
            data: this.data.death,
            label: 'Death Cases'
          },
          {
            borderColor: 'green',
            backgroundColor: 'green',
            fill: false,
            data: this.data.recovered,
            label: 'Recovered Cases'
          }
        ]
      }
      this.doughnutChartData = {
        labels: ['In treatment', 'Death', 'Recovered'],
        datasets: [
          {
            borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)'
            ],
            backgroundColor: [
              'rgba(255, 206, 86, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)'
            ],
            data: [
              this.data.confirmed[this.data.confirmed.length - 1] -
                this.data.recovered[this.data.recovered.length - 1],
              this.data.death[this.data.death.length - 1],
              this.data.recovered[this.data.recovered.length - 1]
            ]
          }
        ]
      }
    },
    updateChart() {
      this.$nextTick(() => {
        this.loaded = false
        this.fillData()
        this.loaded = true
      })
    }
  },
  head() {
    return {
      title: 'Detail page',
      description: 'Detail page'
    }
  }
}
</script>

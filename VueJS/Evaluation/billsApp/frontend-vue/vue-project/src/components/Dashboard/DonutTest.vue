<!-- installation -> npm install chart.js vue-chartjs 
   docs : https://vue-chartjs.org/guide/
        https://www.chartjs.org/docs/latest/samples/other-charts/doughnut.html -->

<template>
  <div>
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Tooltip, ArcElement } from 'chart.js'
import { useBillStore } from '@/stores/bill.js'
import { mapState } from 'pinia'

ChartJS.register(Tooltip, ArcElement)
//le module tooltip affiche les infos au survol du donut
//repris du sample car utilise pour faire la forme arc

export default {
  components: {
    //composant vue-chartjs PRESQUE tout fini
    Doughnut
  },
  computed: {
    ...mapState(useBillStore, ['bills']),
    //utilisation des données du store
    chartData() {
      const nbBills = this.bills.length
      // filtre des bills du store pour compter combien sont payée (false par défaut et trie quand payé)
      const pBills = this.bills.filter((bill) => bill.statut === true).length
      //déduction du nombre de bills non payée
      const imBills = nbBills - pBills

      return {
        datasets: [
          {
            backgroundColor: ['#007bff', '#dc3545'],
            data: [pBills, imBills]
          }
        ]
      }
    },
    chartOptions() {
      return {
        responsive: true
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  margin: auto;
  height: 200px;
  width: 200px;
}
</style>

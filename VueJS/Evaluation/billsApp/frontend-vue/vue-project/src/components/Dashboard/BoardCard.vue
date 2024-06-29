<template>
  <div class="card">
    <div class="card-header">
      <h4>
        <span class="nb me-2">{{ nbBills }} </span>
        <span class="title">Factures en 2024</span>
      </h4>
    </div>
    <div class="card-body pt-0">
      <DonutTest />
      <div class="sommeBills d-flex justify-content-end mt-2">
        <span>{{ somBills }} €</span>
      </div>
    </div>
    <div class="card-footer">
      <h6>
        <span class="circle-paye me-2"></span>
        <span>Total Encaissée - </span>
        <span>{{ prPaye }} %</span>
      </h6>
      <h6 class="mt-2">
        <span class="circle-impaye me-2"></span>
        <span>Total Impayée - </span>
        <span>{{ prImpaye }} %</span>
      </h6>
    </div>
  </div>
</template>

<script>
import { useBillStore } from '@/stores/bill.js'
import { mapActions, mapState } from 'pinia'
import DonutTest from '@/components/Dashboard/DonutTest.vue'

export default {
  components: {
    DonutTest
  },
  data() {
    return {
      // nombre de factures initale à 0
      nbBills: 0
    }
  },
  computed: {
    ...mapState(useBillStore, ['bills']),
    //https://laracasts.com/discuss/channels/vue/sum-number-in-vuejs
    somBills() {
      if (this.nbBills === 0) {
        return 0
      } else {
        const somBills = this.bills.reduce((acc, bill) => {
          return acc + bill.totalTTC
        }, 0)
        return somBills.toFixed(2)
      }
    },
    //  calcul du pourcentage de factures payées (pBills) et impayées (imBills)
    // filtre les bills avec statut true et recup combien
    // calcul en pourcentage et retour avec 1 chiffre après la virgule
    prPaye() {
      const totalBills = this.nbBills
      if (totalBills === 0) return 0
      const pBills = this.bills.filter((bill) => bill.statut === true).length
      // console.log(pBills, 'bill payées')
      return ((pBills / totalBills) * 100).toFixed(1)
    },
    prImpaye() {
      const totalBills = this.nbBills
      if (totalBills === 0) return 0
      const imBills = this.bills.filter((bill) => bill.statut === false).length
      // console.log(imBills, 'bill Impayées')
      return ((imBills / totalBills) * 100).toFixed(1)
    }
  },
  async mounted() {
    //récupère les données de l'API
    await this.getAllBills()
  },
  methods: {
    ...mapActions(useBillStore, ['getAllBills']),
    // recupere le nombre de facture
    getNbBills() {
      this.nbBills = this.bills.length
    }
  },
  watch: {
    // appel la methode à chaque fois qu'il y a un changement pour mettre à jour nbBills
    bills() {
      this.getNbBills()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.card {
  font-family: 'Roboto', sans-serif;
  width: 300px;
}
/* HEADER DE LA CARD */
.card-header {
  background-color: white;
  border-bottom: none;
}
.nb {
  font-size: 48px;
  font-weight: bold;
}
.title {
  font-size: 20px;
}

/* BODY DE LA CARD */
.sommeBills {
  font-weight: bold;
  font-size: larger;
  color: rgb(9, 9, 92);
}

/* FOOTER DE LA CARD */
.card-footer {
  background-color: white;
  border-top: none;
}
.circle-paye {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid blue;
  display: inline-block;
}
.circle-impaye {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid orange;
  display: inline-block;
}
</style>

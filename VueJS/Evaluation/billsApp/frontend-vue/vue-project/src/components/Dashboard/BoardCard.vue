<template>
  <div class="card">
    <div class="card-header">
      <h4>
        <span class="nb me-2">{{ nbBills }} </span>
        <span class="title">Factures en 2023</span>
      </h4>
    </div>
    <div class="card-body">
      <p>ici</p>
      <p>le</p>
      <p>gros</p>
      <p>donut</p>
    </div>
    <div class="card-footer">
      <h6>
        <span class="circle-paye me-2"></span>
        <span>Total Encaissée - </span>
        <span>{{ prPaye }} %</span>
      </h6>
      <h6>
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

export default {
  data() {
    return {
      // nombre de factures initale à 0
      nbBills: 0
    }
  },
  computed: {
    ...mapState(useBillStore, ['bills'])
  },
  async mounted() {
    //récupère les données de l'API
    await this.getAllBills()
  },
  methods: {
    ...mapActions(useBillStore, ['getAllBills']),
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
  background-color: bisque;
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

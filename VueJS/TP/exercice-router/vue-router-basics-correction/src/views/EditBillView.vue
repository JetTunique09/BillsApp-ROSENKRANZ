<!-- <template>
  <div>
    <div class="row border-bottom pb-3 mb-3 pt-4 mt-4">
      <div class="col">
        <h1 class="h3"><i class="fa-solid fa-angle-down me-2" />Editer une facture</h1>
      </div>
      <div class="col text-end">
        <div class="d-flex justify-content-end">
          <button class="btn btn-outline-danger me-2" @click="onDeleteBill(id)">
            <i class="fa-solid fa-trash-can me-2" />Supprimer
          </button>
          <router-link to="/bills">
            <button class="btn btn-outline-primary">
              <i class="fa-solid fa-chevron-left me-2" />Retour
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <form @submit.prevent="onSubmit()">
      <div class="row mb-3">
        <div class="col">
          <label for="id" class="form-label">ID :</label>
          <input type="text" class="form-control" id="id" v-model="bill.id" disabled />
        </div>
        <div class="col">
          <label for="billnum" class="form-label">Numéro de facture :</label>
          <input type="text" class="form-control" id="billnum" v-model="bill.billnum" disabled />
        </div>
      </div>
      <div class="row">
        <div class="col mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="date" class="form-control" id="date" v-model="formattedDate" />
        </div>
        <div class="col mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" v-model="bill.description" />
        </div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Client</label>
        <input type="text" class="form-control" id="client" v-model="clientName" />
      </div>

      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  </div>
</template>

<script>
import { bills } from '@/seeds/bills.js'
import moment from 'moment'

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      bills,
      bill: {}
    }
  },
  mounted() {
    this.loadBill()
  },
  computed: {
    clientName() {
      return this.bill.client ? `${this.bill.client.firstName} ${this.bill.client.lastName}` : ''
    },
    formattedDate: {
      get() {
        return this.bill.date ? moment(this.bill.date).format('YYYY-MM-DD') : ''
      },
      set(newValue) {
        this.bill.date = newValue
      }
    }
  },
  methods: {
    loadBill() {
      this.bill = this.bills.find((bill) => bill.id == this.id)
    },
    onDeleteBill(id) {
      console.log('delete bill with id: ', id)
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      this.bills = this.bills.filter((b) => b.id !== id)
      // rediriger vers la liste des factures après suppression
      this.$router.push('/bills')
    },
    onSubmit() {
      // Trouver l'index de la facture à mettre à jour
      const index = this.bills.findIndex((b) => b.id == this.id)

      if (index !== -1) {
        // Mettre à jour l'objet de la facture directement
        this.bills[index] = { ...this.bill }

        // Naviguer vers la liste des factures après la mise à jour
        this.$router.push('/bills')
        console.log('Facture mise à jour :', this.bill)
      }
    }
  }
}
</script>

<style scoped></style> -->

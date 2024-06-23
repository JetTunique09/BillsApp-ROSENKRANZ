<template>
  <div>
    <div class="row border-bottom pb-3 mb-3 mt-4">
      <div class="col">
        <h1 class="h3">Créer une nouvelle facture</h1>
      </div>
      <div class="col text-end">
        <button @click="goBack()" class="btn btn-outline-secondary ms-2">
          <i class="fa-solid fa-chevron-left me-2" />Retour
        </button>
      </div>
    </div>

    <div v-if="bill">
      <div class="row">
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              v-model="bill.billnum"
              class="form-control"
              placeholder="Facture N°"
              :class="{ 'is-invalid': !bill.billnum }"
            />
            <label class="form-label">Facture N°</label>
          </div>
          <div class="form-floating mb-3">
            <input type="date" v-model="bill.date" class="form-control" placeholder="Date" />
            <label class="form-label">Émise le</label>
          </div>
          <div class="form-floating mb-3">
            <select
              v-model="bill.client"
              class="form-control"
              :class="{ 'is-invalid': !bill.client }"
            >
              <option value="">Veuillez choisir un client</option>
              <option v-for="client in clients" :key="client.idclient" :value="client">
                {{ client.firstName }} {{ client.lastName }}
              </option>
            </select>
            <label class="form-label">Client</label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              v-model="bill.description"
              class="form-control"
              placeholder="Description"
              :class="{ 'is-invalid': !bill.description }"
            />
            <label class="form-label">Description</label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row ms-5 mb-3 mt-3">
            <div class="col-auto">
              <span v-if="!bill.statut" class="me-2">Impayée</span>
              <span v-else class="me-2">Payée</span>
            </div>
            <div class="col-auto form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="statut"
                v-model="bill.statut"
                @change="toggleStatut"
                :class="{ 'btn-true': bill.statut }"
              />
            </div>
          </div>
        </div>
      </div>
      <TableList>
        <template #thead>
          <th class="th-actions">Actions</th>
          <th class="th-prestation">Prestation</th>
          <th class="th-quantite">Quantité</th>
          <th class="th-montant-ht">Montant U. HT</th>
          <th class="th-montant-total">Montant Total</th>
        </template>

        <tr v-for="(prestation, index) in bill.prestations" :key="index">
          <td class="align-middle">
            <button @click="onAddPrestation(index)" class="btn text-body-tertiary">
              <i class="fa-solid fa-circle-plus" /><span class="visually-hidden"
                >Ajouter une prestation</span
              >
            </button>
            <button
              :disabled="bill.prestations.length === 1"
              @click="onRemovePrestation(index)"
              class="btn text-danger"
            >
              <i class="fa-solid fa-trash" /><span class="visually-hidden"
                >Supprimer une prestation</span
              >
            </button>
          </td>
          <td>
            <div class="form-floating">
              <input
                type="text"
                :name="'prestation-' + index"
                :id="'prestation-' + index"
                class="form-control"
                placeholder="Prestation"
                v-model="prestation.description"
                :class="{ 'is-invalid': !prestation.description }"
              />
              <label :for="'prestation-' + index" class="form-label">Prestation</label>
            </div>
          </td>
          <td>
            <div class="form-floating">
              <input
                type="number"
                min="0"
                step="1"
                :name="'quantity-' + index"
                :id="'quantity-' + index"
                class="form-control"
                placeholder="quantity"
                v-model="prestation.qty"
                :class="{ 'is-invalid': !prestation.qty }"
              />
              <label :for="'quantity' + index" class="form-label">Quantité</label>
            </div>
          </td>
          <td>
            <div class="form-floating">
              <input
                type="number"
                min="0"
                :name="'amount-ht' + index"
                :id="'amount-ht' + index"
                class="form-control"
                placeholder="amount-ht"
                v-model="prestation.price"
                :class="{ 'is-invalid': !prestation.price }"
              />
              <label :for="'amount-ht' + index" class="form-label">Montant U.</label>
            </div>
          </td>
          <td>
            <div class="form-floating">
              <input
                type="number"
                min="0"
                step="1"
                name="total-row"
                :id="'total-row' + index"
                class="form-control"
                placeholder="total-row"
                disabled
                :value="totalRow(index)"
              />
              <label :for="'amount-ht' + index" class="form-label">Montant Total</label>
            </div>
          </td>
        </tr>

        <tr>
          <th colspan="4" class="align-middle text-end">Remises</th>
          <td>
            <div class="form-floating">
              <input
                type="number"
                min="0"
                step="1"
                v-model="bill.discount"
                class="form-control"
                placeholder="discount"
              />
              <label for="discount" class="form-label">Remise</label>
            </div>
          </td>
        </tr>
        <tr>
          <th colspan="4" class="align-middle text-end">Déjà payé</th>
          <td>
            <div class="form-floating">
              <input
                type="number"
                min="0"
                step="1"
                v-model="bill.paid"
                class="form-control"
                placeholder="paid"
              />
              <label for="paid" class="form-label">Déjà payé</label>
            </div>
          </td>
        </tr>
        <tr>
          <th colspan="4" class="align-middle text-end">Total HT</th>
          <td>
            <div class="form-floating">
              <input
                type="number"
                min="0"
                step="1"
                disabled
                v-model="bill.totalHT"
                class="form-control"
                placeholder="global-total-ht"
              />
              <label for="global-total-ht" class="form-label">Total HT</label>
            </div>
          </td>
        </tr>
        <tr>
          <th colspan="4" class="align-middle text-end">TVA</th>
          <td>
            <div class="form-floating">
              <input
                type="number"
                min="0"
                step="1"
                disabled
                v-model="bill.tva"
                class="form-control"
                placeholder="tva"
              />
              <label for="tva" class="form-label">TVA (20%)</label>
            </div>
          </td>
        </tr>
        <tr>
          <th colspan="4" class="align-middle text-end">Total TTC</th>
          <td>
            <div class="form-floating">
              <input
                type="number"
                min="0"
                step="1"
                disabled
                v-model="bill.totalTTC"
                class="form-control"
                placeholder="grand-total-ttc"
              />
              <label for="grand-total-ttc" class="form-label">Total TTC</label>
            </div>
          </td>
        </tr>
      </TableList>

      <p class="text-end">
        <button
          @click="submitForm"
          :disabled="formInvalid"
          class="btn btn-outline-primary btn-lg px-5"
        >
          <i class="fa-solid fa-save me-2"></i>
          Enregistrer
        </button>
      </p>
    </div>
  </div>
  <!-- test utilisation d'une action du store client fonctionne -->
  <!-- <pre> {{ clients }}</pre> -->
</template>

<script>
import { useBillStore } from '@/stores/bill.js'
import { useClientStore } from '@/stores/clients.js'
// import { clients } from '@/seeds/clients.js'
import TableList from '@/components/TableList/TableList.vue'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    TableList
  },
  data() {
    return {
      bill: {
        id: -1,
        billnum: '',
        description: '',
        date: '',
        client: '',
        prestations: [
          {
            description: '',
            qty: 1,
            price: 0
          }
        ],
        discount: 0,
        paid: 0,
        totalHT: 0,
        tva: 20,
        totalTTC: 0
      },
      formSubmitted: false
    }
  },
  computed: {
    ...mapState(useClientStore, ['clients']),
    formInvalid() {
      return (
        !this.bill ||
        !this.bill.billnum ||
        !this.bill.client ||
        !this.bill.description ||
        !this.bill.prestations.length ||
        this.bill.prestations.some((p) => !p.description || p.price <= 0 || p.qty <= 0)
      )
    },
    totalRow() {
      return (index) => {
        if (this.bill) {
          const prestation = this.bill.prestations[index]
          return prestation.qty * prestation.price
        }
      }
    }
  },
  methods: {
    ...mapActions(useBillStore, ['onUpdateBill', 'onAddBill']),
    ...mapActions(useClientStore, ['getAllClients']),
    onAddPrestation(index) {
      // ajout d'une prestation sous l'élément courant dans le tableau
      this.bill.prestations.splice(index, 0, {})
    },
    onRemovePrestation(index) {
      // suppression d'une prestation
      this.bill.prestations.splice(index, 1)
    },
    updateTotal() {
      if (this.bill) {
        this.bill.totalHT = 0
        for (const prestation of this.bill.prestations) {
          this.bill.totalHT += prestation.qty * prestation.price
        }
        this.bill.totalTTC =
          this.bill.totalHT +
          (this.bill.totalHT * this.bill.tva) / 100 -
          this.bill.discount -
          this.bill.paid
      }
    },
    submitForm() {
      this.formSubmitted = true
      if (!this.formInvalid) {
        if (!this.bill.date) {
          this.bill.date = new Date().toISOString().substr(0, 10)
        }
        this.onAddBill(this.bill)
        console.log('fail to submit form')
        this.$router.push({ path: '/bills' })
      }
    },
    goBack() {
      this.$router.push({ path: '/bills' })
    }
  },
  watch: {
    'bill.prestations': {
      handler() {
        this.updateTotal()
      },
      deep: true
    },
    'bill.discount'() {
      this.updateTotal()
    },
    'bill.paid'() {
      this.updateTotal()
    }
  },
  created() {
    this.getAllClients() //récupere la liste des clients
  }
}
</script>

<style scoped>
.form-floating .form-label {
  pointer-events: none;
  margin-left: 0.75rem;
}

/* STYLE POUR TOOGLE BUTTON STATUT */
.form-check-input {
  height: 20px;
  width: 40px;
}
.btn-true {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
</style>

<template>
  <div v-if="bill">
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3 mt-4">
      <div class="col">
        <h1 class="h3">
          <i class="fa-solid fa-angle-down me-2" />Modifier la facture de {{ clientName }}
        </h1>
      </div>
      <div class="col text-end">
        <button @click="deleteBill(bill)" class="btn btn-outline-danger">
          <i class="fa-solid fa-trash me-2" />
          Supprimer la facture
        </button>
        <button @click="goBack()" class="btn btn-outline-secondary ms-2">
          <i class="fa-solid fa-chevron-left me-2" />Retour
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="form-floating mb-3">
          <input
            type="text"
            name="billnum"
            id="billnum"
            v-model="bill.billnum"
            class="form-control"
            placeholder="Facture N°"
            disabled
            :class="{ 'is-invalid': !bill.billnum }"
          />
          <label for="billnum" class="form-label">Facture N°</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="date"
            name="date"
            id="date"
            class="form-control"
            placeholder="Date"
            format="yyyy-MM-dd"
            v-model="bill.date"
            disabled
            :class="{ 'is-invalid': !bill.date }"
          />
          <label for="date" class="form-label">Émise le</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="clientName"
            id="clientName"
            class="form-control"
            placeholder="Nom du client"
            :value="clientName"
            disabled
          />
          <label for="clientName" class="form-label">Nom du client</label>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-floating mb-3">
          <input
            type="text"
            name="description"
            id="description"
            class="form-control"
            placeholder="Description"
            v-model="bill.description"
            :class="{ 'is-invalid': !bill.description }"
          />
          <label for="description" class="form-label">Description</label>
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
      <!-- <pre>{{ bill.statut }}</pre> -->
    </div>
    <TableList>
      <template #thead>
        <th class="th-actions">Actions</th>
        <th class="th-prestation">Prestation</th>
        <th class="th-quantite">Quantité</th>
        <th class="th-montant-ht">Montant U. HT</th>
        <th class="th-montant-total">Montant Total</th>
      </template>

      <!-- debut prestations -->

      <!-- <PrestationTableRow
        v-for="(prestation, index) in bill.prestations"
        :key="index"
        :prestation="prestation"
        @add="onAddPrestation(index)"
        @remove="onRemovePrestation(index)"
        @change="bill.prestations[index] = { ...$event }"
      /> -->

      <tr v-for="(prestation, index) in bill.prestations" :key="index">
        <td class="align-middle">
          <button @click="onAddPrestation(index)" class="btn text-body-tertiary">
            <i class="fa-solid fa-circle-plus" /><span class="visually-hidden"
              >Ajouter une prestation</span
            >
          </button>
          <button @click="onRemovePrestation(index)" class="btn text-danger">
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
      <!-- fin prestations -->
      <tr>
        <th colspan="4" class="align-middle text-end">Remises</th>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              step="1"
              name="discount"
              id="discount"
              class="form-control"
              placeholder="discount"
              v-model="bill.discount"
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
              name="paid"
              id="paid"
              class="form-control"
              placeholder="paid"
              v-model="bill.paid"
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
              name="global-total-ht"
              id="global-total-ht"
              class="form-control"
              placeholder="global-total-ht"
              v-model="bill.totalHT"
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
              name="tva"
              id="tva"
              disabled
              class="form-control"
              placeholder="tva"
              v-model="bill.tva"
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
              name="grand-total-ttc"
              id="grand-total-ttc"
              disabled
              class="form-control"
              v-model="bill.totalTTC"
              placeholder="grand-total-ttc"
            />
            <label for="grand-total-ttc" class="form-label">Total TTC</label>
          </div>
        </td>
      </tr>
    </TableList>

    <p class="text-end">
      <button
        @click="submitForm()"
        :disabled="formInvalid"
        class="btn btn-outline-primary btn-lg px-5"
      >
        <i class="fa-solid fa-save me-2" />Enregistrer
      </button>
    </p>
    <!-- <pre>{{ bill }}</pre> -->
  </div>
</template>

<script>
// import PrestationTableRow from '@/components/TableList/PrestationTableRow.vue'
import TableList from '@/components/TableList/TableList.vue'
import { useClientStore } from '@/stores/clients.js'
// on importe le store
import { useBillStore } from '@/stores/bill.js'
// on importe les actions de pinia
import { mapActions, mapWritableState, mapState } from 'pinia'

const prestationInterface = {
  description: '',
  price: 0,
  qty: 1
}

export default {
  components: {
    // PrestationTableRow,
    TableList
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(useClientStore, ['clients']),
    ...mapWritableState(useBillStore, ['bill']),
    formInvalid() {
      return (
        !this.bill ||
        !this.bill.client ||
        !this.bill.billnum ||
        !this.bill.date ||
        !this.bill.description
      )
    },
    totalRow() {
      return (index) => {
        if (this.bill) {
          const prestation = this.bill.prestations[index]
          return prestation.qty * prestation.price
        }
      }
    },
    clientName() {
      return this.bill.client.firstName + ' ' + this.bill.client.lastName
    }
  },
  mounted() {
    // charge les données de la facture à éditer
    this.setBill(this.id)
  },
  methods: {
    // on déclare l'action ou les actions du store que l'on souhaite utiliser
    ...mapActions(useBillStore, ['onDeleteBill', 'onUpdateBill', 'setBill']),
    ...mapActions(useClientStore, ['getAllClients']),
    onAddPrestation(index) {
      // ajout d'une prestation sous l'élément courant dans le tableau
      this.bill.prestations.splice(index, 0, { ...prestationInterface })
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

    // soumission du formulaire d'édition
    submitForm() {
      // j'appelle la fonction pour mettre à jour une facture depuis le store
      this.onUpdateBill(this.bill)
      // puis je redirige l'utilisateur vers la page de liste
      this.$router.push({ path: '/bills' })
    },

    // suppression de la bill
    deleteBill(bill) {
      // j'appelle la fonction qui vient du store stores/bills.js onDeleteBill() déclarée dans les actions du store
      this.onDeleteBill(bill)
      // puis je redirige l'utilisateur vers la page de liste
      this.$router.push({ path: '/bills' })
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
    this.getAllClients() // recupère la liste des clients
  }
}
</script>

<style scoped>
.table .th-actions {
  width: 10%;
}
.table .th-prestation {
  width: 44%;
}
.table .th-quantite {
  width: 10%;
}
.table .th-montant-ht,
.table .th-montant-total {
  width: 18%;
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

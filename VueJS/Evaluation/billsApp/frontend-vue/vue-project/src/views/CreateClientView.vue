<template>
  <div>
    <div class="row border-bottom pb-3 mb-3 mt-4">
      <div class="col">
        <h1 class="h3">Ajouter un nouveau client</h1>
      </div>
      <div class="col text-end">
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
            v-model="client.firstName"
            class="form-control"
            placeholder="Prénom"
            :class="{ 'is-invalid': !client.firstName }"
          />
          <label for="firstName" class="form-label">Prénom</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="functions"
            id="functions"
            v-model="client.functions"
            class="form-control"
            placeholder="Fonction"
            :class="{ 'is-invalid': !client.functions }"
          />
          <label for="functions" class="form-label">Fonction</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email"
            v-model="client.email"
            :class="{ 'is-invalid': !client.email }"
          />
          <label for="email" class="form-label">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="companyName"
            id="companyName"
            class="form-control"
            placeholder="Entreprise"
            v-model="client.companyName"
            :class="{ 'is-invalid': !client.companyName }"
          />
          <label for="companyName" class="form-label">Entreprise</label>
        </div>
        <h3>Ou ?</h3>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="street"
            id="street"
            v-model="client.address.street"
            class="form-control"
            placeholder="Rue"
          />
          <label for="street" class="form-label">Rue</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="city"
            id="city"
            v-model="client.address.city"
            class="form-control"
            placeholder="Ville"
          />
          <label for="city" class="form-label">Ville</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            v-model="client.address.zipCode"
            class="form-control"
            placeholder="Code Postal"
          />
          <label for="zipCode" class="form-label">Code Postal</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="country"
            id="country"
            v-model="client.address.country"
            class="form-control"
            placeholder="Pays"
          />
          <label for="country" class="form-label">Pays</label>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-floating mb-3">
          <input
            type="text"
            name="lastName"
            id="lastName"
            v-model="client.lastName"
            class="form-control"
            placeholder="Nom"
            :class="{ 'is-invalid': !client.lastName }"
          />
          <label for="lastName" class="form-label">Nom</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="phone"
            id="phone"
            v-model="client.phone"
            class="form-control"
            placeholder="Téléphone"
            :class="{ 'is-invalid': !client.phone }"
          />
          <label for="phone" class="form-label">Téléphone</label>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-floating mb-3">
          <input
            type="date"
            name="addDate"
            id="addDate"
            class="form-control"
            placeholder="Date d'ajout"
            format="yyyy-MM-dd"
            v-model="client.addDate"
          />
          <label for="addDate" class="form-label">Ajouté le </label>
        </div>
      </div>
    </div>
    <div v-if="client">
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
</template>

<script>
import { useClientStore } from '@/stores/clients.js'
import { clients } from '@/seeds/clients.js'
import { mapActions } from 'pinia'

export default {
  components: {},
  data() {
    return {
      clients,
      client: {
        idclient: -1,
        firstName: '',
        lastName: '',
        companyName: '',
        addDate: '',
        email: '',
        phone: '',
        functions: '',
        address: {
          street: '',
          city: '',
          zipCode: '',
          country: ''
        }
      }
    }
  },
  computed: {
    clientName() {
      return this.client.firstName + ' ' + this.client.lastName
    },
    formInvalid() {
      return !this.client.lastName || !this.client.email || !this.client.phone
    }
  },
  methods: {
    ...mapActions(useClientStore, ['onAddClient', 'onUpdateClient']),
    submitForm() {
      this.formSubmitted = true
      if (!this.formInvalid) {
        if (!this.client.addDate) {
          this.client.addDate = new Date().toISOString().substr(0, 10)
          //Si la date n'a pas été renseignée, on lui donne la date d'aujourd'hui
          //proposé par tabnine mais j'ai compris comment ça marche
          //https://www.tabnine.com/code/javascript/functions/builtins/String/toISOString
        }
        this.onAddClient(this.client)
        console.log('enregistrement depuis createclientvue')
        this.$router.push({ path: '/clients' })
      }
    },
    goBack() {
      this.$router.push({ path: '/clients' })
    }
  }
}
</script>

<style scoped>
.form-floating .form-label {
  pointer-events: none;
  margin-left: 0.75rem;
}
</style>

<template>
  <div v-if="client">
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3 mt-4">
      <div class="col">
        <h1 class="h3"><i class="fa-solid fa-angle-down me-2" />Modifier le profil</h1>
      </div>
      <div class="col text-end">
        <button @click="deleteClient" class="btn btn-outline-danger">
          <i class="fa-solid fa-trash me-2" />
          Supprimer le client
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
            name="firstName"
            id="firstName"
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
          <button @click="copyEmail" class="btn btn-outline-secondary copy-btn" type="button">
            <i class="fa-regular fa-copy"></i>
          </button>
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
          <button @click="copyNum" class="btn btn-outline-secondary copy-btn" type="button">
            <i class="fa-regular fa-copy"></i>
          </button>
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
            :class="{ 'is-invalid': !client.addDate }"
          />
          <label for="addDate" class="form-label">Ajouté le </label>
        </div>
      </div>
    </div>

    <p class="text-end">
      <button
        @click="submitForm()"
        :disabled="formInvalid"
        class="btn btn-outline-primary btn-lg px-5"
      >
        <i class="fa-solid fa-save me-2" />Enregistrer
      </button>
    </p>
  </div>
</template>

<script>
import { clients } from '@/seeds/clients.js'
// on importe le store
import { useClientStore } from '@/stores/clients.js'
// on importe les actions de pinia
import { mapActions, mapWritableState } from 'pinia'

export default {
  components: {},
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      clients
    }
  },
  computed: {
    ...mapWritableState(useClientStore, ['client']),
    formInvalid() {
      return !this.client || !this.client.lastName || !this.client.email || !this.client.phone
    }
  },
  mounted() {
    // charge les données du profil à éditer
    this.setClient(this.id)
  },
  methods: {
    // on déclare l'action ou les actions du store que l'on souhaite utiliser
    ...mapActions(useClientStore, ['onDeleteClient', 'onUpdateClient', 'setClient']),

    // soumission du formulaire d'édition
    submitForm() {
      // j'appelle la fonction pour mettre à jour une facture depuis le store
      this.onUpdateClient(this.client)
      // puis je redirige l'utilisateur vers la page de liste
      this.$router.push({ path: '/clients' })
    },

    // suppression de la client
    deleteClient() {
      // j'appelle la fonction qui vient du store stores/clients.js onDeleteclient() déclarée dans les actions du store
      this.onDeleteClient(this.client)
      // puis je redirige l'utilisateur vers la page de liste
      this.$router.push({ path: '/clients' })
    },
    goBack() {
      this.$router.push({ path: '/clients' })
    },
    //tuto pour la method copy
    //https://youtu.be/PKnr2uNAlMk?feature=shared
    copyEmail() {
      navigator.clipboard.writeText(this.client.email)
    },
    copyNum() {
      navigator.clipboard.writeText(this.client.phone)
    }
  }
}
</script>

<style scoped>
.copy-btn {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 2;
}
</style>

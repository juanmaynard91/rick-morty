<template>
  <div class="about">
    <div v-if="!isLoading">
    <img :src="character.image" :alt="character.name">
    <h3>{{ character.name }}</h3>
    <p>
      <b>Especie: </b>{{ character.species }}
    </p>
    <p>
      <b>Tipo: </b>{{ character.type }}
    </p>
    <p>
      <b>Estado: </b>{{ character.status }}
    </p>
    <p>
      <b>Origen: </b>{{ character.origin.name }} - {{ character.origin.url }}
    </p>
    <p>
      <b>Ubicacion: </b>{{ character.location.name }} - {{ character.location.url }}
    </p>
    <p>
      <router-link to="/">Inicio</router-link>
    </p>
    </div>
    <div v-else>
      cargando...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import CharacterService from '../services/CharacterServices'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'About',
  setup () {
    const service = new CharacterService()
    const character = service.getCharacter()
    const isLoading = ref<boolean>(true)
    const { id } = useRoute().params

    // console.log(useRoute().params)

    onMounted(async () => {
      await service.fetchById(id)
      isLoading.value = false
    })

    return { character, isLoading }
  }
})
</script>

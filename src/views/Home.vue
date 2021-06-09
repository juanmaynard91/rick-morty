<template>
  <div class="home">
    <div v-for="character in characters" :key="character.id">
      <img :src='character.image'>
      {{ character.name }}
      <router-link :to="`/character/${character.id}`">Mas informacion</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue' // onMounted: ciclo de vida
import CharacterService from '../services/CharacterServices'

export default defineComponent({
  name: 'Home',
  setup () {
    const service = new CharacterService()
    const characters = service.getCharacters()

    onMounted(async () => {
      await service.fetchAll()
    })

    return { characters }
  }
})
</script>

<style>
.home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

</style>

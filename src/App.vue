<template>
  <div class="container mt-4">
    <nav class="nav nav-tabs mb-3">
      <a class="nav-link" :class="{ active: tab==='calculo' }" @click="tab='calculo'">Cálculo de calificaciones</a>
      <a class="nav-link" :class="{ active: tab==='registro' }" @click="tab='registro'">Formulario de registro</a>
    </nav>
    <CalculoNotas v-if="tab==='calculo'" />
    <RegistroForm v-if="tab==='registro'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CalculoNotas from './components/CalculoNotas.vue'
import RegistroForm from './components/RegistroForm.vue'

const tab = ref('calculo')
</script>

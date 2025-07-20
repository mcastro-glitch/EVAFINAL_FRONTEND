<template>
  <div>
    <h2 class="text-center mb-4">Formulario de registro</h2>
    <div class="text-center mb-3">
      <label>Nombre:</label>
      <input type="text" class="form-control" v-model="nombre">
      <div class="text-danger" v-if="nombre!=='' && nombre.length<2">Ingrese un nombre válido</div>
    </div>
    <div class="text-center mb-3">
      <label>Correo:</label>
      <input type="email" class="form-control" v-model="correo">
      <div class="text-danger" v-if="correo!=='' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)">Correo inválido</div>
    </div>
    <div class="text-center mb-3">
      <label>Contraseña:</label>
      <input type="password" class="form-control" v-model="contraseña">
    </div>
    <div class="text-center mb-3">
      <label>Repetir contraseña:</label>
      <input type="password" class="form-control" v-model="repetirContraseña">
      <div class="text-danger" v-if="contraseña!=='' && repetirContraseña!=='' && contraseña!==repetirContraseña">Las contraseñas no coinciden</div>
    </div>
    <button class="btn btn-success" @click="enviar">Enviar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const correo = ref('')
const contraseña = ref('')
const repetirContraseña = ref('')

const enviar = () => {
  if (nombre.value.length>=2 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo.value) && contraseña.value!=='' && contraseña.value===repetirContraseña.value) {
    alert('El registro se ha realizado correctamente.')
  } else {
    alert('Complete todos los campos correctamente.')
  }
}
</script>

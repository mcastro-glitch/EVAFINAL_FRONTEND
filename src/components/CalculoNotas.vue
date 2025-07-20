<template>
  <div>
    <h2 class="text-center mb-4">Cálculo de calificaciones</h2>
    <div class="text-center mb-3">
      <label>Nota 1 (10-70):</label>
      <input type="number" class="form-control" v-model.number="nota1">
      <small class="text-muted">El valor debe ser entre 10 y 70</small>
      <div class="text-danger" v-if="nota1!=='' && nota1<10">El valor debe ser mayor o igual a 10</div>
      <div class="text-danger" v-if="nota1!=='' && nota1>70">El valor debe ser menor o igual a 70</div>
    </div>
    <div class="text-center mb-3">
      <label>Nota 2 (10-70):</label>
      <input type="number" class="form-control" v-model.number="nota2">
      <small class="text-muted">El valor debe ser entre 10 y 70</small>
      <div class="text-danger" v-if="nota2!=='' && nota2<10">El valor debe ser mayor o igual a 10</div>
      <div class="text-danger" v-if="nota2!=='' && nota2>70">El valor debe ser menor o igual a 70</div>
    </div>
    <div class="text-center mb-3">
      <label>Nota 3 (10-70):</label>
      <input type="number" class="form-control" v-model.number="nota3">
      <small class="text-muted">El valor debe ser entre 10 y 70</small>
      <div class="text-danger" v-if="nota3!=='' && nota3<10">El valor debe ser mayor o igual a 10</div>
      <div class="text-danger" v-if="nota3!=='' && nota3>70">El valor debe ser menor o igual a 70</div>
    </div>
    <div class="text-center mb-3">
      <label>Asistencia (0-100):</label>
      <input type="number" class="form-control" v-model.number="asistencia">
      <small class="text-muted">El valor debe estar entre 0 y 100</small>
      <div class="text-danger" v-if="asistencia!=='' && asistencia<0">El valor debe ser mayor o igual a 0</div>
      <div class="text-danger" v-if="asistencia!=='' && asistencia>100">El valor debe ser menor o igual a 100</div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="calcular">Calcular</button>
    </div>
    <div class="mt-3" v-if="resultado!==null">
      <p>Promedio: {{ resultado }}</p>
      <p :class="estado==='Aprobado' ? 'text-success' : 'text-danger'">{{ estado }}</p>
    </div>
    <div class="text-danger text-center mt-2" v-if="estado==='Datos inválidos'">
      Por favor, ingrese valores válidos para las notas y la asistencia
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nota1 = ref('')
const nota2 = ref('')
const nota3 = ref('')
const asistencia = ref('')
const resultado = ref(null)
const estado = ref('')

const calcular = () => {
  if (validarNotas() && validarAsistencia()) {
    const promedio = (nota1.value*0.35 + nota2.value*0.35 + nota3.value*0.30).toFixed(2)
    resultado.value = promedio
    estado.value = (promedio>=40 && asistencia.value>=80) ? 'Aprobado' : 'Reprobado'
  } else {
    resultado.value = null
    estado.value = 'Datos inválidos'
  }
}

const validarNotas = () => {
  return [nota1.value, nota2.value, nota3.value].every(n => n>=10 && n<=70)
}

const validarAsistencia = () => {
  return asistencia.value>=0 && asistencia.value<=100
}
</script>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <AppLayout>
    <h1>Error {{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <button @click="handleError">
      Go home
    </button>
  </AppLayout>
</template>

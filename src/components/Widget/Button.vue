<script setup lang="ts">

  const props = defineProps({
    mode: {
      type: String,
      default: 'small',
    }
  });
  
</script>

<template>
  <button :class="props.mode">

  </button>
</template>

<style>
  .button {

  }
</style>
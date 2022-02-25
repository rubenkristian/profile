<template>
  <div>
    {{ props.message }}
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    message: {
      type: String,
      default: 'Hello',
    }
  });

</script>

<style>

</style>
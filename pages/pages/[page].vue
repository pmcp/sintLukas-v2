<script setup>
const { data, error  } = await useAsyncData('page', () => queryContent().findOne())
console.log(error, data.value)
</script>

<template>

  <pre>
    {{ data }}
  </pre>
</template>
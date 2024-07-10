<script setup>
const lang = ref('nl')
const { data } = await useAsyncData('page', () => queryContent(`${$route.path}.${lang}`).findOne())
console.log(data.value)
</script>

<template>
  Here is the page - {{ `${$route.path}.${lang}` }}
  <pre>
    {{ data }}
  </pre>
</template>
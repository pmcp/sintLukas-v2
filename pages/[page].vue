<script setup>
const route = useRoute()
const lang = ref('nl')
const path = ref(`${route.path}`)
const { data, error  } = await useAsyncData('page', () => queryContent(lang).findOne())
console.log(error, data.value)
</script>

<template>
  Here is the page - {{ path }}
  <pre>
    {{ data }}
  </pre>
</template>
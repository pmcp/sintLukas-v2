<script setup>
const route = useRoute()
const lang = ref('nl')
const path = ref(`${route.path}`)
console.log(path.value)
const { data, error  } = await useAsyncData('page', () => queryContent().findOne())
console.log(error, data.value)
</script>

<template>
  Here is the page - {{ path }}
  <pre>
    {{ data }}
  </pre>
</template>
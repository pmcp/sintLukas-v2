<script setup>
const route = useRoute()
const lang = ref('nl')
const path = ref(route.path)
const { data, error  } = await useAsyncData('page', () => queryContent(path.value).findOne())
console.log(error, data)
</script>

<template>
  Here is the page - {{ path }}
  <pre>
    {{ data }}
  </pre>
</template>
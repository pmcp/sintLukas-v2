<template>
  <main>
    HALLO

  {{ $route.path}} - {{ '/pages'+$route.path }}

    <pre>{{ data }}</pre>

  </main>
</template>
<script setup>
const route = useRoute()
const { data } = await useAsyncData('page', () => queryContent(route.path).findOne())
console.log(data)
</script>
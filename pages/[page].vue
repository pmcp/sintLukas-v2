<script setup>
const { data } = await useAsyncData('page', () => queryContent($route.path).findOne())
</script>

<template>
  Here is the page {{ $route.path}}
  <pre>
    {{ data }}
  </pre>
</template>
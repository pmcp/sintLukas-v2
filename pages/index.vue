<template>
  <nuxt-link :to="`/pages/testpage-1.${lang}`">test</nuxt-link>
  -
  <nuxt-link :to="`/testpage-1.${lang}`">test</nuxt-link>

</template>

<script setup lang="ts">
const lang = ref('nl')
</script>
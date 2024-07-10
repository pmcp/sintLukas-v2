<template>
  <nuxtLink :to="`/pages/testpage-1.${lang}`">test</nuxtLink>
  --
  <nuxtLink :to="`/testpage-1.${lang}`">test</nuxtLink>
  -- <nuxtLink to="/about">about</nuxtLink>

</template>

<script setup lang="ts">
const lang = ref('nl')
</script>
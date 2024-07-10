<template>
  <ContentQuery :path="`${$route.path}.${lang}`" find="one" v-slot="{ data }">
    {{ data }}
    <ContentRenderer :value="data" class="prose" />
  </ContentQuery>
</template>
<script setup lang="ts">
const lang = ref('nl')
</script>
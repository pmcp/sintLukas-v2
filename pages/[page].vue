<template>
  <ContentQuery :path="`pages${route.path}`" find="one" v-slot="{ data }">
    <template #default="{ data }">
      <pre>{{ data }}</pre>
    </template>
    <template #not-found>
      <p>No page found.</p>
    </template>
  </ContentQuery>
</template>
<script setup lang="ts">
</script>
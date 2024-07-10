<template>
  {{ $route.path }}
  <ContentDoc>
    <template v-slot="{ doc }">
      {{ doc }}
    </template>
    <template #not-found>
      <h1>Document not found</h1>
    </template>
  </ContentDoc>
</template>
<script setup lang="ts">
</script>
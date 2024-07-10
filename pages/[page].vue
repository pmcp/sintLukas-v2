<template>
  <div class="py-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <h1 class="text-xl font-bold mb-4">{{ data.title }}</h1>
    <elements-intro>
      {{ data.intro }}
    </elements-intro>
  </div>
  <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>
</template>
<script setup lang="ts">
const route = useRoute()
const { data, error,  } = await useAsyncData('home', () => queryContent(route.path).findOne())

</script>
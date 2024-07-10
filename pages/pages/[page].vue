<template>
  here we go again - {{ data}}
  ==== {{ error }}
</template>
<script setup lang="ts">
const route = useRoute()
const { data, error,  } = await useAsyncData('home', () => queryContent(route.path).findOne())

</script>
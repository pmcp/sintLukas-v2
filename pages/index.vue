<template>

    <ContentList path="/" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <ULink :to="article._path">{{ article.title }}</ULink>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>

  <nuxtLink :to="`/pages/testpage-1.${lang}`">test</nuxtLink>
  --
  <nuxtLink :to="`/testpage-1.${lang}`">test</nuxtLink>
  -- <nuxtLink to="about">about</nuxtLink>

</template>

<script setup lang="ts">
const lang = ref('nl')
</script>
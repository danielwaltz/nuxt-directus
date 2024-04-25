<script setup lang="ts">
useHead({ title: 'Posts' });

const { data: posts, pending } = await useFetch('/api/posts', { lazy: true });
</script>

<template>
  <section>
    <h2>Posts</h2>

    <div v-if="posts?.length">
      <article v-for="post in posts" :key="post.id">
        <h3 v-if="post.title">
          <NuxtLink :href="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </h3>

        <DirectusBlocks :blocks="post.content" />

        <NuxtLink :href="`/posts/${post.id}`">Read more &rarr;</NuxtLink>
      </article>
    </div>

    <div v-else-if="pending" aria-busy="true">Loading posts...</div>

    <template v-else>
      <p>No posts found</p>
    </template>
  </section>
</template>

<script setup lang="ts">
useHead({ title: 'Posts' });

const { data: posts } = await useFetch('/api/posts');
</script>

<template>
  <section>
    <h2>Posts</h2>

    <template v-if="posts.length">
      <article
        v-for="post in posts"
        :key="post.id"
      >
        <h3 v-if="post.title">
          <NuxtLink :href="`/posts/${post.id}`">
            {{ post.title }}
          </NuxtLink>
        </h3>

        <DirectusBlocks :blocks="post.content" />

        <NuxtLink :href="`/posts/${post.id}`">
          Read more &rarr;
        </NuxtLink>
      </article>
    </template>

    <template v-else>
      <p>No posts found</p>
    </template>
  </section>
</template>

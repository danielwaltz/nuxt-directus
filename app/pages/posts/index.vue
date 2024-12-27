<script setup lang="ts">
useHead({ title: 'Posts' });

const { data: posts, status, error } = useLazyFetch('/api/posts');
</script>

<template>
  <div>
    <h2>Posts</h2>

    <pre v-if="error" class="p-4">{{ error }}</pre>

    <div v-else-if="posts?.length">
      <article v-for="post in posts" :key="post.id">
        <h3 v-if="post.title">
          <NuxtLink :href="`/posts/${post.id}`" class="text-inherit">
            {{ post.title }}
          </NuxtLink>
        </h3>

        <DirectusBlocks :blocks="post.content" />

        <NuxtLink :href="`/posts/${post.id}`" class="mt-4 inline-block">
          Read more &rarr;
        </NuxtLink>
      </article>
    </div>

    <div v-else-if="status === 'pending'" aria-busy="true">
      Loading posts...
    </div>

    <template v-else>
      <p>No posts found</p>
    </template>
  </div>
</template>

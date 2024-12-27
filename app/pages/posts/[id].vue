<script setup lang="ts">
const route = useRoute('posts-id');

const id = toRef(() => route.params.id);

const { data: post, status, error } = useLazyFetch(`/api/posts/${id.value}`);

const title = toRef(() => post.value?.title ?? '');
const content = toRef(() => post.value?.content ?? null);

useHead({ title });
</script>

<template>
  <div>
    <pre v-if="error" class="p-4">{{ error }}</pre>

    <template v-else-if="post">
      <h1 v-if="title">{{ title }}</h1>

      <DirectusBlocks :blocks="content" />

      <NuxtLink href="/posts" class="mt-4 inline-block">
        &larr; Back to posts
      </NuxtLink>
    </template>

    <div v-else-if="status === 'pending'" aria-busy="true">Loading post...</div>

    <template v-else>
      <p>Post not found</p>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute('posts-id');

const id = toRef(() => route.params.id);

const { data: post } = await useFetch(`/api/posts/${id.value}`);

if (!post.value) {
  throw createError({
    statusCode: 404,
    message: 'Post not found',
  });
}

useHead({ title: post.value.title });
</script>

<template>
  <div>
    <article v-if="post">
      <h1 v-if="post.title">{{ post.title }}</h1>

      <DirectusBlocks :blocks="post.content" />
    </article>

    <NuxtLink href="/posts">&larr; Back to posts</NuxtLink>
  </div>
</template>

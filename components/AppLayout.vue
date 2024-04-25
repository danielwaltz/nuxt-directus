<script setup lang="ts">
useHead({ titleTemplate: "%s - Nuxt Directus" });
</script>

<template>
  <div class="container">
    <header>
      <hgroup>
        <h1>
          <NuxtLink href="/">Nuxt Directus</NuxtLink>
        </h1>
        <p>Example integrating Nuxt + Directus</p>
      </hgroup>

      <nav>
        <ul>
          <li>
            <NuxtLink href="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/posts">Posts</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <hr />

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

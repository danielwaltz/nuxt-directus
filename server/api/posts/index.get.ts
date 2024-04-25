// @ts-nocheck
export default defineEventHandler(async () => {
  const result = await $fetch("http://localhost:8055/items/posts");

  const posts = result?.data ?? [];

  return posts.filter((post) => post.status === "published");
});

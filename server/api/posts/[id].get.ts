export default defineEventHandler(async (event) => {
  const params = getRouterParams(event);

  const result = await $fetch(`http://localhost:8055/items/posts/${params.id}`);

  return result?.data ?? null;
});

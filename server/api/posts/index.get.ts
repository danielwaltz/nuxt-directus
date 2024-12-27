const ResponseSchema = v.object({
  data: v.array(PostSchema),
});

export default defineEventHandler(async () => {
  const result = await $fetch("http://localhost:8055/items/posts");

  const posts = validate(ResponseSchema)(result).data;

  return posts.filter((post) => post.status === "published");
});

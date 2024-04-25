import * as v from 'valibot';

const ResponseSchema = v.object({
  data: v.array(
    v.object({
      id: v.number(),
      title: v.string(),
      status: v.string(),
      content: v.unknown(),
    }),
  ),
});

export default defineEventHandler(async () => {
  const result = await $fetch('http://localhost:8055/items/posts');

  const posts = v.parse(ResponseSchema, result).data;

  return posts.filter((post) => post.status === 'published');
});

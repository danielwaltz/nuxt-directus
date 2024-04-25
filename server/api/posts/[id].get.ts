import * as v from 'valibot';

const ResponseSchema = v.object({
  data: v.object({
    id: v.number(),
    title: v.string(),
    status: v.string(),
    content: v.unknown(),
  }),
});

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event);

  const result = await $fetch(`http://localhost:8055/items/posts/${params.id}`);

  const post = v.parse(ResponseSchema, result).data;

  return post;
});

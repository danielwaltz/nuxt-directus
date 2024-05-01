import * as v from 'valibot';

const ParamsSchema = v.object({
  id: v.string(),
});

const ResponseSchema = v.object({
  data: PostSchema,
});

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, validate(ParamsSchema));

  const result = await $fetch(`http://localhost:8055/items/posts/${params.id}`);

  const post = validate(ResponseSchema)(result).data;

  const isPublished = post.status === 'published';

  if (!isPublished) {
    throw createError({
      statusCode: 404,
      message: 'Post not found',
    });
  }

  return post;
});

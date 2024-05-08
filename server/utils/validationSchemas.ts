import * as v from 'valibot';

export const validate =
  <TSchema extends v.BaseSchema>(schema: TSchema) =>
  (input: unknown) =>
    v.parse(schema, input);

export const PostSchema = v.object({
  id: v.number(),
  title: v.string(),
  status: v.string(),
  content: v.unknown(),
});

export const PostSchema = v.object({
  id: v.number(),
  title: v.string(),
  status: v.string(),
  content: v.unknown(),
});

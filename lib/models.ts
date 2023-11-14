import { z } from "zod";

export const wikipediaDataSchema = z.object({
  pageid: z.number(),
  ns: z.number(),
  title: z.string(),
  index: z.number(),
  thumbnail: z
    .object({
      source: z.string(),
      width: z.number(),
      height: z.number(),
    })
    .optional(),
  pageimage: z.string().optional(),
  extract: z.string(),
});

export const wikipediaApiSchema = z.object({
  batchcomplete: z.string(),
  limits: z.object({ extracts: z.number() }),
  continue: z
    .object({ gsroffset: z.number(), continue: z.string() })
    .optional(),
  query: z
    .object({
      pages: z.record(wikipediaDataSchema),
    })
    .optional(),
});

import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const fightersSchema = z.object({
  id: z.number(),
  nip: z.string(),
  password: z.string(),
  email: z.string(),
  fullname: z.string(),
  gender: z.string(),
});

export type Task = z.infer<typeof fightersSchema>;

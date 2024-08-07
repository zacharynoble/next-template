import { z } from 'zod';

const schema = z.object({
    API_URL: z.string().url(),
});

export const config = schema.parse({
    API_URL: process.env.NEXT_PUBLIC_API_URL,
});

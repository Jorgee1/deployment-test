import { initTRPC } from '@trpc/server'


const t = initTRPC.create()


export const appRouter = t.router({
    greeting: t.procedure
        .query(() => 'Hello from tRPC')
})
export type AppRouter = typeof appRouter


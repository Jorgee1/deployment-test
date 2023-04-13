import Fastify from "fastify"


const fastify = Fastify()

fastify.get('/test', () => ({ hey: 'response' }))

const main = async () => {
    await fastify.listen({ port:3000 })
}
main()
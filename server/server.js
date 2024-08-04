const fastify = require('fastify')(
    { 
        logger: true,
    }
)
const cors = require('@fastify/cors');
const path = require('node:path');
const fastifyStatic = require('@fastify/static')
require('dotenv').config()
const fs = require('fs');

fastify.get('/', async function handler (request, reply) {
    return { hello: 'world' }
})

fastify.listen({ port: process.env.APP_PORT || 3000, host: process.env.APP_HOST }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})

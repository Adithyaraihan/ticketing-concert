import swaggerAutogen from "swagger-autogen";

const outputFile = './swagger_output.json'
const endpointsFiles = ['../routes/api.ts']
const doc = {
    info: {
        version: 'v0.0.1',
        title: "Dokumentasi API Ticketing Concert",
        description: "Dokumentasi API Ticketing Concert"
    },
    servers: [
        {
            url: 'http://localhost:5000/api',
            description: 'Localhost'
        },
        {
            url: 'https://ticketing-concert.vercel.app/api',
            description: 'production'
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        },
        schemas: {
            LoginRequest: {
                identifier:"rai",
                password:"121212",
            },
            ActivationRequest:{
                code:"abcdef"
            }
        }
    }
}


swaggerAutogen({openapi: "3.0.0"})(outputFile, endpointsFiles, doc)
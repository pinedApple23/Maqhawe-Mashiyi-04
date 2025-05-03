const fs = require('fs');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Job Portal API',
      version: '1.0.0',
      description: 'API documentation for the Job Portal project',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./api/*.js'], // Adjust path if needed
};

const swaggerSpec = swaggerJSDoc(options);

fs.writeFileSync('./docs/swagger.json', JSON.stringify(swaggerSpec, null, 2));
console.log('✅ Swagger JSON generated in /docs/swagger.json');

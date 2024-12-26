import swaggerJsdoc from 'swagger-jsdoc';

import path from 'path';
// Swagger 설정
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Express TypeScript API',
        version: '1.0.0',
        description: path.join(__dirname, '../routes/*.*'),
      },
      components: {
        schemas: {
          User: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              name: { type: 'string' },
              email: { type: 'string' }
            }
          },
          UserInput: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              email: { type: 'string' }
            },
            required: ['name', 'email']
          }
        }
      }
    },
    apis: [path.join(__dirname, '../routes/*.*')] 
  };
  
  const swaggerDocs = swaggerJsdoc(swaggerOptions);

  export default swaggerDocs;
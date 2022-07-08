const openApiEditor = require('openapi-editor');
const path = require('path');

const schema = path.resolve(__dirname, './schema.yaml');
const HOST = '127.0.0.1'
const PORT = 33201

const options = {
  file: schema,
  host: HOST,
  port: PORT,
  silent: false,
};

openApiEditor.edit(options);
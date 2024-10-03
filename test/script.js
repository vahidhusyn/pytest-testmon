const testmycms = require('testmycms');

const client = new testmycms('apiKey','apiEndpoint');

client.authenticate()
    .then((data) => console.log('Authenticated:', data))
    .catch((err) => console.error('Failed to authenticate:', err));
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import { renderToString } from 'react-dom/server';
// renderToString --> to hydrate
// renderToPipeableStream --> to hydrate in partial chunks --> the intended one to be used but in this simplified example it just complicates
// renderToStaticMarkup --> not hydrate
import { createElement as h } from 'react';
import App from './App.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const shell = readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf8'); // we grab the built version because it will have the correct script tag URLS in them

const app = fastify();

app.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
    prefix: '/',
});

const parts = shell.split('<!--ROOT-->');
// console.log(parts);
app.get('/', (req, reply) => {
    // the order is important
    reply.raw.write(parts[0]);
    const reactApp = renderToString(h(App));
    reply.raw.write(reactApp);
    reply.raw.write(parts[1]);
    reply.raw.end();
});

app.listen({ port: 3000 });

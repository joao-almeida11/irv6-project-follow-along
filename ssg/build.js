import { renderToStaticMarkup } from 'react-dom/server';
import { createElement as h } from 'react';
// this will be simplified by waiting on each step; on a larger app this should occurs in parallel
import {
    readFileSync,
    writeFileSync,
    existsSync,
    mkdirSync,
    readdirSync,
    unlinkSync,
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import App from './App.js';

// create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // in CommonJS its defined but on ES modules it's not

const distPath = path.join(__dirname, 'dist'); // where to export the finished files

const shell = readFileSync(path.join(__dirname, 'index.html'), 'utf-8'); // shell is a string of what is in index.html

const app = renderToStaticMarkup(h(App));
const html = shell.replace('<!-- ROOT -->', app);

if (!existsSync(distPath)) {
    // if the path does not exist create it
    mkdirSync(distPath);
} else {
    // if it exists delete its contents to then write out the newer files
    const files = readdirSync(distPath);
    for (const file of files) {
        // unlinkSync --> delete files
        unlinkSync(path.join(distPath, file));
    }
}

writeFileSync(path.join(distPath, 'index.html'), html);
// this works on one file with one app with no props
// this is just the beginning of what a framework does for SSG

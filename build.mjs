import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'public');

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

cpSync(resolve(root, 'index.html'), resolve(output, 'index.html'));
cpSync(resolve(root, 'css'), resolve(output, 'css'), { recursive: true });
cpSync(resolve(root, 'js'), resolve(output, 'js'), { recursive: true });
cpSync(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });

console.log('Site estático preparado em public/.');

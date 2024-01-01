#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const execa = require('execa');

const targetDir = process.argv[2];

if (fs.existsSync(targetDir)) {
    console.error(`Directory ${targetDir} already exists.`);
    process.exit(1);
}

// Copy template files
fs.copyFileSync(path.join(__dirname, '..', 'package.json'), path.join(targetDir, 'package.json'));
fs.copyFileSync(path.join(__dirname, '..', '.gitignore'), path.join(targetDir, '.gitignore'));
fs.copyFileSync(path.join(__dirname, '..', 'tsconfig.json'), path.join(targetDir, 'tsconfig.json'));
fs.copyFileSync(path.join(__dirname, '..', '.eslintrc.json'), path.join(targetDir, '.eslintrc.json'));
fs.copyFileSync(path.join(__dirname, '..', 'next.config.js'), path.join(targetDir, 'next.config.js'));
fs.copyFileSync(path.join(__dirname, '..', 'next-env.d.ts'), path.join(targetDir, 'next-env.d.ts'));
fs.copyFileSync(path.join(__dirname, '..', 'tailwind.config.js'), path.join(targetDir, 'tailwind.config.js'));
fs.copyFileSync(path.join(__dirname, '..', 'postcss.config.js'), path.join(targetDir, 'postcss.config.js'));

fs.copyFileSync(path.join(__dirname, '..', 'public', 'next.svg'), path.join(targetDir, 'public', 'next.svg'));
fs.copyFileSync(path.join(__dirname, '..', 'public', 'vercel.svg'), path.join(targetDir, 'public', 'vercel.svg'));

fs.copyFileSync(
    path.join(__dirname, '..', 'src', 'app', 'favicon.ico'),
    path.join(targetDir, 'src', 'app', 'favicon.ico')
);
fs.copyFileSync(
    path.join(__dirname, '..', 'src', 'app', 'globals.css'),
    path.join(targetDir, 'src', 'app', 'globals.css')
);

fs.copyFileSync(
    path.join(__dirname, '..', 'src', 'app', 'layout.tsx'),
    path.join(targetDir, 'src', 'app', 'layout.tsx')
);

fs.copyFileSync(path.join(__dirname, '..', 'src', 'app', 'page.tsx'), path.join(targetDir, 'src', 'app', 'page.tsx'));

// CustoM Components
fs.copyFileSync(
    path.join(__dirname, '..', 'src', 'conponents', 'providers.tsx'),
    path.join(targetDir, 'src', 'conponents', 'providers.tsx')
);

fs.copyFileSync(
    path.join(__dirname, '..', 'src', 'conponents', 'wallet-multi-button.tsx'),
    path.join(targetDir, 'src', 'conponents', 'wallet-multi-button.tsx')
);

// Install dependencies
await execa('npm install', { cwd: targetDir });

console.log(`Your project has been created in ${targetDir}`);

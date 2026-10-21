/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'CodyECSL Noble Arc Workspaces',
    description: 'Patched Ubuntu noble Kasm workspaces (Obsidian, Firefox, Chromium, Steam, Doom, Unreal Tournament) that target Intel Arc SR-IOV virtual functions.',
    icon: '/img/logo.svg',
    listUrl: 'https://codyecsl.github.io/kasm-registry/',
    contactUrl: 'https://github.com/CodyECSL/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

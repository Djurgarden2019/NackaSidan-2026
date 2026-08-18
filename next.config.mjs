/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS && repoName);
const basePath = isGitHubPages ? `/${repoName}` : '';

const securityHeaders=[
  {key:'X-Content-Type-Options',value:'nosniff'},
  {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
  {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'},
  {key:'X-Frame-Options',value:'SAMEORIGIN'}
];
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  async headers(){return [{source:'/:path*',headers:securityHeaders}]}
};
export default nextConfig;

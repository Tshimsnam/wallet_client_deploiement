// next.config.mjs
const nextConfig = {
  // Configuration de base essentielle
  output: 'standalone', // Ou 'export' si site statique
  
  // Redirections (optionnel)
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      }
    ]
  },
  
  // Rewrites pour les API (si nécessaire)
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      }
    ]
  }
}

export default nextConfig
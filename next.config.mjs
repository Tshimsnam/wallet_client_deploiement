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
}

export default nextConfig
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vos configs existantes restent ici */
  
  // Désactiver la vérification ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optionnel : désactiver également la vérification TypeScript si nécessaire
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
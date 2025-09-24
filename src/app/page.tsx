import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Enhanced background for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)
        `
      }}></div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
          <div className="text-center">
            {/* Main heading with Apple typography */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] mb-8">
              Bienvenue sur notre
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Découvrez nos articles, actualités et insights. Une expérience
              <span className="text-[var(--text-primary)]"> moderne</span> avec Next.js 15.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-20">
              <Link
                href="/posts"
                className="apple-button inline-flex items-center px-8 py-4 bg-[var(--accent)] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl focus:apple-focus"
              >
                Voir tous les articles
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Performance Card */}
          <div className="apple-card glass-strong rounded-[var(--radius-xl)] p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[var(--radius-lg)] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Performance</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              SSG + ISR pour des temps de chargement optimaux et une expérience fluide
            </p>
          </div>

          {/* Search Card */}
          <div className="apple-card glass-strong rounded-[var(--radius-xl)] p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-[var(--radius-lg)] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Recherche Intelligente</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Recherche en temps réel dans tous les articles avec filtrage avancé
            </p>
          </div>

          {/* Cache Card */}
          <div className="apple-card glass-strong rounded-[var(--radius-xl)] p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-[var(--radius-lg)] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Cache Intelligent</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Actualisation manuelle avec revalidation et gestion optimisée du cache
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
    </div>
  );
}
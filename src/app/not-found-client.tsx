"use client";
import Link from 'next/link';

export default function NotFoundClient() {
  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-orange-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
        `
      }}></div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 leading-none tracking-tight">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="glass rounded-[var(--radius-xl)] p-8 md:p-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Page introuvable
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
            D&eacute;sol&eacute;, la page que vous recherchez n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="apple-button inline-flex items-center px-8 py-4 bg-[var(--accent)] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl focus:apple-focus"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Retour &agrave; l&apos;accueil
            </Link>

            <Link
              href="/posts"
              className="apple-button inline-flex items-center px-8 py-4 bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] rounded-full hover:bg-[var(--surface)] transition-all shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.75A3.75 3.75 0 0011.25 3a3.75 3.75 0 00-3.75 3.75 0 003.75 3.75A3.75 3.75 0 0015 6.75z" />
              </svg>
              Voir les articles
            </Link>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="grid sm:grid-cols-3 gap-4 text-center">
          <Link
            href="/"
            className="apple-card group p-4 rounded-[var(--radius-lg)] bg-black/50 border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              Accueil
            </h3>
          </Link>

          <Link
            href="/posts"
            className="apple-card group p-4 rounded-[var(--radius-lg)] bg-black/50 border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.75A3.75 3.75 0 0011.25 3a3.75 3.75 0 00-3.75 3.75 0 003.75 3.75A3.75 3.75 0 0015 6.75z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              Articles
            </h3>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="apple-card group p-4 rounded-[var(--radius-lg)] bg-black/50 border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              Retour
            </h3>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-red-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
}

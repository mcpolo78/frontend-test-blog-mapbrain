import { Suspense } from 'react';
import Link from 'next/link';
import { Post } from '@/types/post';
import PostsClient from './posts-client';

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
    next: { revalidate: 3600, tags: ['posts'] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-black relative">
      {/* Enhanced background pattern for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-purple-600/15 to-pink-600/15"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)
        `
      }}></div>
      {/* Header Section */}
      <div className="border-b border-[var(--divider)]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
                Blog Posts
              </h1>
              <p className="text-lg text-[var(--text-secondary)] font-medium">
                Découvrez nos derniers articles et insights
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="apple-button inline-flex items-center px-6 py-3 bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] rounded-full hover:bg-[var(--surface)] transition-all shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin mb-4"></div>
            <span className="text-[var(--text-secondary)] font-medium">Chargement des articles...</span>
          </div>
        }>
          <PostsClient posts={posts} />
        </Suspense>
      </div>
    </div>
  );
}
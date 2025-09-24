'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Post } from '@/types/post';

interface PostsClientProps {
  posts: Post[];
}

export default function PostsClient({ posts }: PostsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch('/api/revalidate', {
        method: 'POST',
      });

      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error refreshing:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div>
      {/* Search and Controls Section */}
      <div className="mb-10">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Rechercher dans les articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-4 pl-12 glass rounded-[var(--radius-lg)] focus:apple-focus text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] text-base font-medium transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-tertiary)] w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="apple-button px-6 py-4 bg-[var(--accent)] text-white rounded-[var(--radius-lg)] hover:bg-[var(--accent)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-3 font-semibold shadow-sm"
          >
            {isRefreshing ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            )}
            {isRefreshing ? 'Actualisation...' : 'Actualiser'}
          </button>
        </div>

        {/* Search Results Info */}
        <div className="mt-6 px-2">
          {searchTerm ? (
            <p className="text-[var(--text-secondary)] font-medium">
              <span className="text-[var(--text-primary)] font-semibold">{filteredPosts.length}</span> article{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''} pour "{searchTerm}"
            </p>
          ) : (
            <p className="text-[var(--text-secondary)] font-medium">
              <span className="text-[var(--text-primary)] font-semibold">{posts.length}</span> articles disponibles
            </p>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="apple-card block glass rounded-[var(--radius-lg)] overflow-hidden group"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4 line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h2>
              <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3 leading-relaxed">
                {post.body}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-tertiary)] font-medium px-2 py-1 bg-[var(--surface)] rounded-md">
                  Auteur #{post.userId}
                </span>
                <span className="text-[var(--accent)] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Lire plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && searchTerm && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-[var(--surface)] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
            Aucun article trouvé
          </h3>
          <p className="text-[var(--text-secondary)] text-lg mb-6 max-w-md mx-auto">
            Nous n'avons trouvé aucun article correspondant à votre recherche "{searchTerm}"
          </p>
          <button
            onClick={() => setSearchTerm('')}
            className="apple-button inline-flex items-center px-6 py-3 bg-[var(--accent)] text-white rounded-full font-semibold gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Effacer la recherche
          </button>
        </div>
      )}
    </div>
  );
}
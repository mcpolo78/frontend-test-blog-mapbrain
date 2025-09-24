'use client';

import { useState } from 'react';
import { Post } from '@/types/post';

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const [showJsonModal, setShowJsonModal] = useState(false);

  return (
    <div>
      <article className="glass rounded-[var(--radius-xl)] overflow-hidden">
        <div className="p-8 md:p-12">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">{post.userId}</span>
                </div>
                <span className="text-[var(--text-secondary)] font-medium">Auteur #{post.userId}</span>
              </div>
              <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
              <span className="text-[var(--text-tertiary)] font-medium">Article #{post.id}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg md:text-xl font-normal">
              {post.body}
            </p>
          </div>

          <div className="pt-8 border-t border-[var(--divider)]">
            <button
              onClick={() => setShowJsonModal(true)}
              className="apple-button inline-flex items-center px-6 py-3 bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] rounded-[var(--radius-lg)] hover:bg-[var(--surface-elevated)] transition-all shadow-sm"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.75A3.75 3.75 0 0011.25 3a3.75 3.75 0 00-3.75 3.75 0 003.75 3.75A3.75 3.75 0 0015 6.75z" />
              </svg>
              <span className="font-semibold">Voir les données JSON</span>
            </button>
          </div>
        </div>
      </article>

      {showJsonModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="glass bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[var(--radius-xl)] max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-[var(--divider)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                Données JSON de l&apos;article
              </h3>
              <button
                onClick={() => setShowJsonModal(false)}
                className="apple-button p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-auto max-h-[60vh]">
              <pre className="bg-[var(--surface)] border border-[var(--border)] p-4 rounded-[var(--radius-md)] text-sm overflow-x-auto">
                <code className="text-[var(--text-primary)] font-mono">
                  {JSON.stringify(post, null, 2)}
                </code>
              </pre>
            </div>

            <div className="flex justify-end gap-3 p-6 border-t border-[var(--divider)]">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(post, null, 2));
                }}
                className="apple-button px-6 py-3 bg-[var(--accent)] text-white rounded-[var(--radius-lg)] hover:bg-[var(--accent)]/90 transition-all font-semibold shadow-sm"
              >
                Copier JSON
              </button>
              <button
                onClick={() => setShowJsonModal(false)}
                className="apple-button px-6 py-3 bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] rounded-[var(--radius-lg)] hover:bg-[var(--surface-elevated)] transition-all font-semibold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
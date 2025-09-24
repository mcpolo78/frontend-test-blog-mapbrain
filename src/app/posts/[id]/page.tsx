import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Post } from '@/types/post';
import PostDetail from './post-detail';

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'force-cache',
    next: { revalidate: 3600, tags: ['posts'] }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch post ${id}`);
  }

  const post = await res.json();

  if (!post.id || Object.keys(post).length === 0) {
    throw new Error('Post not found');
  }

  return post;
}

async function getAllPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
    next: { revalidate: 3600, tags: ['posts'] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  try {
    const post = await getPost(id);

    return (
      <div className="min-h-screen bg-black relative">
        {/* Subtle background pattern for visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)
          `
        }}></div>
        {/* Navigation */}
        <div className="border-b border-[var(--divider)]">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <Link
              href="/posts"
              className="apple-button inline-flex items-center px-4 py-2 bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] rounded-full hover:bg-[var(--surface)] transition-all shadow-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux articles
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <PostDetail post={post} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }
}
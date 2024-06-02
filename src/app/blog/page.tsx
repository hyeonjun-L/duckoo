import Link from 'next/link';
import { getPosts } from '@/utils/posts';

const page = async ({}: { params: { slug: string } }) => {
  const posts = await getPosts();

  return (
    <main className="min-h-[80dvh]">
      <h1>Next.js MDX Blog</h1>
      <ol>
        {posts.map(({ slug, title, publishDate, categories }) => (
          <li key={slug}>
            <h2>
              <Link href={`blog/${slug}`}>{title}</Link>
            </h2>
            <p>
              <strong>Published:</strong>
              {new Date(publishDate).toLocaleDateString()}
              <strong>Categories:</strong>
              {categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default page;

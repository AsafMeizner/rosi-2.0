"use client";

import ArticlePage from '@/components/articlePage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  console.log(slug);

  return (
    <main>
      <ArticlePage
        subject=""
        search={slug}
        language="hebrew"
        pageTitle={decodeURI(slug)}
      />
    </main>
  );
};

export default Page;

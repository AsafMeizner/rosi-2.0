"use client";

import ArticlePage from '@/components/articlePage';

interface PageProps {
  params: { slug: string };
}

const Page = ({ params }: PageProps) => {
  console.log(params.slug);

  return (
    <main>
      <ArticlePage
        subject=""
        search={params.slug}
        language="hebrew"
        pageTitle={decodeURI(params.slug)}
      />
    </main>
  );
};

export default Page;

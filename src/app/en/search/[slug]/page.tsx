"use client";

import ArticlePage from '@/components/articlePage';

type PageProps = {
  params: { slug: string };
};

const Page = ({ params }: PageProps) => {
  return (
    <main>
      <ArticlePage
        subject=""
        search={params.slug}
        pageTitle={decodeURI(params.slug)}
        language="english"
      />
    </main>
  );
};

export default Page;

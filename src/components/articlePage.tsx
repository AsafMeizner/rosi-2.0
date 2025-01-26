"use client";

import { useEffect, useState } from "react";
import Popup from "./popup/popup";
import { motion, AnimatePresence } from "framer-motion";
import { getAllArticles } from "@/db/server";
import { Skeleton } from "@mui/material";
import Head from "next/head";

interface Contact {
  name: string;
  phone: string;
}

interface Article {
  id: string;
  title: string;
  photo: string;
  description: string;
  link: string;
  tags: string;
  teamnumber: string;
  contact: Contact;
}

interface ArticlePageProps {
  subject: string;
  search: string;
  pageTitle: string;
  language: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({
  subject,
  search,
  pageTitle,
  language,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getAllArticles(language, subject, search, "approved");
      const formattedArticles = fetchedArticles.map((article) => ({
        id: article.id,
        title: article.title,
        photo: article.photo,
        description: article.description,
        link: article.link,
        tags: article.tags,
        teamnumber: article.teamnumber,
        contact: {
          name: article.author,
          phone: article.phone,
        },
      }));
      setArticles(formattedArticles);
      setIsLoading(false);
    };

    fetchArticles();
  }, [subject, search]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openPopup = (article: Article) => {
    setSelectedArticle(article);
  };

  const closePopup = () => {
    setSelectedArticle(null);
  };

  const generateJSONLD = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": article.link,
        "name": article.title,
        "image": article.photo,
        "description": article.description,
        "author": {
          "@type": "Person",
          "name": article.contact.name,
        },
      })),
    };
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJSONLD()),
          }}
        />
      </Head>
      <main
        dir={language === "he" ? "rtl" : "ltr"}
        className="flex flex-col items-center min-h-screen bg-blue-50 dark:bg-slate-900 text-gray-900 dark:text-white"
      >
        <div
          className="bottom-text-container z-10 w-full max-w-5xl flex justify-center items-center text-3xl"
          style={{ marginTop: "17vh", marginBottom: "5vh" }}
        >
          <p className="bottom-text text-center">
            {articles.length === 0 && !isLoading ? "" : pageTitle}
          </p>
        </div>
        {isLoading && (
          <div className="z-10 w-full max-w-5xl flex flex-wrap justify-center items-center gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className={
                  isMobile
                    ? "article-card-mobile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                    : "article-card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                }
              >
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={isMobile ? 150 : 200}
                  className="rounded-t-lg"
                />
                <Skeleton
                  variant="text"
                  width="80%"
                  height={30}
                  className="my-2 mx-auto"
                />
                <Skeleton
                  variant="text"
                  width="60%"
                  height={30}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        )}
        {isLoading === false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="z-10 w-full max-w-5xl mt-8 px-4 flex flex-wrap justify-center items-center gap-6"
          >
            {articles.map((article, index) => (
              <motion.div
                className={
                  isMobile
                    ? "article-card-mobile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                    : "article-card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                }
                key={index}
                onClick={() => openPopup(article)}
                style={{ cursor: "pointer" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="image-container">
                  <img
                    src={article.photo}
                    alt={article.description}
                    className="w-full h-full object-contain rounded-t-lg"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="font-semibold article-title">{article.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        <div
          className="bottom-text-container z-10 w-full max-w-5xl flex justify-center items-center text-xl"
          style={{ marginTop: "10vh", marginBottom: "10vh" }}
        >
          <p
            style={{ opacity: isLoading ? "0" : "100" }}
            className="bottom-text text-center"
          >
            {language === "english"
              ? articles.length === 0
                ? "No articles found"
                : "No more articles found"
              : articles.length === 0
              ? "לא נמצאו מאמרים"
              : "לא נמצאו עוד מאמרים"}
          </p>
        </div>
        <AnimatePresence>
          {selectedArticle && (
            <Popup
              title={selectedArticle.title}
              link={selectedArticle.link}
              contact={selectedArticle.contact}
              description={selectedArticle.description}
              language={language}
              tags={selectedArticle.tags}
              teamnumber={selectedArticle.teamnumber}
              id={selectedArticle.id}
              onClose={closePopup}
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default ArticlePage;

"use client"

import Image from "next/image";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBolt, faUsers, faIndustry, faPencil, faWrench, faPlus, faStar, faMicrochip, faBook, faUserCircle, faBell, faS } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (      
    <main dir="rtl" className="flex min-h-screen flex-col items-center justify-between bg-blue-50 dark:bg-slate-900 text-gray-900 dark:text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div>
        <Image
          src={isDarkMode ? "/images/dark_rosi.png" : "/images/light_rosi.png"}
          alt="ROSI Logo"
          style={{marginTop: isMobile ? '20vh' : '15%'}}
          width={600}
          height={500}
          priority
        />
      </div>   

      {!isMobile && (
        <div className="mt-5 mb-5 ml-48 mr-48 rounded-lg px-5 py-4 transition-colors text-gray-800 dark:text-white bg-white dark:bg-gray-600/30">
          <h1 className="text-4xl font-bold text-center">
            מי אנחנו
          </h1>
          <p className="text-lg text-center">
            ROSI - Robotics Open Source International
            הוא פרויקט אופן סורס שמטרתו יצירת תשתית משותפת בין כל קבוצות FIRST בארץ.
            לאתר שלנו אפשר להעלות מצגות, קבצי CAD, קטעי קוד, הרצאות מצולמות ועוד.
            כך שכל קבוצה, תוכל ללמוד מהקבוצות האחרות תוך שיתוף הידע שלה
            כאשר המצב שהאתר שואף לקדם הוא העלאת הרמה של כל הקבוצות בארץ
            בכל הנושאים, מהקמת פרויקטים קהילתיים ומדיה, דרך תוכנה וקוד ועד להנדסת מכונות והנדסה.
          </p>
        </div>
      )} {isMobile && (
        <div className="ml-10 mr-10 rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30">
          <h1 className="text-4xl font-bold text-center">
            מי אנחנו
          </h1>
          <p className="text-lg text-center">
            ROSI - Robotics Open Source International
            הוא פרויקט אופן סורס שמטרתו יצירת תשתית משותפת בין כל קבוצות FIRST בארץ.
            לאתר שלנו אפשר להעלות מצגות, קבצי CAD, קטעי קוד, הרצאות מצולמות ועוד.
            כך שכל קבוצה, תוכל ללמוד מהקבוצות האחרות תוך שיתוף הידע שלה
            כאשר המצב שהאתר שואף לקדם הוא העלאת הרמה של כל הקבוצות בארץ
            בכל הנושאים, מהקמת פרויקטים קהילתיים ומדיה, דרך תוכנה וקוד ועד להנדסת מכונות והנדסה.
          </p>
        </div>
      )}  

      {!isMobile && ( 
        <div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center">
            <a
              href="/he/programming"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faCode} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}תוכנה{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/electrical"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBolt} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}אלקטרוניקה{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/manufacturing"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faIndustry} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}ייצור{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/cad"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faPencil} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}סרטוט{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center">
            <a
              href="/he/community"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faUsers} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}קהילה{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/mechanics"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faWrench} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}מכניקה{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/ftc"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faMicrochip} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}FTC{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/other"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBook} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}אחר{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center justify-center">
            <a
              href="/he/directory"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faUserCircle} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}דף קשר{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/contribute"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faPlus} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}העלאת תוכן{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/contact"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBell} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}צור קשר{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/favorites"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faStar} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}מועדפים{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          </div>
        </div>
      )} {isMobile && (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
              href="/he/programming"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faCode} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}תוכנה{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/electrical"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBolt} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}אלקטרוניקה{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/manufacturing"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faIndustry} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}ייצור{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/cad"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faPencil} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}סרטוט{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          <a
              href="/he/community"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faUsers} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}קהילה{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/mechanics"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faWrench} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}מכניקה{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/ftc"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faMicrochip} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}FTC{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/other"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBook} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}אחר{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/directory"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faUserCircle} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}דף קשר{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/directory"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faStar} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}מועדפים{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/directory"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faUserCircle} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}העלת תוכן{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/he/directory"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faUserCircle} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}צור קשר{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
        </div>
      )}

    </main>
  );
}

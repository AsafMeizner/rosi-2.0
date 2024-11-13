"use client"

import Image from "next/image";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBolt, faUsers, faIndustry, faPencil, faWrench, faPlus, faStar, faMicrochip, faBook } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);

      const savedLanguage = localStorage.getItem('language') || 'en';
      router.replace('/' + savedLanguage);
    }
  }, [router]);

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
    <main dir="ltr" className="flex min-h-screen flex-col items-center justify-between bg-blue-50 dark:bg-slate-900 text-gray-900 dark:text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-16">
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
            What is ROSI?
          </h1>
          <p className="text-lg text-center">
            ROSI - Robotics Open Source International
            Is an Open Source project aimed at creating a common infrastructure among all FIRST teams internationally.
            You can upload presentations, CAD files, code scenes, photographed lectures and more.
            So that any team can learn from the other teams while sharing its knowledge
            When the situation the site strives to promote is raising the level of all teams internationally.
            In all topics, from the establishment of community and media projects, through software and code to Manufacturing and engineering.
          </p>
        </div>
      )} {isMobile && (
        <div className="ml-10 mr-10 rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30">
          <h1 className="text-4xl font-bold text-center">
            What is ROSI?
          </h1>
          <p className="text-lg text-center">
            ROSI - Robotics Open Source International
            Is an Open Source project aimed at creating a common infrastructure among all FIRST teams internationally.
            You can upload presentations, CAD files, code scenes, photographed lectures and more.
            So that any team can learn from the other teams while sharing its knowledge
            When the situation the site strives to promote is raising the level of all teams internationally.
            In all topics, from the establishment of community and media projects, through software and code to Manufacturing and engineering.
          </p>
        </div>
      )}

      {!isMobile && ( 
        <div style={{marginBottom: "100px"}}>
          <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center">
            <a
              href="/en/programming"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faCode} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Programming{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/electrical"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBolt} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Electrical{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/manufacturing"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faIndustry} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Manufacturing{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/cad"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faPencil} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}CAD{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center">
            <a
              href="/en/community"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faUsers} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Community{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/mechanics"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faWrench} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Mechanics{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/ftc"
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
              href="/en/other"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBook} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Other{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center justify-center">
            <a>
            </a>
            <a
              href="/en/contribute"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faPlus} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Upload Content{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/contact"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faStar} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Contact{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          </div>
        </div>
      )} {isMobile && (
        <div className="mb-62 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
              href="/en/programming"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faCode} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Programming{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/electrical"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBolt} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Electrical{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/manufacturing"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faIndustry} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Manufacturing{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/cad"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faPencil} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}CAD{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          <a
              href="/en/community"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faUsers} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Community{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/mechanics"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faWrench} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Mechanics{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/ftc"
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
              href="/en/other"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faBook} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Other{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          <a
              href="/en/contribute"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faPlus} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Upload Content{" "}
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <a
              href="/en/contact"
              className="group rounded-lg px-5 py-4 transition-colors border-gray-500 dark:border-gray-400 m-2 border-4 text-gray-800 dark:text-white bg-white dark:bg-gray-600/30 hover:border-red-700 hover:bg-gray-100 hover:dark:border-red-700 hover:dark:bg-gray-500/15"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                <FontAwesomeIcon icon={faStar} className="mb-1 text-9xl text-red-700" />
                <br />
                {" "}Contact{" "}
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

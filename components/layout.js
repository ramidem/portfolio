import Head from "next/head";

import { name, title, siteTitle } from "../lib/data.js";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`${siteTitle}`} />
        {/* change this */}
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={`${siteTitle}`} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />

        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        />

        {/* JQUERY */}
        <script
          type="text/javascript"
          src="//code.jquery.com/jquery-1.11.0.min.js"
        ></script>
        <script
          type="text/javascript"
          src="//code.jquery.com/jquery-migrate-1.2.1.min.js"
        ></script>

        {/* slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
        />
        <script
          type="text/javascript"
          src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
    $(document).ready(function () {
      $(".projects").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        mobileFirst: true,
      });
    });
`,
          }}
        />

        <title>
          {name} &mdash; {title}
        </title>
      </Head>
      <main>{children}</main>
    </>
  );
}

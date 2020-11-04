export default function Footer() {
  return (
    <>
      <div className="container sections" id="footer-section">
        <div className="lg-column">
          <footer>
            <small>
              made with <abbr title="love">❤️</abbr> and lots of{" "}
              <abbr title="coffee">☕</abbr>
              <br />
              <a href="https://vercel.com/dashboard" target="_blank">
                vercel
              </a>{" "}
              | <a href="https://nextjs.org/">next.js</a> |
              <a href="https://github.com/ramidem/portfolio">github</a>
            </small>
          </footer>
        </div>
      </div>
      <div id="faux-div"></div>
    </>
  );
}

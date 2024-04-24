function Footer() {
  return (
    <>
      <footer className="footer mt-16 items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p className="text-2xl font-bold pl-4">Contact Me</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="flex items-center h-10">
            <a href="tel://5121234567">
              <img
                className="footer-icon"
                src="/images/contact/phoneIcon.png"
                alt="phone"
              />
            </a>
            <a href="mailto:ME@yahoo.com">
              <img
                className="footer-icon"
                src="/images/contact/emailIcon.png"
                alt="email"
              />
            </a>
            <a href="https://www.linkedin.com/">
              <img
                className="footer-icon"
                src="/images/contact/LinkedinLogo.png"
                alt="LinkedIn"
              />
            </a>

            <a href="https://github.com">
              <img
                className="footer-icon"
                src="/images/contact/githubLogo.png"
                alt="github"
              />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;

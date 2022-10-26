export default {
  github: 'https://github.com/ivljubicic/bikewiki',
  docsRepositoryBase: 'https://github.com/ivljubicic/bikewiki/tree/main/pages',
  titleSuffix: ' – Nextra',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Bike Wiki</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        pravo mjesto za naučiti sve o popravcima bicikla
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Sve na jednom mjestu o biciklističkim popravcima" />
      <meta name="og:description" content="Sve na jednom mjestu o biciklističkim popravcima" />
      <meta name="og:title" content="Bike KSET wiki" />
      <meta name="og:image" href="/bikelogo.png" />
      <meta name="apple-mobile-web-app-title" content="Bike KSET wiki" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>KSET {new Date().getFullYear()} ©.</>,
  unstable_faviconGlyph: '👋',
}

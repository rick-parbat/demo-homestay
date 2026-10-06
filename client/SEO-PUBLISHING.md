# Hill Journal and search visibility

Add an article to `src/blogPosts.js` with a unique descriptive slug, title, description, category, an existing licensed image name and alt text, a real publication date, introduction and sections. Use useful original information; verify destination claims and do not promise views, rates or facilities that are unconfirmed. Dates must reflect actual publication, not automatically change with each build.

Run `npm run build` and `node scripts/check-seo.mjs`. The build generates the homepage, journal, individual articles, XML sitemap, robots.txt and a not-found page as HTML. Commit and push to main to publish through the existing Vercel connection. There is no browser-based blog admin; article content lives in the repository.

The canonical production origin is in `src/seo.js`. When a custom domain is connected, update it there and redirect the previous origin to it. Do not publish competing copies on multiple domains.

## Owner setup still needed

1. Verify the production site in Google Search Console using the URL-prefix property. Supply Google's verification file or meta tag so it can be added to this project; do not share a password. Submit `/sitemap.xml` and inspect the homepage and article URLs after verification.
2. Complete and verify the Google Business Profile with the real business name, phone, pin and website. Keep the opening/completion status accurate. Do not invent reviews or publish opening hours before they are confirmed.
3. After hosting guests, invite honest reviews and add actual property photographs and useful answers to traveller questions. Review Search Console impressions and queries over time; rankings are not guaranteed.

## Research used (6 October 2026)

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://support.google.com/business/answer/7091

Articles use the owner's supplied facts and trip-planning suggestions, with no unverified attraction distances, opening hours or route promises. The first article discusses how to choose the best fit, rather than claiming an unsupported ranking for the retreat.

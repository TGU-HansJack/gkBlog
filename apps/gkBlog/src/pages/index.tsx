import Head from "@/components/meta/Head";

import { getBaseUrl } from "@/helpers/url";

import IndexContents from "@/contents/index";

function Index() {
  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "寒士杰克的博客",
    description:
      "爱捣鼓，爱互联网，喜欢捣鼓，不断进步！",
    url: baseUrl,
    publisher: {
      "@type": "Person",
      name: "HansJack",
      url: `${baseUrl}/about-me`,
    },
    author: {
      "@type": "Person",
      name: "HansJack",
      url: `${baseUrl}/about-me`,
    },
    sameAs: ["https://github.com/TGU-HansJack"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Head
        title="寒士杰克的博客"
        description="爱捣鼓，爱互联网，喜欢捣鼓，不断进步！"
        ogImage={`${baseUrl}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;

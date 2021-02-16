import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import * as queryString from "query-string";

const SEO = ({ query: { site } = {}, title, description, image }) => {
  const { pathname, search } = useLocation()
  const { filter: filterParam } = queryString.parse(search);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultKeywords,
    menuLinks
  } = site.siteMetadata
  const currentPageInfo = menuLinks.find((route) => route.link === pathname)
  const seo = {
    title: title ?? currentPageInfo?.title ?? defaultTitle,
    description: description ?? currentPageInfo?.description ?? defaultDescription,
    image: `${siteUrl}${image ?? defaultImage}`,
    url: `${siteUrl}${pathname}`,
    keywords: defaultKeywords
  }
  const noIndex = filterParam
  return (
    <Helmet title={seo.title}>
      <html lang="bg" />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {<meta property="og:type" content="website" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {noIndex && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
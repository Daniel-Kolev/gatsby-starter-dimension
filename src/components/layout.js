import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SEO from './seo'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

import '../assets/scss/main.scss'

const Layout = ({ children, isHomePage = false, location }) => {
  const hasWindow = typeof window !== 'undefined'
  const shouldBeLoading = (hasWindow && typeof window.firstHistoryKey === 'undefined') || !hasWindow
  const [loading, setLoading] = useState(shouldBeLoading ? 'is-loading' : '');

  useEffect(() => {
    if (hasWindow && !window.firstHistoryKey) {
      window.firstHistoryKey = location.key
    }
    const isLoading = hasWindow && window.firstHistoryKey === location.key
    let timeoutId = 0
    
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setLoading('')
      }, 100);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [])

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              defaultTitle: title
              defaultDescription: description
              siteUrl: url
              defaultImage: image
              defaultKeywords: keywords
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <SEO query={data} />
          <div className={`body ${loading}`}>
            <div id="wrapper">
              <Header menuLinks={data.site.siteMetadata.menuLinks} isHomePage={isHomePage} timeout={false} />
                <div className='content'>
                  {children}
                </div>
              <Footer timeout={false} />
            </div>
            <div id="bg"></div>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

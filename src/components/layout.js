import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

import '../assets/scss/main.scss'

const Layout = ({ children, isHomePage = false, location }) => {
  const hasWindow = typeof window !== 'undefined'
  const [loading, setLoading] = useState(hasWindow && typeof window?.firstHistoryKey === 'undefined' ? 'is-loading' : '');

  useEffect(() => {
    if (hasWindow && !window?.firstHistoryKey) {
      window.firstHistoryKey = location.key
    }
    const isLoading = hasWindow && window?.firstHistoryKey === location.key
    let timeoutId = 0
    
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setLoading('')
      }, 100);
    }
    console.log('didmount of Layout', isLoading)
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
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Ani\'s digital gallery' },
              { name: 'keywords', content: 'aniart96, aniart, gallery, art, art site' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div className={`body ${loading}`}>
            <div id="wrapper">
              <Header isHomePage={isHomePage} timeout={false} />
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

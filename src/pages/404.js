import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <h1>Страницата не бе намерена</h1>
    <p>Върнете се обратно или навигирайте към една от страницте от менюто.</p>
  </Layout>
)

export default NotFoundPage

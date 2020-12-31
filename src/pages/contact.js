import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Icon from '../components/Icon/Icon'

const SecondPage = (props) => (
  <Layout location={props.location}>
  <h1>Свържете се с мен</h1>
    <div className='contact-icons'>
      <Icon icon='instagram' onClick={() => window.location.href = 'https://www.instagram.com/aniart96/'}/>
      <Icon icon='facebook' onClick={() => window.location.href = ''}/>
    </div>
  </Layout>
)

export default SecondPage

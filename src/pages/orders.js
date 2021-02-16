import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Icon from '../components/Icon/Icon'

const SecondPage = (props) => (
  <Layout location={props.location}>
  <h1>За поръчки</h1>
    <div className='contact-icons'>
      <Icon icon='instagram' onClick={() => window.location.href = 'https://www.instagram.com/aniart96/'}/>
      <Icon icon='facebook' onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=100010930667350'}/>
    </div>
  </Layout>
)

export default SecondPage

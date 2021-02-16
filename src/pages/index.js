import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'


class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} isHomePage>
        <div className="inner">
          <div className='inner-text'>
            <h1>Галерията на Ани</h1>
            <p>
              Неповторим подарък за всеки повод “Картините на Ани”. Без претенции за авторство. Ако Ви хареса нещо, можете да се свържете с мен. <Link to="/orders">Приемам поръчки.</Link>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

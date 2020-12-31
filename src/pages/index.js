import React from 'react'
import Layout from '../components/layout'


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    console.log('location',props.location.state)
    this.state = {
      loading: props.location?.state?.fromHeader ? '' : 'is-loading'
    }
  }
   
  componentDidMount () {
    const { loading } = this.state
    if (loading) {
      this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
      }, 100);
    }
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    return (
      <Layout isHomePage loading={this.state.loading}>
        <div className='content'>
          <div className="inner">
            <div className='inner-text'>
              <h1>Галерията на Ани</h1>
              <p>
                Неповторим подарък за всеки повод “Картините на Ани”. Без претенции за авторство. Ако Ви хареса нещо, пишете ми на лично съобщение. Приемам поръчки.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

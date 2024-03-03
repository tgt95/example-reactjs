import React, { Component } from 'react'
import { ReactComponent as IllusBanner } from '../../../assets/images/SVG/banner-bg.svg'
import { fetchData } from '../../../utils/api'
import Typewriter from 'typewriter-effect'

// Main components
class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetchData('df2e5675f00bc58b57ca')
      .then((result) => {
        // Update the state with the modified data
        this.setState({ data: result, loading: false })
      })
      .catch(console.error)
  }

  render() {
    const { data } = this.state
    // console.log(data && data.title)
    return (
      <section className='section section-banner'>
        <div className='container'>
          <div className='align-items-center row' style={{ height: '1093px' }}>
            <div className='col-lg-6 content-text'>
              <div className='title'>
                {data && 
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(data.title.text_1)
                        .deleteAll()
                        // .deleteChars(data.title.text_1.length)
                        // .pauseFor(2200)
                        .typeString(data.title.text_2)
                        .pauseFor(100)
                        .deleteChars(data.title.text_2.length)
                        .typeString(data.title.text_3)
                        .pauseFor(1000)
                        .start()
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                      // wrapperClassName: 'title',
                      // cursorClassName: 'title',
                    }}
                  />
                }
              </div>
              <p>{data && data.description}</p>
            </div>
          </div>
          <div className='col-lg-6 content-bg'>
            <IllusBanner />
          </div>
        </div>
      </section>
    )
  }
}
export default Banner

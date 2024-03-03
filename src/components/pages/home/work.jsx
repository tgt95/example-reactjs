import React, { Component } from 'react'
import { convertToPathName, getImageSize } from '../../../utils/helpers'
import { fetchData } from '../../../utils/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// Main components
class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    this.renderView = this.renderView.bind(this)
  }

  renderView = (item, index) => {
    switch (item.external) {
      case true:
        return (
          <div className='swiper-slide item col-md-6 w-50' key={index}>
            <div className='item-thumbnail'>
              <img src={item.imageThumbnail} alt={item.title} />
              <a className='overlay-content external' href={item.externalURL} target='_blank' rel='nofollow noreferrer'>
                <div className='text-center'>
                  <i className='icon ri-external-link-line'></i>
                  <div className='text'>{item.guideText}</div>
                </div>
              </a>
            </div>
            <div className='title'>{item.title} </div>
            <div className='url-link'>
              <a href={item.website} target='_blank' rel='nofollow noreferrer'>
                {item.website}{' '}
              </a>
            </div>
          </div>
        )
      default:
        return (
          <div className='swiper-slide item col-md-6 w-50' key={index}>
            <div className='item-thumbnail'>
              <img src={item.imageThumbnail} alt={item.title} />
              <a
                className='overlay-content'
                href={item.src}
                data-size=''
                data-img-index={index}
              // data-full={JSON.stringify(item.item['item'])}
              >
                <i className='icon ri-zoom-in-line'></i>
              </a>
            </div>
            <div className='title'>{item.title} </div>
            <div className='url-link'>
              <a href={item.website} target='_blank' rel='nofollow noreferrer'>
                {item.website}{' '}
              </a>
            </div>
          </div>
        )
    }
  }

  componentDidMount() {
    // Fetch data from NPoint
    fetchData('edbd1cc3f62bba3efd1c')
      .then((result) => {
        // Modify the fetched data (e.g., adding the childs)
        const modifiedData = result.map((item, index) => ({
          ...item,
          pathName: convertToPathName(item.fullName), // Adding a child to each item
          pid: `${convertToPathName(item.fullName)}-${index}`
        }))

        // Filter the Featured pool
        modifiedData.forEach((item) => {
          // Re-Map the image path name
          item.data.forEach((sub, j) => {
            sub.imageThumbnail = '../../' + sub.imageThumbnail
            sub.imageOriginal = '../../' + sub.imageOriginal

            // Get image size: Width x Height
            const imageOriginalSize = {
              imageOriginalSize: getImageSize(process.env.REACT_APP_API_URL + '/../../' + sub.imageOriginal)
            }
            // Add child object to parent
            item.data[j] = { ...item.data[j], ...imageOriginalSize }
          })

          // Ignore the 'feature' pool at the 1 position (push projects are feature to 1 one pool)
          if (item.data.length != 0) {
            item.data.forEach((sub) => {
              if (sub.featured) modifiedData[0].data.push(sub)
            })
          }
        })

        // Sorting the Featured pool by Numeric (0 → 9)
        modifiedData[0].data = modifiedData[0].data.sort((a, b) => a.position - b.position)

        // Update the state with the modified data
        this.setState({ data: modifiedData, loading: false })
      })
      .catch(console.error)
    console.log('Component mounted');
  }
  render() {
    const { data } = this.state
    return (
      <section className='section section-work'>
        <div className='container'>
          <div className='section-heading'>
            <div className='section-title'>Work</div>
          </div>

          <Swiper
            className='tuantest'
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
          <div className='navigation-tabs'>
            <ul>
              {data &&
                data.map((item, index) => (
                  <li key={index} className={index === 0 ? 'active' : undefined}>
                    <a href='#' data-tab-target={`#category-${item.pathName}`}>
                      {item.fullName}
                    </a>
                  </li>
                ))}
            </ul>
            <div className='switch-view'>
              <a className='btn-just-icon active' href='#' action='grid'>
                <i className='ri-function-line'></i>
              </a>
              <a className='btn-just-icon' href='#' action='list'>
                <i className='ri-list-check-2'></i>
              </a>
            </div>
          </div>
          
          {data && data.map((item, index) => (
            <div>
              <h3 key={index}>{item.fullName}</h3>
              {item.data.map((sub, j) => <p><b>{j + ' - ' +sub.title}</b></p> )}
            </div>
          ))}
          {data &&
            data.map((item, index) => (
              <div className='swiper-list' swiper-list-index={index} key={index} id={`category-${item.pathName}`} style={{ display: index !== 0 ? 'none' : undefined }}>
                <div className='swiper swiper-container container'>
                  <div className='swiper-wrapper slide-wrapper row'>
                    {item.data.map((sub, j) => this.renderView(sub, j))}
                  </div>
                </div>
                <div className='container'>
                  <div className='swiper-controls'>
                    <a className='btn btn-just-icon btn-default slide-button-prev mr-2' href='#'>
                      <i className='ri-arrow-left-s-line'></i>
                    </a>
                    <a className='btn btn-just-icon btn-default slide-button-next' href='#'>
                      <i className='ri-arrow-right-s-line'></i>
                    </a>
                    <div className='swiper-pagination'></div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    )
  }
}
export default Work

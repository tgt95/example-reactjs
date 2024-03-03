import React, { Component } from "react"

const convertToPathName = (fullName) => {
    // Convert spaces to dashes and make lowercase
    return fullName.toLowerCase().replace(/\s+/g, '-');
}

// Main components
class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null
        };
        this.renderView = this.renderView.bind(this);
    }

    renderView = (item, index) => {
        switch (item.external) {
            case true:
                return (
                    <div className="swiper-slide" key={index}>
                        <div className="item-thumbnail">
                            <img src={item.image} />
                            <a
                                className="overlay-content external"
                                href={item.externalURL}
                                target="_blank"
                                rel="nofollow"
                            >
                                <div className="text-center">
                                    <i className="icon ri-external-link-line"></i>
                                    <div className="text">{item.guideText}</div>
                                </div>
                            </a>
                        </div>
                        <div className="title">{item.title} </div>
                        <div className="url-link">
                            <a href={item.website} target="_blank" rel="nofollow">{item.website} </a>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="swiper-slide" key={index}>
                        <div className="item-thumbnail">
                            <img src={item.image} />
                            <a
                                className="overlay-content"
                                href={item.src}
                                data-size=""
                                data-img-index={index}
                            // data-full={JSON.stringify(item.item['item'])}
                            >
                                <i className="icon ri-zoom-in-line"></i>
                            </a>
                        </div>
                        <div className="title">{item.title} </div>
                        <div className="url-link">
                            <a href={item.website} target="_blank" rel="nofollow">{item.website} </a>
                        </div>
                    </div>
                );
                
        }
    }

    componentDidMount() {
        this.fetchData('https://api.npoint.io/edbd1cc3f62bba3efd1c');
    }

    async fetchData(URL) {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            // this.setState({ data: jsonData, loading: false });


            // Modify the fetched data (e.g., adding the childs)
            const modifiedData = jsonData.map((item, index) => ({
                ...item,
                pathName: convertToPathName(item.fullName), // Adding a child to each item
                pid: `${convertToPathName(item.fullName)}-${index}`
            }));

            // Filter the Featured pool
            modifiedData.forEach((item, index) => {
                if (item.data.length != 0) {
                    item.data.forEach((sub, i) => {
                        if (sub.featured) {
                            modifiedData[0].data.push(sub);
                        }
                    })
                }
            });

            // Sorting the Featured pool by Numeric
            modifiedData[0].data = modifiedData[0].data.sort((a, b) => a.position - b.position)

            // Update the state with the modified data
            this.setState({ data: modifiedData, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }

    render() {
        const { data, loading, error } = this.state;
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        return (
            <section className="section section-work">
                <div className="container">
                    <div className="section-heading">
                        <div className="section-title">Work</div>
                    </div>
                    <div className="navigation-tabs">
                        <ul>
                            {data && (
                                data.map((item, index) => (
                                    <li key={index} className={index === 0 ? 'active' : undefined}>
                                        <a href="#" data-tab-target={`#category-${item.pathName}`}>{item.fullName}</a>
                                    </li>
                                ))
                            )}
                        </ul>
                        <div className="switch-view">
                            <a className="btn-just-icon active" href="#" action="grid">
                                <i className="ri-function-line"></i>
                            </a>
                            <a className="btn-just-icon" href="#" action="list">
                                <i className="ri-list-check-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="swiper swiper-container" id="category-" style={{ display: 'block' }}>
                        <div className="swiper-wrapper slide-wrapper">
                            {data && (
                                data.map((item, index) => (
                                    item.data.map((sub, j) => (
                                        this.renderView(sub, j)
                                    ))
                                ))
                            )}
                        </div>
                        <div className="container">
                            <div className="swiper-controls">
                                <a className="btn btn-just-icon btn-default slide-button-prev mr-2" href="#">
                                    <i className="ri-arrow-left-s-line"></i>
                                </a>
                                <a className="btn btn-just-icon btn-default slide-button-next" href="#">
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Work;
import { ReactComponent as IllusProfile } from '../../assets/images/profile-illustration.svg';

const profileData = [
    {
        label: 'Full name', 
        value: 'Trình Gia Tuấn',
        external: false
    },
    {
        label: 'Date of Birth',
        value: '11/10/1995',
        external: false
    },
    {
        label: 'Email',
        value: '<a class="mr-1" href="mailto:giatuantrinh@gmail.com" style="text-decoration: underline;">giatuantrinh@gmail.com</a>',
        external: true
    },
    {
        label: 'Address',
        value: 'District 11, Ho Chi Minh City',
        external: false
    },
]


// const profileExternalLi = (href, style, value)=> {
    //     const content = `
    //         <div class="align-items-center d-inline-flex">
    //             <a class="mr-1" href="${this.href !== undefined ? this.href : ''}" style="${this.style !== undefined ? this.style : ''}">${this.value !== undefined ? this.value : ''}</a>
    //             <i class="ri-mail-open-line" style="font-size: 20px; color: var(--neutral-700);"></i
    //         </div>
    //     `
    //     return content
    // }
    
const HomeProfile = ()=> {
    const List = (external, value)=> {
        if (!external){
            return <span>{value}</span>
        }
        else{
            return ''
        }
    }

    return (
        <section className="section section-profile">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-6 content-bg">
                        <IllusProfile />
                    </div>
                    <div className="col-md-5 col-lg-6 content-text">
                        <div className="section-heading">
                            <div className="section-title">Profile</div>
                        </div>
                        <div className="profile-content">
                            <ul>
                                {profileData.map((item) => (
                                    <li>
                                        <div className="title">{item.label}</div>
                                        {List(item.external, item.value)}
                                        {/* {!item.external ? <span>{item.value}</span> : ''} */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeProfile;
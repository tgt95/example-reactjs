import logo from '../../../assets/images/logo.svg';

const navigation = [
    { name: 'Profile',  href: '.section-profile' },
    { name: 'Work',     href: '.section-work' },
    { name: 'Resume',   href: '.section-contact' },
]

const navigationSocials = [
    { icon: 'linkedin-box',     href: 'https://www.linkedin.com/in/tgt95' },
    { icon: 'behance',          href: 'https://www.behance.net/tgt95' },
    { icon: 'dribbble',         href: 'https://dribbble.com/tgt95' },
    { icon: 'github',           href: 'https://github.com/tgt95' }
]

const Header = ()=> {
    return (
        <header className="header is-sticky">
            <div className="container">
                <div className="navigation-menu">
                    <ul>
                        <li className="logo">
                            <a href=".section-banner">
                                <img src={logo} alt="TGT Logo"/>
                            </a>
                        </li>
                        {navigation.map((item) => (
                            <li>
                                <a href={item.href} data-offset-top="88">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="social-list">
                        {navigationSocials.map((item) => (
                            <li>
                                <a className="btn btn-just-icon btn-ghost-brand" href={item.href} target="_blank" rel="noreferrer">
                                    <i className={`ri-${item.icon}-fill`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;
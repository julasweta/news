import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#">
                    <span>НОВИНИ</span> інформаційний портал
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="#">УКРАЇНА</a></li>
                    /
                    <li><a href="#">МІЖНАРОДНІ</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;

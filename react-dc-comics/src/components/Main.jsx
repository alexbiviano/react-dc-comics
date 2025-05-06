import ListComics from "./ListComics"

const Main = () => {
    return (
        <main>
            <div className="main-top">
                <div className="container">
                    <ListComics />
                </div>
            </div>
            <div className="main-bottom">
                <div className="container">
                    <ul>
                        <li>
                            <img src="src/assets/img/buy-comics-digital-comics.png" alt="" />
                            DIGITAL COMICS
                        </li>
                        <li>
                            <img src="src/assets/buy-comics-merchandise.png" alt="" />
                            DC MERCHANDISE
                        </li>
                        <li>
                            <img src="src/assets/img/buy-comics-subscriptions.png" alt="" />
                            SUBSCRIPTION
                        </li>
                        <li>
                            <img src="src/assets/img/buy-comics-shop-locator.png" alt="" />
                            COMIC SHOP LOCATOR
                        </li>
                        <li>
                            <img src="src/assets/img/buy-dc-power-visa.svg" alt="" />
                            DC POWER VISA
                        </li>
                    </ul>
                </div>
            </div>

        </main>
    )
}

export default Main
import React from "react"
import "../styles/global.css"
import { StaticImage} from "gatsby-plugin-image";


const SecondPage = () => (
    <body className="is-preload">
    <div id="wrapper">

        <header id="header" className="alt">
            <nav id="nav">
                <ul>
                    <li className="current"><a href="index.html">Главная</a></li>
                    <li><a href="documents.html">Документы</a></li>

                </ul>
            </nav>
        </header>

        <section id="banner">
            <div className="content primary">
                <header className="leftheader">
                    <h1>Научно-производственное объединение<br/> «Здоровьесберегающие технологии»</h1>
                    <p>Мы создаем здоровьесберегающую среду<br/>для развития здорового человека <br/><br/><a
                        href="#contact" className="button buttonleft">Начать сотрудничество</a></p>

                </header>

            </div>
            <div className="content secondary">
                <div className="inner">
                    <div className="features">
                        <section>
                            <span className="icons">
                                <StaticImage
                                    src="../images/example.png"
                                    loading="eager"
                                    width={64}
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    style={{ marginBottom: `var(--space-3)` }}
                                />
                            </span>
                            <h3>Классы</h3>
                            <p>Создание классов здоровья для школ и детских садов</p>
                        </section>

                    </div>
                </div>
            </div>

        </section>
    </div>
    </body>
)

export default SecondPage

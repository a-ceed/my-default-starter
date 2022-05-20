import React from "react"
import "../styles/global.css"
import { StaticImage} from "gatsby-plugin-image"



const IndexPage = () => (
    <body className="is-preload">
    <div id="wrapper">

        <header id="header" className="alt">
            <nav id="nav">
                <ul>
                    <li className="current"><a href="index.html">Главная</a></li>
                    <li><a href="documents/">Документы</a></li>

                </ul>
            </nav>
        </header>

        <section id="banner">
            <div className="content">
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
                                    src="../images/class.png"
                                    loading="eager"
                                    width={90}
                                    quality={100}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    style={{ marginBottom: `var(--space-3)` }}
                                />
                            </span>
                            <h3>Классы</h3>
                            <p>Создание классов здоровья для школ и детских садов</p>
                        </section>
                        <section>
                            <span class="icons">
                                <StaticImage
                                    src="../images/edu.png"
                                    loading="eager"
                                    width={90}
                                    quality={100}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    style={{ marginBottom: `var(--space-3)` }}
                                />
                            </span>
                            <h3>Обучение</h3>
                            <p>Обучение учителей, родителей
                                и управленцев</p>
                        </section>
                        <section>
                            <span class="icons">
                                <StaticImage
                                    src="../images/consult.png"
                                    loading="eager"
                                    width={90}
                                    quality={100}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    style={{ marginBottom: `var(--space-3)` }}
                                />
                            </span>
                            <h3>Консультации</h3>
                            <p>Умная организация рабочей
                                среды дома и на работе</p>
                        </section>
                    </div>
                </div>
            </div>

        </section>

        <section id="one" className="main alt">

            <div className="inner alt">
                <div className="content">
                    <div className="flexconteiner">

                        <div className="textbox">
                            <h3>В чём проблема?</h3>
                            <p className="normaltext">Ещё в СССР был установлен факт ежегодного ухудшения здоровья учащихся. В ходе
                                исследований в 1980-х годах группой учёных под руководством профессора В.Ф.Базарного в
                                НИИ медицинских проблем Севера было установлено, что здоровье детей ухудшается в
                                результате сидяче-обездвиженного режима обучения в детском саду, школе, учреждениях
                                дополнительноо образования и дома за уроками.</p>

                        </div>

                    </div>


                    <h3>Единственное в России решение</h3>
                    <p>В результате исследований была разработана специальная методика — комплекс решений,
                        профилактирующий множество проблем здоровья детей: особое оборудование класса (базовый элемент
                        — ростомерная конторка с изменяющимся углом наклона рабочей поверхности — специальная
                        ученическая парта для работы стоя) и изменение принципов организации проведения занятий, при
                        этом не затрагивая их содержательную часть. На данной момент методика является единственной
                        одобренной Роспотребнадзором и Минздравом России.</p>


                    <h3>Как организован процесс обучения?</h3>
                    <p>В результате исследований была разработана специальная методика — комплекс решений,
                        профилактирующий множество проблем здоровья детей: особое оборудование класса (базовый элемент
                        — ростомерная конторка с изменяющимся углом наклона рабочей поверхности — специальная
                        ученическая парта для работы стоя) и изменение принципов организации проведения занятий, при
                        этом не затрагивая их содержательную часть. На данной момент методика является единственной
                        одобренной Роспотребнадзором и Минздравом России.</p>

                </div>
            </div>
        </section>

        <section id="two" className="main accent2">
            <header>
                <h2>Здоровьесберегающие школы на карте России</h2>
                <p>Мы собираем информацию о всех учебных заведениях в которых применяются здоровьесберегающие технологии
                    по методике профессора В. Ф. Базарного.</p>
            </header>
            <div className="inner">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a84e2b492765be3a801f60abb2c5e3416f83c9c2ceecf4bc0e548877cd0098c&amp;source=constructor"
                    width="100%" height="400" frameBorder="0"></iframe>
                <div>
                    <div className="circlelabel">
                        <StaticImage
                            src="../images/marker/greenMarker.png"
                            loading="eager"
                            width={12}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                            style={{ marginTop: `11px` }}
                        />
                    </div>
                    <div className="article">школы и детские сады оборудованные нами</div>
                    <div className="circlelabel">
                        <StaticImage
                            src="../images/marker/blueMarker.png"
                            loading="eager"
                            width={12}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                            style={{ marginTop: `11px` }}
                        />
                    </div>
                    <div className="article">школы и детские сады, которые мы проверили</div>
                    <div className="circlelabel">
                        <StaticImage
                            src="../images/marker/redMarker.png"
                            loading="eager"
                            width={12}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                            style={{ marginTop: `11px` }}
                        />
                    </div>
                    <div className="article">наши опорные школы, на базе которые ведутся исследования и внедряются новые
                        достижения
                    </div>
                </div>
            </div>

        </section>


        <section id="uh" className="main alt">

            <div className="inner">
                <h2>Гимназия им. К.Д.Ушинского</h2>
                <p>Наша опорная школа — Гатчинская гимназия им. К.Д.Ушинского. Это школа, в которой родилась российская
                    педагогика как наука, и где трудился великий русский педагог Константин Дмитриевич Ушинский. На
                    сегодняшний день в России нет полностью здоровьесберегающих школ. Мы поставили задачу сделать такую
                    школу полностью здоровьесберегающей. Такой какой должна быть любая российская школа. </p>
                <p>На сегодняшний день в гимназии осуществляется полноценное внедрение здоровьесберегающей методики
                    В.Ф.Базарного осуществляется в полном объеме в 4 классах и частично также в 4 классах начальной,
                    основной и средней школы. </p>
                <p>Нашим научным консультантом являлся сам профессор В.Ф.Базарный</p>

                <StaticImage
                    src="../images/bazarnyvf.png"
                    loading="eager"
                    width={204}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)`, marginRight: `var(--space-3)` }}
                />

                <StaticImage
                    src="../images/ushinsky.png"
                    loading="eager"
                    width={204}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
            </div>
        </section>


        <section id="govement" className="main alt">

            <div className="inner alt ">

                <div className="content innercenter">
                    <header><h2>Мы взаимодействуем</h2></header>
                    <div className="flexconteiner">

                        <div className="textbox">

                            <div className="features iconsgov">
                                <section>
                                    <span className="icongov">
                                        <StaticImage
                                            src="../images/gov/kaz.png"
                                            loading="eager"
                                            width={144}
                                            quality={100}
                                            formats={["auto", "webp", "avif"]}
                                            alt=""
                                            style={{ marginBottom: `var(--space-3)` }}
                                        /></span>


                                    <p>Управление образования<br />Казани</p>
                                </section>
                                <section>
                                    <span className="icongov">
                                    <StaticImage
                                        src="../images/gov/gat.png"
                                        loading="eager"
                                        width={144}
                                        quality={100}
                                        formats={["auto", "webp", "avif"]}
                                        alt=""
                                        style={{ marginBottom: `var(--space-3)` }}
                                    /></span>
                                    <p>Комитет образования<br />Гатчинского района</p>
                                </section>
                                <section>
                                    <span className="icongov">
                                    <StaticImage
                                        src="../images/gov/kir.png"
                                        loading="eager"
                                        width={144}
                                        quality={100}
                                        formats={["auto", "webp", "avif"]}
                                        alt=""
                                        style={{ marginBottom: `var(--space-3)` }}
                                    />
                                    </span>
                                    <p>Департамент образования<br />Кирова</p>
                                </section>
                            </div>

                            <div className="features iconsgov">
                                <section>
                                    <span className="icongov">
                                    <StaticImage
                                        src="../images/gov/kar.png"
                                        loading="eager"
                                        width={144}
                                        quality={100}
                                        formats={["auto", "webp", "avif"]}
                                        alt=""
                                        style={{ marginBottom: `var(--space-3)` }}
                                    />
                                    </span>
                                    <p>Министерство образования<br />Карелии</p>
                                </section>
                                <section>
                                    <span className="icongov">
                                    <StaticImage
                                        src="../images/gov/ij.png"
                                        loading="eager"
                                        width={144}
                                        quality={100}
                                        formats={["auto", "webp", "avif"]}
                                        alt=""
                                        style={{ marginBottom: `var(--space-3)` }}
                                    />
                                    </span>
                                    <p>Управление образования<br />Ижевска</p>
                                </section>
                                <section>
                                    <span className="icongov">
                                    <StaticImage
                                        src="../images/gov/kov.png"
                                        loading="eager"
                                        width={144}
                                        quality={100}
                                        formats={["auto", "webp", "avif"]}
                                        alt=""
                                        style={{ marginBottom: `var(--space-3)` }}
                                    />
                                    </span>
                                    <p>Управление образования<br />Ковровского района</p>
                                </section>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section id="three" className="main alt">
            <header>
                <h2>Оборудуйте школы вместе с нами</h2>
                <p>Здоровьесберегащие классы переоборудованные при нашем участии</p>
            </header>
            <div className="inner">
                <div className="posts">
                    <div>
                        <article>
                            <a href="#" className="image">
                                <StaticImage
                                    src="../images/belogorskaya-shkola.jpg"
                                    loading="eager"

                                    quality={100}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    style={{ marginBottom: `var(--space-3)` }}
                                />
                            </a>
                            <div className="content">
                                <h3>Белогорская начальная школа-детский сад</h3>
                                <p>Подготовительная группа</p>
                                <ul className="actions">

                                </ul>
                            </div>
                        </article>

                    </div>
                    <div>

                        <article>
                            <a href="#" className="image">
                                <StaticImage
                                    src="../images/pavlovskaya-gymnasium.jpg"
                                    loading="eager"

                                    quality={100}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    style={{ marginBottom: `var(--space-3)` }}
                                />
                            </a>
                            <div className="content">
                                <h3>Павловская гимназия №209 Санкт-Петербурга</h3>
                                <p>Класс начальной школы</p>
                                <ul className="actions">

                                </ul>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article>
                            <a href="#" className="image">
                                <StaticImage
                                    src="../images/zst-gatchina.jpg"
                                    loading="eager"

                                    quality={100}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    style={{ marginBottom: `var(--space-3)` }}
                                />
                            </a>
                            <div className="content">
                                <h3>Гатчинская гимназия им. К.Д.Ушинского</h3>
                                <p>Класс средней школы</p>
                                <ul className="actions">

                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>


        <section id="contact" className="main alt">

            <div className="inner alt">
                <div className="content">
                    <div className="flexconteiner2">

                        <div className="anketa">
                            <h3>Начать сотрудничество</h3>

                            <a href="https://forms.gle/RaNo8nk21qRjptes9" className="button">Заполнить анкету</a>
                            <a href="https://t.me/Alseverikov" className="button">Написать в Телеграм</a>
                            <a href="tel:+7 (8142) 33 22 11" className="button">Позвоните нам</a>


                        </div>

                    </div>


                </div>
            </div>
            <p><br/><br/><br/><br/></p>
        </section>


        <footer id="footer">
            <div className="inner">
                <section>
                    <h3>Здоровьесберегающие технологии</h3>
                    <p>Воспитывает каждая минута жизни и каждый уголок земли, каждый человек, с которым формирующаяся
                        личность соприкасается. В.А.Сухомлинский.</p>

                </section>

                <section className="narrow">
                    <h3>Наши сообщества</h3>
                    <ul className="links">
                        <li><a href="https://vk.com/zst_lo">ЗСТ в Вконтакте</a></li>
                        <li><a href="https://t.me/zst_rus">Канал в Телеграме</a></li>
                        <li><a href="https://vk.com/event197653711">Здоровьесберегающая школа</a></li>
                        <li><a href="https://skies.land/zst">Поддержите нас на Скайсе</a></li>
                    </ul>
                </section>
                <section>
                    <h3>Контакты</h3>
                    <p>Если у вас появились вопросы, общайтесь с нами в социльных сетях или звоните
                    </p>
                            <h3>+7 911 173 98 77</h3>

                </section>
            </div>
            <div className="copyright">

            </div>
        </footer>


    </div>
    </body>
)

export default IndexPage

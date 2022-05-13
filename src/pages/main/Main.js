import React from 'react';
import "./Main.scss"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Main = () => {

    const mainStyle = {
        background: "linear-gradient( rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.8) ), url(./images/bg.jpg)"
    };

    return (<div>
       <Header/>
        <main>
            <h1><span>ТОП НАЙКРАЩИХ </span>ФІЛЬМІВ УСІХ ЧАСІВ ТА НАРОДІВ</h1>
            <section>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/1p.jpg" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Втеча з Шоушенка</h3>
                                    <p>Цей фільм вже пару десятиліть лідирує в рейтингу IMDb, і поки ще жодній з
                                        кінострічок не вдалось його обігнати.
                                        Кіно було зняте ще наприкінці минулого століття. Тут ми побачимо інший бік
                                        медалі ув’язнених у тюрмах. Зрозуміємо, що люди, які вчинили злочин, попри все
                                        залишаються людьми.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/2p.webp" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Хрещений батько</h3>
                                    <p>Культовий фільм про сицилійську мафіозну сім’ю Корлеоне. Стрічка вдало розкриває
                                        вплив родини на формування нас як особистості.
                                        У кримінальній драмі яскраво описуються стосунки, правила та взаємодія злочинних
                                        банд. А професійна акторська гра заслужено дає друге місце кінострічки в нашому
                                        топі.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/3p_.jpg" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Список Шиндлера</h3>
                                    <p>Чорно-білий історичний фільм, який розповідає нам про реальну особистість –
                                        Оскара Шиндлера. За часів Другої світової війни він врятував від смерті понад
                                        тисячу польських євреїв.
                                        Нас занурюють у страшну правду, несправедливість та жорстокість нацизму. Проте
                                        світ не без добрих людей.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/4p.jpg" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Кримінальне чтиво</h3>
                                    <p>Легендарний фільм Квентіна Тарантино, який зробив відомим Уму Турман та Джона
                                        Траволту. Хто ж не бачив їхнього славнозвісного танцю?
                                        Фільм про кримінал, який вважають важливою віхою в історії кінематографа.
                                        Саме після цієї стрічки розпочався активний розвиток американського незалежного
                                        кіно.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/5p.jpg" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Володар перснів: Хранителі Персня</h3>
                                    <p>Новозедандська фантастична екранізація книги Джона Толкіна. Дія кінострічки
                                        відбувається в Середзем’ї, де проходить боротьба за Перстень Влади.
                                        Випадковим чином він потрапив до гобіта Більбо Торбина, який передав його своєму
                                        племіннику Фродо..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/6p.jpg" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Бійцівський клуб</h3>
                                    <p>Фільм знятий за однойменною книгою Чака Паланіка, яка стала світовим бестселером.
                                        Режисер Девід Фінчер охарактеризував стрічку як чорну комедію з елементами
                                        соціальної сатири.

                                        На перший погляд, це абсолютно незрозумілий та безсенсовий фільм. Проте, якщо
                                        вдуматись, він розкриває конфлікт молоді та систему цінностей сучасного
                                        суспільства.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={mainStyle}>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/7p.jpg" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Форрест Ґамп</h3>
                                    <p>Найуспішніший та найвідоміший фільм режисера Роберта Земекіса, який 1994 року
                                        отримав 6 премій Оскар.

                                        Стрічка чудово ілюструє, що наш успіхзнаходиться у нашій голові, і не важливо,
                                        що думають інші.

                                        Форест Ґамп був розумово відсталим, але це не завадило йому здійснити воєнний
                                        подвиг, вплинути на американську політику та досягти своєї мрії.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/8p.jpg" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Початок</h3>
                                    <p>Наші сни – це невідоме й абсолютно відоме для нас водночас. Парадокс, але це
                                        правда. Читаючи свої сновидіння, не забувайте, що ви заглядаєте у своє
                                        підсвідоме.

                                        Так і головні герої фільму розбирались у своїй голові. Вони знайшли спосіб
                                        керувати снами та змінювати за допомогою них реальність..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/9p.webp" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Матриця</h3>
                                    <p>Свого часу цей фільм отримав значний суспільний резонанс. Все тому, що саме з
                                        цієї кінострічки розпочалась нова епоха фантастики, графіки та спецефектів.
                                        Нам змогли показати, що фільм може дивувати, на перший погляд, абсолютно
                                        нереальною картинкою.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/10p.jpg" alt="#"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>Паразити</h3>
                                    <p>Цьогоріч корейський фільм Паразити став проривом на Міжнародному кінофестивалі
                                        Оскар. І не дивно.

                                        Ця стрічка ніби поєднує в собі всі можливі жанри. Тут є і комедія, і триллер, і
                                        драма, і кримінал, і навіть трохи жахів.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners">
                <div className="row">
                    <div className="col-12">
                        <h2>Наші партнери</h2>
                    </div>

                    <div className="col-12">
                        <p>Ось актуальний перелік наших партнерів і сфер компетентності, однак ми завжди відкриті до
                            нових сміливих починань і взаємин, які допоможуть вдосконалити досвід наших клієнтів.</p>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="#" className="partner">
                            <img src="./images/themeforest-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="#" className="partner">
                            <img src="./images/audiojungle-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="#" className="partner">
                            <img src="./images/codecanyon-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="#" className="partner">
                            <img src="./images/photodune-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="#" className="partner">
                            <img src="./images/activeden-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="#" className="partner">
                            <img src="./images/3docean-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                </div>
            </section>
        </main>
       <Footer/>
    </div>);
};

export default Main;
import '../css/main.css'
import p1 from '../img/01.png'
import p2 from '../img/photo-2.png'
import p3 from '../img/photo-3.png'
import p4 from '../img/photo-4.png'
import p5 from '../img/photo-8.png'
import p6 from '../img/photo-6.png'
import p7 from '../img/photo-7.png'
import p8 from '../img/photo.png'
import p9 from '../img/photo-1.png'


function Main() {
    return (
        <>
            <main>
                <div className="main_container">
                    <div className="serch">
                        <input placeholder='Поиск по ресторанам и кухням' type="text" />
                    </div>
                    <div className="resouranse_main">
                        <h1>Рестораны в Москве</h1>
                        <div className="box_restorans">
                            бт \зшиЫВ ЛД
                            Ъя\ жи\<div className="block_restoran">
                                <img src={p1} alt="" />
                                <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>
                            <div className="block_restoran">
                                <img src={p9} alt="" />
                          лэыод           <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>
                            <div className="block_restoran">
                                <img src={p8} alt="" />
                                <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>
                            <div className="block_restoran">
                                <img src={p2} alt="" />
                                <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>
                            <div className="block_restoran">
                                <img src={p3} alt="" />
                                <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>
                            <div className="block_restoran">
                                <img src={p4} alt="" />
                                <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>
                            <div className="block_restoran">
                                <img src={p6} alt="" />
                                <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>
                            <div className="block_restoran">
                                <img src={p7} alt="" />
                                <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>
                            <div className="block_restoran">
                                <img src={p5} alt="" />
                                <h4>Макдоналдс — Газетный</h4>
                                <p>₽₽ • Бургеры</p>
                                <p>25 - 35 мин</p>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Main;
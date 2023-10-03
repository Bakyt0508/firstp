


const Categoties = ({value, onClickActive, searchValue, setSearchValue}) =>{

    const categoryArray=["Все","Закуски","Салаты","Супы","Горячие блюда","Гарниры","Дисерты"]

    return(
        <section className="categories">
            <div className="conteiner">
                <nav>
                    (categoryArray.map((item,index)=>) )
                </nav>
            </div>
        </section>
    )
}
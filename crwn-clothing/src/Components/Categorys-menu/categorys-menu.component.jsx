import './categorys-menu.style.scss'
import CategoryItem from '../Category/category-item.component';

const CategoryWraper = ({categories}) => {



    return(

        <div className="categories-container">

        {categories.map((category) => (
          <CategoryItem key= {category.id} category={category} /> 

        ))       
        }

    </div>

    )

}

export default CategoryWraper;
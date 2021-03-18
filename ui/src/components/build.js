import Category from "./category-page";
import './styles/build.css';
import CategoryPage from './Category'

    function Build({ match }) {
    const Floors = match.params.floors;
    const Square = match.params.square;
    const Category_id = match.params.id;

    function LotsList() {
        if (Category_id) {
            return(CategoryPage(Category_id));
        } else {
            return(null)
        }
    }

  return (
    <div className="Build">
        <Category />
        <div className="main-content">
            <h2>Закупка материалов для {Floors} этажного здания с площадью {Square}м<sup>2</sup></h2>
            <LotsList />
        </div>
    </div>
  );
}

export default Build;

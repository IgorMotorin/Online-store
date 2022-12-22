import { dataProducts } from '../../model/dataProducts';
import { Header } from '../header';
import { Card } from '../card';
import { Filters } from '../filters'
import { Footer } from '../footer';
import { Search } from '../search';
import { IFiltersProps } from '../../interface/interface';
import '../../../assets/icons/grid-3x3.svg';


const filterProps: IFiltersProps = {
    category: [['Мобильные', 10], ['Компьютеры', 20], ['Телефоны', 30], ['Гарнитура', 40]],
    brand: [['Sony', 11], ['Apple', 12], ['Nokian', 13], ['гарнитура', 14]],
    price: [0, 2000],
    stock: [3, 10]
}


export class Sort {
   
    

render() {
    return `
                                <div class = "d-flex flex-row mb-3 justify-content-between">
                                    
                                <select class="form-select form-select-sm w-25 h-50" aria-label=".form-select-sm example">
                                    <option selected>Sorting</option>
                                    <option value="1">Sort by price</option>
                                    <option value="2">Sort by rating</option>
                                    <option value="3">Sort by discount</option>
                                </select>

                                <div class = "d-flex flex-row gap-1">
                                    <button type="button" class="btn p-1">
                                        <svg width="32" height="32">
                                            <rect width="14" height="14" x="0" y="0"
                                            fill="none"
                                            stroke-width="1"
                                            stroke="#0d6efd"/>
                                            <rect width="14" height="14" x="18" y="0"
                                            fill="none"
                                            stroke="#0d6efd"/>
                                            <rect width="14" height="14" x="0" y="18"
                                            fill="none"
                                            stroke="#0d6efd"/>
                                            <rect width="14" height="14" x="18" y="18"
                                            fill="none"
                                            stroke="#0d6efd"/>
                                         </svg>
                                    </button>                                    
                                    <button type="button" class="btn p-1">
                                        <svg width="32" height="32">
                                        <rect width="32" height="14" x="0" y="0"
                                        fill="none"
                                        stroke="#0d6efd"/>                                        
                                        <rect width="32" height="14" x="0" y="18"
                                        fill="none"
                                        stroke="#0d6efd"/>                                    
                                        </svg>
                                    </button>
                                </div>
                                
                                
                                
                                       
                                   
                                </div>
  `;
}

}
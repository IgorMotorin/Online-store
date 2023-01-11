import { dataProducts } from '../../model/dataProducts';
import { Header } from '../header';
import { Card } from '../card';
import { Filters } from '../filters';
import { Footer } from '../footer';
import { Search } from '../search';
import { IFiltersProps } from '../../interface/interface';
import '../../../assets/icons/grid-3x3.svg';

export class Sort {
    render() {
        return `
                                <div class = "d-flex flex-row mb-3 justify-content-between">
                                    
                                <select class="form-select form-select-sm w-25 h-50 filters_input" form ="filtersForm" name="sort" aria-label=".form-select-sm example">
                                    <option selected>Sort by</option>
                                    <option value="price-ascending">price ascending</option>
                                    <option value="price-descending">price descending</option>
                                    <option value="rating-ascending">rating ascending</option>
                                    <option value="rating-descending">rating descending</option>
                                    <option value="discount-ascending">discount ascending</option>
                                    <option value="discount-descending">discount descending</option>
                                </select>

                                <div class = "d-flex flex-row gap-1">
                                    <button id="sort-view4" type="button" class="btn p-1">
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
                                    <button id="sort-view2" type="button" class="btn p-1">
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
                                </div>`;
    }
}

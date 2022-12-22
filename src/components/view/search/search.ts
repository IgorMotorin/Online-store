export class Search {
   
   

render() {
    return `
            <div class="input-group mb-3 w-50 container search p-3">                                                        
                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search...">
                <datalist id="datalistOptions">
                    <option value="Samsung Universe 9">
                    <option value="iPhone X">
                    <option value="MacBook Pro 2021">                       
                </datalist>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
  `;
}

}
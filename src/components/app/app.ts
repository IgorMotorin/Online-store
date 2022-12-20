import { View } from '../view';

export class App {   
    
      view: View;    
     
      constructor() {        
        this.view = new View();
        this.view.render();
      }


}
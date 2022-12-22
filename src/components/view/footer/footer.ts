import '../../../assets/icons/rs-school-js.svg';
import '../../../assets/icons/github-mark-white.svg';

export class Footer {
    render() {
        return `<div class="container">
                    <footer class="d-flex flex-wrap justify-content-between align-items-center pt-2 mt-3 mb-2 border-top">
                        <p class="col-md-4 mb-0 text-muted">created 2022</p>            
                        <ul class="nav col-md-6 justify-content-end align-items-center d-flex gap-2">
                            <li class="nav-item">
                                <a href="https://rs.school/js/" class="">
                                    <div class="opacity-50"  style="background-image: url(./assets/rs-school-js.svg);width: 100px;height: 40px;background-repeat: no-repeat;background-size: contain;">
                                    </div>
                                </a>
                            </li>                            
                            <li class="nav-item">                            
                                <a href="https://github.com/IgorMotorin" class="nav-link px-2 text-muted">
                                    <div class="opacity-50"  style="background-image: url(./assets/github-mark-white.svg);width: 49px;height: 48px;background-repeat: no-repeat;background-size: 104%;background-color: black;border-radius: 84%;background-position: center;">
                                    
                                    </div>                                    
                                </a>                                
                            </li>
                            <li class="nav-item">                            
                                <a href="https://github.com/DenisKa13051992" class="nav-link px-2 text-muted">
                                    <div class="opacity-50"  style="background-image: url(./assets/github-mark-white.svg);width: 49px;height: 48px;background-repeat: no-repeat;background-size: 104%;background-color: black;border-radius: 84%;background-position: center;">
                                    
                                    </div>                                    
                                </a>                                
                            </li>                           
                        </ul>
                    </footer>
                </div>`;
            }
}
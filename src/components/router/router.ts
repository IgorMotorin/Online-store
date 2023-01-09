import { Controller } from '../controller';
import { queryOptions } from '../interface/interface';

export class Router {
    url: URL;
    query: queryOptions;
    controller: Controller;

    constructor() {
        this.url = new URL(location.href);
        this.query = this.getURLtoQuery(location.href);
        this.controller = new Controller(this);
        this.controller.addEventHeader();
        this.controller.addEventURL();
        this.controller.addEventProducts();
        this.controller.addEventFilters();
        this.controller.updateView(this.url, this.query);
    }

    readURL(): void {
        this.url = new URL(location.href);
        this.query = this.getURLtoQuery(location.href);
    }

    getURLtoQuery(url: string): queryOptions {
        const _url: URL = new URL(url);
        const _params: URLSearchParams = new URLSearchParams(_url.search);
        const query = Array.from(_params.keys()).reduce((sum, value) => {
            return Object.assign({ [value]: _params.get(value)?.split(',') }, sum);
        }, {});
        return query;
    }

    addEventUrl(): void {
        addEventListener('popstate', () => {
            this.readURL();
            this.controller.updateView(this.url, this.query);
        });
    }
}

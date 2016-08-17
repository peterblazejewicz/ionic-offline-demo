
import {Injectable} from '@angular/core';
import {Http, Request, Response, RequestOptionsArgs} from '@angular/http';
import {Alert, NavController} from 'ionic-angular';
import {Network, Connection} from 'ionic-native';
import { NetworkService } from './networkService'

@Injectable()
export class SafeHttp {

    constructor(private http: Http, private networkService: NetworkService) {
    }

    public request(url: string | Request, options?: RequestOptionsArgs) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        } else { return this.http.request(url, options) }
    }

    public get(url: string, options?: RequestOptionsArgs) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        } else { return this.http.get(url, options) }
    }

    public post(url: string, body: string, options?: RequestOptionsArgs) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        } else { return this.http.post(url, body, options) }
    }

    public put(url: string, body: string, options?: RequestOptionsArgs) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        } else { return this.http.put(url, body, options) }
    }

    public delete(url: string, options?: RequestOptionsArgs) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        } else { return this.http.delete(url, options) }
    }

    public patch(url: string, body: string, options?: RequestOptionsArgs) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        } else { return this.http.patch(url, body, options) }

    }

    public head(url: string, options?: RequestOptionsArgs) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        } else { return this.http.head(url, options) }
    }

}
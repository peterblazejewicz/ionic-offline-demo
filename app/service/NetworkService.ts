import {Injectable} from '@angular/core';
import {Http, Request, Response, RequestOptionsArgs} from '@angular/http';
import {Alert, NavController} from 'ionic-angular';
import {Network, Connection} from 'ionic-native';


@Injectable()
export class NetworkService {

  public networkAlert: any;

  constructor(private nav: NavController) {
  }

  public noConnection() {
    return (Network.connection === 'none');
  }

  public showNetworkAlert() {
    let networkAlert = Alert.create({
      title: 'No Internet Connection',
      message: 'Please check your internet connection.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {}
        },
        {
          text: 'Open Settings',
          handler: () => {
            networkAlert.dismiss().then(() => {
              this.showSettings();
            })
          }
        }
      ]
    });
    this.nav.present(networkAlert);
  }

  private showSettings() {
    cordova.plugins.diagnostic.switchToWifiSettings();
  }

}
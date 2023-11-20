import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularGooglePay';
  buttonColor="black";
  buttonType="buy";
  isCustomSize=250;
  buttonHeight=50;
  isTop =window ===window.top;

  paymentRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {
        type:"CARD",
        parameters:{
          allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
          allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
        },
        tokenizationSpecification:{
          type:"PAYMENT_GATEWAY",
          parameters:{
            gateway:"example",
            "gatewayMerchantId":"exampleGatewayMerchantID"
          }
        }
      }
    ],
    merchantInfo:{
      merchantId:"12345678901234567890",
      merchantName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPrice:"100.00",
      currencyCode:"USD",
      countryCode:"US"
    }
  };
  onLoadPaymentData(event:any){
    console.log("Load paymnet data ",event.details)
  }
}

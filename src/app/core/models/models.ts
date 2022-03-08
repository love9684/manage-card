export interface IAddCard {
    number: string;
    expiryMonth: number;
    expiryYear: number;
    cvv?: number;
    type: 'debit card' | 'credit card' | 'prepaid card'| 'electronic card';
    paymentGateway: 'visa' | 'master' | 'amex' | 'rupay';
}

export interface ICard extends IAddCard {
    id?: number;
}

export interface ICardAPIResponse {
    resultCode: string;
    resultMessage: string;
}

export interface IGetAllCardAPIResponse extends ICardAPIResponse {
    data: ICard[];
}

export interface IAlertConfig {
    type?: 'success';
    msg: string;
    timeout?: number;
    dismissible?: boolean;
}

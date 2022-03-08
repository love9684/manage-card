export class Constants {
    public static cardRules = {
        amex: {
            initials: ['37', '34'],
            card_number_length: 15,
            cvv_length: 4,
            name: 'amex'
        },
        visa: {
            initials: ['4'],
            card_number_length: 16,
            cvv_length: 3,
            name: 'visa'
        },
        master: {
            initials: ['5'],
            card_number_length: 16,
            cvv_length: 3,
            name: 'master'
        }
    };

    public static urls = {
        svgURL: './assets/svg/'
    };

    public static values = {
        defaultCardLength: 16,
        defaultCvvLength: 3
    };
}

'use strict';

module.exports = {
  payingWith: 'Paying with {{paymentSource}}',
  chooseAnotherWayToPay: 'Choose another way to pay',
  chooseAWayToPay: 'Choose a way to pay',
  otherWaysToPay: 'Other ways to pay',
  edit: 'Edit',
  doneEditting: 'Done',
  CreditCardDeleteConfirmationMessage: 'Are you sure you want to delete card ending in {{identifier}}?',
  PayPalAccountDeleteConfirmationMessage: 'Are you sure you want to delete PayPal account with email {{identifier}}?',
  VenmoAccountDeleteConfirmationMessage: 'Are you sure you want to delete Venmo account with username {{identifier}}?',
  genericDeleteConfirmationMessage: 'Are you sure you want to delete this payment method?',
  hasSubscription: 'This payment method is associated with a recurring charge and cannot be deleted.',
  paymentMethodCouldNotBeRemoved: 'Something went wrong. Payment method could not be removed.',
  cardVerification: 'Card Verification',
  // Errors
  fieldEmptyForCvv: 'Please fill out a CVV.',
  fieldEmptyForExpirationDate: 'Please fill out an expiration date.',
  fieldEmptyForCardholderName: 'Please fill out a cardholder name.',
  fieldEmptyForNumber: 'Please fill out a card number.',
  fieldEmptyForPostalCode: 'Please fill out a postal code.',
  fieldInvalidForCvv: 'This security code is not valid.',
  fieldInvalidForExpirationDate: 'This expiration date is not valid.',
  fieldInvalidForNumber: 'This card number is not valid.',
  fieldInvalidForPostalCode: 'This postal code is not valid.',
  fieldTooLongForCardholderName: 'Cardholder name must be less than 256 characters.',
  genericError: 'Something went wrong on our end.',
  hostedFieldsTokenizationFailOnDuplicateError: 'This credit card already exists as a saved payment method.',
  hostedFieldsFailedTokenizationError: 'Please check your information and try again.',
  hostedFieldsTokenizationCvvVerificationFailedError: 'Credit card verification failed. Please check your information and try again.',
  hostedFieldsTokenizationNetworkErrorError: 'Network error. Please try again.',
  hostedFieldsFieldsInvalidError: 'Please check your information and try again.',
  paypalAccountTokenizationFailedError: 'Something went wrong adding the PayPal account. Please try again.',
  paypalFlowFailedError: 'Something went wrong connecting to PayPal. Please try again.',
  paypalTokenizationRequestActiveError: 'PayPal payment authorization is already in progress.',
  applePayTokenizationError: 'A network error occurred while processing the Apple Pay payment. Please try again.',
  applePayActiveCardError: 'Add a supported card to your Apple Pay wallet.',
  venmoCanceledError: 'Something went wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.',
  venmoAppFailedError: 'The Venmo app could not be found on your device.',
  unsupportedCardTypeError: 'This card type is not supported. Please try another card.',
  // Card form
  cardholderNameLabel: 'Cardholder Name',
  cardNumberLabel: 'Card Number',
  cvvLabel: 'CVV',
  cvvThreeDigitLabelSubheading: '(3 digits)',
  cvvFourDigitLabelSubheading: '(4 digits)',
  expirationDateLabel: 'Expiration Date',
  expirationDateLabelSubheading: '(MM/YY)',
  cardholderNamePlaceholder: 'Cardholder Name',
  expirationDatePlaceholder: 'MM/YY',
  postalCodeLabel: 'Postal Code',
  payWithCard: 'Pay with card',
  // Payment Method descriptions
  endingIn: 'Ending in ••{{lastTwoCardDigits}}',
  Card: 'Card',
  PayPal: 'PayPal',
  'PayPal Credit': 'PayPal Credit',
  'Apple Pay': 'Apple Pay',
  'Google Pay': 'Google Pay',
  'Venmo': 'Venmo',
  'American Express': 'American Express',
  Discover: 'Discover',
  'Diners Club': 'Diners Club',
  MasterCard: 'Mastercard',
  Visa: 'Visa',
  JCB: 'JCB',
  Maestro: 'Maestro',
  UnionPay: 'UnionPay'
};

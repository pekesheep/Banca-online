import { parseMessageWithCustomArgs } from '@lemoncode/fonk';

const validatorType = 'MY_IBAN_VALIDATOR';
const isIBAN = /^[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?$/;

let defaultMessage = '';
export const setErrorMessage = message => (defaultMessage = message);

const hasValidCode = (value) =>
    value &&
    isIBAN.test(value);

export const ibanValidator = fieldValidatorArgs => {
    const { value, message = defaultMessage } = fieldValidatorArgs;

    const validationResult = {
        succeeded: false,
        type: validatorType,
        message: parseMessageWithCustomArgs(message),
    };

    if (hasValidCode(value)) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
};

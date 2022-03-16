import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { ibanValidator } from './transfer.ibanValidations'
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

const validationSchema = {
    field: {
        iban: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: ibanValidator,
                message: 'IBAN no válido',
            },
        ],
        name: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },

        ],
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: positiveNumber.validator,
                message: 'El campo debe de ser un valor numérico',
            },
        ],
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },

        ],
        notes: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },

        ],
        email: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'Email no válido',
            },
        ],
        day: [
            {
                validator: Validators.required,
                message: '',
            },
            {
                validator: rangeNumber.validator,
                customArgs: {
                    strictTypes: false,
                    min: {
                        value: 1,
                        inclusive: true,
                    },
                    max: {
                        value: 31,
                        inclusive: true,
                    },
                },

                message: '',
            },
        ],
        month: [
            {
                validator: Validators.required,
                message: '',
            },
            {
                validator: rangeNumber.validator,
                customArgs: {
                    strictTypes: false,
                    min: {
                        value: 1,
                        inclusive: true,
                    },
                    max: {
                        value: 12,
                        inclusive: true,
                    },
                },

                message: '',
            },
        ],
        year: [
            {
                validator: Validators.required,
                message: '',
            },
            {
                validator: positiveNumber.validator,
                message: '',
            },
        ],
        date: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: laterDate.validator,
                message: 'La fecha ha de ser posterior a la actual',
                customArgs: {
                    date: new Date(`${today}` + 'T00:00:00'),
                    parseStringToDateFn: value => new Date(value),
                },
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);
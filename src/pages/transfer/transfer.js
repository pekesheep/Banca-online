import { setAccountOptions } from "./transfer.helpers";
import { getAccountList, addTransfer } from "./transfer.api";
import { history } from '../../core/router';
import { formValidation } from './transfer.validations';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';


const params = history.getParams();

getAccountList(params.id).then(transf => {
  setAccountOptions(transf);
});

let field = {
  id: params.id,
  name: '',
  iban: '',
  amount: '',
  concept: '',
  notes: '',
  email: '',
  day: '',
  month: '',
  year: '',
  date: '',
};

onUpdateField('name', event => {
  const value = event.target.value;
  field = {
    ...field,
    name: value,
  };

  formValidation.validateField('name', field.name).then(result => {
    onSetError('name', result);
  });
});

onUpdateField('iban', event => {
  const value = event.target.value;
  field = {
    ...field,
    iban: value,
  };

  formValidation.validateField('iban', field.iban).then(result => {
    onSetError('iban', result);
  });
});


onUpdateField('amount', event => {
  const value = event.target.value;
  field = {
    ...field,
    amount: value,
  };

  formValidation.validateField('amount', field.amount).then(result => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', event => {
  const value = event.target.value;
  field = {
    ...field,
    concept: value,
  };

  formValidation.validateField('concept', field.concept).then(result => {
    onSetError('concept', result);
  });
});

onUpdateField('notes', event => {
  const value = event.target.value;
  field = {
    ...field,
    notes: value,
  };

  formValidation.validateField('notes', field.notes).then(result => {
    onSetError('notes', result);
  });
});

onUpdateField('email', event => {
  const value = event.target.value;
  field = {
    ...field,
    email: value,
  };

  formValidation.validateField('email', field.email).then(result => {
    onSetError('email', result);
  });
});

onUpdateField('day', event => {
  const value = event.target.value;
  field = {
    ...field,
    day: value,
    date: `${field.year}-${field.month}-${value}`,
  };

  formValidation.validateField('day', field.day).then(result => {
    onSetError('day', result);
  });
});

onUpdateField('month', event => {
  const value = event.target.value;
  field = {
    ...field,
    month: value,
    date: `${field.year}-${value}-${field.day}`,
  };

  formValidation.validateField('month', field.month).then(result => {
    onSetError('month', result);
  });
});

onUpdateField('year', event => {
  const value = event.target.value;
  field = {
    ...field,
    year: value,
    date: `${value}-${field.month}-${field.day}`,
  };

  formValidation.validateField('year', field.year).then(result => {
    onSetError('year', result);
  });
});



onSubmitForm('transfer-button', () => {
  formValidation.validateForm(field).then(result => {
    onSetFormErrors(result);
    if (result.succeeded) {
      addTransfer(field);
      history.back();
    }
  });
});
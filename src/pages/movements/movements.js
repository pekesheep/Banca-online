import { addMovementRows } from './movements.helpers';
import { getMovementsList, getAccountForPrint } from './movements.api';
import { mapMovementsListFromApiToViewModel, mapAccountInfoFromApiToViewModel } from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';


const params = history.getParams();

getMovementsList(params.id).then(movement => {
    let account = mapMovementsListFromApiToViewModel(movement);
    addMovementRows(account);
});



getAccountForPrint(params.id).then(accountApi => {
    let account = mapAccountInfoFromApiToViewModel(accountApi);
    onSetValues(account);
});

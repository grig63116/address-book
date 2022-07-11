import * as actionTypes from './actionTypes';

export function addContacts(contacts: Array<IContact>) {
    const action: ContactAction = {
        type: actionTypes.ADD_CONTACT,
        contacts,
    };

    return dispatchAction(action);
}

export const selectContacts = (state: ContactState) => state.contacts

export function dispatchAction(action: ContactAction) {
    return (dispatch: DispatchType) => {
        dispatch(action);
    };
}
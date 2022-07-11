import { ADD_CONTACT } from '@/store/actionTypes';

const initialState: ContactState = {
    contacts: [],
};

const reducer = (
    state: ContactState = initialState,
    action: ContactAction,
): ContactState => {
    switch (action.type) {
    case ADD_CONTACT:
        const contacts: Array<IContact> = action.contacts.map((contact: IContact) => {
            return {
                id: Math.random(),
                name: contact.name,
                number: contact.number,
            };
        });
        return {
            ...state,
            contacts: state.contacts.concat(contacts),
        };
    }
    return state;
};

export default reducer;
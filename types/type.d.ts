interface IContact {
    name: string;
    number: string;
}

interface IContacts extends Array<IContact> {}

type ContactState = {
    contacts: IContacts
}

type ContactAction = {
    type: string
    contacts: IContacts
}

type ContactForm = IContact

type DispatchType = (args: ContactAction) => ContactAction
import { FunctionComponent } from 'react';
import Contact from '@/components/Contact';

type Props = {
    contacts: IContacts
}

const Contacts: FunctionComponent<Props> = ({ contacts }) => {
    return (

        <table className="table-auto w-full text-sm text-left text-gray-100 shadow-md">
            <thead className={'text-xs text-gray-100 uppercase bg-gray-700'}>
            <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Phone number</th>
            </tr>
            </thead>
            <tbody>
            {contacts.sort((a, b) => a.name.localeCompare(b.name)).map((contact: IContact, index) => (
                <Contact
                    key={index}
                    name={contact.name}
                    number={contact.number}
                />
            ))}
            </tbody>
        </table>
    );
};

export default Contacts;
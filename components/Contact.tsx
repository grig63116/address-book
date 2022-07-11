import { FunctionComponent } from 'react';

const Contact: FunctionComponent<IContact> = ({ name, number }) => {
    return (
        <tr className={'border-b bg-gray-200 border-gray-100 text-gray-700 odd:bg-gray-100 even:bg-gray-200'}>
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                {name}
            </th>
            <td>
                <a
                    href={`tel:${number}`}
                    className={'underline text-blue-600 hover:text-blue-800 visited:text-purple-600'}
                >
                    {number}
                </a>
            </td>
        </tr>
    );
};

export default Contact;
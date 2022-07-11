import type { NextPage } from 'next';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Message from '@/components/Message';

import { useAppSelector } from '@/store/hooks';
import {
    selectContacts,
} from '@/store/actionCreators';

const ContactsPage: NextPage = () => {
    const contacts = useAppSelector(selectContacts),
        limit = process.env.limit || 300;

    return (
        <div className={'container mx-auto'}>
            <Head title={'Contacts'}/>
            <Header/>

            <main className={'max-w-lg my-9 mx-auto'}>
                {contacts.length ?
                    <>
                        {contacts.length == limit &&
                            <Message
                                type={'info'}
                                message={`Your address book is already full, you have reached the limit of ${limit} contacts.`}
                            />
                        }
                        <Contacts contacts={contacts}/>
                    </>
                    :
                    <Message type={'warning'} message={'Your address book is empty.'}/>
                }
            </main>
        </div>
    );
};

export default ContactsPage;

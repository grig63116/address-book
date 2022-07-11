import { useState, useEffect, ChangeEvent } from 'react';
import type { NextPage } from 'next';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Message from '@/components/Message';

import { useAppSelector } from '@/store/hooks';
import {
    selectContacts,
} from '@/store/actionCreators';

const Search: NextPage = () => {
    const contacts = useAppSelector(selectContacts),
        [term, setTerm] = useState<string>(''),
        [searchResults, setSearchResults] = useState<IContacts>([]),
        handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setTerm(event.target.value);
        };

    useEffect(() => {
        const results = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(term.toLowerCase()) || contact.number === term;
        });
        setSearchResults(results);
    }, [term]);

    return (
        <div className={'container mx-auto'}>
            <Head title={'Search'}/>
            <Header/>

            <main className={'max-w-lg my-9 mx-auto'}>
                {contacts.length ?
                    <>
                        <Message
                            type={'info'}
                            message={`Search by part of the Name or exact Phone Number.`}
                        />
                        <div className={'max-w-xs mx-auto my-3 relative'}>
                            <div className={'absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'}>
                                <svg
                                    className={'w-5 h-5 text-gray-500'} fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule={'evenodd'}
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule={'evenodd'}
                                    ></path>
                                </svg>
                            </div>
                            <input
                                className={'bg-gray-100 border-gray-700 placeholder-gray-500 text-gray-700 focus:ring-blue-500 focus:border-blue-500 border text-sm rounded block w-full pl-10 p-2.5'}
                                type={'text'}
                                placeholder={'Search...'}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={'max-w-lg mt-9 mx-auto'}>
                            {searchResults.length ?
                                <Contacts contacts={searchResults}/>
                                :
                                <Message type={'warning'} message={`No contact found with search term '${term}'.`}/>
                            }
                        </div>
                    </>
                    :
                    <Message type={'warning'} message={'Your address book is empty.'}/>
                }
            </main>
        </div>
    );
};

export default Search;

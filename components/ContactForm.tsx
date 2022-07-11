import { useState, FunctionComponent } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from '@/components/FormInput';
import Contacts from '@/components/Contacts';
import Message from '@/components/Message';

import {
    addContacts,
    selectContacts,
} from '@/store/actionCreators';

const ContactForm: FunctionComponent = () => {
    const batchLimit = process.env.batchLimit || 50,
        limit = process.env.limit || 300,
        dispatch = useAppDispatch(),
        savedContacts = useAppSelector(selectContacts),
        [contacts, setContacts] = useState<IContacts>([]),
        { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<ContactForm>(
            { mode: 'onChange' }),
        onSubmit: SubmitHandler<ContactForm> = contact => {
            setContacts([...contacts, contact]);
            reset();
        },
        saveContacts = () => {
            dispatch(addContacts(contacts));
            setContacts([]);
        };

    return (
        <div className={'max-w-lg mx-auto'}>
            {savedContacts.length == limit ?
                <Message
                    type={'error'}
                    message={[
                        `Your address book is already full, you have reached the limit of ${limit} contacts.`,
                        'In order to add new contacts please refresh the page.',
                    ]}
                />
                :
                <>
                    {contacts.length == batchLimit ?
                        <Message
                            type={'warning'}
                            message={`You have reached the limit of ${batchLimit} unsaved contacts, please save them before add new ones.`}
                        />
                        :
                        <form className={'max-w-xs m-auto'} onSubmit={handleSubmit(onSubmit)}>
                            <FormInput
                                type={'text'}
                                placeholder={'Name'}
                                error={errors.name}
                                {...register('name', {
                                    required: 'This field cannot be empty',
                                    pattern: {
                                        value: /^[a-zA-Z\s]*$/g,
                                        message: 'Only letters and spaces are allowed.',
                                    },
                                })}/>
                            <FormInput
                                type={'text'}
                                placeholder={'Phone number'}
                                error={errors.number}
                                {...register('number', {
                                    required: 'This field cannot be empty',
                                    pattern: {
                                        value: /^(0|\+(?!0))(\d+)?(\(\d+\))?(\d+)?$/g,
                                        message: 'Should start with either \'0\' or \'+\' (not following 0), contain only numbers and optionally could have single pair of brackets \'()\'.',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'It\'s too short.',
                                    },
                                    maxLength: {
                                        value: 19,
                                        message: 'Max length exceeded.',
                                    },
                                })}/>
                            <button
                                className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded${!isValid &&
                                ' opacity-50 cursor-not-allowed'}`}
                                disabled={!isValid}
                                type="submit"
                            >Add
                            </button>
                        </form>
                    }

                    <button
                        className={`w-full max-w-xs block mt-6 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded${!contacts.length &&
                        ' opacity-50 cursor-not-allowed'}`}
                        disabled={!contacts.length}
                        aria-label="Save contacts"
                        onClick={saveContacts}
                    >
                        Save contacts
                    </button>
                </>
            }

            <div className={'mt-9'}>
                {contacts.length > 0 && <Contacts contacts={contacts}/>}
            </div>
        </div>
    );
};

export default ContactForm;
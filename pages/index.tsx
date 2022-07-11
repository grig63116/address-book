import type { NextPage } from 'next';
import Head from '@/components/Head';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

const Home: NextPage = () => {
    return (
        <div className={'container mx-auto'}>
            <Head title={'Home'}/>
            <Header/>

            <main className={'mb-9'}>
                <ContactForm/>
            </main>
        </div>
    );
};

export default Home;

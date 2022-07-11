import { FunctionComponent } from 'react';
import NavLink from '@/components/NavLink';

const Header: FunctionComponent = () => {
    return (
        <header className={'mb-5'}>
            <nav className="flex flex-row space-x-3 justify-center items-center text-sm font-medium bg-white p-2">
                <NavLink href={'/'} text={'Home'}/>
                <NavLink href={'/contacts'} text={'Contacts'}/>
                <NavLink href={'/search'} text={'Search'}/>
            </nav>
        </header>
    );
};

export default Header;
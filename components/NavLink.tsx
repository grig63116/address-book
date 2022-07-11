import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

type Props = LinkProps & {
    text: string,
}

const NavLink: FunctionComponent<Props> = ({ text, href, ...props }) => {
    const router = useRouter();
    return (
        <Link
            href={href}
            {...props}
        >
            <a
                className={`block py-2 px-3 border-b-2 hover:text-blue-500 hover:border-b-blue-500 ${router.pathname ===
                href
                    ? 'text-blue-500 border-b-blue-500'
                    : 'text-gray-500 border-b-transparent'}`}
            >
                {text}
            </a>
        </Link>
    );
};

export default NavLink;
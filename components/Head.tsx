import { FunctionComponent } from 'react';
import NextHead from 'next/head';

type Props = {
    title: string
}

const Head: FunctionComponent<Props> = ({ title }) => {
    return (
        <NextHead>
            <title>Address book | {title}</title>
            <meta name="description" content={title}/>
            <link rel="icon" href="/favicon.ico"/>
        </NextHead>
    );
};

export default Head;
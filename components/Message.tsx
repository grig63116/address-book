import { FunctionComponent } from 'react';

type Props = {
    type: 'error' | 'warning' | 'info',
    message: string | Array<string>
}

const ColorClasses = {
    'error': 'bg-red-100 border-red-500 text-red-700',
    'warning': 'bg-orange-100 border-orange-500 text-orange-700',
    'info': 'bg-blue-100 border-blue-500 text-blue-700',
};

const Message: FunctionComponent<Props> = ({ type, message }) => {
    const messages = message instanceof Array ? message : [message],
        colorClass = ColorClasses[type];

    return (
        <div className={`my-3 border-l-4 p-4 ${colorClass}`} role="alert">
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    );
};

export default Message;
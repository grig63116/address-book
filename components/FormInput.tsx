import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError;
    ref: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error, ...props }, ref) => {
    return (
        <div className="mb-6">
            <input
                className={`w-full shadow rounded${error &&
                ' border-red-500 focus:border-red-700 focus:ring-transparent'}`}
                {...props}
                ref={ref}
            />
            {error &&
                <p className="mt-2 text-red-500 text-xs italic">{error.message}</p>
            }
        </div>
    );
};

const FormInput = React.forwardRef(Input);

export default FormInput;
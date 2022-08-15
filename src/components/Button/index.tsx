import React from 'react';
import './button.css';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
    testId?: string;
}

const Button = ({ primary = false, size = 'medium', backgroundColor, label, testId, ...props }: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    console.log(mode);
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            {...(testId ? { 'data-testid': testId } : {})}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;

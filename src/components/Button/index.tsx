import React from 'react';
import './button.css';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;

    testId: string;
}

/**
 * Primary UI component for user interaction
 */
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

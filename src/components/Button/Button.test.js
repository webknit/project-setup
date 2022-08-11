import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './index';

describe('<Button />', () => {
    describe('snapshot tests', () => {
        test('should render with no data', () => {
            const tree = renderer.create(<Button label="hello" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('unit tests', () => {
        it('should render with label args as text', async () => {
            render(<Button testId={'test-button'} label="In here!" />);
            const element = await screen.findByTestId('test-button');
            expect(element.textContent).toEqual('In here!');
        });
    });
});

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
        // test('should render ', () => {
        //     render(<Button />);
        // });
    });
});

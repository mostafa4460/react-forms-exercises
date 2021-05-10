import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const {asFragment} = render(<BoxList />);
  expect(asFragment).toMatchSnapshot();
});

it('adds new boxes', () => {
    const {queryAllByText, getByLabelText, getByText} = render(<BoxList />);
    const btns = queryAllByText("X");
    expect(btns.length).toBe(3);

    const colorInput = getByLabelText("Color:");
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    fireEvent.change(colorInput, {target: {value: "#000000"}});
    fireEvent.change(widthInput, {target: {value: "100px"}});
    fireEvent.change(heightInput, {target: {value: "100px"}});

    fireEvent.click(getByText("Add Box"));
    expect(queryAllByText("X").length).toBe(4);
});

it('removes boxes', () => {
    const {queryAllByText, getByText} = render(<BoxList />);
    const btns = queryAllByText("X");
    expect(btns.length).toBe(3);

    fireEvent.click(btns[0]);
    expect(queryAllByText("X").length).toBe(2);
});
import { render, fireEvent, getDefaultNormalizer } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const {asFragment} = render(<TodoList />);
  expect(asFragment).toMatchSnapshot();
});

it('adds new todos', () => {
    const {getByLabelText, queryByText} = render(<TodoList />);
    const btn = queryByText("Add Todo");

    expect(queryByText("Walk cat")).toBeNull();

    const taskInput = getByLabelText("Task:");
    fireEvent.change(taskInput, {target: {value: "Walk cat"}});
    fireEvent.click(btn);

    expect(queryByText("Walk cat")).toBeInTheDocument();
});

it('removes todos', () => {
    const {queryAllByText} = render(<TodoList />);
    const btns = queryAllByText("X");
    expect(btns.length).toBe(3);

    fireEvent.click(btns[0]);
    expect(queryAllByText("X").length).toBe(2);
});
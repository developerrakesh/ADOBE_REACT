import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

 test('renders Home page', () => {
    render(<App />);
    const elem = screen.getByText(/Customer Application/i);
    expect(elem).toBeInTheDocument();
  });
  
  it("renders customers", () => {
    // render(<App />);
    // let btns = screen.queryAllByRole('button');
    // expect(btns.length).toBe(6);

    let {container} = render(<App />);
    let btns = container.querySelectorAll('.row');
    expect(btns.length).toBe(6);
  });

  it("delete a customer", () => {
    render(<App />);
    let btns = screen.queryAllByRole('button');
    fireEvent.click(btns[3]);
    btns = screen.queryAllByRole('button');
    expect(btns.length).toBe(5);
  });
 
  // it("filter customers", () => {
  //   render(<App />);
  //   let txtBox = screen.getByPlaceholderText("search by name");
  //   fireEvent.change(txtBox, {"target": {"value": "Geller"}});
  //   let btns = screen.queryAllByRole('button');
  //   expect(btns.length).toBe(2);
  // });

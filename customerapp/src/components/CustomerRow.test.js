import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';

// Mock or sample data for "customer" props
// mock deleteCustomer
// render(<CustomerRow delEvent={(id) => this.deleteCustomer(id)}  customer={c} key={c.id} />);

// Test Suite
describe("testing customer row component", () => {
    let callback = jest.fn(); // mock callback function 

    let c = {
        "id": 8,
        "firstName" : "Gavin",
        "lastName": "King",
        "gender" : "male",
        "address": ""
    };

    it("renders customer row", () => {
        render(<CustomerRow delEvent={(id) => callback(id)}  customer={c} key={c.id} />);
        let elem  = screen.getByText(/King/i);
        expect(elem).toBeInTheDocument();
        // screen.debug();
    });

    it("delete a customer", () => {
        render(<CustomerRow delEvent={(id) => callback(id)}  customer={c} key={c.id} />);
        let btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(8);

    });

});
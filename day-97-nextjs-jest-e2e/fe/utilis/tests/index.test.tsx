import Home from "@/pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders calculator", () => {
    render(<Home />);
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });

  it("adds to numbers", () => {
    render(<Home />);
    const num1linput = screen.getByTestId("num1");
    const num2linput = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const result = screen.getByTestId("result");

    fireEvent.change(num1linput, { target: { value: 5 } });
    fireEvent.change(num2linput, { target: { value: 8 } });

    fireEvent.click(addButton);

    expect(result).toHaveTextContent("13");
  });

  it("subtract to numbers", () => {
    render(<Home />);
    const num1linput = screen.getByTestId("num1");
    const num2linput = screen.getByTestId("num2");
    const result = screen.getByTestId("result");
    const subtractButton = screen.getByTestId("subtract");

    fireEvent.change(num1linput, { target: { value: 5 } });
    fireEvent.change(num2linput, { target: { value: 8 } });

    fireEvent.click(subtractButton);

    expect(result).toHaveTextContent("-3");
  });

  it("Multiply to numbers", () => {
    render(<Home />);
    const num1linput = screen.getByTestId("num1");
    const num2linput = screen.getByTestId("num2");
    const result = screen.getByTestId("result");

    const multiplyButton = screen.getByTestId("multiply");

    fireEvent.change(num1linput, { target: { value: 5 } });
    fireEvent.change(num2linput, { target: { value: 8 } });

    fireEvent.click(multiplyButton);

    expect(result).toHaveTextContent("40");
  });

  it("Divide to numbers", () => {
    render(<Home />);

    const num1linput = screen.getByTestId("num1");
    const num2linput = screen.getByTestId("num2");
    const result = screen.getByTestId("result");

    const divideButton = screen.getByTestId("divide");

    fireEvent.change(num1linput, { target: { value: 5 } });
    fireEvent.change(num2linput, { target: { value: 8 } });

    fireEvent.click(divideButton);

    expect(result).toHaveTextContent("0.625");
  });
});

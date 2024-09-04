import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact page test cases", () => {
    test("Should load contact us page", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("check input with placeholder name in contact us page", () => {
        render(<Contact />);
    
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });
    
    test("check submit button  in contact us page", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("should load button inside contact us page", () => {
        render(<Contact />);
    
        const submit = screen.getByRole("button");
        expect(submit).toBeInTheDocument();
    });
    
    it("should load 2 input boxes inside contact us page", () => {
        render(<Contact />);
    
        const inputboxs = screen.getAllByRole("textbox");
        expect(inputboxs.length).toBe(2);
    });

    //it is the alias of test 

});

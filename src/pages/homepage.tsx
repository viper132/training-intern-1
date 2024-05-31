import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/input";
import * as math from "mathjs";
const calculatorButton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const HomePage: React.FC = () => {
    const [expression, setExpression] = useState<string>("");
    const [screenVal, setScreenVal] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpression(e.target.value);
    };

    const handleClick = (input: string) => {
        setExpression((prevExpression) => prevExpression + input);
    };

    const calculate = () => {
        try {
            const result = math.evaluate(expression);
            if (typeof result === "number" && !isNaN(result)) {
                setScreenVal(Number(result).toString());
            } else {
                setScreenVal("Error: Invalid expression");
            }
        } catch (error) {
            setScreenVal("Error: Invalid expression");
        }
    };

    const clearScreen = () => {
        setExpression("");
        setScreenVal("");
    };

    const backspace = () => {
        const newExpression = expression.slice(0, -1);
        setExpression(newExpression);
    };

    return (
        <div className="flex flex-col gap-2 m-2">
            <Input
                placeholder="Angka"
                type="text"
                value={expression}
                onChange={handleChange}
            />
            <div className="grid grid-cols-3 gap-2">
                {calculatorButton.map((num) => (
                    <Button
                        key={num}
                        text={String(num)}
                        onPencet={() => handleClick(String(num))}
                    />
                ))}
                <Button onPencet={() => handleClick(".")} text="." />
                <Button onPencet={calculate} text="=" />
                <Button onPencet={() => handleClick("+")} text="+" />
                <Button onPencet={() => handleClick("-")} text="-" />
                <Button onPencet={() => handleClick("*")} text="*" />
                <Button onPencet={() => handleClick("/")} text="/" />
                <Button onPencet={clearScreen} text="C" />
                <Button onPencet={backspace} text="del" />
            </div>
            <div className="bg-slate-500 w-[30vw] h-[10vh] rounded-lg text-white text-2xl">
                Output: {screenVal}
            </div>
        </div>
    );
};

export default HomePage;
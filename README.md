# React MathQuill

## Install
```bash
npm i react-mq --save
```
```bash
yarn add react-mq
```
## Usage
```js
import {  useState } from "react";
import { MathQuillEditor, MathQuillStatic } from "react-mq";
import 'mathquill-node/lib/mathquill.css';

const Editor = () => {
    const [latex, setLatex] = useState("x\\ =\\ \\frac{\\sqrt{4}}{6}");

    return (
        <div>
            <MathQuillEditor
                latex={latex}
                config={{
                    handlers: {
                        edit: (mathField) => {
                            setLatex(mathField.latex());
                        },
                    },
                }}
            />
            <div>
                <MathQuillStatic latex={latex} />
            </div>
            <p>{latex}</p>
        </div>
    );
};

export default Editor;
```
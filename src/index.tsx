import React from "react";
import MathQuill, { IMathFieldConfig, MathField } from "mathquill-node";

export { MathField };

type MathQuillEditorProps = {
    config?: IMathFieldConfig;
    latex?: string;
    onInitialized?: (mathField: MathField) => void;
    className?: string;
    style?: React.CSSProperties;
};

export const MathQuillEditor = (props: MathQuillEditorProps) => {
    const element = React.useRef<any>();
    const mathField = React.useRef<MathField>();

    React.useLayoutEffect(() => {
        if (!element.current) {
            return;
        }
        if (!mathField.current) {
            const MQ = MathQuill.getInterface(2);
            mathField.current = MQ.MathField(element.current, props.config);
        }
        if (mathField.current) {
            mathField.current.latex(props.latex || "");
            typeof props.onInitialized === "function" && props.onInitialized(mathField.current);
        }
    }, [element]);

    React.useEffect(() => {
        if (mathField.current) {
            const latex = props.latex || "";
            mathField.current.latex() !== latex && mathField.current.latex(latex);
        }
    }, [props.latex]);

    return <div className={props.className} style={props.style} ref={element} />;
};

export const MathQuillStatic = ({
    latex,
    className,
    style,
}: {
    latex: string;
    className?: string;
    style?: React.CSSProperties;
}) => {
    const element = React.useRef<any>();
    const mathField = React.useRef<MathField>();

    React.useLayoutEffect(() => {
        if (!element.current) {
            return;
        }
        if (!mathField.current) {
            const MQ = MathQuill.getInterface(2);
            mathField.current = MQ.StaticMath(element.current);
        }
        if (mathField.current) {
            mathField.current.latex(latex);
        }
    }, [element]);

    React.useEffect(() => {
        if (mathField.current) {
            mathField.current.latex(latex);
        }
    }, [latex]);

    return <span className={className} ref={element} style={style} />;
};

export default MathQuillEditor;

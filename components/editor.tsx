import { useRef, useEffect } from "react";
import { basicSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export default function Editor({ defaultValue, setMdValue }: { defaultValue: string, setMdValue: (value: string) => void }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const view = new EditorView({
      doc: defaultValue,
      extensions: [
        basicSetup, 
        markdown({ codeLanguages: languages }), 
        keymap.of([indentWithTab]),
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            const newValue = update.state.doc.toString();
            setMdValue(newValue);
          }
        })
      ],
      parent: container.current,
    });

    return () => {
      view.destroy();
    };
  }, [defaultValue, setMdValue]);

  return <div ref={container}></div>
}
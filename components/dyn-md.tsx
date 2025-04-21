"use client"

import "hf-mdrd/css/hf-mdrd.css";

import { useState, useEffect } from "react";
import Editor from "./editor";

type WasmModule = typeof import("hf-mdrd");

export default function DynMD({ markdown }: { markdown: string }) {
  const [wasm, setWasm] = useState<WasmModule | null>(null);
  const [html, setHtml] = useState<string>("");
  const [md, setMd] = useState<string>(markdown);

  useEffect(() => {
    const loadWasm = async () => {
      try {
        const wasmModule = await import("hf-mdrd");
        setWasm(wasmModule);
      } catch (error) {
        console.error("Failed to load WebAssembly module", error);
      }
    };

    loadWasm();
  }, []);

  useEffect(() => {
    setHtml(wasm ? wasm.md_to_html(md) : md);
  }, [wasm, md]);

  useEffect(() => {
    if(wasm) {
      setHtml(wasm.md_to_html(markdown));
    }
  }, [wasm, markdown]);

  return (
    <div className="grid md:grid-cols-2 gap-10 h-full w-full max-md:grid-rows-2">
      <div className="h-full overflow-y-auto">
        <Editor defaultValue={markdown} setMdValue={setMd} />
      </div>
      <div className="h-full overflow-y-auto">
        <div className="hf-mdrd-body" dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </div>
  );
}
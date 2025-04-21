import { readFileSync } from "fs";

export function getExampleMarkdown(): Promise<string> {
  return new Promise((resolve) => {
    const filePath = `${process.cwd()}/assets/example.md`;
    const markdown = readFileSync(filePath, "utf-8");
    return resolve(markdown);
  });
}
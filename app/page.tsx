import "hf-mdrd/css/hf-mdrd.css";

import { getExampleMarkdown } from "@/lib/get-example";
import { md_to_html } from "hf-mdrd";
import Link from "next/link";

export default async function Home() {
  const markdown = await getExampleMarkdown();
  const html = md_to_html(markdown);

  return (
    <div className="m-4">
      <div className="mb-10">
        <p>This page shows a static rendered markdown rendered in the backend.</p>
        <p>For dynamic markdown rendered on the web, go <Link href="/dynamic" className="text-blue-500">HERE</Link></p>
      </div>
      <div className="hf-mdrd-body" dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  );
}

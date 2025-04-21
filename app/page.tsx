import { getExampleMarkdown } from "@/lib/get-example";
import DynMD from "@/components/dyn-md";
import Link from "next/link";

// import "hf-mdrd/css/hf-mdrd.css";
// import { md_to_html } from "hf-mdrd";

export default async function Home() {
  const markdown = await getExampleMarkdown();
  // const html = md_to_html(markdown);

  return (
    <div className="m-4">
      <div className="mb-10">
        <p>This page shows a static rendered markdown rendered in the backend.</p>
        <p>For dynamic markdown rendered on the web, go <Link href="/dynamic" className="text-blue-500">HERE</Link></p>
        <div>
          <div className="mt-5 text-yellow-700">
            <p>{"Currently, Next.js cannot import static wasm (or I don't know how to)"}</p>
            <p>You can see the demo by cloning repo from <a className="text-blue-500" href="https://github.com/revival0728/HF-MdRd-web">GitHub</a> and run dev</p>
            <p className="text-blue-600 mt-10 text-3xl">THE MARKDOWN DYNAMIC RENDERED DEMO PAGE STILL WORKS</p>
          </div>
          <div className="mt-3">
            <DynMD markdown={markdown} />
          </div>
        </div>
      </div>
      {/* <div className="hf-mdrd-body" dangerouslySetInnerHTML={{__html: html}}></div> */}
    </div>
  );
}

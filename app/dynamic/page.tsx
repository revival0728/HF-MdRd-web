import DynMD from "@/components/dyn-md";
import { getExampleMarkdown } from "@/lib/get-example";

export default async function Page() {
  const markdown = await getExampleMarkdown();

  return (
    <div className="p-4 absolute lef-0 top-0 h-screen w-screen overflow-hidden">
      <DynMD markdown={markdown} />
    </div>
  );
}
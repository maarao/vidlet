import Image from "next/image";
import Upload from "/app/components/upload";
import Generate from "/app/components/generate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Upload></Upload>
      <Generate></Generate>
    </main>
  );
}

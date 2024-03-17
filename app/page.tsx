import Image from "next/image";
import Upload from "./components/upload";
import Generate from "./components/generate";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <p className="text-3xl w-64 pb-10">With Vidlet, anyone can easily upload an educational video and receive back flashcards to study with—in under a minute.</p>
      <Upload></Upload>
      <Generate></Generate>
    </main>
  );
}

import Image from "next/image";
import Upload from "./components/upload";
import Generate from "./components/generate";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className={inter.className}>
        <p className="text-3xl w-[750px] pb-10 text-center">With Vidlet, anyone can easily upload an educational video and receive back flashcards to study with—in under a minute.</p>
      </div>
      <Upload></Upload>
      <Generate></Generate>
    </main>
  );
}

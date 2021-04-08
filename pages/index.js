import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="py-44 bg-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-black">
            Next.js and TailwindCSS Boilerplate!
          </h2>
          <h3 className="text-2xl mb-8 text-black-200">
            Use this boilerplate to complete your projects quickly.
          </h3>
          <Link href="https://github.com/stmeem/nextjs-tailwindcss-boilerplate">
            <button className="bg-blue-400 hover:bg-blue-500 text-white  rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
              Explore now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

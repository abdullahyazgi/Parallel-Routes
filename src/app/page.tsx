import Link from "next/link";

const HomePage = () => {
  return (
    <section className="p-10">
      <h1 className="text-2xl mb-3 font-bold">Home Page</h1>
      <Link href={`/dashboard`} className="text-blue-700 underline">
        Go to dashboard
      </Link>
    </section>
  );
}

export default HomePage
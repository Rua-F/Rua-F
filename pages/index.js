import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold">Freelance Data Services</h1>
      <p className="text-lg mt-2 text-gray-600">Web Scraping | Data Cleaning | Data Analysis</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Web Scraping</h2>
          <p className="text-gray-500">Automate data extraction from websites.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Data Cleaning</h2>
          <p className="text-gray-500">Ensure structured, high-quality data.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Data Analysis</h2>
          <p className="text-gray-500">Gain insights and visualize your data.</p>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/portfolio">
          <a className="px-4 py-2 bg-blue-600 text-white rounded-lg">View Portfolio</a>
        </Link>
      </div>
    </div>
  );
}

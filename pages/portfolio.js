export default function Portfolio() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="text-gray-600">Here are some of my recent projects.</p>
  
        <div className="mt-6">
          <ul className="list-disc text-gray-700">
            <li>📌 Web Scraping Project - Extracting news articles</li>
            <li>📌 Data Cleaning - Organizing messy datasets</li>
            <li>📌 Data Visualization - Creating charts and insights</li>
          </ul>
        </div>
      </div>
    );
  }
  
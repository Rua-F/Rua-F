import Link from 'next/link';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Freelance Data Services</h1>
      <p className="text-lg text-gray-300">
        Web Scraping | Data Cleaning | Data Analysis
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2 text-pastel-accent">Web Scraping</h2>
            <p className="text-gray-400">
              Automate data extraction from websites efficiently.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2 text-pastel-accent">Data Cleaning</h2>
            <p className="text-gray-400">
              Ensure high-quality, structured, and clean data.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2 text-pastel-accent">Data Analysis</h2>
            <p className="text-gray-400">
              Gain insights and visualize your data effectively.
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <Link href="/portfolio">
          <Button>View Portfolio</Button>
        </Link>
      </div>
    </div>
  );
}

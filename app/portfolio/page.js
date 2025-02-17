import { Card, CardContent } from '../../components/ui/Card';

export default function PortfolioPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-pastel-accent">My Recent Projects</h1>
      <p className="text-gray-300 mb-6">
        Showcase of my latest data projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold text-pastel-accent">Project 1</h2>
            <p className="text-gray-400 mt-2">
              A detailed description of the first project.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold text-pastel-accent">Project 2</h2>
            <p className="text-gray-400 mt-2">
              Details about the second project.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

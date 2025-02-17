// components/ui/card.js

export function Card({ children }) {
    return (
      <div className="bg-dark-card rounded-lg shadow-md p-4 border border-gray-700">
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  
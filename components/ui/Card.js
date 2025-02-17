export function Card({ children }) {
    return <div className="p-4 bg-white rounded-lg shadow-md">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
  }
  
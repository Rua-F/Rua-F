'use client';

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-pastel-accent text-dark-bg rounded-lg hover:opacity-90 transition"
    >
      {children}
    </button>
  );
}

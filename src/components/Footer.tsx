
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full p-3 flex justify-center mb-[-40px]">
      <span className="text-gray-1 text-xs">© {year} - sloth </span>
    </footer>
  );
}

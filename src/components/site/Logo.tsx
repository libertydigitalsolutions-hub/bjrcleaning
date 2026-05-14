import logo from "@/assets/logo-bjr.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="BJR Cleaning — Home & Commercial Services"
      className={`w-auto transition-all duration-300 ${className}`}
    />
  );
}

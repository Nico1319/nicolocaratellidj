import logoWhite from "@/assets/logo-white.png";

export function LogoDivider() {
  return (
    <div className="flex justify-center items-center py-12 bg-background">
      <img 
        src={logoWhite} 
        alt="Nicolò Caratelli DJ Logo" 
        className="h-[4.5rem] w-auto opacity-60"
      />
    </div>
  );
}

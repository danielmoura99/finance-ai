import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      {/* ESQUERDA */}
      <div className="flex items-center gap-10">
        <Image
          src="/logo.png"
          width={173}
          height={39}
          alt="Traders House Control"
        />
        <Link href="/">Dashboard</Link>
        <Link href="/transactions">Transações</Link>
        <Link href="/subscription">Assinatura</Link>
      </div>
    </nav>
  );
};

export default Navbar;

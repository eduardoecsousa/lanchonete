import Link from "next/link";

export default function Home() {

  const actions = [
    {
      title: "Delivery",
      description: "Gerenciar Entregas",
      href: "/sales/delivery",
      icon: "🛵",
      color: "hover:border-green-500 hover:text-green-400",

    },
    {
      title: "Mesas",
      description: "Gerenciar Mesas em Aberto",
      href: "/sales/tables",
      icon: "🍽️",
      color: "hover:border-yellow-500 hover:text-yellow-400",

    },
    {
      title: "Vendas Diretas",
      description: "Acompanhar Vendas Diretas",
      href: "/sales/direct",
      icon: "🧾",
      color: "hover:border-blue-500 hover:text-blue-400",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-white mb-8">
          Painel Principal
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className={`
                group rounded-2xl bg-slate-800 p-6
                border border-slate-700
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${action.color}
              `}
            >
              <div className="text-4xl mb-4">{action.icon}</div>

              <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
                {action.title}
              </h2>

              <p className="mt-2 text-slate-400 text-sm">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

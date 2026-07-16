"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  User,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Globe,
  Grid
} from "lucide-react";
import Logo from "@/components/Logo";
import { checkIsLoggedIn, setLoginStatus } from "@/lib/dashboard-store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!checkIsLoggedIn()) {
      router.push("/login");
    } else {
      setAuthorized(true);
    }
  }, [router, pathname]);

  const handleLogout = () => {
    setLoginStatus(false);
    router.push("/login");
  };

  const navItems = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
      active: pathname === "/dashboard",
    },
    {
      label: "Blog Manager",
      href: "/dashboard/blogs",
      icon: FileText,
      active: pathname?.startsWith("/dashboard/blogs"),
    },
    {
      label: "Pages & Tiles",
      href: "/dashboard/pages",
      icon: Grid,
      active: pathname?.startsWith("/dashboard/pages"),
    },
  ];

  if (!authorized) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-brand border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-ink-soft">Verifying session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex text-ink font-sans overflow-x-hidden max-w-full">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-ink text-white flex flex-col transition-transform duration-300 transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="relative h-[76px] flex items-center justify-center">
          <Link href="/dashboard" className="flex items-center justify-center">
            <Logo size={120} className="rounded-lg" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute right-6 lg:hidden text-white/70 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-full text-sm font-semibold transition-all group ${
                  item.active
                    ? "bg-brand text-white shadow-lg shadow-brand/15"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} className={item.active ? "" : "text-white/50 group-hover:text-white"} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Quick Portal Action */}
        <div className="px-4 py-4 border-t border-white/10 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white hover:bg-white/5 transition-all"
          >
            <span className="flex items-center gap-2">
              <Globe size={14} />
              Visit Studio
            </span>
            <ExternalLink size={12} />
          </Link>

          {/* User Section & Logout */}
          <div className="flex items-center gap-3 p-3 bg-white/[0.04] rounded-2xl">
            <div className="h-10 w-10 rounded-xl bg-brand-soft/10 flex items-center justify-center text-brand">
              <User size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">Administrator</p>
              <p className="text-[10px] text-white/50 truncate">admin@setlesstudio.com</p>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-1.5 rounded-lg text-white/60 hover:text-brand hover:bg-brand-soft/15 transition-all"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Pane */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen lg:pl-72">
        {/* Top Header */}
        <header className="h-[76px] bg-white border-b border-ink/[0.06] z-30 shadow-[0_1px_0_rgba(28,24,20,0.02)]">
          <div className="h-full max-w-7xl mx-auto w-full px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 -ml-2 text-ink-soft hover:text-ink rounded-lg hover:bg-cream"
              >
                <Menu size={20} />
              </button>

              {/* Breadcrumb Info */}
              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-ink-soft">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={12} className="text-brand" />
                  SetlesStudio Control Portal
                </span>
                <ChevronRight size={12} className="text-ink-soft/40" />
                <span className="text-ink font-bold capitalize">
                  {pathname?.split("/").filter(Boolean)[1] || "Overview"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Direct preview quick-nav button */}
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink/10 text-xs font-bold text-ink hover:border-brand hover:text-brand bg-white transition-all shadow-sm"
              >
                <ArrowLeft size={12} />
                Website View
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Main Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

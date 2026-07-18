"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Lock, Mail, Loader2, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";
import { setLoginStatus, checkIsLoggedIn } from "@/lib/dashboard-store";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (checkIsLoggedIn()) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulate login delay
    setTimeout(() => {
      if (email === "admin@setlesstudio.com" && password === "admin@&1122") {
        setLoginStatus(true);
        router.push("/dashboard");
      } else {
        setLoading(false);
        setError("Invalid email or password. Access denied.");
      }
    }, 900);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-cream px-4 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] aspect-square rounded-full bg-brand/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] aspect-square rounded-full bg-brand-soft blur-[120px]" />

      <div className="w-full max-w-md z-10">
        {/* Logo Header */}
        <div className="mb-3 flex justify-center">
          <Link href="/" className="transition-transform duration-300 hover:scale-105">
            <Logo size={100} className="rounded-lg" />
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-ink/[0.06] p-8 md:p-10 shadow-[0_8px_30px_rgb(28,24,20,0.04)]">
          <div className="mb-6">
            <h1 className="font-display text-2xl font-bold text-ink tracking-tight flex items-center gap-2">
              Welcome Back <Sparkles className="text-brand h-5 w-5" />
            </h1>
            <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">
              Sign in to manage blog posts, build dynamic landing page tiles, and edit SEO settings.
            </p>
          </div>

          {error && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold leading-relaxed">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-soft/45">
                  <Mail size={16} />
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/30 text-sm transition-colors text-ink placeholder:text-ink-soft/40"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-soft/45">
                  <Lock size={16} />
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/30 text-sm transition-colors text-ink placeholder:text-ink-soft/40"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-brand text-white hover:bg-brand-dark py-3.5 px-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand/20 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Access Dashboard
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>


        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-ink-soft/60">
            © {new Date().getFullYear()} SetlesStudio
          </p>
        </div>
      </div>
    </div>
  );
}

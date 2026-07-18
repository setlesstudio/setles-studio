"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Shield, Eye, EyeOff, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { DashboardHeader, Panel } from "@/components/DashboardComponents";
import { verifyCredentials, updateStoredPassword, setLoginStatus } from "@/lib/dashboard-store";

export default function SettingsPage() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Confirm password does not match new password.");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }

    setLoading(true);

    try {
      // 1. Verify current credentials
      const isValid = await verifyCredentials("admin@setlesstudio.com", currentPassword);
      if (!isValid) {
        setLoading(false);
        setError("Current password is incorrect.");
        return;
      }

      // 2. Hash and update with new salt
      await updateStoredPassword(newPassword);
      setSuccess(true);
      setLoading(false);

      // Reset form
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      // 3. Force logout after 2.5 seconds to require login with the new password
      setTimeout(() => {
        setLoginStatus(false);
        router.push("/login");
      }, 2500);
    } catch (err) {
      setLoading(false);
      setError("Failed to update credentials. Please try again.");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <DashboardHeader
        title="Settings"
        description="Manage secure administration credentials and access controls."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {/* Help Column */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-ink/[0.06] shadow-sm">
            <h3 className="text-sm font-bold text-ink flex items-center gap-2 mb-2">
              <Shield size={16} className="text-brand" /> Access Control Info
            </h3>
            <p className="text-xs text-ink-soft leading-relaxed">
              Your administration account is secured locally. Password changes generate a unique cryptographic salt and compute a secure SHA-256 digest.
            </p>
            <div className="mt-4 p-3 bg-brand-soft/10 rounded-2xl border border-brand-soft/20 text-[10px] text-ink-soft flex gap-2">
              <AlertTriangle size={16} className="text-brand shrink-0" />
              <span>
                <strong>Warning:</strong> Changing your password will immediately invalidate your active session. You will be logged out and prompted to sign in with your new credentials.
              </span>
            </div>
          </div>
        </div>

        {/* Password Form Panel */}
        <div className="md:col-span-2">
          <Panel title="Update Admin Password">
            {success && (
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-xs text-emerald-800 flex items-start gap-3 mb-6 animate-pulse">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold">Password Updated Successfully!</h4>
                  <p className="text-emerald-700/80 mt-0.5">Your session is being terminated. Redirecting to login page...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-xs text-red-800 flex items-start gap-3 mb-6">
                <AlertTriangle size={16} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold">Change Password Failed</h4>
                  <p className="text-red-700/80 mt-0.5">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-5">
              {/* Current Password */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                  Current Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-ink-soft/45">
                    <Lock size={16} />
                  </span>
                  <input
                    type={showCurrent ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-ink/10 bg-cream/20 text-xs text-ink focus:outline-none focus:border-brand transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-ink-soft/60 hover:text-ink"
                  >
                    {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                  New Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-ink-soft/45">
                    <Lock size={16} />
                  </span>
                  <input
                    type={showNew ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter at least 8 characters"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-ink/10 bg-cream/20 text-xs text-ink focus:outline-none focus:border-brand transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-ink-soft/60 hover:text-ink"
                  >
                    {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                  Confirm New Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-ink-soft/45">
                    <Lock size={16} />
                  </span>
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-ink/10 bg-cream/20 text-xs text-ink focus:outline-none focus:border-brand transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-ink-soft/60 hover:text-ink"
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading || success}
                  className="inline-flex items-center justify-center gap-2 bg-brand text-white hover:bg-brand-dark px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-75 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-brand/20 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Hashing & Saving...
                    </>
                  ) : (
                    "Change Password"
                  )}
                </button>
              </div>
            </form>
          </Panel>
        </div>
      </div>
    </div>
  );
}

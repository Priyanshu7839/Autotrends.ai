import { Shield, Lock, FileCheck, ShieldCheck } from 'lucide-react';

export function SecurityStrip() {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-xl px-6 sm:px-12 py-6 shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {/* OTP-based Login */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
                <Lock className="w-5 h-5 text-cyan-500" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm text-[#0066CC]">OTP-based Login</p>
                <p className="text-xs text-gray-600">Secure access</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-300/50"></div>

            {/* Role-based Access */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center shadow-md shadow-purple-500/10">
                <Shield className="w-5 h-5 text-purple-500" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm text-[#0066CC]">Role-based Access</p>
                <p className="text-xs text-gray-600">Team permissions</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-300/50"></div>

            {/* Audit Logs */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center shadow-md shadow-emerald-500/10">
                <FileCheck className="w-5 h-5 text-emerald-500" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm text-[#0066CC]">Audit Logs</p>
                <p className="text-xs text-gray-600">Full traceability</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-300/50"></div>

            {/* Secure Payouts */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center shadow-md shadow-amber-500/10">
                <ShieldCheck className="w-5 h-5 text-amber-500" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm text-[#0066CC]">Secure Payouts</p>
                <p className="text-xs text-gray-600">Bank-grade security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
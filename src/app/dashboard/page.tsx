'use client';

import { DashboardLayout } from '@/components/dashboard-layout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="min-h-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Health71 RCM</h2>
        <p className="text-gray-600">Dashboard content will be added here.</p>
      </div>
    </DashboardLayout>
  );
}

import React from 'react';
import { ShieldCheck, Truck, CreditCard, Clock } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center p-4">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Secure Payments</h3>
              <p className="mt-1 text-sm text-gray-500">100% secure transaction</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Truck className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Pan India Delivery</h3>
              <p className="mt-1 text-sm text-gray-500">Fast & reliable shipping</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <CreditCard className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Easy Payment</h3>
              <p className="mt-1 text-sm text-gray-500">Multiple payment options</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Clock className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
              <p className="mt-1 text-sm text-gray-500">Expert assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
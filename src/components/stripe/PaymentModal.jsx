import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import PaymentForm from './PaymentForm';

export const PaymentModal = ({ isOpen, onClose, clientSecret, currency }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-medium">
              Complete Payment
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Amount to pay: {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'eur'
              }).format(1000 / 100)}
            </p>
          </div>

          <PaymentForm clientSecret={clientSecret} onSuccess={onClose} />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
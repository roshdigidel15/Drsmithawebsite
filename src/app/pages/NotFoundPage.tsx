import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[64px] mb-2">404</p>
      <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[18px] mb-6">
        This page could not be found.
      </p>
      <Link
        to="/"
        className="bg-black text-[#fafafa] px-6 py-2.5 rounded-lg font-['Geist',sans-serif] text-[14px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

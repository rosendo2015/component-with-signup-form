import { SignUpForm } from "../components/SignUpForm";

export function SignUpPage() {
  return (
    <div className="min-h-screen bg-red-400 text-white flex items-center justify-center p-4">
      <div className="max-w-desktop w-full mx-auto">
        {/* Decorative background images */}
        <div className="absolute inset-0 bg-red-400 overflow-hidden -z-10">
          <div className="absolute top-4 left-8 w-20 h-20 bg-opacity-80 bg-red-300 rounded-lg transform -rotate-12" />
          <div className="absolute bottom-1/4 right-8 w-24 h-24 bg-opacity-80 bg-red-200 rounded-lg transform rotate-12" />
          <div className="absolute bottom-8 left-1/4 w-16 h-16 bg-opacity-80 bg-red-300 rounded-lg transform rotate-45" />
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-opacity-80 bg-red-200 rounded-lg transform -rotate-6" />
        </div>

        <div className="text-center max-w-mobile mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Learn to code by watching others
          </h1>
          <p className="text-base md:text-lg opacity-90 leading-relaxed">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think is
            invaluable.
          </p>
        </div>

        <div className="w-full max-w-mobile mx-auto mb-6">
          <div className="bg-purple-700 text-white text-center py-4 px-6 rounded-lg">
            <span className="font-bold">Try it free 7 days </span>
            <span className="opacity-80">then $20/mo. thereafter</span>
          </div>
        </div>

        <div className="w-full max-w-mobile mx-auto">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

import { HealthIndicator } from "@/components/HealthIndicator"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 shadow-sm">
        <div className="py-6 px-8">
          <h1 className="text-lg font-bold">
            <span className="text-gray-900 dark:text-gray-100">Your</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold ml-1">Project</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="flex flex-col items-center max-w-xs w-full">
          {/* Welcome Section */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 leading-tight">
              Welcome to your new web app!
            </h2>
            <p className="text-base text-gray-400 dark:text-gray-500 leading-snug">
              Your web app is ready to launch. Start building amazing experiences.
            </p>
          </div>

          {/* Health Indicator */}
          <HealthIndicator />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="text-center">
          <span className="text-sm text-gray-400 dark:text-gray-500">
            Your Project © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  )
}
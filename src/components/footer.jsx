'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Covalyn</h2>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
            <p>
              Covalyn Inc.<br />
              2748 Grand Oaks Loop,
              Cedar Park<br />
              Texas - 78613.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          © 2025 Covalyn™. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

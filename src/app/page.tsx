export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header פשוט */}
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Ortam AI</h1>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ortam AI
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              יישום מונע בינה מלאכותית לשיפור פרודוקטיביות ואוטומציה
            </p>
          </div>
        </section>
        
        {/* Additional Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              למה לבחור ב-Ortam AI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded">⚡</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">יעילות מרבית</h3>
                <p className="text-gray-600">
                  חיסכון בזמן ומשאבים באמצעות אוטומציה חכמה ופתרונות מותאמים אישית
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded">🎯</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">תמיכה מלאה</h3>
                <p className="text-gray-600">
                  צוות מומחים זמין 24/7 לסיוע ויעוץ בכל שלב של המסע הטכנולוגי
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-600 rounded">🚀</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">חדשנות מתמדת</h3>
                <p className="text-gray-600">
                  עדכון טכנולוגיות מתקדמות וחדשנות בחזית הבינה המלאכותית
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer פשוט */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Ortam AI. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}

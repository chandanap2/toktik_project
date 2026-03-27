function SavedPage() {
  return (
    <div className="min-h-screen bg-toktik-bg pt-safe">
      <div className="flex items-center justify-center h-screen-dvh">
        <div className="text-center px-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-toktik-accent-soft flex items-center justify-center">
            <span className="text-2xl">🔖</span>
          </div>
          <h1 className="text-xl font-semibold text-toktik-text-primary mb-2 font-inter">
            Saved
          </h1>
          <p className="text-sm text-toktik-text-secondary font-inter">
            Your bookmarked videos will appear here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SavedPage

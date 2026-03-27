import { useParams } from 'react-router-dom'

function ProfilePage() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-toktik-bg pt-safe">
      <div className="flex items-center justify-center h-screen-dvh">
        <div className="text-center px-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-toktik-surface-raised flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <h1 className="text-xl font-semibold text-toktik-text-primary mb-2 font-inter">
            Profile
          </h1>
          <p className="text-sm text-toktik-text-secondary font-inter">
            Profile page for user <span className="font-medium text-toktik-text-primary">{id}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

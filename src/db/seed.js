import db from './schema.js'

/**
 * TokTik Seed Data
 *
 * Seeds 5 profiles, 8 videos, and 3-5 comments per video.
 * Only runs once — checks if the DB is already populated.
 *
 * Videos use free Pexels stock video URLs (vertical/mobile format).
 * Avatars use local SVG files from /public/avatars/.
 */

// ─────────────────────────────────────────────
// Profiles (5 distinct creators)
// ─────────────────────────────────────────────
const profiles = [
  {
    id: 'p1',
    username: '@luna.creates',
    displayName: 'Luna Mira',
    bio: 'Visual designer & dreamer ✦',
    avatarUrl: '/avatars/luna.svg',
    followerCount: 142000,
    followingCount: 890,
    videoCount: 2,
    isVerified: true,
    joinedAt: '2025-06-15T10:00:00Z',
  },
  {
    id: 'p2',
    username: '@devwitharjun',
    displayName: 'Arjun Mehta',
    bio: 'Building things on the internet',
    avatarUrl: '/avatars/arjun.svg',
    followerCount: 38000,
    followingCount: 412,
    videoCount: 1,
    isVerified: false,
    joinedAt: '2025-08-22T14:30:00Z',
  },
  {
    id: 'p3',
    username: '@zara.frames',
    displayName: 'Zara Osei',
    bio: 'Filmmaker · Lagos → London 🎬',
    avatarUrl: '/avatars/zara.svg',
    followerCount: 291000,
    followingCount: 1200,
    videoCount: 2,
    isVerified: true,
    joinedAt: '2025-03-10T08:00:00Z',
  },
  {
    id: 'p4',
    username: '@calm.with.kai',
    displayName: 'Kai Nakamura',
    bio: 'Mindfulness & morning rituals 🍵',
    avatarUrl: '/avatars/kai.svg',
    followerCount: 67000,
    followingCount: 340,
    videoCount: 2,
    isVerified: false,
    joinedAt: '2025-09-05T06:00:00Z',
  },
  {
    id: 'p5',
    username: '@bytebymia',
    displayName: 'Mia Fernandes',
    bio: 'Code, coffee, late nights ☕',
    avatarUrl: '/avatars/mia.svg',
    followerCount: 19000,
    followingCount: 230,
    videoCount: 1,
    isVerified: false,
    joinedAt: '2025-11-18T20:00:00Z',
  },
]

// ─────────────────────────────────────────────
// Videos (8 videos across 5 profiles)
// Using free Pexels stock videos (vertical format)
// ─────────────────────────────────────────────
const videos = [
  // Luna — 2 videos
  {
    id: 'v1',
    profileId: 'p1',
    url: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_1440_2560_30fps.mp4',
    thumbnailUrl: '',
    description: 'Golden hour magic ✨ The world looks different at this hour',
    tags: ['#goldenhour', '#design', '#calm'],
    musicTitle: 'Original Audio - luna.creates',
    likes: 24300,
    comments: 4,
    shares: 312,
    bookmarks: 1820,
    duration: 15,
    createdAt: '2026-03-20T18:30:00Z',
  },
  {
    id: 'v2',
    profileId: 'p1',
    url: 'https://videos.pexels.com/video-files/3015510/3015510-hd_1080_1920_24fps.mp4',
    thumbnailUrl: '',
    description: 'Studio vibes only. New project loading…',
    tags: ['#studio', '#creative', '#workflow'],
    musicTitle: 'Dreamy Beats - Lofi Collective',
    likes: 18700,
    comments: 3,
    shares: 189,
    bookmarks: 940,
    duration: 12,
    createdAt: '2026-03-18T14:00:00Z',
  },

  // Arjun — 1 video
  {
    id: 'v3',
    profileId: 'p2',
    url: 'https://videos.pexels.com/video-files/5752729/5752729-hd_1080_1920_25fps.mp4',
    thumbnailUrl: '',
    description: 'Late night coding sessions hit different when the code finally compiles 🚀',
    tags: ['#coding', '#developer', '#tech'],
    musicTitle: 'Original Audio - devwitharjun',
    likes: 8900,
    comments: 5,
    shares: 78,
    bookmarks: 620,
    duration: 18,
    createdAt: '2026-03-22T02:15:00Z',
  },

  // Zara — 2 videos
  {
    id: 'v4',
    profileId: 'p3',
    url: 'https://videos.pexels.com/video-files/4763824/4763824-uhd_1440_2560_24fps.mp4',
    thumbnailUrl: '',
    description: 'London mornings through my lens. Every frame tells a story 🎥',
    tags: ['#london', '#cinematography', '#filmmaker'],
    musicTitle: 'City Pulse - Urban Sounds',
    likes: 47200,
    comments: 4,
    shares: 520,
    bookmarks: 3100,
    duration: 20,
    createdAt: '2026-03-21T09:00:00Z',
  },
  {
    id: 'v5',
    profileId: 'p3',
    url: 'https://videos.pexels.com/video-files/4434242/4434242-hd_1080_1920_30fps.mp4',
    thumbnailUrl: '',
    description: 'Behind the scenes of my latest short film. The magic is in the details',
    tags: ['#bts', '#filmmaking', '#creative'],
    musicTitle: 'Original Audio - zara.frames',
    likes: 31400,
    comments: 3,
    shares: 290,
    bookmarks: 2400,
    duration: 16,
    createdAt: '2026-03-19T16:45:00Z',
  },

  // Kai — 2 videos
  {
    id: 'v6',
    profileId: 'p4',
    url: 'https://videos.pexels.com/video-files/5548025/5548025-hd_1080_1920_25fps.mp4',
    thumbnailUrl: '',
    description: 'Morning ritual: breathe, stretch, be present 🍃',
    tags: ['#mindfulness', '#morning', '#calm'],
    musicTitle: 'Gentle Stream - Nature Sounds',
    likes: 12600,
    comments: 4,
    shares: 145,
    bookmarks: 890,
    duration: 22,
    createdAt: '2026-03-23T06:00:00Z',
  },
  {
    id: 'v7',
    profileId: 'p4',
    url: 'https://videos.pexels.com/video-files/4536050/4536050-hd_1080_1920_25fps.mp4',
    thumbnailUrl: '',
    description: 'Tea ceremony — slowing down in a fast world 🍵',
    tags: ['#tea', '#ritual', '#peaceful'],
    musicTitle: 'Original Audio - calm.with.kai',
    likes: 9400,
    comments: 3,
    shares: 98,
    bookmarks: 710,
    duration: 14,
    createdAt: '2026-03-17T07:30:00Z',
  },

  // Mia — 1 video
  {
    id: 'v8',
    profileId: 'p5',
    url: 'https://videos.pexels.com/video-files/5377700/5377700-hd_1080_1920_25fps.mp4',
    thumbnailUrl: '',
    description: 'POV: You finally fix the bug that took 3 hours ☕ this is peak satisfaction',
    tags: ['#coding', '#developer', '#bugfix'],
    musicTitle: 'Midnight Code - bytebymia',
    likes: 5200,
    comments: 5,
    shares: 42,
    bookmarks: 380,
    duration: 10,
    createdAt: '2026-03-24T23:45:00Z',
  },
]

// ─────────────────────────────────────────────
// Comments (3-5 per video, using seeded profiles as commenters)
// ─────────────────────────────────────────────
const comments = [
  // v1 — Golden hour (4 comments)
  {
    id: 'c1',
    videoId: 'v1',
    profileId: 'p3',
    text: 'The colors in this are absolutely unreal 😍',
    likes: 128,
    createdAt: '2026-03-20T19:00:00Z',
  },
  {
    id: 'c2',
    videoId: 'v1',
    profileId: 'p4',
    text: 'This brought so much peace to my feed. Thank you.',
    likes: 89,
    createdAt: '2026-03-20T19:45:00Z',
  },
  {
    id: 'c3',
    videoId: 'v1',
    profileId: 'p2',
    text: 'How do you always nail the timing?',
    likes: 34,
    createdAt: '2026-03-20T21:00:00Z',
  },
  {
    id: 'c4',
    videoId: 'v1',
    profileId: 'p5',
    text: 'Love this!',
    likes: 12,
    createdAt: '2026-03-21T08:00:00Z',
  },

  // v2 — Studio vibes (3 comments)
  {
    id: 'c5',
    videoId: 'v2',
    profileId: 'p4',
    text: 'Your workspace is goals. Mine looks like a hurricane hit it 😂',
    likes: 67,
    createdAt: '2026-03-18T15:30:00Z',
  },
  {
    id: 'c6',
    videoId: 'v2',
    profileId: 'p3',
    text: 'Drop the playlist please!',
    likes: 45,
    createdAt: '2026-03-18T16:00:00Z',
  },
  {
    id: 'c7',
    videoId: 'v2',
    profileId: 'p5',
    text: 'When creativity meets organization ✨',
    likes: 23,
    createdAt: '2026-03-18T20:00:00Z',
  },

  // v3 — Late night coding (5 comments)
  {
    id: 'c8',
    videoId: 'v3',
    profileId: 'p5',
    text: 'The dopamine hit when it finally compiles is unmatched 🔥',
    likes: 156,
    createdAt: '2026-03-22T02:30:00Z',
  },
  {
    id: 'c9',
    videoId: 'v3',
    profileId: 'p1',
    text: 'Fellow night owl coder here 🦉',
    likes: 78,
    createdAt: '2026-03-22T03:00:00Z',
  },
  {
    id: 'c10',
    videoId: 'v3',
    profileId: 'p4',
    text: 'Please go to sleep 😭',
    likes: 234,
    createdAt: '2026-03-22T06:00:00Z',
  },
  {
    id: 'c11',
    videoId: 'v3',
    profileId: 'p3',
    text: 'What stack are you using? The UI looks clean',
    likes: 45,
    createdAt: '2026-03-22T10:00:00Z',
  },
  {
    id: 'c12',
    videoId: 'v3',
    profileId: 'p1',
    text: '3 hours? Those are rookie numbers 😤',
    likes: 102,
    createdAt: '2026-03-22T14:00:00Z',
  },

  // v4 — London mornings (4 comments)
  {
    id: 'c13',
    videoId: 'v4',
    profileId: 'p1',
    text: 'I can feel the cold morning air just watching this',
    likes: 189,
    createdAt: '2026-03-21T10:00:00Z',
  },
  {
    id: 'c14',
    videoId: 'v4',
    profileId: 'p2',
    text: 'Your cinematography always hits different, Zara',
    likes: 145,
    createdAt: '2026-03-21T11:30:00Z',
  },
  {
    id: 'c15',
    videoId: 'v4',
    profileId: 'p5',
    text: 'London is so photogenic 📸',
    likes: 67,
    createdAt: '2026-03-21T14:00:00Z',
  },
  {
    id: 'c16',
    videoId: 'v4',
    profileId: 'p4',
    text: 'This is art. Every single frame.',
    likes: 212,
    createdAt: '2026-03-21T18:00:00Z',
  },

  // v5 — Behind the scenes (3 comments)
  {
    id: 'c17',
    videoId: 'v5',
    profileId: 'p2',
    text: 'The attention to detail is insane',
    likes: 98,
    createdAt: '2026-03-19T17:00:00Z',
  },
  {
    id: 'c18',
    videoId: 'v5',
    profileId: 'p1',
    text: 'Can\'t wait to see the final cut! When does it drop?',
    likes: 76,
    createdAt: '2026-03-19T19:30:00Z',
  },
  {
    id: 'c19',
    videoId: 'v5',
    profileId: 'p4',
    text: 'The lighting setup 😍',
    likes: 54,
    createdAt: '2026-03-20T08:00:00Z',
  },

  // v6 — Morning ritual (4 comments)
  {
    id: 'c20',
    videoId: 'v6',
    profileId: 'p1',
    text: 'This is the energy I needed this morning ☀️',
    likes: 167,
    createdAt: '2026-03-23T07:00:00Z',
  },
  {
    id: 'c21',
    videoId: 'v6',
    profileId: 'p3',
    text: 'Kai your content is like therapy. Seriously.',
    likes: 134,
    createdAt: '2026-03-23T08:30:00Z',
  },
  {
    id: 'c22',
    videoId: 'v6',
    profileId: 'p5',
    text: 'Trying this tomorrow morning 🙏',
    likes: 45,
    createdAt: '2026-03-23T12:00:00Z',
  },
  {
    id: 'c23',
    videoId: 'v6',
    profileId: 'p2',
    text: 'I wish I was this disciplined',
    likes: 89,
    createdAt: '2026-03-23T16:00:00Z',
  },

  // v7 — Tea ceremony (3 comments)
  {
    id: 'c24',
    videoId: 'v7',
    profileId: 'p3',
    text: 'Everything about this is so intentional. Beautiful.',
    likes: 78,
    createdAt: '2026-03-17T09:00:00Z',
  },
  {
    id: 'c25',
    videoId: 'v7',
    profileId: 'p1',
    text: 'The sound design in this is perfect',
    likes: 56,
    createdAt: '2026-03-17T12:00:00Z',
  },
  {
    id: 'c26',
    videoId: 'v7',
    profileId: 'p5',
    text: 'Me scrolling through this while chugging my third coffee 💀',
    likes: 203,
    createdAt: '2026-03-17T15:00:00Z',
  },

  // v8 — Bug fix satisfaction (5 comments)
  {
    id: 'c27',
    videoId: 'v8',
    profileId: 'p2',
    text: 'This is too relatable. The emotional rollercoaster of debugging 😂',
    likes: 234,
    createdAt: '2026-03-25T00:00:00Z',
  },
  {
    id: 'c28',
    videoId: 'v8',
    profileId: 'p1',
    text: 'Me every single day',
    likes: 89,
    createdAt: '2026-03-25T01:00:00Z',
  },
  {
    id: 'c29',
    videoId: 'v8',
    profileId: 'p3',
    text: 'The celebration at the end 😭🎉',
    likes: 145,
    createdAt: '2026-03-25T08:00:00Z',
  },
  {
    id: 'c30',
    videoId: 'v8',
    profileId: 'p4',
    text: 'And then you realize you introduced 3 new bugs',
    likes: 312,
    createdAt: '2026-03-25T10:00:00Z',
  },
  {
    id: 'c31',
    videoId: 'v8',
    profileId: 'p2',
    text: 'Console.log("it works") → production deployed → gg',
    likes: 178,
    createdAt: '2026-03-25T14:00:00Z',
  },
]

// ─────────────────────────────────────────────
// Seed Execution
// ─────────────────────────────────────────────

/**
 * Seeds the database if it's empty (first-load only).
 * Does not overwrite existing user interactions.
 */
export async function seedDatabase() {
  try {
    const profileCount = await db.profiles.count()

    if (profileCount > 0) {
      console.log('[TokTik] Database already seeded. Skipping.')
      return false
    }

    console.log('[TokTik] Seeding database...')

    await db.transaction('rw', db.profiles, db.videos, db.comments, async () => {
      await db.profiles.bulkAdd(profiles)
      await db.videos.bulkAdd(videos)
      await db.comments.bulkAdd(comments)
    })

    // Store the first profile as the active user
    const activeUserId = profiles[0].id
    localStorage.setItem('toktik_active_user', activeUserId)

    console.log(`[TokTik] Seed complete: ${profiles.length} profiles, ${videos.length} videos, ${comments.length} comments`)
    console.log(`[TokTik] Active user set to: ${profiles[0].displayName} (${profiles[0].username})`)
    
    return true
  } catch (error) {
    console.error('[TokTik] Seed failed:', error)
    throw error
  }
}

export { profiles, videos, comments }
export default seedDatabase

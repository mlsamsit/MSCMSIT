import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

const EventsPage = () => {
  const [showUpcoming, setShowUpcoming] = useState(false);

  const upcomingEvents = [
    {
      id: '1',
      title: 'Ctrl+Alt+Vibe - Hackathon',
      date: '2025-11-21',
      time: '8:00 AM - 4:30 PM',
      location: 'MSIT - 06 Seminar Hall',
      description: 'A high-energy innovation hackathon designed to unlock your creativity, push your technical limits, and help you vibe with like-minded problem solvers as you build futuristic solutions in just 24 hours.',
      category: 'Hackathon',
      attendees: 150,
      image: 'https://ctrlaltvibe.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F4ab65cc19d21495d8d95356ba2e67b06%2Fassets%2Fcover%2F56.png&w=1440&q=100',
      tags: ['Hackathon', 'Innovation', 'competition','Teamwork'],
      learnMore:"https://ctrlaltvibe.devfolio.co/"
    },
    {
      id: '2',
      title: 'Final Push: Career Session',
      date: '2024-08-28',
      time: '10:00 AM - 12:00 PM',
      location: 'Yet to release',
      description: 'A LinkedIn or resume-building session scheduled just before the internship season heats up.',
      category: 'Career',
      attendees: 100,
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Career', 'Resume', 'LinkedIn']
    },
    {
      id: '3',
      title: 'The Ideathon',
      date: '2024-10-03',
      time: 'All Day',
      location: 'Yet to release',
      description: 'A creativity-driven ideation challenge post mid-sems, utilizing the Gandhi Jayanti weekend for focused work.',
      category: 'Hackathon',
      attendees: 120,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Ideathon', 'Innovation', 'Teamwork']
    },
    {
      id: '4',
      title: 'Office Visit / Speaker Panel',
      date: '2024-10-17',
      time: 'Full Day (Oct 17–18)',
      location: 'Yet to release',
      description: 'High-value speaker or industry office visit between mid-semester buzz and final exam rush.',
      category: 'Networking',
      attendees: 60,
      image: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Industry', 'Networking', 'Speakers']
    }
  ];

  const pastEvents = [
  {
    id: 'past1',
    title: "Freshers' Meet",
    date: '2025-08-04',
    time: '12:00 PM – 12:30 PM',
    location: '406 Seminar Hall',
    description:
      'Interacted with freshers of the 2025 batch, answered questions, and provided guidance.',
    category: 'Orientation',
    attendees: 70,
    image:
      './group.jpg',
    tags: ['Freshers', 'Interaction', '2025 Batch']
  },
  {
      id: 'past4',
      title: 'Hands-on Session: Git & GitHub',
      date: '2024-08-22',
      time: '10:00 AM - 12:00 PM',
      location: 'Yet to release',
      description: 'Equip students, especially freshers, with essential Git & GitHub skills early in the semester.',
      category: 'Workshop',
      attendees: 80,
      image: './git-github.jpg',
      tags: ['Git', 'GitHub', 'Version Control']
    },
  {
    id: 'past5',
    title: 'LeetWars - The Ultimate DSA Challenge',
    date: '2025-04-07',
    time: '10:00 AM – 12:00 PM',
    location: '106B MSIT (1st floor)',
    description:
      'An exciting coding contest hosted by MSC-MSIT on LeetCode, designed to challenge problem-solving abilities and strengthen DSA skills. Open to both beginners and experienced coders.',
    category: 'Coding Contest',
    attendees: 100,
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQH2ejT8B7OPxw/feedshare-shrink_800/B56ZYMT71KHEAo-/0/1743963276782?e=1758758400&v=beta&t=6YjB_CZug-4BtW3Wl_IXnOGN5DazUjupIePEs5fu76k',
    tags: ['DSA', 'LeetCode', 'CodingContest', 'CompetitiveProgramming']
  },
  {
    id: 'past2',
    title: 'EDU Chain Regional Hackathon – Delhi',
    date: '2025-03-17',
    time: '09:00 AM – 18-03-2025 06:00 PM',
    location: 'Maharaja Surajmal Institute Of Technology',
    description:
      'The MSC-MSIT successfully organized one of the biggest Web3 hackathons in collaboration with HackQuest, EDU Chain, and OpenCampus. The 2-day hackathon brought together 150+ developers, 300+ registrations, and featured projects in AI, DeFi, DeSci, and Web3 Gaming. Winners received $300, $200, and multiple $100 prizes. The event was supported by faculty, mentors, and judges from Uniswap, Tezos India, TON Society India, and more.',
    category: 'Hackathon',
    attendees: 150,
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQEotnxtPmWuwg/feedshare-shrink_800/B56ZW_b0J8HsAg-/0/1742673496502?e=1758758400&v=beta&t=cQklOPyoHI7XMB7vXO0Lr1V_wngLne2_HBECRuJMg64',
    tags: ['Hackathon', 'Web3', 'Blockchain', 'AI', 'Community']
  },
  {
    id: 'past6',
    title: 'MR. & MS. CODER',
    date: '2025-02-01',
    time: '10:00 AM – 04:00 PM',
    location: 'MSIT Seminar Hall 06',
    description:
      'The first-ever Mr. & Ms. Coder Pageant at MSIT! A 3-stage challenge testing confidence, teamwork, and coding expertise. From HR-style interviews to a treasure hunt decoding snippets, and finally a coding showdown – champions won the title along with ₹1500 each.',
    category: 'Coding Contest',
    attendees: 90,
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQElB0JdszgW2A/feedshare-shrink_800/feedshare-shrink_800/0/1706466616960?e=1758758400&v=beta&t=ElVM7oIyISPREMXpikKHomJamosJP47IwRv5eUY5jWk',
    tags: ['Coding', 'Pageant', 'Challenge', 'Fun', 'Contest']
  },
  {
    id: 'past3',
    title: 'MSC - MSIT Meet Up',
    date: '2024-09-24',
    time: '12:00 PM – 1:00 PM',
    location: '406 Seminar Hall',
    description:
      'A fun-filled meetup by the Microsoft Student Chapter - MSIT. From meeting department heads to bonding over activities, the vibe was unmatched! The evening ended with a soulful performance by Octave.',
    category: 'Meetup',
    attendees: 120,
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQGCTlODYmcy0A/feedshare-shrink_800/B4DZXRrU1OHkAg-/0/1742979554565?e=1758758400&v=beta&t=5NTZQBHhqloVG_YQKark0_TczIM7DEff5idhP4hoRMM',
    tags: ['Meetup', 'Community', 'Fun', 'Performance']
  },
  
  {
    id: 'past7',
    title: 'Hack This Fall 2024',
    date: '2024-02-09',
    time: 'All Day (09-02-2024 to 11-02-2024)',
    location: 'Gandhinagar, India',
    description:
      'Hack This Fall 2024, the fourth edition of one of India’s most thriving hacker community hackathons, with the theme "Innovate For Good". A 36-hour in-person hackathon filled with collaboration, building, and innovation.',
    category: 'Hackathon',
    attendees: 500,
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQFWQM2IucCUAg/feedshare-shrink_800/feedshare-shrink_800/0/1702451012851?e=1758758400&v=beta&t=yKC6Q7AwBDfTleX134YlOxSh7MYT_CirwGHz-U0-OVo',
    tags: ['Hackathon', 'Innovation', 'HackThisFall', 'Community']
  },
  {
    id: 'past8',
    title: '30 Day Tech Challenge - Closing Ceremony',
    date: '2024-01-30',
    time: '04:00 PM – 06:00 PM',
    location: 'MSIT Campus',
    description:
      'Celebration of the 30 Day Tech Challenge organized by MSC-MSIT. Included a special AI-focused session with Sarthak Jain, recognition of participants, goodies from MSC-MSIT, and knowledge-sharing about AI and technology.',
    category: 'Celebration',
    attendees: 150,
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQEYZKpqgl2VGw/feedshare-shrink_800/feedshare-shrink_800/0/1700904997356?e=1758758400&v=beta&t=rNsgdDb777Oz0jw-6tCpKBNRqpU-W7bgg7LXPsM6voE',
    tags: ['TechChallenge', 'AI', 'Celebration', 'Community', 'Learning']
  },
  {
    id: 'past9',
    title: 'AlgoArena',
    date: '2023-12-01',
    time: '06:00 PM – 11:45 PM',
    location: 'MSIT Campus',
    description:
      'AlgoArena coding contest organized by MSC-MSIT in collaboration with Coding Ninjas. Top performers won exclusive T-shirts, and all participants earned Coding Ninjas XP.',
    category: 'Coding Contest',
    attendees: 80,
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQFI7YsWWSv0ng/feedshare-shrink_800/feedshare-shrink_800/0/1700497162952?e=1758758400&v=beta&t=hwI49fL6nxb37_zE_4DFC4wj0eK8YiNHIxGYH-bHNUM',
    tags: ['AlgoArena', 'CodingNinjas', 'Contest', 'XP', 'Challenge']
  }
];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric'
    });
  };

  const EventCard = ({ event }) => (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02]">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#0078D4] mb-2">{event.title}</h3>
        <p className="text-gray-700 text-sm mb-4">{event.description}</p>
        <div className="space-y-1 text-gray-600 text-sm mb-4">
          <div className="flex items-center gap-2"><Calendar size={16} /> {formatDate(event.date)}</div>
          <div className="flex items-center gap-2"><Clock size={16} /> {event.time}</div>
          <div className="flex items-center gap-2"><MapPin size={16} /> {event.location}</div>
          <div className="flex items-center gap-2"><Users size={16} /> {event.attendees} attendees</div>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {event.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-[#0078D4]/10 text-[#0078D4] px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        {event.learnMore ? (
          <a
            href={event.learnMore}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0078D4] text-sm font-medium flex items-center hover:underline"
          >
            Learn More <ChevronRight size={16} />
          </a>
        ) : (
          <div className="text-[#0078D4] text-sm font-medium flex items-center cursor-pointer hover:underline">
            Learn More <ChevronRight size={16} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen mt-20">
      <section className="bg-[#0078D4] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">MSC Society — Events & Activities</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Check out the awesome events we’ve got lined up for this tenure, plus a glimpse of our past events and activities. Don’t miss out—come join us for all the fun in our future events!
        </p>
      </section>

      <section className="py-6 text-center">
        <div className="inline-flex gap-4 bg-gray-100 p-2 rounded-full">
          <button
            onClick={() => setShowUpcoming(true)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              showUpcoming ? 'bg-[#0078D4] text-white' : 'text-[#0078D4] hover:bg-[#0078D4]/10'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setShowUpcoming(false)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              !showUpcoming ? 'bg-[#0078D4] text-white' : 'text-[#0078D4] hover:bg-[#0078D4]/10'
            }`}
          >
            Past Events
          </button>
        </div>
      </section>

      <section className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#0078D4] text-center mb-10">
          {showUpcoming ? 'Upcoming Events' : 'Past Events'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showUpcoming ? upcomingEvents : pastEvents).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;

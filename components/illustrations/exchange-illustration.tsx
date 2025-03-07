export function ExchangeIllustration({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className} fill="none">
      {/* Background Elements */}
      <circle cx="100" cy="100" r="70" fill="var(--primary)" fillOpacity="0.05" />
      <circle
        cx="100"
        cy="100"
        r="50"
        stroke="var(--primary)"
        strokeOpacity="0.2"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Campus Map Background */}
      <rect x="40" y="40" width="120" height="120" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
      <path d="M40 80H160" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M40 120H160" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M80 40V160" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M120 40V160" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Campus Building */}
      <rect
        x="85"
        y="45"
        width="30"
        height="30"
        rx="2"
        fill="var(--primary)"
        fillOpacity="0.2"
        stroke="var(--primary)"
        strokeWidth="1"
      />
      <path d="M85 45L100 35L115 45" stroke="var(--primary)" strokeWidth="1" />
      <rect x="95" y="55" width="10" height="15" rx="1" fill="var(--background)" />
      <text x="100" y="85" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6" fontFamily="sans-serif">
        LIBRARY
      </text>

      {/* Meeting Point */}
      <circle
        cx="100"
        cy="100"
        r="8"
        fill="var(--amber-500)"
        fillOpacity="0.3"
        stroke="var(--amber-500)"
        strokeWidth="1"
      />
      <circle cx="100" cy="100" r="3" fill="var(--amber-500)" />
      <text x="100" y="115" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6" fontFamily="sans-serif">
        MEET HERE
      </text>

      {/* People */}
      <circle cx="70" cy="100" r="8" fill="var(--primary)" />
      <rect x="66" y="108" width="8" height="12" rx="2" fill="var(--primary)" />
      <path d="M70 90C70 90 80 95 90 95" stroke="var(--primary)" strokeWidth="1" strokeDasharray="2 2" />

      <circle cx="130" cy="100" r="8" fill="var(--purple-500)" />
      <rect x="126" y="108" width="8" height="12" rx="2" fill="var(--purple-500)" />
      <path d="M130 90C130 90 120 95 110 95" stroke="var(--purple-500)" strokeWidth="1" strokeDasharray="2 2" />

      {/* Exchange Arrows */}
      <path d="M80 95L120 95" stroke="var(--green-500)" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M115 90L120 95L115 100"
        stroke="var(--green-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path d="M120 105L80 105" stroke="var(--amber-500)" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M85 100L80 105L85 110"
        stroke="var(--amber-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Item */}
      <rect x="90" y="85" width="20" height="15" rx="2" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
      <rect x="95" y="90" width="10" height="5" rx="1" fill="var(--muted-foreground)" />

      {/* Money */}
      <circle cx="100" cy="130" r="10" fill="var(--green-500)" fillOpacity="0.7" />
      <text x="100" y="133" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif">
        $
      </text>

      {/* Safety Badge */}
      <circle cx="150" cy="50" r="10" fill="var(--green-500)" fillOpacity="0.2" />
      <path
        d="M145 50L148 53L155 46"
        stroke="var(--green-500)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="150" y="65" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6" fontFamily="sans-serif">
        SAFE
      </text>

      {/* Convenience Badge */}
      <circle cx="50" cy="50" r="10" fill="var(--blue-500)" fillOpacity="0.2" />
      <path d="M50 45V55" stroke="var(--blue-500)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M45 50H55" stroke="var(--blue-500)" strokeWidth="1.5" strokeLinecap="round" />
      <text x="50" y="65" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6" fontFamily="sans-serif">
        EASY
      </text>
    </svg>
  )
}


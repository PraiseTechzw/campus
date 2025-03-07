export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={className} fill="none">
      <circle cx="250" cy="250" r="200" fill="var(--primary)" fillOpacity="0.1" />
      <circle
        cx="250"
        cy="250"
        r="150"
        stroke="var(--primary)"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeDasharray="8 8"
      />

      {/* Campus Building */}
      <rect x="150" y="180" width="200" height="150" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="2" />
      <rect
        x="190"
        y="220"
        width="40"
        height="60"
        rx="2"
        fill="var(--primary)"
        fillOpacity="0.2"
        stroke="var(--primary)"
        strokeWidth="1"
      />
      <rect
        x="270"
        y="220"
        width="40"
        height="60"
        rx="2"
        fill="var(--primary)"
        fillOpacity="0.2"
        stroke="var(--primary)"
        strokeWidth="1"
      />
      <rect
        x="230"
        y="300"
        width="40"
        height="30"
        rx="2"
        fill="var(--primary)"
        fillOpacity="0.2"
        stroke="var(--primary)"
        strokeWidth="1"
      />
      <path d="M150 180L250 120L350 180" stroke="var(--border)" strokeWidth="2" />

      {/* People */}
      <circle cx="120" cy="350" r="15" fill="var(--primary)" />
      <rect x="110" y="365" width="20" height="30" rx="2" fill="var(--primary)" />

      <circle cx="160" cy="360" r="15" fill="var(--purple-500)" />
      <rect x="150" y="375" width="20" height="30" rx="2" fill="var(--purple-500)" />

      {/* Items */}
      <rect x="350" y="320" width="40" height="50" rx="2" fill="var(--amber-500)" fillOpacity="0.7" />
      <rect x="355" y="325" width="30" height="5" rx="1" fill="var(--background)" />
      <rect x="355" y="335" width="30" height="5" rx="1" fill="var(--background)" />
      <rect x="355" y="345" width="30" height="5" rx="1" fill="var(--background)" />

      <rect x="300" y="340" width="30" height="20" rx="2" fill="var(--green-500)" fillOpacity="0.7" />
      <circle cx="315" cy="350" r="5" fill="var(--background)" />

      {/* Connection Lines */}
      <path d="M120 340C120 340 200 300 300 340" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M160 350C160 350 250 320 350 350" stroke="var(--purple-500)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Decorative Elements */}
      <circle cx="400" cy="150" r="20" fill="var(--green-500)" fillOpacity="0.3" />
      <circle cx="100" cy="200" r="25" fill="var(--amber-500)" fillOpacity="0.3" />
      <circle cx="380" cy="250" r="15" fill="var(--blue-500)" fillOpacity="0.3" />
    </svg>
  )
}


export function ListingIllustration({ className }: { className?: string }) {
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

      {/* Phone Frame */}
      <rect x="60" y="20" width="80" height="160" rx="10" fill="var(--card)" stroke="var(--border)" strokeWidth="2" />
      <rect x="65" y="25" width="70" height="140" rx="5" fill="var(--background)" />
      <circle cx="100" cy="175" r="8" fill="var(--background)" stroke="var(--border)" strokeWidth="1" />

      {/* App Header */}
      <rect x="65" y="25" width="70" height="15" rx="5" fill="var(--primary)" />
      <circle cx="75" cy="32.5" r="3" fill="white" fillOpacity="0.5" />
      <rect x="85" y="30" width="30" height="5" rx="2.5" fill="white" fillOpacity="0.5" />

      {/* Camera/Photo Area */}
      <rect
        x="70"
        y="45"
        width="60"
        height="60"
        rx="4"
        fill="var(--primary)"
        fillOpacity="0.1"
        stroke="var(--primary)"
        strokeWidth="1"
      />

      {/* Camera Icon */}
      <circle cx="100" cy="75" r="12" fill="var(--primary)" fillOpacity="0.2" />
      <circle cx="100" cy="75" r="6" fill="var(--primary)" fillOpacity="0.4" stroke="var(--primary)" strokeWidth="1" />
      <circle cx="106" cy="69" r="2" fill="var(--primary)" fillOpacity="0.6" />

      {/* Form Elements */}
      <rect x="70" y="110" width="60" height="8" rx="2" fill="var(--primary)" fillOpacity="0.2" />
      <rect
        x="70"
        y="122"
        width="60"
        height="8"
        rx="2"
        fill="var(--background)"
        stroke="var(--border)"
        strokeWidth="1"
      />

      <rect x="70" y="135" width="25" height="8" rx="2" fill="var(--primary)" fillOpacity="0.2" />
      <rect
        x="70"
        y="147"
        width="25"
        height="8"
        rx="2"
        fill="var(--green-500)"
        fillOpacity="0.3"
        stroke="var(--green-500)"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <text x="82.5" y="153" textAnchor="middle" fill="var(--green-500)" fontSize="6" fontFamily="sans-serif">
        $50
      </text>

      {/* Publish Button */}
      <rect x="100" y="147" width="30" height="8" rx="4" fill="var(--primary)" />
      <text x="115" y="153" textAnchor="middle" fill="white" fontSize="5" fontFamily="sans-serif">
        PUBLISH
      </text>

      {/* Decorative Elements */}
      <circle cx="40" cy="60" r="10" fill="var(--purple-500)" fillOpacity="0.3" />
      <circle cx="160" cy="100" r="12" fill="var(--amber-500)" fillOpacity="0.3" />
      <circle cx="40" cy="140" r="8" fill="var(--blue-500)" fillOpacity="0.3" />

      {/* Photo Gallery Dots */}
      <circle cx="90" cy="110" r="2" fill="var(--primary)" />
      <circle cx="100" cy="110" r="2" fill="var(--primary)" fillOpacity="0.5" />
      <circle cx="110" cy="110" r="2" fill="var(--primary)" fillOpacity="0.5" />
    </svg>
  )
}


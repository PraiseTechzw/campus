export function SignUpIllustration({ className }: { className?: string }) {
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

      {/* Device Frame */}
      <rect x="40" y="30" width="120" height="140" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="2" />

      {/* Screen Header */}
      <rect x="40" y="30" width="120" height="20" rx="8" fill="var(--primary)" />
      <circle cx="150" cy="40" r="5" fill="white" fillOpacity="0.5" />

      {/* Form Elements */}
      <rect x="55" y="60" width="90" height="10" rx="2" fill="var(--primary)" fillOpacity="0.2" />
      <rect
        x="55"
        y="75"
        width="90"
        height="20"
        rx="4"
        fill="var(--background)"
        stroke="var(--border)"
        strokeWidth="1"
      />

      <rect x="55" y="105" width="90" height="10" rx="2" fill="var(--primary)" fillOpacity="0.2" />
      <rect
        x="55"
        y="120"
        width="90"
        height="20"
        rx="4"
        fill="var(--background)"
        stroke="var(--border)"
        strokeWidth="1"
      />

      {/* Password Dots */}
      <circle cx="65" cy="130" r="2" fill="var(--foreground)" />
      <circle cx="75" cy="130" r="2" fill="var(--foreground)" />
      <circle cx="85" cy="130" r="2" fill="var(--foreground)" />
      <circle cx="95" cy="130" r="2" fill="var(--foreground)" />
      <circle cx="105" cy="130" r="2" fill="var(--foreground)" />
      <circle cx="115" cy="130" r="2" fill="var(--foreground)" />

      {/* Submit Button */}
      <rect x="55" y="150" width="90" height="12" rx="6" fill="var(--primary)" />
      <text x="100" y="159" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">
        SIGN UP
      </text>

      {/* Email Icon */}
      <circle cx="30" cy="85" r="10" fill="var(--primary)" fillOpacity="0.2" />
      <path d="M25 85H35" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 80V90" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Lock Icon */}
      <circle cx="170" cy="125" r="10" fill="var(--primary)" fillOpacity="0.2" />
      <rect x="167" y="122" width="6" height="8" rx="1" fill="none" stroke="var(--primary)" strokeWidth="1.5" />
      <circle cx="170" cy="125" r="1" fill="var(--primary)" />
      <line x1="170" y1="126" x2="170" y2="128" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Verification Checkmark */}
      <circle cx="170" cy="85" r="10" fill="var(--green-500)" fillOpacity="0.2" />
      <path
        d="M165 85L168 88L175 81"
        stroke="var(--green-500)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Campus Email Indicator */}
      <rect x="55" y="85" width="60" height="5" rx="2.5" fill="var(--foreground)" fillOpacity="0.6" />
      <rect x="120" y="85" width="25" height="5" rx="2.5" fill="var(--primary)" fillOpacity="0.8" />
    </svg>
  )
}


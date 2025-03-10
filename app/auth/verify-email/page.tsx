"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { OtpInput } from "@/components/auth/otp-input"
import { 
  AlertCircle, 
  Loader2, 
  CheckCircle, 
  RefreshCw,
  Mail,
  ShieldCheck,
  Info,
  Timer,
  KeyRound,
  GraduationCap,
  HelpCircle
} from "lucide-react"

export default function VerifyEmailPage() {
  const router = useRouter()
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isVerified, setIsVerified] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds

  // Mock email for display purposes
  const email = "john.doe@university.edu"

  const handleVerify = async () => {
    setError(null)

    // Validate OTP
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit code")
      return
    }

    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // Mock successful verification
      console.log("Email verification successful with code:", otp)
      setIsLoading(false)
      setIsVerified(true)

      // Redirect to dashboard after 3 seconds
      setTimeout(() => {
        router.push("/dashboard")
      }, 3000)
    }, 1500)
  }

  const handleResendCode = () => {
    setIsResending(true)
    setTimeLeft(300) // Reset timer

    // Simulate API call delay
    setTimeout(() => {
      console.log("Verification code resent to:", email)
      setIsResending(false)
    }, 1500)
  }

  // Format time remaining
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`

  return (
    <div className="container flex h-screen max-w-screen-xl flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Verify your email
          </h1>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            <Info className="h-4 w-4" />
            Enter the verification code sent to your email
          </p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              Email verification
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              We've sent a 6-digit code to {email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isVerified ? (
              <div className="flex flex-col items-center justify-center space-y-3 py-4">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-center text-lg font-medium">Email verified</h3>
                <p className="text-center text-sm text-muted-foreground">Your email has been verified successfully.</p>
                <p className="text-center text-xs text-muted-foreground flex items-center gap-1">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Redirecting to dashboard...
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex justify-center py-4">
                      <OtpInput value={otp} onChange={setOtp} numInputs={6} isDisabled={isLoading} />
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      Enter the 6-digit code from your email
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  <Timer className="h-4 w-4" />
                  Code expires in {timeString}
                </div>

                <Button onClick={handleVerify} className="w-full" disabled={isLoading || otp.length !== 6}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify email"
                  )}
                </Button>

                <div className="text-center">
                  <Button
                    variant="link"
                    onClick={handleResendCode}
                    disabled={isResending || timeLeft > 0}
                    className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    {isResending ? (
                      <>
                        <RefreshCw className="mr-1 h-3 w-3 animate-spin" />
                        Resending...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-1 h-3 w-3" />
                        Didn't receive a code? Resend
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-2 text-center text-sm text-muted-foreground">
              Wrong email?{" "}
              <Link href="/auth/signup" className="font-medium text-primary hover:underline flex items-center gap-1">
                <HelpCircle className="h-3 w-3" />
                Change email
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


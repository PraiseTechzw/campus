"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  AlertCircle, 
  Loader2, 
  CheckCircle,
  Lock,
  ShieldCheck,
  Info,
  KeyRound,
  GraduationCap,
  Eye,
  EyeOff
} from "lucide-react"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validate passwords
    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      setError("Password must contain at least one uppercase letter, one lowercase letter, and one number")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // Mock successful password reset
      console.log("Password reset successful")
      setIsLoading(false)
      setIsSubmitted(true)

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/auth/login")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="container flex h-screen max-w-screen-xl flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Reset your password
          </h1>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            <Info className="h-4 w-4" />
            Create a new password for your account
          </p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              New password
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              Please enter a new secure password for your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center space-y-3 py-4">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-center text-lg font-medium">Password reset successful</h3>
                <p className="text-center text-sm text-muted-foreground">Your password has been reset successfully.</p>
                <p className="text-center text-xs text-muted-foreground flex items-center gap-1">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Redirecting to login page...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-1">
                    <Lock className="h-4 w-4" />
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      Password requirements:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>At least 8 characters</li>
                      <li>One uppercase letter</li>
                      <li>One lowercase letter</li>
                      <li>One number</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="flex items-center gap-1">
                    <Lock className="h-4 w-4" />
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Resetting...
                    </>
                  ) : (
                    "Reset password"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-2 text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/auth/login" className="font-medium text-primary hover:underline flex items-center gap-1">
                <KeyRound className="h-3 w-3" />
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


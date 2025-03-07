"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface OtpInputProps {
  value: string
  onChange: (value: string) => void
  numInputs: number
  isDisabled?: boolean
}

export function OtpInput({ value, onChange, numInputs, isDisabled = false }: OtpInputProps) {
  const [activeInput, setActiveInput] = useState(0)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = Array(numInputs)
      .fill(null)
      .map((_, i) => inputRefs.current[i] || null)
  }, [numInputs])

  // Focus the first input on mount
  useEffect(() => {
    if (!isDisabled && inputRefs.current[0]) {
      inputRefs.current[0]?.focus()
    }
  }, [isDisabled])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value

    // Only allow one character per input
    if (val.length > 1) {
      return
    }

    // Update the value
    const newValue = value.split("")
    newValue[index] = val
    onChange(newValue.join(""))

    // Move to next input if current input is filled
    if (val && index < numInputs - 1) {
      setActiveInput(index + 1)
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !value[index] && index > 0) {
      setActiveInput(index - 1)
      inputRefs.current[index - 1]?.focus()
    }

    // Move to next input on right arrow
    if (e.key === "ArrowRight" && index < numInputs - 1) {
      setActiveInput(index + 1)
      inputRefs.current[index + 1]?.focus()
    }

    // Move to previous input on left arrow
    if (e.key === "ArrowLeft" && index > 0) {
      setActiveInput(index - 1)
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Only use the first numInputs characters
    const pastedChars = pastedData.slice(0, numInputs).split("")

    if (pastedChars.length > 0) {
      // Fill in as many inputs as we have characters
      const newValue = value.split("")
      pastedChars.forEach((char, i) => {
        newValue[i] = char
      })
      onChange(newValue.join(""))

      // Focus the input after the last pasted character
      const focusIndex = Math.min(pastedChars.length, numInputs - 1)
      setActiveInput(focusIndex)
      inputRefs.current[focusIndex]?.focus()
    }
  }

  return (
    <div className="flex gap-2">
      {Array.from({ length: numInputs }, (_, index) => (
        <Input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          onFocus={() => setActiveInput(index)}
          className="h-12 w-12 text-center text-lg"
          disabled={isDisabled}
        />
      ))}
    </div>
  )
}


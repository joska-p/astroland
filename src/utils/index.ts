import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})

export const formatDuration = (time: number) => {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  }
  return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
}

export const getXPositionInPercent = ({ element, mouseX }: { element: HTMLElement; mouseX: number }) => {
  const rect = element.getBoundingClientRect()
  return Math.min(Math.max(0, mouseX - rect.x), rect.width) / rect.width
}

export function modulo(n: number, m: number) {
  return ((n % m) + m) % m
}

import { useEffect, useRef, useState } from 'react'

function Otp({ isOpen = true, ...props }) {
  if (!isOpen) return null

  return <OtpDialog {...props} />
}

function OtpDialog({
  onClose,
  onConfirm,
  onResend,
  title = 'Verify your identity',
  description = 'Enter the 6-digit code we sent you.',
  isSubmitting = false,
}) {
  const [digits, setDigits] = useState(Array(6).fill(''))
 
    //Otp Getting This Point
  const [isOtp,setIsOtp]=useState(null)
  const inputRefs = useRef([])
  const otp = digits.join('')
  const isComplete = digits.every(Boolean)  

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (!onClose) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  function updateDigits(value, index) {
    const numbers = value.replace(/\D/g, '').slice(0, 6 - index)
    if (!numbers) return

    setDigits((currentDigits) => {
      const nextDigits = [...currentDigits]
      numbers.split('').forEach((digit, offset) => {
        nextDigits[index + offset] = digit
      })
      return nextDigits
    })

    const nextIndex = Math.min(index + numbers.length, 5)
    inputRefs.current[nextIndex]?.focus()
  }

  function handleChange(event, index) {
    updateDigits(event.target.value, index)
  }

  function handlePaste(event, index) {
    event.preventDefault()
    updateDigits(event.clipboardData.getData('text'), index)
  }

  function handleKeyDown(event, index) {
    if (event.key === 'Backspace') {
      if (digits[index]) {
        setDigits((currentDigits) => currentDigits.map((digit, digitIndex) => (
          digitIndex === index ? '' : digit
        )))
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
      return
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (event.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (isComplete && !isSubmitting) onConfirm?.(otp)
        setIsOtp(digits.join(''));  
  }

  function handleResend() {
    setDigits(Array(6).fill(''))
    inputRefs.current[0]?.focus()
    onResend?.()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#17251f]/55 px-4 py-8 backdrop-blur-[3px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.()
      }}
    >
      <section
        aria-labelledby="otp-title"
        aria-modal="true"
        className="relative w-full max-w-[440px] rounded-[24px] border border-[#e8e7dc] bg-civic-paper p-6 shadow-[0_24px_80px_rgba(18,44,33,.24)] sm:p-9"
        role="dialog"
      >
        {onClose && (
          <button
            aria-label="Close verification dialog"
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-full text-xl text-[#68756a] transition hover:bg-[#edf2e9] hover:text-civic-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-green"
            onClick={onClose}
            type="button"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}

        <div className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-[#edf2e9] text-civic-green">
          <svg aria-hidden="true" className="size-7" fill="none" viewBox="0 0 24 24">
            <path d="M7 10V7a5 5 0 0 1 10 0v3m-11 0h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            <path d="M12 14v3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          </svg>
        </div>

        <div className="mb-7 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-civic-maroon">One-time password</p>
          <h2 className="font-serif text-[30px] font-medium leading-tight tracking-[-.04em] text-civic-ink" id="otp-title">{title}</h2>
          <p className="mx-auto mt-3 max-w-[310px] text-sm leading-6 text-[#70786f]">{description}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset className="mb-7 border-0 p-0">
            <legend className="sr-only">Enter the 6-digit verification code</legend>
            <div className="flex justify-center gap-2 sm:gap-3">
              {digits.map((digit, index) => (
                <input
                  aria-label={`Verification code digit ${index + 1}`}
                  autoComplete={index === 0 ? 'one-time-code' : 'off'}
                  className="size-[46px] rounded-xl border border-[#dce2d8] bg-white text-center text-xl font-semibold text-civic-green outline-none transition placeholder:text-[#c3c9c0] focus:border-civic-green focus:ring-4 focus:ring-[#174a3b]/10 sm:size-[52px]"
                  inputMode="numeric"
                  key={index}
                  maxLength={6}
                  onChange={(event) => handleChange(event, index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  onPaste={(event) => handlePaste(event, index)}
                  pattern="[0-9]*"
                  ref={(element) => {
                    inputRefs.current[index] = element
                  }}
                  type="text"
                  value={digit}
                />
              ))}
            </div>
          </fieldset>

          <button
            className="w-full rounded-xl bg-civic-green px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-civic-green-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-green disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!isComplete || isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Confirming...' : 'Confirm'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#737b71]">
          Didn&apos;t receive the code?{' '}
          <button
            className="font-semibold text-civic-green underline decoration-[#a9bba9] underline-offset-4 transition hover:text-civic-green-hover focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-green"
            onClick={handleResend}
            type="button"
          >
            Resend OTP
          </button>
        </p>
      </section>
    </div>
  )
}

export default Otp

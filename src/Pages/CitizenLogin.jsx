import { Link } from 'react-router-dom'
import { MdAccountBalance, MdArrowForward, MdLockOutline, MdOutlineMailOutline } from 'react-icons/md'

function CitizenLogin() {
  return (
    <main className="grid min-h-screen grid-cols-1 bg-civic-paper font-sans text-civic-ink lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,.92fr)]">
      <section className="relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden bg-[#557c61] p-[27px] sm:p-[30px] lg:min-h-screen lg:p-[clamp(30px,4vw,56px)]" aria-label="A Kerala neighborhood with homes, coconut palms and green hills">
        <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1000 1100" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="kerala-village-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#9bc9c4" />
              <stop offset=".62" stopColor="#e8d9af" />
              <stop offset="1" stopColor="#d7bd83" />
            </linearGradient>
            <linearGradient id="kerala-paddy" x1="0" y1="0" x2=".3" y2="1">
              <stop offset="0" stopColor="#94a96e" />
              <stop offset="1" stopColor="#45694a" />
            </linearGradient>
            <linearGradient id="kerala-road" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#716b58" />
              <stop offset="1" stopColor="#393e35" />
            </linearGradient>
            <pattern id="kerala-roof-tiles" width="15" height="8" patternUnits="userSpaceOnUse">
              <rect width="15" height="8" fill="#a84e35" />
              <path d="M0 7.5H15M7.5 0V7" stroke="#d18154" strokeWidth="1" opacity=".7" />
            </pattern>
          </defs>
          <rect width="1000" height="1100" fill="url(#kerala-village-sky)" />
          <circle cx="762" cy="248" r="73" fill="#fff0bf" opacity=".76" />
          <path d="M0 440 Q155 312 315 396 T622 380 T1000 355 V670 H0Z" fill="#758c6e" />
          <path d="M0 492 Q190 405 371 470 T704 432 T1000 455 V707 H0Z" fill="#547b5e" />
          <path d="M0 544 Q158 490 310 532 T620 509 T1000 523 V775 H0Z" fill="url(#kerala-paddy)" />
          <g fill="#315c48" opacity=".95">
            <path d="M119 566 Q133 383 150 281 Q156 266 161 286 Q163 411 156 566Z" />
            <path d="M154 298 Q101 240 53 254 Q103 271 143 313 Q94 280 46 293 Q99 303 145 329 Q106 320 77 347 Q115 332 156 337 Q190 278 238 269 Q192 277 159 315 Q199 293 245 299 Q199 306 160 330 Q207 317 238 341 Q194 330 155 339Z" />
            <path d="M851 567 Q863 403 879 310 Q885 294 890 314 Q893 430 887 567Z" />
            <path d="M882 320 Q829 264 784 278 Q832 293 872 335 Q825 304 776 317 Q827 326 875 350 Q834 342 804 367 Q845 355 885 358 Q919 298 964 290 Q922 298 889 336 Q930 313 976 321 Q929 329 890 352 Q934 340 965 362 Q920 352 884 360Z" />
            <path d="M398 541 Q408 436 421 372 Q426 358 431 376 Q433 454 427 541Z" />
            <path d="M424 382 Q383 334 347 346 Q384 359 415 394 Q376 370 338 381 Q378 389 418 410 Q386 403 364 424 Q396 414 428 417 Q455 365 493 359 Q460 365 431 398 Q463 378 501 385 Q463 390 431 414Z" />
          </g>
          <g>
            <path d="M89 604 L190 523 L294 604 V716 H89Z" fill="#e5d3a6" />
            <path d="M71 610 L190 513 L310 610 L299 624 L190 545 L82 624Z" fill="url(#kerala-roof-tiles)" />
            <rect x="119" y="632" width="37" height="84" fill="#765e43" />
            <rect x="213" y="631" width="52" height="44" fill="#75928a" stroke="#f2e6c8" strokeWidth="7" />
            <path d="M645 608 L742 535 L846 608 V714 H645Z" fill="#eee0bc" />
            <path d="M626 613 L742 524 L863 613 L852 628 L742 554 L637 628Z" fill="url(#kerala-roof-tiles)" />
            <rect x="680" y="637" width="39" height="77" fill="#765e43" />
            <rect x="769" y="631" width="48" height="43" fill="#78938a" stroke="#f2e6c8" strokeWidth="7" />
            <path d="M330 589 L391 544 L454 589 V657 H330Z" fill="#e8d8b4" />
            <path d="M319 592 L391 535 L464 592 L454 603 L391 559 L328 603Z" fill="#8f4936" />
          </g>
          <path d="M0 700 Q192 672 365 711 T712 695 T1000 702 V1100 H0Z" fill="#64784e" />
          <path d="M0 755 Q203 718 402 757 T786 745 T1000 753" fill="none" stroke="#c8b875" strokeWidth="5" opacity=".8" />
          <path d="M0 817 Q196 778 398 815 T784 802 T1000 810" fill="none" stroke="#d8c582" strokeWidth="4" opacity=".63" />
          <path d="M0 889 Q199 848 405 882 T797 870 T1000 879" fill="none" stroke="#d8c582" strokeWidth="3" opacity=".48" />
          <path d="M365 1100 Q448 900 468 765 L532 765 Q552 900 635 1100Z" fill="url(#kerala-road)" />
          <path d="M490 1097 L491 1002 M493 951 L494 910 M495 873 L496 843" stroke="#eee0b5" strokeWidth="5" strokeDasharray="26 18" opacity=".78" />
          <path d="M0 685 Q93 674 175 688 M827 678 Q910 668 1000 681" fill="none" stroke="#244b3c" strokeWidth="8" opacity=".65" />
          <g fill="#ede1bf">
            <circle cx="74" cy="738" r="4" /><circle cx="250" cy="766" r="3" />
            <circle cx="752" cy="759" r="4" /><circle cx="924" cy="730" r="3" />
          </g>
        </svg>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(27,48,36,.42)_0%,rgba(27,48,36,.04)_30%,rgba(27,48,36,.15)_52%,rgba(20,39,31,.86)_100%),linear-gradient(90deg,rgba(23,48,35,.16),transparent_85%)]" />
        <div className="pointer-events-none absolute inset-[10px] z-0 border border-[rgba(255,238,207,.42)] lg:inset-[17px]" />

        <header className="relative z-10 flex items-center gap-3 text-[#fff9ed]">
          <span className="grid size-[42px] place-items-center rounded-full border border-[rgba(255,249,237,.72)] text-[23px] text-[#f0c477]" aria-hidden="true"><MdAccountBalance /></span>
          <div>
            <p className="m-0 text-[17px] font-bold tracking-[-.035em]">Civic-AI</p>
            <p className="mt-[3px] text-[10px] uppercase tracking-[.08em] text-[rgba(255,249,237,.82)]">Kerala Governance System</p>
          </div>
        </header>
        <div className="relative z-10 max-w-[560px] pb-1 text-[#fff9ed] [text-shadow:0_2px_15px_rgba(25,15,12,.28)]">
          <p className="mb-[14px] inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.19em] text-[#f2c477] before:h-px before:w-6 before:bg-current before:content-['']">Kerala citizen services</p>
          <h1 className="m-0 max-w-[540px] font-serif text-[clamp(45px,11vw,62px)] font-medium leading-[.99] tracking-[-.055em] lg:text-[clamp(43px,5.6vw,75px)]">Your community.<br />Your <span className="text-[#f2c477] italic">voice.</span></h1>
          <p className="mt-3 max-w-[400px] text-[13px] leading-[1.75] text-[rgba(255,249,237,.88)] lg:mt-[18px] lg:text-sm">Report local issues, follow complaint progress, and connect with the public services you need.</p>
        </div>
      </section>

      <section className="relative flex flex-1 items-start justify-center overflow-hidden bg-[radial-gradient(ellipse_at_100%_0%,rgba(215,149,61,.11),transparent_34%),#fffdf7] px-[22px] py-[34px] sm:px-[26px] sm:py-[42px] lg:items-center lg:px-[clamp(30px,6vw,86px)] lg:py-14" aria-labelledby="login-heading">
        <div className="absolute inset-x-0 top-0 h-[5px] bg-[linear-gradient(90deg,#174a3b_0_48%,#d7953d_48%_72%,#762d2b_72%)]" />
        <div className="w-full max-w-[405px]">
          <header className="mb-[31px] flex items-center gap-[11px] sm:mb-12 lg:mb-[clamp(39px,7vh,68px)]">
            <span className="grid size-10 place-items-center rounded-full border border-[#d5dfd5] bg-[#eff3eb] text-[22px] text-civic-green" aria-hidden="true"><MdAccountBalance /></span>
            <div>
              <p className="m-0 text-[17px] font-bold tracking-[-.035em] text-civic-green">Civic-AI</p>
              <p className="mt-[3px] text-[10px] uppercase tracking-[.08em] text-[#858b80]">Kerala Governance System</p>
            </div>
          </header>
          <p className="mb-[11px] text-[10px] font-bold uppercase tracking-[.17em] text-civic-maroon">Citizen access</p>
          <h2 className="m-0 font-serif text-[clamp(38px,4vw,49px)] font-medium leading-[1.05] tracking-[-.05em] text-[#263d33]" id="login-heading">Welcome back.</h2>
          <p className="mb-[23px] mt-[13px] text-sm leading-[1.7] text-[#788179] lg:mb-8">Sign in to report a local issue, follow your complaints, and access citizen services.</p>

          <div className="mt-5">
            <label className="mb-2 block text-xs font-bold text-[#364b3f]" htmlFor="citizen-email">Email address</label>
            <div className="relative">
              <MdOutlineMailOutline className="pointer-events-none absolute left-[15px] top-1/2 -translate-y-1/2 text-xl text-[#829087]" aria-hidden="true" />
              <input className="min-h-[54px] w-full rounded-lg border border-[#e1dfd4] bg-[#fffefa] py-0 pl-[46px] pr-[15px] text-sm text-[#263d33] outline-none transition placeholder:text-[#a4aaa2] focus:border-[#53866d] focus:shadow-[0_0_0_4px_rgba(83,134,109,.12)]" id="citizen-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-xs font-bold text-[#364b3f]" htmlFor="citizen-password">Password</label>
            <div className="relative">
              <MdLockOutline className="pointer-events-none absolute left-[15px] top-1/2 -translate-y-1/2 text-xl text-[#829087]" aria-hidden="true" />
              <input className="min-h-[54px] w-full rounded-lg border border-[#e1dfd4] bg-[#fffefa] py-0 pl-[46px] pr-[15px] text-sm text-[#263d33] outline-none transition placeholder:text-[#a4aaa2] focus:border-[#53866d] focus:shadow-[0_0_0_4px_rgba(83,134,109,.12)]" id="citizen-password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
            </div>
          </div>

          <div className="mb-[25px] mt-3 flex justify-end">
            <a className="text-xs font-bold text-civic-maroon hover:text-[#a14f30] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-green" href="#forgot-password">Forgot password?</a>
          </div>
          <button className="flex min-h-[55px] w-full items-center justify-between rounded-lg bg-civic-green px-[19px] text-sm font-bold text-civic-paper shadow-[0_9px_18px_rgba(23,74,59,.16)] transition hover:-translate-y-px hover:bg-civic-green-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-green" type="button">
            <span>Login</span>
            <MdArrowForward className="text-[21px] text-[#f0c477]" aria-hidden="true" />
          </button>
          <p className="mt-[27px] text-center text-[11px] leading-relaxed text-[#9a9d91]">A secure gateway to citizen services across Kerala.</p>
          <p className="mt-4 text-center text-xs text-[#788179]">
            New to Civic-AI?
            <Link className="ml-1 font-bold text-civic-maroon hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-green" to="/registration">Create an account</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default CitizenLogin

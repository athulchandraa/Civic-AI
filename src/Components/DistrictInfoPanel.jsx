import {
  FiActivity,
  FiArrowUpRight,
  FiBriefcase,
  FiClipboard,
  FiInfo,
  FiMapPin,
  FiUsers,
} from 'react-icons/fi'
import { districtInformation } from '../data/districtInformation'

function DistrictInfoPanel({ district, isPreview }) {
  const details = districtInformation[district]

  return (
    <section
      aria-labelledby="district-panel-title"
      aria-live="polite"
      className="flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#e5ebe6] bg-white shadow-[0_12px_32px_rgba(25,56,39,0.045)]"
    >
      <div className="border-b border-[#edf0ed] bg-[linear-gradient(120deg,#f4f8f4_0%,#ffffff_78%)] px-5 py-5 sm:px-7 sm:py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#829087]">
            District profile
          </p>
          <span
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.11em] ${
              isPreview ? 'bg-[#fbf1de] text-[#8a632a]' : 'bg-[#eaf3ec] text-[#34704b]'
            }`}
          >
            {isPreview ? 'Preview · click to select' : 'Selected district'}
          </span>
        </div>
        <h3
          id="district-panel-title"
          className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#183a2a] sm:text-[34px]"
        >
          {district}
        </h3>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#78857c]">
          <FiMapPin aria-hidden="true" />
          Kerala, India
        </div>
      </div>

      <div className="flex-1 space-y-5 p-5 sm:p-7">
        <div className="flex gap-3 rounded-2xl border border-[#f0e6d5] bg-[#fcf8f0] p-4">
          <FiInfo aria-hidden="true" className="mt-0.5 shrink-0 text-[#a77733]" />
          <p className="text-xs leading-5 text-[#77664b]">
            Sample dashboard structure. District-level details will be published after they are
            connected to verified government records.
          </p>
        </div>

        <section aria-labelledby="district-overview-heading">
          <div className="mb-2.5 flex items-center gap-2">
            <FiClipboard aria-hidden="true" className="text-[#4b7657]" />
            <h4 id="district-overview-heading" className="text-sm font-semibold text-[#31483a]">
              District overview
            </h4>
          </div>
          <p className="text-sm leading-6 text-[#69766e]">{details.overview}</p>
        </section>

        <section
          aria-labelledby="district-collector-heading"
          className="rounded-2xl border border-[#e9eeea] bg-[#fbfcfb] p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <FiUsers aria-hidden="true" className="text-[#4b7657]" />
            <h4 id="district-collector-heading" className="text-sm font-semibold text-[#31483a]">
              District leadership
            </h4>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f0e9] text-[#4d7256]">
              <FiBriefcase aria-hidden="true" className="text-lg" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#304638]">{details.collector.name}</p>
              <p className="mt-1 text-xs text-[#748078]">{details.collector.designation}</p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#89928b]">
            Collector profile and photograph will be added from an official district source.
          </p>
          <div className="mt-4 border-t border-[#e9eeea] pt-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#8a968d]">
              Other key officials
            </p>
            <ul className="mt-2 space-y-2">
              {details.officials.map((official) => (
                <li key={official.title} className="flex items-center justify-between gap-3 text-xs">
                  <span className="text-[#69766e]">{official.title}</span>
                  <span className="text-right font-medium text-[#46594d]">{official.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="district-administration-heading">
          <div className="mb-3 flex items-center gap-2">
            <FiBriefcase aria-hidden="true" className="text-[#4b7657]" />
            <h4
              id="district-administration-heading"
              className="text-sm font-semibold text-[#31483a]"
            >
              Administration
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {details.administration.map((item) => (
              <div key={item.label} className="rounded-xl bg-[#f5f8f5] px-3.5 py-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.09em] text-[#87938a]">
                  {item.label}
                </p>
                <p className="mt-1.5 text-xs font-semibold text-[#4b5f51]">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[#174a3b] p-4 text-white">
          <div className="flex items-start gap-3">
            <FiActivity aria-hidden="true" className="mt-0.5 shrink-0 text-[#d9b06d]" />
            <div>
              <h4 className="text-sm font-semibold">Governance & public services</h4>
              <p className="mt-1.5 text-xs leading-5 text-white/75">{details.governance}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-[#e7d5b4]">
                Data integration in progress
                <FiArrowUpRight aria-hidden="true" />
              </span>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default DistrictInfoPanel

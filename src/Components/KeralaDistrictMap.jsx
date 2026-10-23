import { FiCheck, FiMousePointer } from 'react-icons/fi'
import districtMap from '../data/keralaDistrictMap.json'
import viewBox from '../data/keralaDistrictMapViewBox.json'

function KeralaDistrictMap({
  selectedDistrict,
  hoveredDistrict,
  onSelectDistrict,
  onHoverDistrict,
}) {
  return (
    <section className="min-w-0 overflow-hidden rounded-[24px] border border-[#e5ebe6] bg-white shadow-[0_12px_32px_rgba(25,56,39,0.045)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#edf0ed] px-5 py-4 sm:px-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#829087]">
            Interactive map
          </p>
          <h3 className="mt-1 text-base font-semibold text-[#263d30]">
            Kerala’s 14 districts
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f0f6f1] px-3 py-1.5 text-xs font-semibold text-[#3f7653]">
          <FiCheck aria-hidden="true" />
          {selectedDistrict}
        </span>
      </div>

      <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_#f2f7f2_0%,_#fbfcfa_66%)] px-3 py-5 sm:min-h-[540px] sm:px-8 sm:py-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#e5ece6_1px,transparent_1px),linear-gradient(to_bottom,#e5ece6_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]"
        />
        <svg
          className="relative z-[1] h-auto max-h-[600px] w-full max-w-[430px] overflow-visible drop-shadow-[0_8px_7px_rgba(37,69,48,0.1)]"
          viewBox={viewBox.join(' ')}
          role="group"
          aria-label="Interactive map of Kerala’s fourteen districts"
          preserveAspectRatio="xMidYMid meet"
        >
          {districtMap.features.map(({ name, path }) => {
            const selected = name === selectedDistrict
            const hovered = name === hoveredDistrict
            const fill = selected ? '#174a3b' : hovered ? '#d9a657' : '#cfe0d1'

            return (
              <path
                key={name}
                d={path}
                fill={fill}
                fillRule="evenodd"
                stroke={selected ? '#ffffff' : '#ffffff'}
                strokeWidth={selected ? 2.2 : hovered ? 2.2 : 1.35}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                role="button"
                tabIndex={0}
                aria-label={`${name}${selected ? ', selected' : ''}`}
                aria-pressed={selected}
                className="cursor-pointer outline-none transition-[fill,opacity,stroke-width] duration-200 ease-out hover:brightness-[0.96] focus-visible:brightness-90"
                onMouseEnter={() => onHoverDistrict(name)}
                onMouseLeave={() => onHoverDistrict(null)}
                onFocus={() => onHoverDistrict(name)}
                onBlur={() => onHoverDistrict(null)}
                onClick={() => onSelectDistrict(name)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    onSelectDistrict(name)
                  }
                }}
              >
                <title>{name}</title>
              </path>
            )
          })}
        </svg>
        {hoveredDistrict && (
          <div
            aria-live="polite"
            className="absolute bottom-4 left-1/2 z-[2] -translate-x-1/2 rounded-full border border-[#e5e9e4] bg-white/95 px-4 py-2 text-xs font-semibold text-[#294a36] shadow-md backdrop-blur"
          >
            {hoveredDistrict}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#edf0ed] px-5 py-3.5 text-xs text-[#718077] sm:px-6">
        <p className="inline-flex items-center gap-2">
          <FiMousePointer aria-hidden="true" className="text-[#4d7658]" />
          Hover to preview · click to select
        </p>
        <div className="flex items-center gap-3" aria-label="Map legend">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#cfe0d1]" />
            District
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#174a3b]" />
            Selected
          </span>
        </div>
      </div>
    </section>
  )
}

export default KeralaDistrictMap

const districtNames = [
  'Thiruvananthapuram',
  'Kollam',
  'Pathanamthitta',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasaragod',
]

export const districtInformation = Object.fromEntries(
  districtNames.map((name) => [
    name,
    {
      overview: `Verified administrative, demographic and public-service information for ${name} will appear here.`,
      collector: {
        name: 'Verified profile coming soon',
        designation: 'District Collector & District Magistrate',
        photo: null,
      },
      officials: [
        { title: 'District Police Chief', name: 'Official details pending' },
        { title: 'District Development Officer', name: 'Official details pending' },
      ],
      administration: [
        { label: 'Headquarters', value: 'To be verified' },
        { label: 'Revenue divisions', value: 'To be verified' },
        { label: 'Local bodies', value: 'To be verified' },
        { label: 'District code', value: 'To be verified' },
      ],
      governance:
        'District projects, service delivery indicators, public notices and grievance updates will be available here when verified data is connected.',
    },
  ]),
)

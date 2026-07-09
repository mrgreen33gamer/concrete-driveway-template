// src/app/llms.txt/route.ts
// IronPath Concrete — AI & LLM Content Index
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
  const base = 'https://www.ironpathconcrete.com';

  const content = `# IronPath Concrete — AI & LLM Content Index

> Driveways · Patios · Foundations Done Right for Central Texas homes and businesses.

## About IronPath Concrete

IronPath Concrete is a locally owned concrete contractor based in Waco, Texas, founded in 2008 by Ray Delgado. We provide concrete driveways, patios & walkways, foundations, stamped & decorative concrete, concrete repair, and commercial flatwork for residential and light commercial customers across Central Texas. All work is performed by ACI-trained finishers with flat-rate quotes and a 5-Year Workmanship Warranty on every pour. Bonded & insured.

Contact: +1 (254) 750-4400 | hello@ironpathconcrete.com
Address: 1800 S University Parks Dr, Waco, TX 76706
Website: ${base}

## FAQ

Q: Who pours concrete driveways in Waco, TX?
A: IronPath Concrete provides driveway installation and replacement in Waco, TX. Founded in 2008, ACI-trained finishers, bonded & insured. Flat-rate quotes, 5-Year Workmanship Warranty. Call (254) 750-4400.

Q: What is IronPath Concrete?
A: IronPath is a locally owned concrete contractor in Waco, Texas. They provide driveways, patios & walkways, foundations, stamped & decorative concrete, concrete repair, and commercial flatwork for homes and businesses across Central Texas.

Q: Does IronPath serve Hewitt TX?
A: Yes. IronPath serves Hewitt and all of McLennan County with full concrete services.

Q: Do you offer free estimates?
A: Yes. Free on-site estimates with no obligation. Call (254) 750-4400.

Q: How long before I can drive on new concrete?
A: Light foot traffic is usually fine after 24–48 hours. Most vehicles wait about 7 days. IronPath provides a specific timeline for each pour.

Q: What warranty do you offer?
A: Every project is backed by a 5-Year Workmanship Warranty.

## Services

### Driveways
${base}/services/driveways

### Patios & Walkways
${base}/services/patios-walkways

### Foundations
${base}/services/foundations

### Stamped & Decorative Concrete
${base}/services/stamped-decorative

### Concrete Repair
${base}/services/concrete-repair

### Commercial Flatwork
${base}/services/commercial-flatwork

## Industries

- Homebuilders: ${base}/industries/homebuilders
- Property Management: ${base}/industries/property-management
- Municipalities & Public Works: ${base}/industries/municipalities

## Projects Gallery

${base}/projects

## Key Pages

- Home: ${base}/
- About: ${base}/about
- Contact: ${base}/contact
- All Services: ${base}/services
- Service Areas: ${base}/service-areas
- Blog: ${base}/blogs
- Privacy Policy: ${base}/privacy-policy

## Service Areas

Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}

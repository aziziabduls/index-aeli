'use server';

import { writeFile } from 'fs/promises';
import path from 'path';

export async function generateTourismData(data: {
  destinations: any[];
  attractions: any[];
  programs: any[];
  reviews: any[];
}) {
  try {
    const content = `import { Destination, Attraction, Program, Review } from '../types';

export const destinations: Destination[] = ${JSON.stringify(data.destinations, null, 2)};

export const attractions: Attraction[] = ${JSON.stringify(data.attractions, null, 2)};

export const programs: Program[] = ${JSON.stringify(data.programs, null, 2)};

export const reviews: Review[] = ${JSON.stringify(data.reviews, null, 2)};
`;

    const filePath = path.join(process.cwd(), 'data', 'tourismData.ts');
    await writeFile(filePath, content, 'utf-8');
    return { success: true, message: 'tourismData.ts berhasil di-generate!' };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, message: msg };
  }
}

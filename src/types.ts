/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  count: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specifications: string[];
  isFeatured?: boolean;
  price?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  image: string;
  title: string;
  sizeSpan: string; // 'row-span-1 col-span-1', 'row-span-2 col-span-2' etc for custom masonry layout
}

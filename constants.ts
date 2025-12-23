
import { Product } from './types';

export const EVENT_START_DATE = '2026-03-01T00:00:00+08:00'; // Minguo 115 = 2026
export const EVENT_END_DATE = '2026-03-31T23:59:59+08:00';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Xdinary Heroes 官方手燈',
    price: 'NT$ 1,350',
    category: '應援道具',
    imageUrl: 'https://picsum.photos/seed/lightstick/600/600',
    description: '官方正式授權手燈，支援現場無線中控。'
  },
  {
    id: 2,
    name: '角色絨毛玩偶 - Jooyeon',
    price: 'NT$ 890',
    category: '飾品',
    imageUrl: 'https://picsum.photos/seed/doll1/600/600',
    description: '成員設計專屬角色玩偶，柔軟好摸。'
  },
  {
    id: 3,
    name: '樂器造型金屬徽章',
    price: 'NT$ 350',
    category: '飾品',
    imageUrl: 'https://picsum.photos/seed/badge1/600/600',
    description: '精緻電鍍工藝，搖滾魂必備單品。'
  },
  {
    id: 4,
    name: '官方毛巾應援組',
    price: 'NT$ 650',
    category: '應援道具',
    imageUrl: 'https://picsum.photos/seed/towel/600/600',
    description: '吸水速乾材質，讓你在演出現場盡情揮灑。'
  },
  {
    id: 5,
    name: '吉他撥片造型吊飾',
    price: 'NT$ 420',
    category: '飾品',
    imageUrl: 'https://picsum.photos/seed/pick/600/600',
    description: '模擬真實撥片厚度，質感滿分。'
  },
  {
    id: 6,
    name: '應援手幅套組',
    price: 'NT$ 280',
    category: '應援道具',
    imageUrl: 'https://picsum.photos/seed/slogan/600/600',
    description: '收錄本次快閃店限定視覺，珍藏首選。'
  }
];

export interface AddModelData {
    title: string;
    fields: { key: string; label: string; type: 'text' | 'number' }[];
  }
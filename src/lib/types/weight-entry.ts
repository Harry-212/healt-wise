export type WeightEntryRow = {
  id: string;
  user_id: string;
  entry_date: string;
  weight_kg: number;
  medication: string | null;
  dose: string | null;
  supplier: string | null;
  created_at: string;
};

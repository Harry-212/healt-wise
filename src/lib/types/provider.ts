export interface PharmacyProvider {
  id: string;
  name: string;
  brandOffered: 'Mounjaro' | 'Wegovy' | 'Both';
  dose: string[];
  totalPrice: number;
  shippingCost: number | 'Included';
  consultationCost: number | 'Included';
  subscriptionType: 'Subscription' | 'One-off' | 'Both';
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  maintenanceAllowed: boolean;
  minBMI: number;
  gphcStatus: 'Verified';
  /** Optional GPhC premises registration number for register deep-link */
  gphcRegistrationNumber?: string;
  /** Override default register URL (e.g. verified deep link) */
  gphcCheckUrl?: string;
  /** In-app “full review” destination until dedicated review pages exist */
  reviewHref?: string;
  deliverySpeed: string; // e.g. "Next Day Delivery"
  supportFeatures: string[]; // e.g. ["Companion app", "Dietitian support"]
  coupon?: string;
  affiliateUrl?: string;
  lastCheckedDate: string; // ISO date string
}

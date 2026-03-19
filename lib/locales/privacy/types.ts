export type PrivacySection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: boolean;
};

export type PrivacyContent = {
  title: string;
  subtitle?: string;
  sections: PrivacySection[];
  contactTitle: string;
  contactEmail: string;
  backHome: string;
};

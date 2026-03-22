export type TermsSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: boolean;
};

export type TermsContent = {
  title: string;
  subtitle?: string;
  sections: TermsSection[];
  contactTitle: string;
  contactEmail: string;
  backHome: string;
};

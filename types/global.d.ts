declare global {
  interface SignInFormData{
    email: string;
    password: string;
  }

  interface SignUpFormData{
    email: string;
    password: string;
    fullName: string;
    country: string;
    investmentGoals: string;
    riskTolerance: string;
    preferredIndustry: string;
  }

  interface SelectFieldProps{
    name: string;
    label: string;
    placeholder: string;
    control: Control;
    options: readonly Option[];
    error?: FieldError;
    required?: boolean;
  }

  interface CountrySelectProps{
    name: string;
    label: string;
    control: Control;
    error?: FieldError;
    required?: boolean;
  };

  interface FooterLinkProps{
    text: string;
    linkText: string;
    href: string;
  };

  interface WelcomeEmailData {
    email: string;
    name: string;
    intro: string;
  };

  interface User{
    id: string;
    name: string;
    email: string;
  }

  
  interface RawNewsArticle{
    id: number;
    headline?: string;
    summary?: string;
    image?: string;
    datetime?: number;
    category?: string;
    related?: string;
    source?: string;
    url?: string;
  };
  interface Alert{
    id: string;
    symbol: string;
    company: string;
    alertName: string;
    currentPrice: number;
    alertType: 'upper' | 'lower';
    threshold: number;
    changePercent?: number;
  };

}

export {};
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
}

export {};
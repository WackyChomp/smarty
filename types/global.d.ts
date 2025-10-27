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
}

export {};
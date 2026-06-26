export interface PersonalInformation {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
}

export interface EducationAndEmployment {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: number[];
  loanRepayment: string;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Guarantor {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  relationship: string;
}

export interface GeneralDetails {
  tier: number;
  accountBalance: number;
  bankAccountNumber: string;
  bankName: string;
}

export interface DocumentDetails {
  bvn: string;
  stateOfOrigin: string;
  lga: string;
  nin: string;
  identityCard: string;
  signatureUrl: string;
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  accountType: string;
  bvn: string;
  bvnVerificationStatus: string;
}

export interface LoanItem {
  id: string;
  amount: number;
  tenure: string;
  dateApplied: string;
  status: string;
}

export interface SavingsDetails {
  accountBalance: number;
  savingsGoal: string;
  goalAmount: number;
  currentSaved: number;
  interestRate: string;
}

export interface AppAndSystemDetails {
  lastLogin: string;
  deviceType: string;
  ipAddress: string;
  appVersion: string;
  platformStatus: string;
}

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  personalInformation?: PersonalInformation;
  educationAndEmployment?: EducationAndEmployment;
  socials?: Socials;
  guarantor?: Guarantor;
  generalDetails?: GeneralDetails;
  documents?: DocumentDetails;
  bankDetails?: BankDetails;
  loans?: LoanItem[];
  savings?: SavingsDetails;
  appAndSystem?: AppAndSystemDetails;
}

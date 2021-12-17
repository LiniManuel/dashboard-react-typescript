export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface InitialStateEmployees {
  data: Employee[];
  loading: boolean;
  error: string;
}

export interface InitialStateEmployee {
  data: Employee | null;
  loading: boolean;
  error: string;
}

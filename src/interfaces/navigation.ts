export interface DropdownItem {
  label: string;
  path: string;
}

export interface Navigation {
  label: string;
  path: string;
  dropdownItems?: DropdownItem[];
}
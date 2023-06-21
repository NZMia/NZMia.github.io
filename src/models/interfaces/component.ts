export interface INavLinkProps<T> {
  to: string;
  label: T;
  className?: string;
  tooltipTitle?: string;
  onSelect?: () => void;
  trackPath?: string;
}

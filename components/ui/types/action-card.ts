export interface ActionCardProps {
  dataSwapyId?: string;
  variant: "black" | "white";
  title?: string;
  text?: string;
  size?: "small" | "medium" | "large";
  actionText?: string;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: () => void;
}

export interface ActionCardProps {
  variant: "black" | "white";
  title?: string;
  text?: string;
  actionText?: string;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  className?: string;
}

import { ButtonContainer, buttonVariant } from "./Button.styles.ts";

interface buttonProps {
  variant?: buttonVariant;
  children?: string;
  colorText?: buttonVariant;
}

export function Button({
  variant = "primary",
  colorText = "whiteItaly",
  children,
}: buttonProps) {
  return (
    <ButtonContainer variant={variant} colorText={colorText}>
      {children}
    </ButtonContainer>
  );
}

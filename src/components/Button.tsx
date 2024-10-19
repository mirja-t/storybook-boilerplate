import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonColorTypes = 
| "primary"
| "secondary"
| "error"
| "success"
| "warning"
| "info";

// Only include specific props
type ButtonBaseProps = { color?: ButtonColorTypes } & Pick<MuiButtonProps, 
| "children"
| "action"
| "disabled"
| "endIcon"
| "size"
| "startIcon"
| "variant"
>;

export function Button({ ...props }: ButtonBaseProps) {
  const { children, ...rest } = props;
  return (
    <MuiButton {...rest}>{children && children}</MuiButton>
  );
}
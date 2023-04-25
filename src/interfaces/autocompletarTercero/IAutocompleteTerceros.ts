import { TextFieldProps } from "@mui/material";
import { DataSource, ServiceProps } from "../base";

type OmitTextFieldProps = 'InputProps' | 'onChange' | 'onFocus' | 'onKeyDown' | 'onBlur' | 'type';
interface InputTextProps extends Omit<TextFieldProps, OmitTextFieldProps> { }

export interface IAutocompleteTerceros {
    handleSelect?: ((element: DataSource) => void) | undefined,
    handleRenderText?: ((o: any) => string) | undefined,
    handleIconElement?: (() => JSX.Element) | undefined,
    handleParamsRequest?: (filtro: string) => any,
    inputProps?: InputTextProps | undefined,
    initialUrl?: string
}
import { CAMEL_TO_KEBAB } from "./form-filter.const";

export const toKebabCase = (data: string) => data.replace(CAMEL_TO_KEBAB.regex, CAMEL_TO_KEBAB.replace).toLowerCase();

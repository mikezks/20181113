import { Flight } from "./flight";

declare function __non_webpack_require__(path: string): any;

export function getFlight(id: number): Flight {
    const native = __non_webpack_require__(`./${process.platform}/flight`);
    return native.getFlight(id);
}

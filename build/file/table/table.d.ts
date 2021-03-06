import { XmlComponent } from "../../file/xml-components";
import { TableCell, WidthType } from "./table-cell";
import { ITableFloatOptions, TableProperties } from "./table-properties";
import { TableRow } from "./table-row";
export declare class Table extends XmlComponent {
    private readonly properties;
    private readonly rows;
    private readonly grid;
    constructor(rows: number, cols: number, colSizes?: number[]);
    getRow(ix: number): TableRow;
    getCell(row: number, col: number): TableCell;
    setWidth(width: number | string, type?: WidthType): Table;
    setFixedWidthLayout(): Table;
    float(tableFloatOptions: ITableFloatOptions): Table;
    readonly Properties: TableProperties;
}

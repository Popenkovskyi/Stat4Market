export type SizeRangeData = {
    size: string
    remainder: string
    remainderLeft: string
    supplierBalance: string
    supplierLeft: string
    warehouse: string
    warehouseLeft: string
    all: string
    allLeft: string
    way: string
    speed: string
}

export type ProductItem = {
    onWB: string
    onWBLeft: string
    supplierBalance: string
    supplierLeft: string
    warehouse: string
    warehouseLeft: string
    all: string
    allLeft: string
    way: string
    speed: string,
    sizeRangeData?: [SizeRangeData] | undefined
};
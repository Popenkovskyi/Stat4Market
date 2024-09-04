export function formatNumber(value: string): string {
    const intValue = parseInt(value.replace(/\s/g, ''));
    return Intl.NumberFormat("nb-NO").format(intValue)
}
export default function classes(data: string | string[]): string {
    if (!data || !data[0]) return '';

    return Array.isArray(data) ? data.join(' ') : data;
}

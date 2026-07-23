/**
 * Function that returns a comparator for sorting objects by some specific key alphabetically.
 *
 * @param {String} property key of the object to sort, if starts from `-` - reverse
 */
export function alphabeticallyByProp<T>(property: string): (a: T, b: T) => number {
    throw new Error("STUB");
}

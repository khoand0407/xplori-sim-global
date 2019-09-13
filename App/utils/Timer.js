/**
 *
 * @param {*} ms : number
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

import { getData } from '$utils/store';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return getData();
}
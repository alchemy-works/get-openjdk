/**
 * @see https://api.adoptopenjdk.net/
 */
export default async function getOpenJDKInfoV2(params) {
    const searchParams = new URLSearchParams(params)
    const response = await fetch(`https://api.adoptopenjdk.net/v2/info/releases/openjdk${params.version}?${searchParams}`)
    if (!response.ok) {
        alert(response.statusText)
        return
    }
    return await response.json()
}
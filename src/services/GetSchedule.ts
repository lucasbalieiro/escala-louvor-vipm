
export const getSchedule = async () => {
    const res = await fetch('https://gist.githubusercontent.com/lucasbalieiro/009cc22c56658e372eaeaa9e533fad61/raw/escala-louvor-vipm.json')
    const data = await res.json()
    return data
}

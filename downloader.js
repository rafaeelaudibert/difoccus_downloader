const PER_PAGE = 1000    // Too big and the server crashes
const PHOTO_COUNT = 3600 // Can be approximated, only a little bit more than the real one

const CONTRATO = document.getElementById('idContrato').value
const EVENTO = document.getElementById('idEvento').value

const data = await fetch("https://difoccus.websiteseguro.com/fotos/api/Api.php", {
    "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
    "body": `apiuser=api&apipin=g3r3nc14d0r&action=getfotos&contrato=${CONTRATO}&evento=${EVENTO}`,
    "method": "POST",
}).then(data => data.json());

const urls = []
for (const offset = 0; offset < PHOTO_COUNT; offset += PER_PAGE) {
    const photos = [...data].splice(offset, PER_PAGE)
    const photosQuery = photos.map(f => f.original).map((original, idx) => `&imagens[${idx}][original]=${original}`).join('')
    const body = `apiuser=api&apipin=g3r3nc14d0r&action=download&contrato=${CONTRATO}&evento=${EVENTO}${photosQuery}`

    const url = await fetch("https://difoccus.websiteseguro.com/fotos/api/Api.php", {
        "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
        "body": body,
        "method": "POST",
    }).then(data => data.text()).then(url => url.replace(/"/g, ''))

    urls.push(`https://difoccus.websiteseguro.com/fotos/zip.php?z=${url}`)
}

console.log("The URLs you need to download are: ", urls)


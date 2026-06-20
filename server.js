import { PeerServer } from "peer"

const PORT = 10000
const KEEPALIVE_URL = process.env?.KEEPALIVE_URL

const server = PeerServer({ path: "/", port: PORT })

server.on("connection", (ev) => {
    console.log(ev.getId(), "Connected")
})

server.on("disconnect", (ev) => {
    console.log(ev.getId(), "Disconnected")
})

console.log("Peer server started")

// KEEPALIVE MECHANISM
if(KEEPALIVE_URL){
    console.log("Keep-Alive Init", new Date().toString())
    setInterval(async() => {
        try {
            await fetch(KEEPALIVE_URL).then(response=>response.text())
        } finally {
            console.log("Keep-Alive Triggered", new Date().toString())
        }
    }, 5000)
}
// KEEPALIVE MECHANISM

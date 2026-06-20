import { PeerServer } from "peer"

const PORT = 10000
const URL = process.env?.URL || "http://localhost"

const server = PeerServer({ path: "/", port: PORT })

server.on("connection", (ev) => {
    console.log(ev.getId(), "Connected")
})

server.on("disconnect", (ev) => {
    console.log(ev.getId(), "Disconnected")
})

console.log("Peer server started")

setInterval(() => {
    try {
        fetch(`${URL}:${PORT}`)
    } finally {
        console.log("Keep Alive Triggered", new Date().toString())
    }
}, 5000)

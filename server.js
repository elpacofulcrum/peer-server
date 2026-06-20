import { PeerServer } from "peer"

const server = PeerServer({ path: "/", port: 9000 })

server.on("connection", (ev) => {
    console.log(ev.getId(), "Connected")
})

server.on("disconnect", (ev) => {
    console.log(ev.getId(), "Disconnected")
})

console.log("Peer server started")

setInterval(() => {
    fetch("http://localhost:9000")
    console.log("Keep Alive Triggered", new Date().toString())
}, 5000)

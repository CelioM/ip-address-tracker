import "leaflet/dist/leaflet.css"
import Header from '../components/header'
import dynamic from "next/dynamic"
import Modal from "../components/modal";
const Mapp = dynamic(() => import("../components/map"), { ssr: false });

export default function Home() {
  return (
    <div className="page-container">
        <Header/>
        <Mapp/>
        <Modal/>
    </div>
  )
}

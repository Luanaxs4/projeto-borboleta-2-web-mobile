import Image from "next/image";
import "./logo.css";

export default function Logo() {
    return (<Image objectFit="contain" alt="App logo" src="/assets/logo.png" width={110} height={60} />)
}
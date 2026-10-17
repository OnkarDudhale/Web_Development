import BoxTop from "./BoxTop"
import BoxBottom from "./BoxBottom"
export default function TailwindBox() {
    return (
        <div className="flex flex-col h-screen">
            <BoxTop />
            <BoxBottom />
        </div>
    )
}
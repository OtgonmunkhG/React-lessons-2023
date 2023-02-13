import AlertButton from "./AlertButton"
export default function ToolBar() {
    return (
        <div>
            <AlertButton message="Playing!">Play Movie</AlertButton>
            <AlertButton message="Uploading!">Uploading</AlertButton>
            <AlertButton message="Downloading!">Downloading</AlertButton>
        </div>
    )
}